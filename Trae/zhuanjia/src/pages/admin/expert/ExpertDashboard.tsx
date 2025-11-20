import React, { useState } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { Users, BookOpen, Star, MessageCircle, Eye, Edit3, Wallet, Award } from 'lucide-react';
import { useAppStore } from '../../../stores/appStore';

export const ExpertDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'apps' | 'materials'>('apps');
  
  const stats = [
    {
      title: '内容浏览',
      value: '1,234',
      icon: Eye,
      color: 'bg-green-500',
      trend: '+8%'
    },
    {
      title: '知识资源',
      value: '28',
      icon: BookOpen,
      color: 'bg-purple-500',
      trend: '+2'
    },
    {
      title: '用户评分',
      value: '4.9',
      icon: Star,
      color: 'bg-yellow-500',
      trend: '+0.2'
    },
    {
      title: '总收入',
      value: '¥12,800',
      icon: Wallet,
      color: 'bg-green-600',
      trend: '+15%'
    }
  ];
  
  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        {/* 欢迎信息 - 已置顶 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">欢迎回来，张教授！</h2>
          <p className="text-blue-100">今天是您专业服务的第 365 天</p>
        </div>

        {/* 专家基本信息卡片 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="text-blue-600" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">张教授</h2>
                <p className="text-gray-600">人工智能专家 · 清华大学计算机系</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">机器学习</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">深度学习</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">自然语言处理</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => window.location.hash = '/admin/expert/profile'}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
            >
              <Edit3 size={16} />
              <span>编辑</span>
            </button>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700">
              专注于人工智能领域的研究与应用，拥有10年以上行业经验，在机器学习算法优化和智能系统设计方面有深厚造诣。
            </p>
          </div>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.trend}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 快速操作 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => window.location.hash = '/admin/expert/apps'}
              className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Award className="text-blue-600 mb-2" size={24} />
              <span className="text-blue-800 font-medium">创建应用</span>
            </button>
            <button 
              onClick={() => window.location.hash = '/admin/expert/knowledge'}
              className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <BookOpen className="text-green-600 mb-2" size={24} />
              <span className="text-green-800 font-medium">管理知识库</span>
            </button>
            <button 
              onClick={() => window.location.hash = '/admin/expert/knowledge'}
              className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <BookOpen className="text-purple-600 mb-2" size={24} />
              <span className="text-purple-800 font-medium">上传材料</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 最近调用 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">最近调用</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('apps')}
                  className={`px-3 py-1 text-sm rounded-full ${
                    activeTab === 'apps'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  应用
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`px-3 py-1 text-sm rounded-full ${
                    activeTab === 'materials'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  材料
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {activeTab === 'apps' ? (
                <>
                  {[
                    { appName: '数字化转型顾问', question: '关于数字化转型的建议', time: '2小时前', status: '已回复', count: '12次调用' },
                    { appName: '项目管理助手', question: '项目管理工具推荐', time: '4小时前', status: '已回复', count: '8次调用' },
                    { appName: 'AI场景分析器', question: 'AI应用场景分析', time: '6小时前', status: '已回复', count: '15次调用' }
                  ].map((consultation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Award className="text-blue-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{consultation.appName}</p>
                          <p className="text-sm text-gray-600">{consultation.question}</p>
                          <p className="text-xs text-gray-500">{consultation.time} · {consultation.count}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full bg-green-100 text-green-800`}>
                        {consultation.status}
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {[
                    { name: '机器学习基础教程.pdf', time: '1小时前', count: '25次查看' },
                    { name: '深度学习实战案例.docx', time: '3小时前', count: '18次查看' },
                    { name: '自然语言处理白皮书.pptx', time: '5小时前', count: '32次查看' }
                  ].map((material, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <BookOpen className="text-green-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{material.name}</p>
                          <p className="text-sm text-gray-600">上传者: 张教授</p>
                          <p className="text-xs text-gray-500">{material.time} · {material.count}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        查看详情
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          
          {/* 最新评论 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">最新评论</h3>
            <div className="space-y-4">
              {[
                    { user: '陈博士', content: '非常实用的建议，解决了我们项目中的实际问题', time: '1小时前', rating: 5, targetName: '数字化转型顾问', targetType: '应用' },
                    { user: '刘经理', content: '讲解清晰，逻辑性强，期待更多相关内容', time: '3小时前', rating: 4, targetName: '机器学习基础教程', targetType: '材料' },
                    { user: '孙主任', content: '专业性强，对我们的数字化转型很有帮助', time: '5小时前', rating: 5, targetName: 'AI场景分析器', targetType: '应用' }
                  ].map((comment, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="text-green-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-900">{comment.user}</p>
                          <div className="flex text-yellow-400">
                            {'★'.repeat(comment.rating)}
                            {'☆'.repeat(5 - comment.rating)}
                          </div>
                        </div>
                        <p className="text-xs text-blue-600 mt-1">{comment.targetType}: {comment.targetName}</p>
                        <p className="text-sm text-gray-600 mt-1">{comment.content}</p>
                        <p className="text-xs text-gray-500 mt-1">{comment.time}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};
