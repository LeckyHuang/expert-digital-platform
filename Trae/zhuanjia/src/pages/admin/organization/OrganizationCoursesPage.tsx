import React, { useState } from 'react';
import { OrganizationAdminLayout } from '../../../layouts/OrganizationAdminLayout';
import { Search, Filter, Plus, Edit, Trash2, ChevronDown, Download, BookOpen, Calendar, Users, PlayCircle } from 'lucide-react';

export const OrganizationCoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // 模拟课程数据
  const courses = [
    {
      id: 1,
      title: '数字化转型实战指南',
      cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: '张辉',
      category: '技术创新',
      level: '中级',
      duration: '6小时30分钟',
      students: 245,
      price: '¥299.00',
      status: 'published'
    },
    {
      id: 2,
      title: 'AI技术在企业中的应用',
      cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: '李明',
      category: '人工智能',
      level: '高级',
      duration: '8小时15分钟',
      students: 189,
      price: '¥399.00',
      status: 'published'
    },
    {
      id: 3,
      title: '项目管理最佳实践',
      cover: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: '王芳',
      category: '项目管理',
      level: '中级',
      duration: '7小时45分钟',
      students: 156,
      price: '¥269.00',
      status: 'published'
    },
    {
      id: 4,
      title: '数据分析与可视化',
      cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: '张强',
      category: '数据科学',
      level: '初级',
      duration: '5小时20分钟',
      students: 210,
      price: '¥199.00',
      status: 'draft'
    },
    {
      id: 5,
      title: '市场营销策略与执行',
      cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: '陈静',
      category: '市场营销',
      level: '中级',
      duration: '6小时10分钟',
      students: 145,
      price: '¥259.00',
      status: 'published'
    },
    {
      id: 6,
      title: '人力资源管理与开发',
      cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6b2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: '赵伟',
      category: '人力资源',
      level: '初级',
      duration: '4小时50分钟',
      students: 178,
      price: '¥229.00',
      status: 'published'
    }
  ];
  
  // 过滤课程数据
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  return (
    <OrganizationAdminLayout>
      <div className="space-y-8">
        {/* 页面标题和操作按钮 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">课程管理</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download size={16} />
              <span>导出数据</span>
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
              <Plus size={16} />
              <span>新增课程</span>
            </button>
          </div>
        </div>
        
        {/* 搜索和筛选栏 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="搜索课程名称、讲师或分类..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <BookOpen size={16} className="text-gray-400" />
                  <span>{filterCategory === 'all' ? '全部分类' : filterCategory}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
              
              <div className="relative">
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Filter size={16} className="text-gray-400" />
                  <span>{filterStatus === 'all' ? '全部状态' : filterStatus === 'published' ? '已发布' : '草稿'}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 课程列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    课程信息
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    分类
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    讲师
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    时长
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    学员数量
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    价格
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-24">
                          <img 
                            className="h-16 w-24 rounded-md object-cover" 
                            src={course.cover} 
                            alt={course.title}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {course.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            等级: {course.level}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.category}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.instructor}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-900">
                        <Clock size={16} className="text-gray-400" />
                        {course.duration}
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-900">
                        <Users size={16} className="text-gray-400" />
                        {course.students}
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm font-semibold text-blue-600">{course.price}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span 
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${course.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {course.status === 'published' ? '已发布' : '草稿'}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button 
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                          title="编辑"
                        >
                          <Edit size={16} />
                          <span>编辑</span>
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-800 flex items-center gap-1"
                          title="删除"
                        >
                          <Trash2 size={16} />
                          <span>删除</span>
                        </button>
                        <button 
                          className="text-purple-600 hover:text-purple-800 flex items-center gap-1"
                          title="预览"
                        >
                          <PlayCircle size={16} />
                          <span>预览</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* 分页 */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                上一页
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                下一页
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  显示第 <span className="font-medium">1</span> 到 <span className="font-medium">6</span> 条，共 <span className="font-medium">6</span> 条结果
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">上一页</span>
                    <ChevronDown size={16} className="transform rotate-90" />
                  </button>
                  <button className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">下一页</span>
                    <ChevronDown size={16} className="transform -rotate-90" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrganizationAdminLayout>
  );
};

// 导入缺失的组件
import { Clock } from 'lucide-react';