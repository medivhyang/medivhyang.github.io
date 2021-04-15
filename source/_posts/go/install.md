---
title: Go 语言安装指南
date: 2021-02-04 10:49:49
tag: 
  - Go
---

Go 语言支持跨平台开发和运行，包括 Windows、Mac 和 Linux 系统。

<!-- more -->


## 下载安装

安装下载地址：

- 官网国外（墙）：[https://golang.org/dl/](https://golang.org/dl/)
- 官网国内：[https://golang.google.cn/dl/](https://golang.google.cn/dl/)

安装完成后，可使用 `go version` 查看版本号：

```bash
$ go version
go version go1.14.1 linux/amd64
```


## 环境配置

 环境配置主要是环境变量的配置，这里假定你的版本大于 `1.13`，否则需手动更新环境变量。

### GOPATH

环境变量 `GOPATH` 是你下载的包存储的位置，默认为 `$HOME/go`，修改命令如下：

```bash
go env -w GOPATH="YOUR_PATH"
```

> 提示：没有 `mod` 前，所有代码必须放在 `GOPATH` 配置的目录下才能工作，现在不用了。

### GOPROXY

环境变量 `GOPROXY` 是用来配置包代理，默认为 `https://proxy.golang.org`，由于被墙的原因，一般需要修改，国内可用地址有：

- 阿里：[https://mirrors.aliyun.com/goproxy/](https://mirrors.aliyun.com/goproxy/)
- GOPROXY.IO：[https://goproxy.io](https://goproxy.io)
- 七牛云赞助：[https://goproxy.cn](https://goproxy.cn)
- Athens：[https://athens.azurefd.net](https://athens.azurefd.net)
- JFrog：[https://gocenter.io](https://gocenter.io)

一般配置前三项就够了，命令如下：

```bash
go env -w GOPROXY="https://mirrors.aliyun.com/goproxy/,https://goproxy.io,https://goproxy.cn,direct"
```

> 注意，别忘了末尾的 `direct`，这个是直连不用代理的意思。

### GOPRIVATE

环境变量 `GOPRIVATE` 用来配置禁用代理的包路径域名，这个通常用来对私有包禁用代理。

例如，对 `bitbucket.org` 和 `*.bitbucket.org` 禁用代理，命令如下：

```bash
go env -w GOPRIVATE="bitbucket.org,*.bitbucket.org"
```


## 安装 GCC

有些第三方库需要额外安装 `GCC` 才能使用，例如 `Sqlite` 驱动包。

安装方法如下：
- Linux：一般系统自带，如果没有，可以通过包管理命令快捷安装。
- Windows：可选择 [TDM-GCC](https://jmeubank.github.io/tdm-gcc/)  安装。


## 小结

- Go 语言国内下载安装地址：[https://golang.google.cn/dl/](https://golang.google.cn/dl/)。
- Go 语言常修改的环境变量有 `GOPATH`、`GOPROXY` 和 `GOPRIVATE`。
- 如果使用 `Sqlite` 驱动包，还需额外安装 `GCC`。

（完）