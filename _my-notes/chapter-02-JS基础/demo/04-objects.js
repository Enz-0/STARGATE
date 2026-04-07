/**
 * 对象练习
 * 对应：../04-对象与数组.md
 * 运行：node 04-objects.js
 */

// 1. 对象定义
const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
};

console.log(user.name);

// 2. 解构赋值
const { name, age } = user;
console.log('解构:', name, age);

// 3. 展开运算符
const userCopy = { ...user, city: 'Beijing' };
console.log('展开:', userCopy);

// 4. 数组方法
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('sum:', sum);

// 💡 第4步实操区：使用 find 方法查找数组中大于3的数

// STEP2-DONE
