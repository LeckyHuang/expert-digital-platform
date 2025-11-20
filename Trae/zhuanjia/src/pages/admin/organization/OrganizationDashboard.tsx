import React from 'react';
import { OrganizationAdminLayout } from '../../../layouts/OrganizationAdminLayout';
import { Users, BookOpen, TrendingUp, Calendar, ImageIcon } from 'lucide-react';

export const OrganizationDashboard: React.FC = () => {
  // 数据统计部分
  const stats = [
    {
      title: '专家数量',
      value: '28',
      icon: Users,
      color: 'bg-blue-500',
      trend: '+3本月'
    },
    {
      title: '课程总数',
      value: '65',
      icon: BookOpen,
      color: 'bg-green-500',
      trend: '+8本月'
    },
    {
      title: '学员数量',
      value: '1,245',
      icon: TrendingUp,
      color: 'bg-purple-500',
      trend: '+15%'
    },
    {
      title: '动态资讯',
      value: '32',
      icon: ImageIcon,
      color: 'bg-yellow-500',
      trend: '+5本周'
    }
  ];
  
  return (
    <OrganizationAdminLayout>
      <div className="space-y-8">
        {/* 页面标题 */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">数据概览</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Calendar size={16} />
            <span>导出报表</span>
          </button>
        </div>
        
        {/* 数据统计卡片 */}
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
        
        {/* 最近课程 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">最近课程</h3>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              新增课程
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">课程名称</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">主讲专家</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">发布时间</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">学习人数</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">操作</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: '数字化转型实战指南', expert: '张辉', date: '2023-11-18', students: 245 },
                  { id: 2, name: 'AI技术在企业中的应用', expert: '李明', date: '2023-11-15', students: 189 },
                  { id: 3, name: '项目管理最佳实践', expert: '王芳', date: '2023-11-12', students: 156 },
                  { id: 4, name: '数据分析与可视化', expert: '张强', date: '2023-11-10', students: 210 }
                ].map((course) => (
                  <tr key={course.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{course.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{course.expert}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{course.date}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{course.students}</td>
                    <td className="py-3 px-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">编辑</button>
                      <button className="text-red-600 hover:text-red-800">删除</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm">查看全部课程</button>
          </div>
        </div>
        
        {/* 最新资讯 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">最新资讯</h3>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              新增资讯
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 1, title: '机构荣获年度教育创新奖', date: '2023-11-19', status: '已发布' },
              { id: 2, title: '第十届专家论坛即将举办', date: '2023-11-17', status: '已发布' },
              { id: 3, title: '新课程体系发布会通知', date: '2023-11-16', status: '已发布' },
              { id: 4, title: '学员学习成果展示活动', date: '2023-11-14', status: '草稿' }
            ].map((news) => (
              <div key={news.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{news.title}</h4>
                  <p className="text-sm text-gray-500">发布时间: {news.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 text-xs rounded ${news.status === '已发布' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {news.status}
                  </span>
                  <div>
                    <button className="text-blue-600 hover:text-blue-800 mr-3">编辑</button>
                    <button className="text-red-600 hover:text-red-800">删除</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm">查看全部资讯</button>
          </div>
        </div>
      </div>
    </OrganizationAdminLayout>
  );
};