import React, { useState } from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { Search, Filter, Download, ChevronDown, ChevronUp, Check, X, MoreVertical, Bell, Code, Play, PlusCircle, Star, BarChart, Users, Clock, PackageOpen, BookOpen } from 'lucide-react';

export const PlatformApplicationManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);
  
  // 应用数据
  const applications = [
    {
      id: 1,
      name: '智能问答助手',
      type: 'API服务',
      description: '基于大语言模型的智能问答服务，支持多轮对话和专业领域问答。',
      launchDate: '2023-01-15',
      callCount: 12540,
      expertCount: 15,
      rating: 4.8,
      status: '在线',
      category: '人工智能',
      tags: ['问答', 'NLP', '大语言模型'],
      performance: {
        availability: 99.9,
        avgResponseTime: 0.25,
        growthRate: 15.2
      },
      documentation: 'https://api.example.com/docs/qna',
      lastUpdate: '2023-06-10'
    },
    {
      id: 2,
      name: '数据分析平台',
      type: 'Web应用',
      description: '提供数据可视化、统计分析和报表生成功能的综合数据分析平台。',
      launchDate: '2023-02-01',
      callCount: 8920,
      expertCount: 12,
      rating: 4.7,
      status: '在线',
      category: '数据科学',
      tags: ['数据分析', '可视化', '统计'],
      performance: {
        availability: 99.8,
        avgResponseTime: 0.35,
        growthRate: 10.5
      },
      documentation: 'https://platform.example.com/data-analysis',
      lastUpdate: '2023-06-05'
    },
    {
      id: 3,
      name: '图像识别API',
      type: 'API服务',
      description: '提供图像分类、物体检测、人脸识别等多种计算机视觉能力的API服务。',
      launchDate: '2023-02-15',
      callCount: 15670,
      expertCount: 18,
      rating: 4.9,
      status: '在线',
      category: '计算机视觉',
      tags: ['图像识别', '计算机视觉', 'AI'],
      performance: {
        availability: 99.95,
        avgResponseTime: 0.42,
        growthRate: 18.7
      },
      documentation: 'https://api.example.com/docs/vision',
      lastUpdate: '2023-06-12'
    },
    {
      id: 4,
      name: '智能推荐引擎',
      type: 'API服务',
      description: '基于机器学习的内容推荐系统，支持个性化推荐和协同过滤。',
      launchDate: '2023-03-05',
      callCount: 7890,
      expertCount: 10,
      rating: 4.6,
      status: '在线',
      category: '推荐系统',
      tags: ['推荐', '机器学习', '个性化'],
      performance: {
        availability: 99.85,
        avgResponseTime: 0.28,
        growthRate: 12.3
      },
      documentation: 'https://api.example.com/docs/recommendation',
      lastUpdate: '2023-05-28'
    },
    {
      id: 5,
      name: '知识图谱构建工具',
      type: 'Web应用',
      description: '用于构建、管理和查询知识图谱的可视化工具，支持多种数据源导入。',
      launchDate: '2023-03-20',
      callCount: 4520,
      expertCount: 8,
      rating: 4.5,
      status: '在线',
      category: '知识图谱',
      tags: ['知识图谱', '语义网络', '可视化'],
      performance: {
        availability: 99.7,
        avgResponseTime: 0.55,
        growthRate: 8.9
      },
      documentation: 'https://platform.example.com/knowledge-graph',
      lastUpdate: '2023-05-20'
    }
  ];
  
  // 待审核轻应用数据
  const pendingLightApps = [
    {
      id: 101,
      name: '金融风险评估工具',
      type: '轻应用',
      expert: '张金融专家',
      institution: '清华大学金融研究院',
      submitDate: '2023-06-15',
      category: '金融科技',
      description: '基于机器学习模型的金融风险评估工具，用于信贷风险分析和投资决策支持。',
      features: ['风险评分', '异常检测', '趋势预测'],
      callCount: 0
    },
    {
      id: 102,
      name: '环境数据分析仪表板',
      type: '轻应用',
      expert: '李环境专家',
      institution: '中国环境科学研究院',
      submitDate: '2023-06-14',
      category: '环境保护',
      description: '用于环境数据实时监测、分析和可视化的仪表板应用。',
      features: ['实时监测', '数据分析', '可视化报表'],
      callCount: 0
    },
    {
      id: 103,
      name: '医疗影像辅助诊断系统',
      type: '轻应用',
      expert: '王医学专家',
      institution: '北京协和医院',
      submitDate: '2023-06-13',
      category: '医疗健康',
      description: '辅助医生进行医学影像分析和诊断的AI辅助系统。',
      features: ['影像分析', '异常识别', '诊断建议'],
      callCount: 0
    },
    {
      id: 104,
      name: '教育个性化学习助手',
      type: '轻应用',
      expert: '陈教育专家',
      institution: '北京师范大学',
      submitDate: '2023-06-12',
      category: '在线教育',
      description: '基于学习者行为分析的个性化学习路径推荐和辅导助手。',
      features: ['学习分析', '路径推荐', '进度跟踪'],
      callCount: 0
    }
  ];
  
  // 处理搜索
  const filteredApplications = applications.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // 处理排序
  const sortedApplications = [...filteredApplications].sort((a, b) => {
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
  
  // 处理轻应用审批操作
  const handleLightAppApproval = (id: number, approved: boolean) => {
    // 实际应用中这里会调用API进行审批操作
    console.log(`${approved ? '批准' : '拒绝'} 轻应用ID: ${id} 的审核`);
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
  
  // 打开发布新应用对话框
  const handlePublishNewApp = () => {
    // 实际应用中这里会打开发布新应用的对话框
    console.log('打开发布新应用对话框');
  };
  
  return (
    <PlatformAdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">应用管理</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="搜索应用名称或描述"
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
            <button 
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              onClick={handlePublishNewApp}
            >
              <PlusCircle size={18} />
              <span>发布新应用</span>
            </button>
          </div>
        </div>
        
        {/* 应用列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">应用名称</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">应用类型</th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('category')}
                  >
                    <div className="flex items-center gap-1">
                      分类
                      {getSortIcon('category')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('callCount')}
                  >
                    <div className="flex items-center gap-1">
                      调用次数
                      {getSortIcon('callCount')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                    onClick={() => requestSort('expertCount')}
                  >
                    <div className="flex items-center gap-1">
                      关联专家数
                      {getSortIcon('expertCount')}
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
                {sortedApplications.map((app) => (
                  <>
                    <tr 
                      key={app.id} 
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => toggleRow(app.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <Code className="h-6 w-6 text-indigo-600" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{app.name}</div>
                            <div className="text-sm text-gray-500">发布于 {app.launchDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${app.type === 'API服务' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {app.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{app.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{app.callCount.toLocaleString()}</div>
                        <div className="text-xs text-green-600">+{app.performance.growthRate}% 月增长</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{app.expertCount}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">{app.rating}</span>
                          <div className="ml-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={14} 
                                className={i < Math.floor(app.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4" onClick={(e) => {
                          e.stopPropagation();
                          // 查看详情
                          toggleRow(app.id);
                        }}>
                          详情
                        </button>
                        <button className="text-green-600 hover:text-green-900 mr-4" onClick={(e) => {
                          e.stopPropagation();
                          // 启动应用
                          console.log('启动应用:', app.name);
                        }}>
                          <Play size={16} />
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
                    {expandedRow === app.id && (
                      <tr className="bg-gray-50">
                        <td colSpan={8} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 mb-3">应用详情</h3>
                              <p className="text-sm text-gray-700 mb-4">{app.description}</p>
                              <div className="space-y-2">
                                <div className="flex flex-wrap gap-2">
                                  {app.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">最后更新:</span>
                                  <span className="text-sm text-gray-900">{app.lastUpdate}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">文档地址:</span>
                                  <a href={app.documentation} className="text-sm text-blue-600 hover:underline">查看文档</a>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 mb-3">性能指标</h3>
                              <div className="space-y-4">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">可用性</span>
                                    <span className="text-gray-900 font-medium">{app.performance.availability}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${app.performance.availability}%` }}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">平均响应时间</span>
                                    <span className="text-gray-900 font-medium">{app.performance.avgResponseTime}秒</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(1 - app.performance.avgResponseTime/1) * 100}%` }}></div>
                                  </div>
                                </div>
                              </div>
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
                  显示 <span className="font-medium">1</span> 到 <span className="font-medium">5</span> 条，共 <span className="font-medium">18</span> 条结果
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
                    4
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
        
        {/* 待审核轻应用 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">待审核轻应用</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <Clock className="h-3 w-3 mr-1" /> {pendingLightApps.length} 项待审核
            </span>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">应用名称</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交专家</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属机构</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pendingLightApps.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <PackageOpen className="h-5 w-5 text-teal-600 mr-3" />
                          <div className="font-medium text-gray-900">{app.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{app.expert}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{app.institution}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{app.submitDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{app.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button 
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors flex items-center"
                            onClick={() => handleLightAppApproval(app.id, true)}
                          >
                            <Check className="h-4 w-4 mr-1" /> 批准
                          </button>
                          <button 
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors flex items-center"
                            onClick={() => handleLightAppApproval(app.id, false)}
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