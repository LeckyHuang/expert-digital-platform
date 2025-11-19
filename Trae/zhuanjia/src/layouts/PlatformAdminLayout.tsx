import React from 'react';
import { BarChart3, Users, BookOpen, Settings, LogOut, Menu, X, Building } from 'lucide-react';
import { useState } from 'react';

export const PlatformAdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const menuItems = [
    { icon: BarChart3, label: '数据概览', href: '/admin/platform/dashboard' },
    { icon: Users, label: '专家管理', href: '/admin/platform/experts' },
    { icon: Building, label: '机构管理', href: '/admin/platform/organizations' },
    { icon: BookOpen, label: '应用管理', href: '/admin/platform/applications' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 侧边栏 */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">平台管理后台</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-100 rounded"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors mb-2"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <a href="/" className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors w-full">
            <LogOut size={20} />
            <span>退出登录</span>
          </a>
        </div>
      </div>
      
      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部导航 */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
            >
              <Menu size={20} />
            </button>
            <a href="/" className="hidden lg:inline px-3 py-1 bg-gray-100 rounded text-sm text-gray-700 hover:bg-gray-200">返回首页</a>
            
            <h1 className="text-xl font-semibold text-gray-800">平台管理后台</h1>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">管理员</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users size={16} className="text-blue-600" />
              </div>
            </div>
          </div>
        </header>
        
        {/* 页面内容 */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      
      {/* 移动端遮罩 */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};