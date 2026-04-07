/**
 * 环境验证脚本
 * 对应：../01-开发环境.md
 * 
 * 功能：检查开发环境是否配置正确
 * 运行方式：node 01-环境验证.js
 */

const { execSync } = require('child_process');
const os = require('os');

console.log('========================================');
console.log('     开发环境验证工具');
console.log('========================================\n');

// 检查操作系统
console.log(`操作系统: ${os.platform()} ${os.release()}`);
console.log(`Node.js 版本: ${process.version}\n`);

// 检查 Git
function checkGit() {
    try {
        const result = execSync('git --version', { encoding: 'utf-8' });
        console.log('✅ Git 已安装:', result.trim());
        return true;
    } catch (error) {
        console.log('❌ Git 未安装或不在 PATH 中');
        console.log('   请访问 https://git-scm.com 下载安装');
        return false;
    }
}

// 检查 npm
function checkNpm() {
    try {
        const result = execSync('npm --version', { encoding: 'utf-8' });
        console.log('✅ npm 已安装: v' + result.trim());
        return true;
    } catch (error) {
        console.log('❌ npm 未安装');
        return false;
    }
}

// 检查 VS Code (code 命令)
function checkVSCode() {
    try {
        const result = execSync('code --version', { encoding: 'utf-8' });
        const version = result.split('\n')[0];
        console.log('✅ VS Code 已安装: v' + version);
        return true;
    } catch (error) {
        console.log('⚠️  VS Code 命令行工具未配置');
        console.log('   在 VS Code 中按 Ctrl+Shift+P，输入 "Shell Command" 安装');
        return false;
    }
}

// 检查 Git 配置
function checkGitConfig() {
    try {
        const name = execSync('git config user.name', { encoding: 'utf-8' }).trim();
        const email = execSync('git config user.email', { encoding: 'utf-8' }).trim();
        console.log('✅ Git 用户配置:');
        console.log('   用户名:', name || '(未设置)');
        console.log('   邮箱:', email || '(未设置)');
        return name && email;
    } catch (error) {
        console.log('⚠️  Git 用户未配置');
        console.log('   运行: git config --global user.name "Your Name"');
        console.log('   运行: git config --global user.email "email@example.com"');
        return false;
    }
}

// 执行检查
const results = {
    git: checkGit(),
    npm: checkNpm(),
    vscode: checkVSCode(),
    gitConfig: checkGitConfig()
};

console.log('\n----------------------------------------');
console.log('检查完成！');

const allPassed = Object.values(results).every(v => v);
if (allPassed) {
    console.log('🎉 所有环境配置正确，可以开始学习！');
} else {
    console.log('⚠️  部分环境未配置，请参考上方提示安装');
}
console.log('----------------------------------------\n');

// 第4步实操区：在此添加运行结果记录
/*
========================================
     运行结果记录区
========================================

运行日期：
运行结果：（粘贴上方输出）

发现问题：
- 

解决方法：
- 

========================================
*/

// 第2步完成标记
// STEP2-DONE
