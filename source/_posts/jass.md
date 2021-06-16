---
title: Jass 简明教程
date: 2021-04-13 16:10:10
tags:
  - 游戏
intro: "Jass（正确地说是 Jass 2）是魔兽3的程序语言，用于控制游戏和地图的进行，也是魔兽游戏和地图的基础。 "
---

> Jass（正确地说是 Jass 2）是魔兽3的程序语言，用于控制游戏和地图的进行，也是魔兽游戏和地图的基础。<br />
> 地图编辑器中摆放的单位（Unit），区域（Region）和触发（Trigger）等，最终都会被翻译成 Jass 语言存在地图文件里，在游戏时被使用。Jass 在语法结构上比较接近 Basic，同时也引用了许多 C 语言的东西。

## 基本语法

### 注释

```basic
// 这是一条注释
```

### 变量定义与赋值  

```basic
local integer i = 1
local real a = i + 0.3
set i = i - 100
```

> - Jass 基本类型有 6 种：integer、real、boolean、string、handle 和 code。
> - 整数型值可以为 ASC 字符：单引号括起来，例如 'Hmag'、'Edem' 和 'Oblm' 分别表示人类大法师、恶魔猎手和剑圣。

### 条件语句 

```
if ( ... ) then
....
elseif ( ... ) then
... // 支持多个 elseif 分支
else
...
endif
```

### 循环语句  

```
loop
...
exitwhen ( ... ) // exitwhen 可以出现在循环下任何位置，一般情况下至少要有一个 exitwhen
...
endloop
```

### 定义函数

```
function<函数名> takes<参数表> returns <返回类型> // 参数不存在或不返回值时写 nothing
...
return <返回值>
endfunction
```

### 函数调用  

```basic
call BJDebugMsg("A problem has occurred")
call BJDebugMsg(I2S(5000)) // I2S 把整数转化为字符串，从而输出 "5000"
```

> - CJ 函数： `common.j` 中提供的函数。
> - BJ 函数： `blizzard.j` 中提供的函数。


## 数据系统

### 全局变量

```basic
globals
integer a = 1
integer array aa // 数组
endglobals
```
> - Jass 里的变量一经申明为数组，数组大小永远都是 8192。
> - 触发编辑器里直接在触发创建的全局变量会被系统添加 `udg_` 的前缀。

### 哈希表

```basic
call SaveInteger(udg_ht, GetHandleId(udg_unit), 'foo', 47)
set i = LoadInteger(udg_ht, GetHandleId(udg_unit), 'foo') // 此时 i 的值就是 47
```

> - 在 1.24 版本实现，替代了传统蹩脚的 returnbug + gamecache 数据系统。
> - 存：SaveXxx（哈希表，目录表，标签名，值）
> - 取：LoadXxx（哈希表，目录表，标签名）


## 触发器模板

```basic
// #include "***.j" // 可由这里引用其他脚本文件

library main initializer MainInit
    function MainActions takes nothing returns nothing
        call DisplayTextToForce(GetPlayersAll(), "hello world")
    endfunction

    function MainInit takes nothing returns nothing
        local trigger t = CreateTrigger()
        call TriggerRegisterTimerEventSingle(t,  0)
        call TriggerAddAction(t, function MainActions)
    endfunction
endlibrary
```

> - 在编辑器里新建触发器，使用 `#include` 语句引用自定义脚本文件。
> - 触发器是由事件、动作和条件三部分构成，其中条件是可选的。


## 编辑器和插件

- VSCode + jass
- Jass Shop Pro
- Jass Craft