# 01 - DOM 基础

<!-- STEP1-DONE: 2026-04-07 -->

## 📚 本节内容

### document.querySelector

`querySelector` 是选择 DOM 元素最常用的方法：

```javascript
// 选择单个元素
const element = document.querySelector('.class-name');
const button = document.querySelector('#submit-btn');
const input = document.querySelector('input[type="text"]');
```

### 选择器语法

| 选择器 | 示例 | 说明 |
|--------|------|------|
| ID | `#header` | 选择 id="header" 的元素 |
| Class | `.item` | 选择 class="item" 的元素 |
| 标签 | `div` | 选择所有 div 元素 |
| 属性 | `[data-id]` | 选择有 data-id 属性的元素 |
| 后代 | `.nav li` | 选择 .nav 内的所有 li |
| 子元素 | `.nav > li` | 选择 .nav 的直接子 li |
| 伪类 | `:first-child` | 选择第一个子元素 |

### querySelectorAll

```javascript
// 选择多个元素
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.style.color = 'red';
});
```

## ❓ 我的疑问

_（留白供后续学习时记录）_



## 与原课程对照

| 内容 | 原课程位置 | 备注 |
|------|------------|------|
| querySelector | 3-terrarium/1-intro-to-DOM | 基础选择器 |
| 选择器语法 | 3-terrarium/2-intro-to-html | CSS 选择器回顾 |

