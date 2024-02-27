---
laytou: doc
---

# Go 语言交叉编译

Go 语言支持跨平台编译，也就是交叉编译，例如在 Windows 电脑上编译出 Linux 可执行的打包文件。

### 环境变量

Go 语言交叉编译时，最重要的是需要知道目标平台是什么操作系统，以及是什么体系架构，因为不同的操作系统和体系架构，内部实现不一样，指令集不一样，编译出来的二进制也不一样。

操作系统和体系架构环境变量说明如下：

|名称|环境变量|可选值|
|---|---|---|
|操作系统|GOOS|darwin、freebsd、linux 和 windows|
|体系架构|GOARCH|386、amd64 和 arm|

### 使用示例

1、Windows 下编译 Mac 和 Linux 64 位可执行程序

```
# Mac
SET CGO_ENABLED=0
SET GOOS=darwin
SET GOARCH=amd64
go build main.go

# Linux
SET CGO_ENABLED=0
SET GOOS=linux
SET GOARCH=amd64
go build main.go
```

2、Mac 下编译 Linux 和 Windows 64 位可执行程序

```
# Linux
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go

# Windows
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```

3、Linux 下编译 Mac 和 Windows 64 位可执行程序

```
# Mac
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go

# Windows
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```

::: warning
注意：交叉编译不支持 CGO ，所以要使用 CGO_ENABLED=0 禁用它。
:::