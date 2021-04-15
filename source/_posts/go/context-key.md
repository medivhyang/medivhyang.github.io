---
title: Go Context Key 定义
date: 2021-04-15 17:12:35
tags:
  - Go
---

Go 语言 Context 可以作为单协程的共享内存使用，最佳实践是外界只读不可写，防止被无意修改。

<!-- more -->

## 思路

[官网](https://pkg.go.dev/context#WithValue)提供的方案：

> The provided key must be comparable and should not be of type string or any other built-in type to avoid collisions between packages using context. Users of WithValue should define their own types for keys. To avoid allocating when assigning to an interface{}, context keys often have concrete type struct{}. Alternatively, exported context key variables' static type should be a pointer or interface.

译文：

> 提供的键必须是可比较的，并且不能为字符串类型或任何其他内置类型，以避免使用上下文在程序包之间发生冲突。 WithValue 的用户应定义自己的键类型。 为了避免在分配给 `interface{}` 时进行分配，上下文键通常具有具体的类型 `struct {}`。 或者，导出的上下文键变量的静态类型应为指针或接口。


所以最终有两种方案：

1. 定义自己的上下文键类型。
2. 导出变量的静态类型应是指针或者接口。

本文只讲第一种方案。

## 源码验证

```go
func WithValue(parent Context, key, val interface{}) Context {
	if parent == nil {
		panic("cannot create context from nil parent")
	}
	if key == nil {
		panic("nil key")
	}
	if !reflectlite.TypeOf(key).Comparable() {
		panic("key is not comparable")
	}
	return &valueCtx{parent, key, val}
}

type valueCtx struct {
	Context
	key, val interface{}
}

func stringify(v interface{}) string {
	switch s := v.(type) {
	case stringer:
		return s.String()
	case string:
		return s
	}
	return "<not Stringer>"
}

func (c *valueCtx) String() string {
	return contextName(c.Context) + ".WithValue(type " +
		reflectlite.TypeOf(c.key).String() +
		", val " + stringify(c.val) + ")"
}

func (c *valueCtx) Value(key interface{}) interface{} {
	if c.key == key {
		return c.val
	}
	return c.Context.Value(key)
}
```

关键代码在 `func (c *valueCtx) Value(key interface{}) interface{}` 方法里，注意 `key` 参数类型是 `interface{}`，这意味执行接口比较。那什么是接口比较呢？

先来看个题：

```go
type myInt int

var (
    i  myInt       = 9
    i2 interface{} = myInt(9)
)

fmt.Println(i == 9)
fmt.Println(i2 == 9)
```

答案是：

```
true
false
```

这里需要掌握的知识点是：

> 两个接口值相等仅当它们都是 `nil` 值，或者它们的动态类型相同并且动态值相等。

所以最终解释是：`i2` 变量的动态类型是 `myInt` 类型，与字面量 `9` 的 `int` 类型不相等。

## 最佳实践


> Use context Values only for request-scoped data that transits processes and APIs, not for passing optional parameters to functions.

译文：

> 仅将上下文值用于传递流程和 API 请求范围的数据，而不用于将可选参数传递给函数。