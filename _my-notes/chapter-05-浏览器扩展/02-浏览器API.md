# 02 - 浏览器 API

<!-- STEP1-DONE: 2026-04-07 -->

## 📚 本节内容

### Tabs API

```javascript
// 获取当前活动标签
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    console.log(currentTab.url);
    console.log(currentTab.title);
});

// 创建新标签
chrome.tabs.create({ url: 'https://example.com' });

// 更新标签
chrome.tabs.update(tabId, { url: 'https://new-url.com' });

// 关闭标签
chrome.tabs.remove(tabId);
```

### Storage API

```javascript
// 存储数据
chrome.storage.local.set({
    theme: 'dark',
    count: 42
}, () => {
    console.log('数据已保存');
});

// 读取数据
chrome.storage.local.get(['theme', 'count'], (result) => {
    console.log(result.theme);
    console.log(result.count);
});

// 删除数据
chrome.storage.local.remove('theme');

// 清空所有数据
chrome.storage.local.clear();
```

### Scripting API

```javascript
// 在当前页面执行脚本
chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: changeBackground,
    args: ['lightblue']
});

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}
```

### Notifications API

```javascript
chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: '通知标题',
    message: '这是通知内容'
});
```

## ❓ 我的疑问

_（留白供后续学习时记录）_



## 与原课程对照

| 内容 | 原课程位置 | 备注 |
|------|------------|------|
| tabs API | 5-browser-extension/2-forms-browsers | 标签页操作 |
| storage API | 5-browser-extension/3-background-tasks | 数据存储 |
| scripting API | 5-browser-extension/2-forms-browsers | 脚本注入 |

