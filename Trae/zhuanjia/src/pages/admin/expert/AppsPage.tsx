import React, { useState, useEffect } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { useAppStore } from '../../../stores/appStore';
import { MessageCircle, BookOpen, Plus } from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  description: string;
  type: 'free' | 'paid';
  status: 'draft' | 'published' | 'unlisted';
  knowledgeBase: string | null;
  usageCount: number;
  lastUsed: string;
  users: number;
  rating: number;
}

const mockApps: AppItem[] = [
  {
    id: '1',
    name: '数据分析助手',
    description: '帮助用户分析数据，提供统计分析和可视化功能',
    type: 'paid',
    status: 'published',
    usageCount: 234,
    users: 56,
    rating: 4.8,
    lastUsed: '2023-11-19',
    knowledgeBase: '统计学知识库'
  },
  {
    id: '2',
    name: '机器学习模型评估',
    description: '评估机器学习模型性能，提供详细的指标分析',
    type: 'free',
    status: 'published',
    usageCount: 456,
    users: 123,
    rating: 4.6,
    lastUsed: '2023-11-18',
    knowledgeBase: '人工智能知识库'
  },
  {
    id: '3',
    name: '行业趋势预测器',
    description: '基于历史数据预测行业发展趋势，提供战略建议',
    type: 'paid',
    status: 'published',
    usageCount: 189,
    users: 42,
    rating: 4.7,
    lastUsed: '2023-11-17',
    knowledgeBase: '行业报告库'
  },
  {
    id: '4',
    name: '数据可视化工具',
    description: '将复杂数据转化为直观的图表和可视化展示',
    type: 'free',
    status: 'published',
    usageCount: 678,
    users: 234,
    rating: 4.5,
    lastUsed: '2023-11-16',
    knowledgeBase: '统计学知识库'
  },
  {
    id: '5',
    name: '自然语言处理助手',
    description: '提供文本分析、情感识别和内容生成等NLP功能',
    type: 'paid',
    status: 'published',
    usageCount: 345,
    users: 78,
    rating: 4.9,
    lastUsed: '2023-11-15',
    knowledgeBase: '人工智能知识库'
  },
  {
    id: '6',
    name: '智能推荐系统',
    description: '个性化内容推荐引擎，提升用户体验',
    type: 'free',
    status: 'draft',
    usageCount: 0,
    users: 0,
    rating: 0,
    lastUsed: '',
    knowledgeBase: null
  }
];

export const AppsPage: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'free' | 'paid'>('free');
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] = useState<string>('');
  
  // 使用全局状态管理应用数据
  const { apps, setApps } = useAppStore();
  
  // 初始化模拟数据
  useEffect(() => {
    if (!apps.length) {
      setApps(mockApps);
    }
  }, []);

  const createApp = () => {
    if (!name || !description) {
      alert('请填写应用名称和描述');
      return;
    }
    
    const item: AppItem = { 
      id: Math.random().toString(36),
      name, 
      description, 
      type, 
      status: 'draft',
      knowledgeBase: selectedKnowledgeBase || null,
      usageCount: 0,
      lastUsed: '',
      users: 0,
      rating: 0
    };
    
    setApps([item, ...apps]);
    setName('');
    setDescription('');
    setSelectedKnowledgeBase('');
  };

  const publishApp = (id: string) => {
    setApps(apps.map(a => a.id === id ? { ...a, status: 'published' } : a));
  };

  const unpublishApp = (id: string) => {
    setApps(apps.map(a => a.id === id ? { ...a, status: 'unlisted' } : a));
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return '已上架';
      case 'draft': return '草稿';
      case 'unlisted': return '已下架';
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'unlisted': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">我的应用</h2>
        </div>
        
        {/* 快速操作区域 */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
          >
            <Plus className="mr-2" size={16} /> 创建应用
          </button>
        </div>

        {/* 创建应用弹窗 */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">创建应用</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">应用名称 *</label>
                    <input 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      placeholder="请输入应用名称" 
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">应用类型</label>
                    <select 
                      value={type} 
                      onChange={e => setType(e.target.value as any)} 
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="free">免费</option>
                      <option value="paid">付费</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">应用描述 *</label>
                    <textarea 
                      value={description} 
                      onChange={e => setDescription(e.target.value)} 
                      placeholder="请输入应用描述" 
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                      rows={3}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">关联知识库</label>
                    <select 
                      value={selectedKnowledgeBase} 
                      onChange={e => setSelectedKnowledgeBase(e.target.value)} 
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="">不关联知识库</option>
                      <option value="人工智能知识库">人工智能知识库</option>
                      <option value="统计学知识库">统计学知识库</option>
                      <option value="行业报告库">行业报告库</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  取消
                </button>
                <button 
                  onClick={() => {
                    createApp();
                    setShowCreateModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  创建应用
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 我的轻应用列表 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">个人创建的应用</h3>
          </div>
          {apps.filter(a => a.status !== 'draft').length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              暂无已发布的应用
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apps.filter(a => a.status !== 'draft').map(app => (
                <div key={app.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{app.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{app.description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      app.type === 'free' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {app.type === 'free' ? '免费' : '付费'}
                    </span>
                  </div>
                  
                  {/* 关联知识库 */}
                  {app.knowledgeBase && (
                    <div className="mt-3">
                      <span className="text-xs text-gray-500">关联知识库:</span>
                      <span className="ml-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {app.knowledgeBase}
                      </span>
                    </div>
                  )}
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs rounded ${getStatusClass(app.status)}`}>
                      {getStatusText(app.status)}
                    </span>
                    
                    <div className="flex space-x-2">
                      {app.status === 'published' ? (
                        <button 
                          onClick={() => unpublishApp(app.id)}
                          className="text-sm text-gray-600 hover:text-gray-800"
                        >
                          下架
                        </button>
                      ) : (
                        <button 
                          onClick={() => publishApp(app.id)}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          上架
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* 调用数据 */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>调用次数: {app.usageCount}</span>
                      <span>最后调用: {app.lastUsed || '无'}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>用户数: {app.users}</span>
                      <span>评分: {app.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* 草稿应用 */}
        {apps.filter(a => a.status === 'draft').length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">草稿应用</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apps.filter(a => a.status === 'draft').map(app => (
                <div key={app.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{app.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{app.description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      app.type === 'free' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {app.type === 'free' ? '免费' : '付费'}
                    </span>
                  </div>
                  
                  {app.knowledgeBase && (
                    <div className="mt-3">
                      <span className="text-xs text-gray-500">关联知识库:</span>
                      <span className="ml-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {app.knowledgeBase}
                      </span>
                    </div>
                  )}
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs rounded ${getStatusClass(app.status)}`}>
                      {getStatusText(app.status)}
                    </span>
                    
                    <button 
                      onClick={() => publishApp(app.id)}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      发布
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ExpertAdminLayout>
  );
};