#!/usr/bin/env bash
rsync -avz -e "ssh -p 8192" --delete ./docs/.vuepress/dist/ root@srv01.flags8192.local:/var/www/dev.listratenkov.com/
