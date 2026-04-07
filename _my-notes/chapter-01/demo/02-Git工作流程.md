# Git 工作流程练习手册

> 对应：../02-Git基础概念.md
> 
> 本手册引导你完成从 git init 到 git push 的完整流程

---

## 前置准备

确保已完成：
- [ ] Git 已安装
- [ ] Git 用户已配置（user.name 和 user.email）
- [ ] 拥有 GitHub 账号

---

## 第一步：创建本地仓库

```bash
# 1. 创建项目文件夹
mkdir my-first-project
cd my-first-project
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 2. 初始化为 Git 仓库
git init
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 3. 检查仓库状态
git status
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

---

## 第二步：添加文件并提交

```bash
# 1. 创建一个简单的文件
echo "# My First Project" > README.md
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 2. 查看状态（文件应为红色 - 未暂存）
git status
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 3. 添加到暂存区
git add README.md
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 4. 查看状态（文件应为绿色 - 已暂存）
git status
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 5. 创建提交
git commit -m "初始提交：添加 README 文件"
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 6. 查看提交历史
git log --oneline
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

---

## 第三步：创建功能分支

```bash
# 1. 查看当前分支
git branch
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 2. 创建并切换到新分支
git switch -c feature/add-description
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 3. 确认当前分支
git branch
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 4. 在分支上修改文件
echo "" >> README.md
echo "这是一个学习 Git 的示例项目。" >> README.md
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 5. 查看文件内容
cat README.md
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 6. 暂存并提交
git add README.md
git commit -m "添加项目描述"
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

---

## 第四步：合并分支

```bash
# 1. 切换回主分支
git switch main
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 2. 合并功能分支
git merge feature/add-description
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 3. 查看合并后的提交历史
git log --oneline --graph
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 4. 删除已合并的分支（可选）
git branch -d feature/add-description
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

---

## 第五步：连接 GitHub 并推送

```bash
# 1. 在 GitHub 上创建新仓库（在网页操作）
# 获取仓库 URL，例如：https://github.com/username/my-first-project.git

# 2. 关联远程仓库
git remote add origin https://github.com/username/my-first-project.git
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 3. 查看远程仓库配置
git remote -v
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

```bash
# 4. 推送到 GitHub
git push -u origin main
```

<!-- 第4步：我的实际操作记录 -->
<!-- 运行结果： -->

---

## 第六步：日常开发流程

```bash
# 标准工作流：

# 1. 拉取最新代码
git pull

# 2. 创建功能分支
git switch -c feature/new-feature

# 3. 编写代码...

# 4. 暂存更改
git add .

# 5. 提交更改
git commit -m "添加新功能"

# 6. 推送到远程
git push -u origin feature/new-feature

# 7. 在 GitHub 上创建 Pull Request（网页操作）
```

---

## 练习任务

| 任务 | 命令 | 完成标记 |
|:---|:---|:---:|
| 创建新仓库 | `git init` | [ ] |
| 添加文件到暂存区 | `git add filename` | [ ] |
| 查看仓库状态 | `git status` | [ ] |
| 创建提交 | `git commit -m "消息"` | [ ] |
| 查看提交历史 | `git log` | [ ] |
| 创建并切换分支 | `git switch -c branch-name` | [ ] |
| 合并分支 | `git merge branch-name` | [ ] |
| 关联远程仓库 | `git remote add origin url` | [ ] |
| 推送到远程 | `git push` | [ ] |

---

## 常见问题速查

| 问题 | 解决方法 |
|:---|:---|
| 忘记配置用户名 | `git config --global user.name "Your Name"` |
| 忘记配置邮箱 | `git config --global user.email "email@example.com"` |
| 想撤销 git add | `git reset filename` |
| 想修改上次提交 | `git commit --amend` |
| 想查看分支图 | `git log --oneline --graph` |
| 想查看远程地址 | `git remote -v` |

---

<!-- STEP2-DONE -->
