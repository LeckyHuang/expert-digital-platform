import React, { useState } from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { Search, Filter, Download, ChevronDown, ChevronUp, Check, X, MoreVertical, Bell, Building, Users, BookOpen, Briefcase, PieChart, Flag } from 'lucide-react';

export const PlatformOrganizationManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);
  
  // 机构数据
  const organizations = [
    {
      id: 1,
      name: '清华大学人工智能研究院',
      domain: '教育科研',
      joinDate: '2023-01-10',
      expertsCount: 24,
      activeExperts: 20,
      contentCount: 156,
      rating: 4.8,
      status: '活跃',
      contact: {
        email: 'ai-research@tsinghua.edu.cn',
        phone: '010-627****',
        address: '北京市海淀区清华大学',
        website: 'https://ai.tsinghua.edu.cn'
      },
      description: '清华大学人工智能研究院致力于人工智能前沿技术研究和应用推广，是国内领先的AI研究机构。',
      performance: {
        monthlyGrowth: 8.5,
        userEngagement: 76,
        applicationRate: 62
      }
    },
    {
      id: 2,
      name: '阿里云智能',
      domain: '科技企业',
      joinDate: '2023-01-20',
      expertsCount: 45,
      activeExperts: 38,
      contentCount: 320,
      rating: 4.9,
      status: '活跃',
      contact: {
        email: 'expert@alicloud.com',
        phone: '400-800-****',
        address: '浙江省杭州市余杭区文一西路969号',
        website: 'https://www.alicloud.com'
      },
      description: '阿里云智能是阿里巴巴集团旗下的云计算和人工智能业务板块，拥有强大的技术研发团队和丰富的行业经验。',
      performance: {
        monthlyGrowth: 12.3,
        userEngagement: 85,
        applicationRate: 78
      }
    },
    {
      id: 3,
      name: '中国科学院计算技术研究所',
      domain: '科研机构',
      joinDate: '2023-02-05',
      expertsCount: 36,
      activeExperts: 30,
      contentCount: 218,
      rating: 4.7,
      status: '活跃',
      contact: {
        email: 'ict@cas.cn',
        phone: '010-6256****',
        address: '北京市海淀区中关村科学院南路6号',
        website: 'https://www.ict.ac.cn'
      },
      description: '中国科学院计算技术研究所是国内最早从事计算机科学研究的学术机构之一，在计算机体系结构、算法等领域取得了丰硕成果。',
      performance: {
        monthlyGrowth: 6.7,
        userEngagement: 72,
        applicationRate: 58
      }
    },
    {
      id: 4,
      name: '腾讯云',
      domain: '科技企业',
      joinDate: '2023-02-15',
      expertsCount: 41,
      activeExperts: 35,
      contentCount: 289,
      rating: 4.8,
      status: '活跃',
      contact: {
        email: 'cloud@tencent.com',
        phone: '400-910-****',
        address: '广东省深圳市南山区腾讯滨海大厦',
        website: 'https://cloud.tencent.com'
      },
      description: '腾讯云是腾讯公司旗下的云计算品牌，提供安全、稳定、高效的云计算服务和解决方案，拥有众多技术专家。',
      performance: {
        monthlyGrowth: 10.2,
        userEngagement: 81,
        applicationRate: 73
      }
    },
    {
      id: 5,
      name: '北京大学数据科学研究中心',
      domain: '教育科研',
      joinDate: '2023-03-01',
      expertsCount: 29,
      activeExperts: 23,
      contentCount: 185,
      rating: 4.6,
      status: '活跃',
      contact: {
        email: 'dsrc@pku.edu.cn',
        phone: '010-6275****',
        address: '北京市海淀区北京大学',
        website: 'https://ds.pku.edu.cn'
      },
      description: '北京大学数据科学研究中心专注于数据科学理论与应用研究，在大数据分析、机器学习等领域拥有深厚的学术积累。',
      performance: {
        monthlyGrowth: 7.3,
        userEngagement: 69,
        applicationRate: 55
      }
    }
  ];
  
  // 待审核内容数据
  const pendingContents = [
    {
      id: 101,
      title: '大型语言模型在企业决策中的应用',
      type: '技术报告',
      organization: '清华大学人工智能研究院',
      expert: '张教授',
      submitDate: '2023-06-15',
      category: '人工智能',
      status: '待审核',
      views: 0
    },
    {
      id: 102,
      title: '云计算安全最佳实践白皮书',
      type: '白皮书',
      organization: '阿里云智能',
      expert: '李工程师',
      submitDate: '2023-06-14',
      category: '云计算',
      status: '待审核',
      views: 0
    },
    {
      id: 103,
      title: '量子计算发展趋势分析',
      type: '研究论文',
      organization: '中国科学院计算技术研究所',
      expert: '王研究员',
      submitDate: '2023-06-14',
      category: '量子计算',
      status: '待审核',
      views: 0
    },
    {
      id: 104,
      title: '物联网技术应用案例集',
      type: '案例集',
      organization: '腾讯云',
      expert: '陈技术专家',
      submitDate: '2023-06-13',
      category: '物联网',
      status: '待审核',
      views: 0
    },
    {
      id: 105,
      title: '金融大数据分析方法与实践',
      type: '在线课程',
      organization: '北京大学数据科学研究中心',
      expert: '刘教授',
      submitDate: '2023-06-12',
      category: '数据科学',
      status: '待审核',
      views: 0
    }
  ];
  
  // 处理搜索
  const filteredOrganizations = organizations.filter(organization => 
    organization.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    organization.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // 处理排序
  const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
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
  
  // 处理内容审批操作
  const handleContentApproval = (id: number, approved: boolean) => {
    // 实际应用中这里会调用API进行审批操作
    console.log(`${approved ? '批准' : '拒绝'} 内容ID: ${id} 的审核`);
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
          <h1 className="text-2xl font-bold text-gray-900">机构管理</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="搜索机构名称或行业领域"
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
        
        {/* 机构列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">机构名称</th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('domain')}
                  >
                    <div className="flex items-center gap-1">
                      行业领域
                      {getSortIcon('domain')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('expertsCount')}
                  >
                    <div className="flex items-center gap-1">
                      专家数量
                      {getSortIcon('expertsCount')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('contentCount')}
                  >
                    <div className="flex items-center gap-1">
                      内容数量
                      {getSortIcon('contentCount')}
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
                {sortedOrganizations.map((org) => (
                  <>
                    <tr 
                      key={org.id} 
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => toggleRow(org.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Building className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{org.name}</div>
                            <div className="text-sm text-gray-500">加入于 {org.joinDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{org.domain}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{org.expertsCount}</div>
                        <div className="text-xs text-gray-500">活跃: {org.activeExperts}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{org.contentCount}</div>
                        <div className="text-xs text-green-600">+{org.performance.monthlyGrowth}% 月增长率</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">{org.rating}</span>
                          <div className="ml-2">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={i < Math.floor(org.rating) ? 'h-4 w-4 text-yellow-400' : 'h-4 w-4 text-gray-300'} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {org.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4" onClick={(e) => {
                          e.stopPropagation();
                          // 查看详情
                          toggleRow(org.id);
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
                    {expandedRow === org.id && (
                      <tr className="bg-gray-50">
                        <td colSpan={7} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 mb-3">机构信息</h3>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">联系邮箱:</span>
                                  <span className="text-sm text-gray-900">{org.contact.email}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">联系电话:</span>
                                  <span className="text-sm text-gray-900">{org.contact.phone}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">机构地址:</span>
                                  <span className="text-sm text-gray-900">{org.contact.address}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">官方网站:</span>
                                  <a href={org.contact.website} className="text-sm text-blue-600 hover:underline">{org.contact.website}</a>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 mb-3">运营数据</h3>
                              <div className="space-y-4">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">用户参与度</span>
                                    <span className="text-gray-900 font-medium">{org.performance.userEngagement}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${org.performance.userEngagement}%` }}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">应用转化率</span>
                                    <span className="text-gray-900 font-medium">{org.performance.applicationRate}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${org.performance.applicationRate}%` }}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <h3 className="text-sm font-medium text-gray-900 mb-2">机构简介</h3>
                              <p className="text-sm text-gray-700">{org.description}</p>
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
                  显示 <span className="font-medium">1</span> 到 <span className="font-medium">5</span> 条，共 <span className="font-medium">23</span> 条结果
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
                    5
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
        
        {/* 待审核内容 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">待审核内容</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <Flag className="h-3 w-3 mr-1" /> {pendingContents.length} 项待审核
            </span>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">内容标题</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">内容类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交机构</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交专家</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pendingContents.map((content) => (
                    <tr key={content.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-purple-600 mr-3" />
                          <div className="font-medium text-gray-900">{content.title}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{content.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{content.organization}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{content.expert}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{content.submitDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{content.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button 
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors flex items-center"
                            onClick={() => handleContentApproval(content.id, true)}
                          >
                            <Check className="h-4 w-4 mr-1" /> 批准
                          </button>
                          <button 
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors flex items-center"
                            onClick={() => handleContentApproval(content.id, false)}
                          >
                            <X className="h-4 w-4 mr-1" /> 拒绝
                          </button>
                          <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                            预览
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