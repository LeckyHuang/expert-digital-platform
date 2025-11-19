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
      {/* 头部 */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link to="/organization" className="px-3 py-1 bg-white/20 rounded-md hover:bg-white/30 transition-colors text-sm">机构首页</Link>
            <div className="relative">
              <button onClick={() => setMenuOpen(v => !v)} className="p-2 bg-white/20 rounded-md hover:bg-white/30 transition-colors">
                <Menu size={18} />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg overflow-hidden">
                  <Link onClick={() => setMenuOpen(false)} to="/admin/platform/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">平台管理后台</Link>
                  <Link onClick={() => setMenuOpen(false)} to="/admin/expert/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">专家管理后台</Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              {currentPlatform?.name || '外部专家数字人平台'}
            </h1>
            <p className="text-blue-100">
              {currentPlatform?.description || '数字化赋能，专家服务触手可及'}
            </p>
          </div>
          

        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-gray-500">专家数</div>
              <div className="text-2xl font-bold text-blue-600">{experts.length}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-gray-500">机构数</div>
              <div className="text-2xl font-bold text-blue-600">1</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-gray-500">应用数</div>
              <div className="text-2xl font-bold text-blue-600">{experts.reduce((acc, e) => acc + e.applications.length, 0)}</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-medium text-gray-900 mb-3">专家热度排行</div>
              <div className="space-y-2">
                {experts
                  .slice()
                  .sort((a, b) => b.stats.calls - a.stats.calls)
                  .slice(0, 5)
                  .map((e, i) => (
                    <div key={e.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full text-xs text-blue-700 flex items-center justify-center">{i + 1}</div>
                        <span className="text-sm text-gray-700">{e.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{e.stats.calls} 次调用</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-medium text-gray-900 mb-3">应用热度排行</div>
              <div className="space-y-2">
                {experts
                  .flatMap(e => e.applications.map(a => ({ ...a, expert: e.name })))
                  .slice()
                  .sort((a, b) => b.stats.calls - a.stats.calls)
                  .slice(0, 5)
                  .map((a, i) => (
                    <div key={a.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full text-xs text-indigo-700 flex items-center justify-center">{i + 1}</div>
                        <span className="text-sm text-gray-700">{a.title}</span>
                      </div>
                      <span className="text-xs text-gray-500">{a.stats.calls} 次调用</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* 专家库标题 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">专家库</h2>
          <p className="text-gray-600">
            汇聚行业顶尖专家，为您提供专业的咨询和服务
          </p>
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
