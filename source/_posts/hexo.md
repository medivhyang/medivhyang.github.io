---
title: Hexo 简明教程
date: 2021-04-09 15:45:07
tags:
  - 工具
intro: "手把手教你使用 Hexo 从零开始搭建自己的网络博客。"
---

## 创建项目

全局安装 Hexo

```bash
npm install hexo-cli -g
```

创建并初始化项目

```bash
hexo init <folder>
cd <folder>
npm install
```

预览

```
hexo s
```

## 安装主题

### 方式一

Hexo 5.0.0 版本以上，推荐通过 npm 直接安装，进入博客目录执行命令：

```bash
npm install --save hexo-theme-xxx
```

然后在博客目录下创建 _config.xxx.yml，将主题的 _config.yml 内容复制过去。

### 方式二

下载（克隆）最新 release 版本解压到 themes 目录，并将解压出的文件夹重命名为 xxx。

### 指定主题

如下修改 Hexo 博客目录中的 _config.yml：

```
# 指定主题
theme: xxx  

# 指定语言，会影响主题显示的语言，按需修改
language: zh-CN  
```

## 一键部署

1、安装 hexo-deployer-git。

```bash
npm install hexo-deployer-git --save
```

2、修改配置。

```yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

3、生成站点文件并推送至远程库。

```bash
 hexo clean && hexo deploy
```

## 自动部署

利用 Github Action 实现。在项目下新建 “.github/workflows/index.yml” 文件，内容如下：

```yaml
 # Actions 显示的名字，随意设置
name: Deploy                     

# 监听到 push 事件后触发
on: [push]           

jobs:
  build:
    runs-on: ubuntu-latest

    # 拉取当前执行 Actions 仓库的指定分支
    steps:
    - name: Checkout
      uses: actions/checkout@v2
      with:
        ref: main

    # 如果仓库有 submodule，在这里更新，没有则删掉此步骤
    # - name: Update Submodule
    #   run: |
    #     git submodule init
    #     git submodule update --remote

    # 安装 Node 环境
    - name: Setup Node        
      uses: actions/setup-node@v1
      with:
        node-version: "15.x"

    # 安装 Hexo 依赖并且生成静态文件
    - name: Hexo Generate
      run: |
        rm -f .yarnclean
        yarn --frozen-lockfile --ignore-engines --ignore-optional --non-interactive --silent --ignore-scripts --production=false
        rm -rf ./public
        yarn run hexo clean
        yarn run hexo generate

    # 部署步骤，这里以 hexo deploy 为例
    - name: Hexo Deploy
      env:
        TZ: Asia/Shanghai
        SSH_PRIVATE: ${{ secrets.HEXO_SSH_PRIVATE }}
        GIT_NAME: YOUR_NAME
        GIT_EMAIL: YOUR_EMAIL
      run: |
        mkdir -p ~/.ssh/
        echo "$SSH_PRIVATE" | tr -d '\r' > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan github.com >> ~/.ssh/known_hosts
        git config --global user.name "$GIT_NAME"
        git config --global user.email "$GIT_EMAIL"
        yarn run hexo clean
        yarn run hexo deploy
```

需要修改的地方有：

- `YOUR_NAME`：你 Git 提交显示的名字。
- `YOUR_EMAIL`：你 Git 提交显示的邮箱。
- `HEXO_SSH_PRIVATE`：Git 提交时所需的验证密钥，这需要在 Github 项目配置 Secrets 里添加。