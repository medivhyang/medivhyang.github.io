---
title: Vim 配置指南
date: 2021-02-04 15:53:34
tags: Vim
intro: "Vim 是一款高效率的文本编辑器，与 Emacs 并称两大神器。"
---

[Vim](https://www.vim.org/) 是一款高效率的文本编辑器，与 [Emacs](https://baike.baidu.com/item/emacs/2044183) 并称两大神器。

<!-- more -->

## 常用配置

不管是 Vim 本身还是插件，配置文件内容基本一致，无需改动。

```vim
" 设置 jk 快键键
inoremap jk <ESC>

" 设置配色方案
colorscheme murphy

" 显示行号
set nu

" 设置文件被改动时自动载入
set autoread

" 自动缩进
set autoindent
set cindent

" 设置 Tab 键的宽度为 4
set tabstop=4

" 统一缩进为 4
set softtabstop=4
set shiftwidth=4

" 使用空格代替制表符
set expandtab
```

> `jk` 快捷键是作者的偏好，也有人选择 `jj`。

## Vim

Vim 同时支持 Linux 和 Windows 下的使用。

Linux

- 一般系统自带，如果没有，可以通过包管理安装。
- 配置文件位置： `/etc/vim/vimrc` 、 `/etc/vimrc`  或者 `~/.vimrc`。

Windows

- 使用 GVim 软件，它是 Windows 下的 Vim 的图形界面版本。
- GVim 下载地址：[https://www.vim.org/download.php#pc](https://www.vim.org/download.php#pc)
- 配置文件位置：`%HOMEPATH%/_vimrc`。


## JetBrains

JetBrains 全家桶通过安装插件 [IdeaVim](http://plugins.jetbrains.com/plugin/164-ideavim) 支持 Vim 编辑模式。

安装完插件后，可增加如下文件修改配置： 

- Linux： `~/.ideavimrc`
- Windows： `%HOMEPATH%/_ideavimrc`

> 安装完插件或者修改配置后，记得重启 JetBrains 软件生效。


## VSCode

VSCode 通过安装插件 [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) 支持 Vim 编辑模式。

安装完成后，可在 [setting.json](https://code.visualstudio.com/docs/getstarted/settings) 文件中修改配置。例如，想要设立 `jk` 快捷键，则增加如下内容：

```json
"vim.insertModeKeyBindings": [
    {
        "before": ["j", "k"],
        "after": ["<Esc>"]
    }
]
```

> 安装完插件或者修改配置后，记得重启 VSCode 软件生效。

## Chrome

尽管你可能不信，浏览器也可以在安装 [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) 插件下支持 Vim 部分操作模式。

安装完插件后，可以在页面中按 `?` 快捷键查看 Vim 所有快捷键列表。

## 参考链接

- [阮一峰的网络日志：Vim 配置入门](http://www.ruanyifeng.com/blog/2018/09/vimrc.html) 
- [Vim 官网](https://www.vim.org/)

(完)