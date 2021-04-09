---
title: Git 简明教程
date: 2021-03-12 17:43:59
tags: Git
---

Git 是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。官网是 https://git-scm.com/。

<!-- more -->

## 常规流程

1、查看状态
```bash
git status
```

2、添加文件
```bash
git add .
```

3、本地提交
```bash
git commit -m "feat: add new feature"
```

4、远端推送
```bash
git push
```

5、查看日志
```bash
git log
```

## 分支管理

新建本地分支 foo 
```bash
git checkout -b foo
```

<br />

删除本地分支 foo
```bash
git branch -d foo
```

<br />

合并分支：合并其他分支到当前分支上
```bash
git merge <branch>
```

## 撤销回退

重置提交
```bash
# 保留工作区，暂存区和指定提交合并。
git reset --soft [commit]

# 保留工作区，重置暂存区为指定提交，与 “--mixed” 选项等价。
git reset [commit]

# 清空工作区，重置暂存区为指定提交。
git reset --hard [commit]
```

> 三个区域：
> - 工作区：当前的工作目录，还未加入版本管理的文件集合。
> - 暂存区（Index/Stage）：准备提交远端的文件集合，执行 `git add` 后的文件集合。
> - 仓库：提交历史，执行 `git commit` 后的文件集合，HEAD 为最后一次提交的引用。

<br />

重置或检出文件
```bash
# 保留工作区，重置暂存区的指定文件为指定提交版本。
git reset [commit] <paths>

# 重置工作区和暂存区的指定文件为指定提交版本
git checkout [commit] <paths>
```

<br />

修改最后一次本地提交
```bash
git commit --amend
```
> 做两件事：
> - 修改提交消息，如果不需要修改提交消息，可加上 `--no-edit` 选项。
> - 添加、移除或修改文件。

<br />

重写历史（变基）
```bash
# 编辑提交历史修改计划
git rebase -i <commit>

# 顺序修改
# ...

# 执行修改
git rebase --continue
```
> 常用动作：
> - pick：维持原有提交不变。
> - edit：编辑原有提交，例如，可以修改提交消息或者拆分单次提交为多次提交。
> - squash：压缩多次提交为一次提交。


## 参考链接

- [Git](https://git-scm.com/)
- [Git-工具-重置揭密](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86)
- [Git-工具-重写历史](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)
