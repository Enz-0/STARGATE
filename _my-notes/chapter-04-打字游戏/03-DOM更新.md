# 03 - DOM 更新

<!-- STEP1-DONE: 2026-04-07 -->

## 📚 本节内容

### 动态修改文本

```javascript
// 更新显示单词
function displayWord(word) {
    const wordElement = document.querySelector('#word-display');
    wordElement.textContent = word;
}

// 更新分数
function updateScore(score) {
    document.querySelector('#score').textContent = `分数: ${score}`;
}

// 更新时间
function updateTime(time) {
    document.querySelector('#time').textContent = `${time}s`;
}
```

### 输入框处理

```javascript
const input = document.querySelector('#word-input');

input.addEventListener('input', () => {
    const typed = input.value;
    const currentWord = gameState.currentWord;
    
    // 检查是否正确
    if (typed === currentWord) {
        // 正确：清空输入，显示新单词
        input.value = '';
        showNewWord();
        addScore();
    }
});

// 自动聚焦
input.focus();
input.addEventListener('blur', () => {
    input.focus(); // 保持聚焦
});
```

### 高亮匹配字符

```javascript
function highlightMatch(word, typed) {
    let html = '';
    
    for (let i = 0; i < word.length; i++) {
        if (i < typed.length) {
            if (word[i] === typed[i]) {
                html += `<span class="correct">${word[i]}</span>`;
            } else {
                html += `<span class="wrong">${word[i]}</span>`;
            }
        } else {
            html += word[i];
        }
    }
    
    document.querySelector('#word-display').innerHTML = html;
}
```

### 游戏结束显示

```javascript
function showGameOver(score) {
    const gameOverDiv = document.querySelector('#game-over');
    gameOverDiv.innerHTML = `
        <h2>游戏结束!</h2>
        <p>最终得分: ${score}</p>
        <button onclick="restartGame()">重新开始</button>
    `;
    gameOverDiv.classList.remove('hidden');
}
```

## ❓ 我的疑问

_（留白供后续学习时记录）_



## 与原课程对照

| 内容 | 原课程位置 | 备注 |
|------|------------|------|
| 文本更新 | 4-typing-game/1-typing-game | DOM 操作 |
| 输入处理 | 4-typing-game/2-typing-game | input 事件 |
| 高亮显示 | 4-typing-game/2-typing-game | 视觉反馈 |

