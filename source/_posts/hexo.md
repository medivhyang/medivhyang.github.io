---
title: Hexo 简明教程
date: 2021-04-09 15:45:07
tags:
 - Hexo
---

## 创建项目

全局安装 Hexo

```bash
npm install hexo-cli -g
```

初始化项目

```bash
hexo init <folder>
cd <folder>
npm install
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

## 部署

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

（完）