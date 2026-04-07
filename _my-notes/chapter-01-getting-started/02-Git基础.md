# 02 - Git 基础

> 🎯 **学习目标**：理解 Git 核心概念，掌握常用的版本控制命令。

---

## 🧠 Git 核心概念

| 概念 | 英文 | 解释 |
|:---|:---|:---|
| **仓库** | Repository (Repo) | 存储项目代码及其历史版本的文件夹 |
| **提交** | Commit | 保存代码某一时刻的快照，带有唯一 ID 和说明信息 |
| **分支** | Branch | 代码的独立开发线，可并行开发不同功能 |
| **暂存区** | Staging Area | 准备提交的更改临时存放区域 |
| **工作区** | Working Directory | 实际编辑文件的本地文件夹 |

### 工作流程图解

```
工作区 (Working Directory)
    ↓ git add
暂存区 (Staging Area)
    ↓ git commit
本地仓库 (Local Repository)
    ↓ git push
远程仓库 (Remote Repository / GitHub)
```

---

## ⌨️ 常用命令对照表

### 基础命令

| 命令 | 作用 | 使用场景 |
|:---|:---|:---|
| `git init` | 初始化本地仓库 | 新项目开始使用 Git |
| `git status` | 查看当前状态 | 随时确认哪些文件被修改 |
| `git add <文件名>` | 将文件添加到暂存区 | 准备提交特定文件 |
| `git add .` | 添加所有更改到暂存区 | 批量提交所有修改 |
| `git commit -m "描述"` | 提交更改到本地仓库 | 保存代码快照 |
| `git push` | 推送到远程仓库 | 将本地提交上传到 GitHub |
| `git pull` | 拉取远程更新 | 获取他人最新代码 |

### 分支相关

| 命令 | 作用 | 使用场景 |
|:---|:---|:---|
| `git branch` | 查看所有分支 | 确认当前所在分支 |
| `git branch <名称>` | 创建新分支 | 开发新功能 |
| `git switch <名称>` | 切换分支 | 切换到其他分支工作 |
| `git switch -c <名称>` | 创建并切换到新分支 | 快速创建功能分支 |
| `git merge <分支>` | 合并分支 | 将功能合并到主分支 |

### 协作相关

| 命令 | 作用 | 使用场景 |
|:---|:---|:---|
| `git clone <URL>` | 克隆远程仓库 | 下载他人项目到本地 |
| `git remote add origin <URL>` | 关联远程仓库 | 本地项目连接 GitHub |
| `git log` | 查看提交历史 | 追溯代码变更 |

---

## 🔗 Git 与 GitHub 的关系

| | Git | GitHub |
|:---|:---|:---|
| **是什么** | 版本控制软件（工具） | 代码托管平台（服务） |
| **作用** | 本地管理代码版本 | 远程存储和协作共享 |
| **关系** | 可以在本地独立使用 | 基于 Git 的云端服务 |
| **类比** | 像 Word 软件 | 像 OneDrive 云盘 |

> 💡 **一句话总结**：Git 是工具，GitHub 是使用 Git 的云端协作平台。

---

## ⚠️ 常见错误预防

### 错误 1：忘记 add 直接 commit

```bash
# ❌ 错误：修改后直接 commit
git commit -m "更新"
# 结果：提交的是空内容，更改未被保存

# ✅ 正确：先 add 再 commit
git add .
git commit -m "更新"
```

### 错误 2：commit 信息不清晰

```bash
# ❌ 错误：模糊的提交信息
git commit -m "fix"
git commit -m "update"

# ✅ 正确：描述性的提交信息
git commit -m "修复登录页面的表单验证bug"
git commit -m "添加用户注册页面的HTML结构"
```

### 错误 3：直接修改 main 分支

```bash
# ❌ 错误：在 main 分支直接开发
git commit -m "添加新功能"  # 在 main 分支

# ✅ 正确：创建功能分支
git switch -c feature/login  # 创建并切换到功能分支
git add .
git commit -m "添加登录功能"
git push
```

### 错误 4：提交敏感信息

```bash
# ⚠️ 危险：提交包含密码的代码
git add config.js  # 文件中有 API 密钥

# ✅ 正确：使用 .gitignore 忽略敏感文件
echo "config.js" >> .gitignore
git add .gitignore
```

---

## 🔄 日常开发流程

```bash
# 1. 获取最新代码
git pull

# 2. 创建功能分支
git switch -c feature/新功能名

# 3. 编写代码...

# 4. 查看更改
git status

# 5. 添加到暂存区
git add .

# 6. 提交更改
git commit -m "描述这次更改"

# 7. 推送到 GitHub
git push -u origin feature/新功能名

# 8. 在 GitHub 上创建 Pull Request
```

---

## 📚 对应原课程文件

**对应**：`1-getting-started-lessons/2-github-basics/README.md`

> 本课程涵盖 Git 基础、GitHub 协作流程、分支管理和开源贡献。

---

## ✅ 自检清单

- [ ] **Q1**: 我能在终端输入什么命令验证 Git 安装？
  <details><summary>答案</summary><code>git --version</code></details>

- [ ] **Q2**: `git add`、`git commit`、`git push` 三者的区别是什么？
  <details><summary>答案</summary><code>git add</code> 将更改放入暂存区；<code>git commit</code> 保存到本地仓库；<code>git push</code> 上传到远程仓库。</details>

- [ ] **Q3**: 如何创建并立即切换到新分支？
  <details><summary>答案</summary><code>git switch -c 分支名</code> 或 <code>git checkout -b 分支名</code></details>

---

> 📝 **笔记时间**：2026-04-07
