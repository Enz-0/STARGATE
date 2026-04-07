/**
 * 控制流练习
 * 对应：../03-控制流.md
 * 运行：node 03-control-flow.js
 */

// 1. if...else
const score = 85;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else {
    console.log('C');
}

// 2. for 循环
for (let i = 0; i < 5; i++) {
    console.log('i:', i); // 💡 第4步实操区：修改循环条件
}

// 3. 数组方法
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
console.log('doubled:', doubled);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log('evens:', evens);

// 💡 第4步实操区：使用 forEach 遍历数组

// STEP2-DONE
