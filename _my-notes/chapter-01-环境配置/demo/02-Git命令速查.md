# Git 命令速查手册

> 对应：../02-Git基础.md

---

## 基础命令

```bash
# 初始化仓库
git init

# 查看状态
git status

# 添加到暂存区
git add filename
git add .

# 创建提交
git commit -m "提交说明"

# 查看历史
git log --oneline
```

## 分支操作

```bash
# 查看分支
git branch

# 创建并切换分支
git switch -c feature-name

# 合并分支
git merge feature-name
```

## 远程操作

```bash
# 关联远程仓库
git remote add origin <url>

# 推送到远程
git push -u origin main

# 拉取更新
git pull
```

---

<!-- 💡 第4步实操区：在此记录你的实际操作 -->

<!-- STEP2-DONE -->
