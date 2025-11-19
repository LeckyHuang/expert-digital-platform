import React from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { Users, BookOpen, Star, MessageCircle, Eye } from 'lucide-react';

export const ExpertDashboard: React.FC = () => {
  const stats = [
    {
      title: '本月咨询',
      value: '45',
      icon: MessageCircle,
      color: 'bg-blue-500',
      trend: '+12%'
    },
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
    }
  ];
  
  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        {/* 欢迎信息 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">欢迎回来，张教授！</h2>
          <p className="text-blue-100">今天是您专业服务的第 365 天</p>
        </div>
        
        {/* 统计卡片 */}
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
        
        {/* 最近咨询 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">最近咨询</h3>
          <div className="space-y-4">
            {[
              { user: '李经理', question: '关于数字化转型的建议', time: '2小时前', status: '已回复' },
              { user: '王总', question: '项目管理工具推荐', time: '4小时前', status: '待回复' },
              { user: '赵主任', question: 'AI应用场景分析', time: '6小时前', status: '已回复' }
            ].map((consultation, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{consultation.user}</p>
                    <p className="text-sm text-gray-600">{consultation.question}</p>
                    <p className="text-xs text-gray-500">{consultation.time}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  consultation.status === '已回复' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {consultation.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 内容表现 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">热门内容</h3>
            <div className="space-y-3">
              {[
                { title: '《数字化转型实战指南》', views: 1234, likes: 89 },
                { title: '《AI项目管理最佳实践》', views: 987, likes: 67 },
                { title: '《数据分析工具对比》', views: 756, likes: 45 }
              ].map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{content.title}</h4>
                    <p className="text-sm text-gray-500">{content.views} 浏览 · {content.likes} 点赞</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    查看
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">智能体表现</h3>
            <div className="space-y-3">
              {[
                { name: '项目助手', usage: 234, satisfaction: 98 },
                { name: '分析助手', usage: 189, satisfaction: 96 },
                { name: '对标助手', usage: 156, satisfaction: 94 }
              ].map((agent, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{agent.name}</h4>
                    <p className="text-sm text-gray-500">{agent.usage} 次使用 · {agent.satisfaction}% 满意度</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    管理
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};
