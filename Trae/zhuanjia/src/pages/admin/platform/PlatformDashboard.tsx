import React, { useState } from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { Users, TrendingUp, BookOpen, Star, BarChart3, Package, CheckCircle, Clock, Calendar } from 'lucide-react';

export const PlatformDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experts' | 'organizations'>('experts');
  
  // 数据统计
  const stats = [
    {
      title: '总专家数',
      value: '156',
      icon: Users,
      color: 'bg-blue-500',
      trend: '+12%'
    },
    {
      title: '接入机构',
      value: '42',
      icon: BarChart3,
      color: 'bg-indigo-500',
      trend: '+5%'
    },
    {
      title: '应用数量',
      value: '89',
      icon: Package,
      color: 'bg-green-500',
      trend: '+18%'
    },
    {
      title: '日活跃用户',
      value: '2,341',
      icon: TrendingUp,
      color: 'bg-purple-500',
      trend: '+8%'
    }
  ];
  
  // 最新应用数据
  const recentApps = [
    {
      name: 'AI智能问答助手',
      developer: '科技先锋团队',
      callCount: '1,245',
      rating: '4.8',
      date: '2023-06-15'
    },
    {
      name: '数据分析可视化工具',
      developer: '数据科学实验室',
      callCount: '876',
      rating: '4.6',
      date: '2023-06-10'
    },
    {
      name: '项目管理助手',
      developer: '效率提升专家',
      callCount: '623',
      rating: '4.5',
      date: '2023-06-08'
    }
  ];
  
  // 新加入专家数据
  const newExperts = [
    {
      name: '张教授',
      field: '人工智能',
      institution: '清华大学',
      joinDate: '2023-06-14',
      completedApps: 12
    },
    {
      name: '李博士',
      field: '数据科学',
      institution: '北京大学',
      joinDate: '2023-06-12',
      completedApps: 8
    },
    {
      name: '王研究员',
      field: '云计算',
      institution: '中科院',
      joinDate: '2023-06-10',
      completedApps: 5
    }
  ];
  
  // 新加入机构数据
  const newOrganizations = [
    {
      name: '科技创新有限公司',
      industry: '技术服务',
      expertCount: 15,
      joinDate: '2023-06-15',
      status: '已认证'
    },
    {
      name: '未来教育发展中心',
      industry: '教育培训',
      expertCount: 8,
      joinDate: '2023-06-13',
      status: '已认证'
    },
    {
      name: '数字经济研究院',
      industry: '研究机构',
      expertCount: 12,
      joinDate: '2023-06-11',
      status: '已认证'
    }
  ];
  
  // 待审核内容数据
  const pendingReviews = [
    {
      id: 1,
      title: '数字化转型最佳实践',
      type: '文章',
      submitter: '张教授',
      date: '2023-06-15',
      category: '专家内容'
    },
    {
      id: 2,
      title: 'AI项目管理课程',
      type: '课程',
      submitter: '李专家',
      date: '2023-06-14',
      category: '专家内容'
    },
    {
      id: 3,
      title: '企业创新平台',
      type: '应用',
      submitter: '科技创新有限公司',
      date: '2023-06-14',
      category: '机构应用'
    }
  ];
  
  return (
    <PlatformAdminLayout>
      <div className="space-y-6">
        {/* 数据统计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
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
        
        {/* 最新应用 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">最新应用</h3>
            <button className="text-blue-600 text-sm font-medium hover:underline">查看全部</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">应用名称</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">开发者</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">调用量</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">评分</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发布日期</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentApps.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{app.name}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{app.developer}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{app.callCount}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{app.rating} <Star className="inline text-yellow-400" size={14} /></div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{app.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 新加入专家/机构切换选项卡 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="border-b border-gray-200 mb-4">
            <nav className="flex -mb-px space-x-8">
              <button
                onClick={() => setActiveTab('experts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'experts' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                新加入专家
              </button>
              <button
                onClick={() => setActiveTab('organizations')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'organizations' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                新加入机构
              </button>
            </nav>
          </div>
          
          {activeTab === 'experts' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专家姓名</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专业领域</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属机构</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">加入日期</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">完成应用数</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newExperts.map((expert, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{expert.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{expert.field}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{expert.institution}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{expert.joinDate}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{expert.completedApps}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'organizations' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">机构名称</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">行业领域</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专家数量</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">加入日期</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newOrganizations.map((org, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{org.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{org.industry}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{org.expertCount}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{org.joinDate}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {org.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        {/* 待审核内容 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">待审核内容</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <Clock className="h-3 w-3 mr-1" /> {pendingReviews.length} 项待审核
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交者</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交日期</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类别</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingReviews.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{item.title}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{item.type}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{item.submitter}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{item.date}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" /> 通过
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                          拒绝
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
    </PlatformAdminLayout>
  );
};
