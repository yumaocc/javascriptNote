git config --global user.name 初始化用户名 =====> 不加--global表示查看
git config --global user.email 初始化邮箱
git init 创建仓库
git status  查看当前git仓库的信息
git add 将文件添加到git暂存区
git commit 将文件添加到git本地仓库中，后面的 -m对提交加以描述  git commit -m '增加了一个list’
git checkout -- 文件名 恢复至上一个版本
git reset HEAD 文件名 将文件移出暂存区
git commit -a -m 跳过git add 步骤
git rm -f 文件名 将文件从git仓库和工作区移出
git rm --cached 文件名 将文件从git仓库中移出
.gitignore表示忽略的文件
git log 查看提交的历史记录 或者git log pretty=oneline
git reset --hard 版本id 即可回退到需要的版本
git push -u origin main  取消远程连接