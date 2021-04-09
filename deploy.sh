#!/bin/bash

git status
echo

git add .
echo -e "=> add done\n"

git commit -m "chore: script deploy"
echo -e "=> commit done\n"

git push
echo -e "=> push done\n"

echo "=> all done"