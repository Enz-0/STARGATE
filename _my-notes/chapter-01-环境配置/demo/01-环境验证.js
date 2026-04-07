/**
 * 环境验证脚本
 * 对应：../01-开发环境.md
 * 运行方式：node 01-环境验证.js
 */

const { execSync } = require('child_process');

console.log('========================================');
console.log('     开发环境验证工具');
console.log('========================================\n');

// 检查 Git
function checkGit() {
    try {
        const result = execSync('git --version', { encoding: 'utf-8' });
        console.log('✅ Git:', result.trim());
        return true;
    } catch (error) {
        console.log('❌ Git 未安装');
        return false;
    }
}

// 检查 Node.js
function checkNode() {
    try {
        const result = execSync('node --version', { encoding: 'utf-8' });
        console.log('✅ Node.js:', result.trim());
        return true;
    } catch (error) {
        console.log('❌ Node.js 未安装');
        return false;
    }
}

// 检查 npm
function checkNpm() {
    try {
        const result = execSync('npm --version', { encoding: 'utf-8' });
        console.log('✅ npm:', result.trim());
        return true;
    } catch (error) {
        console.log('❌ npm 未安装');
        return false;
    }
}

// 执行检查
checkGit();
checkNode();
checkNpm();

console.log('\n========================================');

// 💡 第4步实操区：在此添加运行结果记录
/*
运行日期：
运行结果：

发现问题：
- 

解决方法：
- 
*/

// STEP2-DONE
