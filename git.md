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
git remote rm github 取消远程连接
git clone 克隆仓库
git branch 查看分支
git branch 分支名称 创建分支
git checkout 分支名称 切换分支
git checkout -b 分支名称  创建分支并且立即切换
    合并分支
        需要先切换到主分支，然后只用git mere 分支名称
git branch -d 分支名称 删除分支

git push -u origin 分支名称 将分支推送到远程仓库
git remote show 远程仓库名称
跟踪分支:下载远程仓库的分支代码
git pull 更新最新代码
git push 远程仓库名称 --delete 远程分支名称  删除远程分支
git remote -v 查看本地仓库与远程仓库的连接
git remote add origin git@github.com:yumaocc/11.git  与远程仓库建立链接