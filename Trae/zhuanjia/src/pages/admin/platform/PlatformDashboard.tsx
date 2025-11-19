import React from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { Users, TrendingUp, BookOpen, Star } from 'lucide-react';

export const PlatformDashboard: React.FC = () => {
  const stats = [
    {
      title: '总专家数',
      value: '156',
      icon: Users,
      color: 'bg-blue-500',
      trend: '+12%'
    },
    {
      title: '活跃用户',
      value: '2,341',
      icon: TrendingUp,
      color: 'bg-green-500',
      trend: '+8%'
    },
    {
      title: '内容数量',
      value: '423',
      icon: BookOpen,
      color: 'bg-purple-500',
      trend: '+15%'
    },
    {
      title: '满意度',
      value: '98.5%',
      icon: Star,
      color: 'bg-yellow-500',
      trend: '+2%'
    }
  ];
  
  return (
    <PlatformAdminLayout>
      <div className="space-y-6">
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
        
        {/* 最近活动 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">最近活动</h3>
          <div className="space-y-4">
            {[
              { action: '新专家注册', user: '张教授', time: '2小时前' },
              { action: '内容发布', user: '李专家', time: '4小时前' },
              { action: '用户咨询', user: '王经理', time: '6小时前' },
              { action: '课程更新', user: '赵老师', time: '1天前' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 待审核内容 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">待审核内容</h3>
          <div className="space-y-3">
            {[
              { title: '数字化转型最佳实践', type: '文章', author: '张教授' },
              { title: 'AI项目管理课程', type: '课程', author: '李专家' },
              { title: '数据分析工具推荐', type: '工具', author: '王老师' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.type} · {item.author}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                    通过
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                    拒绝
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlatformAdminLayout>
  );
};
