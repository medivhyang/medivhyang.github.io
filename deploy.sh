#!/bin/bash

# 预处理：删除零宽度字符
sed -i "s/\xe2\x80\x8b/abc/g" ./source/_posts/*.md

git status
echo

git add .
echo -e "=> add done\n"

git commit -m "chore: script deploy"
echo -e "=> commit done\n"

git push
echo -e "=> push done\n"

echo "=> all done"