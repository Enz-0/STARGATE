/**
 * 函数练习
 * 对应：../02-函数与作用域.md
 * 运行：node 02-functions.js
 */

// 1. 函数声明
function add(a, b) {
    return a + b;
}
console.log('add:', add(2, 3));

// 2. 箭头函数
const multiply = (a, b) => a * b;
console.log('multiply:', multiply(2, 3));

// 3. 闭包示例
function createCounter() {
    let count = 0;
    return () => ++count;
}

const counter = createCounter();
console.log('counter:', counter()); // 1
console.log('counter:', counter()); // 2

// 💡 第4步实操区：创建自己的函数

// STEP2-DONE
