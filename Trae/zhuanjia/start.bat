@echo off
chcp 65001 >nul
title 专家数字人平台 - 项目内启动

echo ==========================================
echo 专家数字人平台 - 项目内启动
echo ==========================================

REM 检查是否已安装依赖
if not exist "node_modules" (
    echo 检测到未安装依赖，正在安装...
    npm install
    echo 依赖安装完成！
)

REM 启动开发服务器
echo 正在启动开发服务器...
echo 服务器启动后，请访问: http://localhost:5173/
echo 按 Ctrl+C 可停止服务器
echo ==========================================

REM 延迟3秒后自动打开浏览器
timeout /t 3 /nobreak >nul
start http://localhost:5173/

npm run dev

pause