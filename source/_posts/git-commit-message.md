---
title: Git Commit Message 规范
date: 2021-04-14 16:50:50
tags: 
  - Git
  - 规范
---

约定式提交规范是一种基于提交信息的轻量级约定。它提供了一组简单规则来创建清晰的提交历史，这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更，使这种惯例与 [SemVer](http://semver.org/) 相互对应。


## 模板

```
<type>[(optional scope)]: <description>

[optional body]

[optional footer(s)]
```

译文：

```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

### type

type 用于说明 commit 的类别。

| 关键词       | 描述                                              |
| ------------ | ------------------------------------------------- |
| **feat**     | 新功能（feature）                                 |
| **fix**      | 修复 bug                                           |
| **docs**     | 文档（documentation）                             |
| **style**    | 格式（不影响代码运行的变动）                      |
| **refactor** | 重构（即不是新增功能，也不是修改 bug 的代码变动） |
| **test**     | 增加测试                                          |
| **chore**    | 构建过程或辅助工具的变动                          |
| perf         | 优化相关，比如提升性能、体验                      |
| revert       | 回滚到上一个版本                                  |
| merge        | 代码合并                                          |

### scope（可选）

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

### subject

subject 是 commit 目的的简短描述，不超过 50 个字符。

- 以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes。
- 第一个字母小写。
- 结尾不加句号。

### body（可选）

Body 部分是对本次 commit 的详细描述，可以分成多行。有两点需要注意：

- 使用第一人称现在时，比如使用 change 而不是 changed 或 changes。
- 应该说明代码变动的动机，以及与以前行为的对比。

### footer（可选）

Footer 部分只用于两种情况。

1、不兼容变动

如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

```
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

2、关闭 Issue

如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

```
Closes #234
```

也可以一次关闭多个 issue 。

```
Closes #123, #245, #992
```


## 工具

- [Commitizen](https://github.com/commitizen/cz-cli)：是一个撰写合格 commit message 的工具。
- [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg)：用于检查 Node 项目的 commit message 是否符合格式。
- [conventional-changelog](https://github.com/ajoslin/conventional-changelog)：是生成 change log 的工具。
- [gitmoji](https://gitmoji.dev/)：commit message 的表情符号指南。


## 参考链接

- [Commit message 和 Change log 编写指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [Git Commit Message Conventions - Google 文档](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)


（完）

