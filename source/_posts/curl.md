---
title: Curl 使用指南
date: 2021-04-14 17:52:24
tags:
  - Bash
---

## 参数

| 选项                          | 说明                           |
| ----------------------------- | ------------------------------ |
| `-o` [文件名]                 | 另存为文件                     |
| `-L`                          | 自动跳转                       |
| `-i`                          | 显示 HTTP 响应头部信息         |
| `-I`                          | 只显示 HTTP 响应头部信息       |
| `-v`                          | 插入通信过程                   |
| `-X` [POST\|PUT\|PATCH]       | 指定 HTTP 动词                 |
| `-d`/`--data`                 | 请求参数，通常和 `-X` 配套使用 |
| `--header` ["key:value"]      | 增加一个头部                   |
| `--cookie` [cookie]           | 增加 cookie                    |
| `--user-agent` [user agent]   | 增加 user agent                |
| `-u`/`--user` [name:password] | 增加账号和密码认证             |



## 参考链接



- [curl 命令详解~~ - 微风伏面 - 博客园](https://www.cnblogs.com/guixiaoming/p/8507268.html)



（完）