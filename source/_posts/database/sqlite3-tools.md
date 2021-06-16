---
title: SQLite3 命令行工具
date: 2021-03-11 11:31:32
tags: 
 - 数据库
intro: "SQLite3 命令行工具可以在终端执行所有常见的 SQL 操作，而且还可以执行导入导出数据等操作。"
---

> SQLite3 命令行工具可以在终端执行所有常见的 SQL 操作，而且还可以执行导入导出数据等操作。

## 下载安装

https://www.sqlite.org/download.html

Linux 安装：

```bash
tar xvzf sqlite-autoconf-3071502.tar.gz
cd sqlite-autoconf-3071502
./configure --prefix=/usr/local
make
make install
```

## 常见用法

以 Windows 为例，Linux 类同。

查看帮助文档

```shell
.\sqlite3.exe -help
```

打开数据库文件

```shell
.\sqlite3.exe .\data.db
```

查看交互帮助文档

```shell
sqlite> .help
```

查询数据

```shell
sqlite> select * from foo;
```

## 常见交互命令

| 命令 | 描述 |
| :---: | :--- |
| .exit | .quit | 退出 SQLite 提示符。 |
| .show | 显示各种设置的当前值。 |
| .databases | 列出数据库的名称及其所依附的文件。 |
| .tables ?PATTERN? | 列出匹配 LIKE 模式的表的名称。 |
| .schema ?TABLE? | 显示 CREATE 语句。如果指定了 TABLE 表，则只显示匹配 LIKE 模式的 TABLE 表。 |
| .indices ?TABLE? | 显示所有索引的名称。如果指定了 TABLE 表，则只显示匹配 LIKE 模式的 TABLE 表的索引。 |
| .mode MODE | 设置输出模式，MODE 可以是下列之一：<br />csv：逗号分隔的值<br />column：左对齐的列<br />html：HTML 的 \<table\> 代码<br />insert：TABLE 表的 SQL 插入（insert）语句<br />line：每行一个值<br />list：由 .separator 字符串分隔的值<br /> tabs：由 Tab 分隔的值<br />tcl：TCL 列表元素接口 |
| .output FILENAME | 发送输出到 FILENAME 文件。 |
| .output stdout | 发送输出到屏幕。 |
| .read FILENAME | 执行 FILENAME 文件中的 SQL。 |
| .separator STRING | 改变输出模式和 .import 所使用的分隔符。 |
| .nullvalue STRING | 在 NULL 值的地方输出 STRING 字符串。 |

## 参考链接

- [SQLite 命令 - 菜鸟教程](https://www.runoob.com/sqlite/sqlite-commands.html)