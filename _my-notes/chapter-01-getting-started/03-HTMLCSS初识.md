# 03 - HTML/CSS 初识

> 🎯 **学习目标**：了解 HTML 骨架结构，掌握 CSS 引入方式，创建第一个网页。

---

## 🏗️ HTML 骨架结构解析

```html
<!DOCTYPE html>           <!-- 声明文档类型为 HTML5 -->
<html lang="zh-CN">       <!-- HTML 根元素，lang 指定语言 -->
<head>                    <!-- 头部：包含元数据，不显示在页面上 -->
    <meta charset="UTF-8">           <!-- 字符编码，防止中文乱码 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                      <!-- 视口设置，适配移动设备 -->
    <title>页面标题</title>           <!-- 浏览器标签页显示的标题 -->
    <!-- 这里可以引入 CSS、JS 等外部资源 -->
</head>
<body>                    <!-- 主体：页面上可见的所有内容 -->
    <h1>Hello World</h1>  <!-- 页面主标题 -->
    <p>这是我的第一个网页。</p>       <!-- 段落文字 -->
</body>
</html>
```

### 关键标签说明

| 标签 | 作用 | 说明 |
|:---|:---|:---|
| `<!DOCTYPE html>` | 文档类型声明 | 告诉浏览器这是 HTML5 文档 |
| `<html>` | HTML 根元素 | 所有内容的容器 |
| `<head>` | 文档头部 | 包含元数据、标题、外部资源链接 |
| `<body>` | 文档主体 | 页面上显示的所有内容 |
| `<meta charset="UTF-8">` | 字符编码 | 确保中文正常显示 |
| `<title>` | 页面标题 | 显示在浏览器标签页 |

---

## 🎨 CSS 引入方式

CSS 有三种引入方式，优先级依次升高：

### 方式 1：外部样式表（推荐 ✅）

HTML 文件：
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

CSS 文件（`styles.css`）：
```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}
```

> 💡 **优点**：样式与结构分离，可复用于多个页面

---

### 方式 2：内部样式表

```html
<head>
    <style>
        body {
            background-color: #f0f0f0;
        }
        h1 {
            color: blue;
        }
    </style>
</head>
```

> 💡 **适用场景**：单页面特殊样式，快速测试

---

### 方式 3：行内样式（不推荐 ❌）

```html
<h1 style="color: red; font-size: 24px;">标题</h1>
<p style="color: gray;">段落文字</p>
```

> ⚠️ **缺点**：难以维护，优先级过高，不符合分离原则

---

## 📝 第一个 "Hello World" 页面

### 文件结构

```
my-first-website/
├── index.html      <!-- 主页面 -->
└── styles.css      <!-- 样式文件 -->
```

### index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个网页</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>🎉 Hello World!</h1>
        <p>欢迎来到 Web 开发的世界！</p>
        <button onclick="alert('你点击了按钮！')">点击我</button>
    </div>
</body>
</html>
```

### styles.css

```css
/* 页面基础样式 */
body {
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 内容容器 */
.container {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    text-align: center;
}

/* 标题样式 */
h1 {
    color: #333;
    margin-bottom: 20px;
}

/* 段落样式 */
p {
    color: #666;
    font-size: 18px;
}

/* 按钮样式 */
button {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
}

button:hover {
    background: #764ba2;
}
```

### 运行方式

1. 创建文件夹 `my-first-website`
2. 创建上述两个文件
3. 用 VS Code 打开文件夹
4. 右键 `index.html` → "Open with Live Server"
5. 在浏览器中查看效果

---

## 📚 补充：常用 HTML 标签速查

| 标签 | 作用 | 示例 |
|:---|:---|:---|
| `<h1>` ~ `<h6>` | 标题（1级最大） | `<h1>主标题</h1>` |
| `<p>` | 段落 | `<p>一段文字</p>` |
| `<a>` | 链接 | `<a href="https://example.com">点击</a>` |
| `<img>` | 图片 | `<img src="photo.jpg" alt="描述">` |
| `<div>` | 区块容器 | `<div class="header">...</div>` |
| `<span>` | 行内容器 | `<span class="highlight">高亮</span>` |
| `<ul>` / `<ol>` | 无序/有序列表 | `<ul><li>项目</li></ul>` |
| `<button>` | 按钮 | `<button>点击</button>` |

---

## 📚 对应原课程文件

**对应**：`3-terrarium/1-intro-to-html/README.md` 和 `3-terrarium/2-intro-to-css/README.md`

> 本课程在第三周（Terrarium 项目）中详细介绍 HTML 和 CSS，第一课主要关注开发工具和编程语言基础。

---

## ✅ 自检清单

- [ ] **Q1**: `<head>` 和 `<body>` 标签的区别是什么？
  <details><summary>答案</summary><code>&lt;head&gt;</code> 包含元数据和外部资源，不显示在页面上；<code>&lt;body&gt;</code> 包含页面上可见的所有内容。</details>

- [ ] **Q2**: CSS 的三种引入方式是什么？哪种最推荐？
  <details><summary>答案</summary>外部样式表（推荐）、内部样式表、行内样式。外部样式表最推荐，因为实现了样式与结构的分离。</details>

- [ ] **Q3**: `<meta charset="UTF-8">` 的作用是什么？
  <details><summary>答案</summary>指定文档的字符编码为 UTF-8，确保中文等特殊字符正确显示，防止乱码。</details>

---

> 📝 **笔记时间**：2026-04-07
