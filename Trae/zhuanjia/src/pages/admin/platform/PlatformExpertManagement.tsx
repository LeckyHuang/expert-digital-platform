import React, { useState } from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { Search, Filter, Download, ChevronDown, ChevronUp, Check, X, MoreVertical, Bell, User, Book, Users, BarChart3, Award } from 'lucide-react';

export const PlatformExpertManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);
  
  // 专家数据
  const experts = [
    {
      id: 1,
      name: '张教授',
      field: '人工智能',
      institution: '清华大学',
      joinDate: '2023-01-15',
      calls: 124,
      applications: 8,
      rating: 4.9,
      status: '活跃',
      contact: {
        email: 'zhang@tsinghua.edu.cn',
        phone: '138****1234',
        location: '北京市海淀区'
      },
      certifications: ['AI领域专家认证', '数据科学家认证'],
      description: '清华大学计算机科学与技术系教授，人工智能领域专家，拥有15年研究经验。'
    },
    {
      id: 2,
      name: '李博士',
      field: '数据科学',
      institution: '北京大学',
      joinDate: '2023-02-20',
      calls: 89,
      applications: 12,
      rating: 4.8,
      status: '活跃',
      contact: {
        email: 'li@pku.edu.cn',
        phone: '139****5678',
        location: '北京市海淀区'
      },
      certifications: ['数据科学专家认证', '机器学习工程师认证'],
      description: '北京大学数据科学实验室研究员，专注于大数据分析和机器学习算法优化。'
    },
    {
      id: 3,
      name: '王研究员',
      field: '云计算',
      institution: '中国科学院',
      joinDate: '2023-03-10',
      calls: 76,
      applications: 5,
      rating: 4.7,
      status: '活跃',
      contact: {
        email: 'wang@cas.cn',
        phone: '137****9012',
        location: '北京市朝阳区'
      },
      certifications: ['云架构师认证', 'DevOps专家认证'],
      description: '中国科学院计算技术研究所研究员，云计算和分布式系统专家。'
    },
    {
      id: 4,
      name: '刘教授',
      field: '区块链',
      institution: '上海交通大学',
      joinDate: '2023-04-05',
      calls: 65,
      applications: 7,
      rating: 4.6,
      status: '活跃',
      contact: {
        email: 'liu@sjtu.edu.cn',
        phone: '136****3456',
        location: '上海市闵行区'
      },
      certifications: ['区块链技术专家认证', '金融科技顾问认证'],
      description: '上海交通大学区块链研究中心主任，区块链技术和应用专家。'
    },
    {
      id: 5,
      name: '陈博士',
      field: '物联网',
      institution: '浙江大学',
      joinDate: '2023-05-18',
      calls: 45,
      applications: 9,
      rating: 4.5,
      status: '活跃',
      contact: {
        email: 'chen@zju.edu.cn',
        phone: '135****7890',
        location: '浙江省杭州市'
      },
      certifications: ['物联网架构师认证', '嵌入式系统专家认证'],
      description: '浙江大学物联网研究所副研究员，物联网技术和智能系统专家。'
    }
  ];
  
  // 待审批专家数据
  const pendingExperts = [
    {
      id: 101,
      name: '赵工程师',
      field: '网络安全',
      institution: '北京航空航天大学',
      applyDate: '2023-06-14',
      experience: '10年',
      education: '博士',
      skills: ['网络安全', '渗透测试', '安全架构'],
      description: '北京航空航天大学网络空间安全学院工程师，专注于网络安全和防护技术研究。'
    },
    {
      id: 102,
      name: '孙教授',
      field: '量子计算',
      institution: '中国科学技术大学',
      applyDate: '2023-06-13',
      experience: '12年',
      education: '博士后',
      skills: ['量子计算', '量子算法', '量子信息'],
      description: '中国科学技术大学量子信息重点实验室教授，量子计算领域专家。'
    },
    {
      id: 103,
      name: '周博士',
      field: '增强现实',
      institution: '深圳大学',
      applyDate: '2023-06-12',
      experience: '8年',
      education: '博士',
      skills: ['增强现实', '计算机视觉', '人机交互'],
      description: '深圳大学计算机与软件学院副教授，增强现实技术和应用专家。'
    }
  ];
  
  // 处理搜索
  const filteredExperts = experts.filter(expert => 
    expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expert.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expert.institution.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // 处理排序
  const sortedExperts = [...filteredExperts].sort((a, b) => {
    if (!sortConfig) return 0;
    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  // 切换行展开/收起状态
  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  
  // 处理审批操作
  const handleApproval = (id: number, approved: boolean) => {
    // 实际应用中这里会调用API进行审批操作
    console.log(`${approved ? '批准' : '拒绝'} 专家ID: ${id} 的申请`);
    // 可以添加状态更新逻辑
  };
  
  // 获取排序图标
  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ChevronDown size={16} className="text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ChevronDown size={16} className="text-blue-600" /> : 
      <ChevronUp size={16} className="text-blue-600" />;
  };
  
  return (
    <PlatformAdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">专家管理</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="搜索专家姓名、领域或机构"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter size={18} />
              <span>筛选</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={18} />
              <span>导出</span>
            </button>
          </div>
        </div>
        
        {/* 专家列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专家姓名</th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('field')}
                  >
                    <div className="flex items-center gap-1">
                      专业领域
                      {getSortIcon('field')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('institution')}
                  >
                    <div className="flex items-center gap-1">
                      所属机构
                      {getSortIcon('institution')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('calls')}
                  >
                    <div className="flex items-center gap-1">
                      调用次数
                      {getSortIcon('calls')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('applications')}
                  >
                    <div className="flex items-center gap-1">
                      应用数
                      {getSortIcon('applications')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('rating')}
                  >
                    <div className="flex items-center gap-1">
                      评分
                      {getSortIcon('rating')}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedExperts.map((expert) => (
                  <>
                    <tr 
                      key={expert.id} 
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => toggleRow(expert.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{expert.name}</div>
                            <div className="text-sm text-gray-500">加入于 {expert.joinDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.field}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.institution}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{expert.calls}</div>
                        <div className="text-xs text-green-600">+12% 较上月</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{expert.applications}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">{expert.rating}</span>
                          <div className="ml-2">
                            {[...Array(5)].map((_, i) => (
                              <Award 
                                key={i} 
                                size={14} 
                                className={i < Math.floor(expert.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {expert.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4" onClick={(e) => {
                          e.stopPropagation();
                          // 查看详情
                          toggleRow(expert.id);
                        }}>
                          详情
                        </button>
                        <button className="text-gray-600 hover:text-gray-900" onClick={(e) => {
                          e.stopPropagation();
                          // 更多操作
                        }}>
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                    
                    {/* 展开详情 */}
                    {expandedRow === expert.id && (
                      <tr className="bg-gray-50">
                        <td colSpan={8} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 mb-3">专家详情</h3>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">联系邮箱:</span>
                                  <span className="text-sm text-gray-900">{expert.contact.email}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">联系电话:</span>
                                  <span className="text-sm text-gray-900">{expert.contact.phone}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">所在地区:</span>
                                  <span className="text-sm text-gray-900">{expert.contact.location}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 mb-3">专业资质</h3>
                              <div className="space-y-2">
                                {expert.certifications.map((cert, index) => (
                                  <div key={index} className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-2" />
                                    <span className="text-sm text-gray-900">{cert}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <h3 className="text-sm font-medium text-gray-900 mb-2">专家简介</h3>
                              <p className="text-sm text-gray-700">{expert.description}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* 分页 */}
          <div className="px-6 py-4 bg-white border-t border-gray-200 sm:px-6 flex items-center justify-between">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  显示 <span className="font-medium">1</span> 到 <span className="font-medium">5</span> 条，共 <span className="font-medium">12</span> 条结果
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">上一页</span>
                    <ChevronUp className="h-5 w-5 rotate-90" aria-hidden="true" />
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                    1
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    10
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">下一页</span>
                    <ChevronDown className="h-5 w-5 -rotate-90" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* 待审批专家 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">待审批专家</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <Bell className="h-3 w-3 mr-1" /> {pendingExperts.length} 项待审批
            </span>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专家姓名</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专业领域</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">申请机构</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">申请日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">工作经验</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学历</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pendingExperts.map((expert) => (
                    <tr key={expert.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{expert.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.field}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.institution}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.applyDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.experience}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{expert.education}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button 
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors flex items-center"
                            onClick={() => handleApproval(expert.id, true)}
                          >
                            <Check className="h-4 w-4 mr-1" /> 批准
                          </button>
                          <button 
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors flex items-center"
                            onClick={() => handleApproval(expert.id, false)}
                          >
                            <X className="h-4 w-4 mr-1" /> 拒绝
                          </button>
                          <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                            详情
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PlatformAdminLayout>
  );
};