---
title: Go 语言命名约定
date: 2021-02-03 11:06:51
tag: 
  - Go
intro: "计算机科学只存在两个难题：缓存失效和命名。"
---

> 计算机科学只存在两个难题：缓存失效和命名。

## 名字很重要

- 可读性是好代码的衡量标准。
- 好名字对可读性至关重要。

## 好的名字

- 一致：容易猜测。
- 简短：容易输入。
- 准确：容易理解。

## 约定

### 通用

- 使用混合大小写，不要使用下划线，略缩语应该全大写，例如 `ServeHTTP` 和 `IDProcessor`。
- 名称声明与使用之间的距离越长，名称应该越长。
- 尽量保持简短，长名称模糊了代码作用，例如 `i` 比 `index` 更好。
- 使用重复的字母表示集合/切片/数组，例如 `tt` 代表 `[]*Thing`。
- 考虑上下文和惯例，避免冗余，例如在 `RuneCount` 函数中，`count` 比 `runeCount` 更好。

### 函数

- 如果函数参数类型具有描述性的，则应简短；如果是模糊的，则应提供补充说明。
- 导出函数返回值应仅出于文档目的而命名。
- 函数接收者名称应尽量简短，通常是一两个字符。
- 同一类型的所有函数接收者的名称应保持一致。

### 接口

- 如果接口只有一个方法，接口通常只是在函数名称后追加 `er`，即使语法不正确也可接受，例如 `Execer` 接口下有 `Exec` 方法，不过有时为了可读性可作调整，例如 `ByteReader` 接口下有 `ReadByte` 方法。
- 如果一个接口有多个方法，选择一个能准确描述目的的名字，例如 `net.Conn` 和 `http.ResponseWriter`。

### 错误

- 定义错误类型通常以 `Error` 结尾，例如 `FooError`。
- 声明错误类型变量应该以 `Err` 开头，例如 `ErrFoo`。

### 包

- 包名中没有任何单词分割符，例如避免用下划线连接。
- 包路径避免使用大写，因为并不是所有文件系统区分大小写。
- 包路径最后一个组成部分应该与包名称相同，例如路径 `compress/gzip` 的包名为 `gzip`。
- 导出的名称由其包名称限定，这就是为什么有 `bytes.Buffer` 和 `strings.Reader`，而没有 `bytes.BytesBuffer` 和 `strings.StringReader`。
- 避免仓库名和包名中出现冗余，对于库项目，可以将所有代码放入项目根目录下。例如 `github.com/golang/oauth2` 比 `code.google.com/p/goauth2/oauth2` 好。
- 选择有意义的包名，避免使用空泛的 `util`、`common` 和 `helper` 等等。

## 小结

- 使用短名称。
- 考虑上下文。
- 运用你的判断。

## 参考链接

- [https://talks.golang.org/2014/names.slide](https://talks.golang.org/2014/names.slide)
- [https://golang.org/doc/effective_go.html#names](https://golang.org/doc/effective_go.html#names)
- [https://blog.golang.org/package-names](https://blog.golang.org/package-names)
- [https://github.com/golang/go/wiki/CodeReviewComments](https://github.com/golang/go/wiki/CodeReviewComments)
- [Style guideline for Go packages](https://rakyll.org/style-packages) (rakyll/JBD)
- [Ashley McNamara + Brian Ketelsen: Go best practices](https://www.youtube.com/watch?v=MzTcsI6tn-0)