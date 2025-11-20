import React, { useState } from 'react';
import { OrganizationAdminLayout } from '../../../layouts/OrganizationAdminLayout';
import { Search, Filter, Plus, Edit, Trash2, ChevronDown, Download, UserPlus, Award, Briefcase } from 'lucide-react';

export const OrganizationExpertsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // 模拟专家数据
  const experts = [
    { 
      id: 1, 
      name: '张辉', 
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      title: '人工智能研究员', 
      department: '技术创新部', 
      courses: 12, 
      students: 1542, 
      status: 'active'
    },
    { 
      id: 2, 
      name: '李明', 
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      title: '高级数据分析师', 
      department: '数据分析部', 
      courses: 8, 
      students: 987, 
      status: 'active'
    },
    { 
      id: 3, 
      name: '王芳', 
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      title: '项目管理专家', 
      department: '项目管理部', 
      courses: 15, 
      students: 2134, 
      status: 'active'
    },
    { 
      id: 4, 
      name: '张强', 
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      title: '产品经理', 
      department: '产品设计部', 
      courses: 6, 
      students: 754, 
      status: 'inactive'
    },
    { 
      id: 5, 
      name: '陈静', 
      avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
      title: '市场营销专家', 
      department: '市场部', 
      courses: 9, 
      students: 1245, 
      status: 'active'
    },
    { 
      id: 6, 
      name: '赵伟', 
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
      title: '人力资源总监', 
      department: '人力资源部', 
      courses: 11, 
      students: 1876, 
      status: 'active'
    }
  ];
  
  // 过滤专家数据
  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          expert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          expert.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || expert.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  
  return (
    <OrganizationAdminLayout>
      <div className="space-y-8">
        {/* 页面标题和操作按钮 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">专家管理</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download size={16} />
              <span>导出数据</span>
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
              <Plus size={16} />
              <span>新增专家</span>
            </button>
          </div>
        </div>
        
        {/* 搜索和筛选栏 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="搜索专家姓名、职位或部门..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Filter size={16} className="text-gray-400" />
                  <span>{filterStatus === 'all' ? '全部状态' : filterStatus === 'active' ? '在职' : '离职'}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
              
              <button 
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <UserPlus size={16} className="text-gray-400" />
                <span>邀请专家</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* 专家列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    专家信息
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    部门
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    课程数量
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    学员数量
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
                {filteredExperts.map((expert) => (
                  <tr key={expert.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img 
                            className="h-10 w-10 rounded-full object-cover" 
                            src={expert.avatar} 
                            alt={expert.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {expert.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {expert.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-900">{expert.department}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{expert.courses}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{expert.students}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span 
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${expert.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                      >
                        {expert.status === 'active' ? '在职' : '离职'}
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
                          className="text-green-600 hover:text-green-800 flex items-center gap-1"
                          title="查看详情"
                        >
                          <Award size={16} />
                          <span>详情</span>
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