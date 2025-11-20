import React, { useEffect, useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExpertCard } from '../../components/expert/ExpertCard';
import { ExpertSearch } from '../../components/expert/ExpertSearch';
import { useAppStore } from '../../stores/appStore';
import { mockExperts, mockPlatform } from '../../utils/mockData';

export const HomePage: React.FC = () => {
  const { 
    currentPlatform, 
    filteredExperts, 
    setCurrentPlatform, 
    setExperts,
    experts 
  } = useAppStore();
  const [menuOpen, setMenuOpen] = useState(false);
  
  
  
  // 获取所有标签
  const allTags = Array.from(
    new Set(mockExperts.flatMap(expert => expert.tags))
  );
  
  useEffect(() => {
    setCurrentPlatform(mockPlatform);
    setExperts(mockExperts);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useAppStore.getState() as any).setSearchQuery('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useAppStore.getState() as any).setSelectedTags([]);
  }, [setCurrentPlatform, setExperts]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 - 移到banner上方 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* 左上角：机构首页按钮 */}
            <Link to="/organization" className="px-4 py-2 bg-blue-50/90 backdrop-blur-sm text-blue-600 rounded-md hover:bg-blue-100 transition-colors font-medium">机构首页</Link>
            
            {/* 右上角：后台入口菜单按钮 */}
            <div className="relative">
              <button onClick={() => setMenuOpen(v => !v)} className="p-2 bg-gray-100/90 backdrop-blur-sm text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
                <Menu size={18} />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg overflow-hidden border">
                  <Link onClick={() => setMenuOpen(false)} to="/admin/platform/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">平台管理后台</Link>
                  <Link onClick={() => setMenuOpen(false)} to="/admin/expert/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">专家管理后台</Link>
                  <Link onClick={() => setMenuOpen(false)} to="/admin/organization/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">机构管理后台</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* AI科技风格Banner */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-cyan-300 text-sm font-medium">AI 智能驱动</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              专家数字应用平台
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              汇聚全球顶尖专家智慧，AI技术赋能专业服务，让知识触手可及
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                探索专家
              </button>
              <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
                了解更多
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>
      
      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-6 text-white overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-blue-100 text-sm font-medium">平台专家数</div>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-1">{experts.length}</div>
                <div className="text-blue-200 text-sm">位专家为您服务</div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl p-6 text-white overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-emerald-100 text-sm font-medium">入驻机构数</div>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-1">1</div>
                <div className="text-emerald-200 text-sm">家权威机构</div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-2xl p-6 text-white overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-violet-100 text-sm font-medium">AI应用数</div>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-1">{experts.reduce((acc, e) => acc + e.applications.length, 0)}</div>
                <div className="text-violet-200 text-sm">个智能应用</div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">🔥 专家热度排行</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 text-xs font-medium rounded-full">
                  TOP 5
                </div>
              </div>
              <div className="space-y-4">
                {experts
                  .slice()
                  .sort((a, b) => b.stats.calls - a.stats.calls)
                  .slice(0, 5)
                  .map((e, i) => (
                    <div key={e.id} className="group flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          i === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg' :
                          i === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white shadow-lg' :
                          i === 2 ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg' :
                          'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600'
                        }`}>
                          {i + 1}
                        </div>
                        <img 
                          src={e.avatar} 
                          alt={e.name} 
                          className="w-10 h-10 rounded-full object-cover shadow-md"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{e.name}</div>
                          <div className="text-xs text-gray-500">{e.title}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                          {e.stats.calls}
                        </div>
                        <div className="text-xs text-gray-400">次调用</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">🚀 应用热度排行</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-green-600 text-xs font-medium rounded-full">
                  TOP 5
                </div>
              </div>
              <div className="space-y-4">
                {experts
                  .flatMap(e => e.applications.map(a => ({ ...a, expert: e.name })))
                  .slice()
                  .sort((a, b) => b.stats.calls - a.stats.calls)
                  .slice(0, 5)
                  .map((a, i) => (
                    <div key={a.id} className="group flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          i === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg' :
                          i === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white shadow-lg' :
                          i === 2 ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg' :
                          'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600'
                        }`}>
                          {i + 1}
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{a.title}</div>
                          <div className="text-xs text-gray-500">专家: {a.expert}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                          {a.stats.calls}
                        </div>
                        <div className="text-xs text-gray-400">次调用</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* 专家库标题 */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">专家库</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            汇聚行业顶尖专家，为您提供专业的咨询和服务
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        {/* 搜索和筛选 */}
        <ExpertSearch allTags={allTags} />
        
        {/* 专家列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
        
        {/* 空状态 */}
        {filteredExperts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关专家</h3>
            <p className="text-gray-500">请尝试调整搜索条件或筛选标签</p>
          </div>
        )}
      </main>
    </div>
  );
};
