---
laytou: doc
---

# Go 语言安装

[Go](https://go.dev/)（又称 Golang）是 Google 的 Robert Griesemer，Rob Pike 及 Ken Thompson 开发的一种静态强类型、编译型语言。Go 语言语法与 C 相近，但功能上有：内存安全，GC（垃圾回收），结构形态及 CSP-style 并发计算。发布于 2009 年。

Go 语言支持跨平台开发和运行，包括 Windows、Mac 和 Linux 系统。

## 下载安装包

- [https://go.dev/dl/](https://go.dev/dl/)
- [https://golang.google.cn/dl/](https://golang.google.cn/dl/)
- [https://gomirrors.org/](https://gomirrors.org/)

## 环境配置

```
# （可选）设置 Go 语言工作路径，你安装的第三方库会下载到这个目录下
go env -w GOPATH="YOUR_PATH"

# （可选）启用 Go module，如果没有旧项目限制，建议启用
go env -w GO111MODULE=on

# 更改包代理
go env -w GOPROXY="https://proxy.golang.com.cn,https://goproxy.cn,direct"

# （可选）设置不走代理的包路径前缀
go env -w GOPRIVATE="git.mycompany.com,github.com/my/private"

```

## 编辑器配置

```
# 手动安装 ""
cd $GOPATH/src
git clone https://github.com/golang/tools.git github.com/golang/tools
cd github.com/golang/tools/cmd/goimports
go install
```

::: warning
注：go get 安装可执行文件已废弃，使用 go install 替代，详情参考 [Deprecation of ‘go get’ for installing executables。](https://go.dev/doc/go-get-install-deprecation)
:::

## GCC 安装

有些第三方库依赖 GCC，例如 SQLite 驱动。

- Linux：参考 [Installing GCC](https://gcc.gnu.org/install/)。
- Windows：使用替代品 [TDM-GCC](https://jmeubank.github.io/tdm-gcc/) 。