import React, { useState } from 'react';
import { OrganizationAdminLayout } from '../../../layouts/OrganizationAdminLayout';
import { Search, Filter, Plus, Edit, Trash2, ChevronDown, Download, ImageIcon, Calendar, Eye, ArrowUp, ArrowDown, Globe, Clock } from 'lucide-react';

export const OrganizationNewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // 模拟动态图文数据
  const newsItems = [
    {
      id: 1,
      title: '机构荣获年度教育创新奖',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      summary: '我机构在2023年度教育创新评选中脱颖而出，荣获"最佳教育创新机构"奖项。',
      publishDate: '2023-11-19',
      displayOrder: 1,
      isCarousel: true,
      status: 'published'
    },
    {
      id: 2,
      title: '第十届专家论坛即将举办',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      summary: '第十届专家论坛将于12月15日在上海国际会议中心举行，诚邀各界专家学者参加。',
      publishDate: '2023-11-17',
      displayOrder: 2,
      isCarousel: true,
      status: 'published'
    },
    {
      id: 3,
      title: '新课程体系发布会通知',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      summary: '我机构将于12月1日举办新课程体系发布会，推出10门全新专业课程。',
      publishDate: '2023-11-16',
      displayOrder: 3,
      isCarousel: false,
      status: 'published'
    },
    {
      id: 4,
      title: '学员学习成果展示活动',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      summary: '为展示学员学习成果，我机构将于11月25日举办学员作品展示活动。',
      publishDate: '2023-11-14',
      displayOrder: 4,
      isCarousel: false,
      status: 'draft'
    },
    {
      id: 5,
      title: '教师团队扩招计划',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      summary: '为满足机构发展需求，现启动教师团队扩招计划，欢迎优秀人才加入。',
      publishDate: '2023-11-12',
      displayOrder: 5,
      isCarousel: false,
      status: 'published'
    }
  ];
  
  // 过滤动态数据
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  
  return (
    <OrganizationAdminLayout>
      <div className="space-y-8">
        {/* 页面标题和操作按钮 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">动态管理</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download size={16} />
              <span>导出数据</span>
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
              <Plus size={16} />
              <span>新增动态</span>
            </button>
          </div>
        </div>
        
        {/* 搜索和筛选栏 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="搜索标题或内容摘要..."
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
                  <span>{filterStatus === 'all' ? '全部状态' : filterStatus === 'published' ? '已发布' : '草稿'}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
              
              <div className="relative">
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <ImageIcon size={16} className="text-gray-400" />
                  <span>轮播图管理</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 动态列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    图片预览
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    标题
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    摘要
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    发布时间
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    轮播图
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    排序
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
                {filteredNews.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="h-16 w-24 rounded-md overflow-hidden">
                        <img 
                          className="h-full w-full object-cover" 
                          src={item.image} 
                          alt={item.title}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-700 line-clamp-2 max-w-xs">{item.summary}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-700">
                        <Calendar size={16} className="text-gray-400" />
                        {item.publishDate}
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span 
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isCarousel ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {item.isCarousel ? '是' : '否'}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="p-1 rounded hover:bg-gray-100" disabled={item.displayOrder === 1}>
                          <ArrowUp size={16} className={item.displayOrder === 1 ? 'text-gray-300' : 'text-gray-600'} />
                        </button>
                        <span className="text-sm text-gray-700">{item.displayOrder}</span>
                        <button className="p-1 rounded hover:bg-gray-100" disabled={item.displayOrder === newsItems.length}>
                          <ArrowDown size={16} className={item.displayOrder === newsItems.length ? 'text-gray-300' : 'text-gray-600'} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span 
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {item.status === 'published' ? '已发布' : '草稿'}
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
                          disabled={item.status === 'draft'}
                        >
                          <Eye size={16} className={item.status === 'draft' ? 'text-gray-300' : ''} />
                          <span className={item.status === 'draft' ? 'text-gray-300' : ''}>预览</span>
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
                  显示第 <span className="font-medium">1</span> 到 <span className="font-medium">5</span> 条，共 <span className="font-medium">5</span> 条结果
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
        
        {/* 轮播图设置说明 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <Globe size={20} />
            <span>轮播图设置说明</span>
          </h3>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>轮播图建议尺寸：1920x600px，图片大小不超过2MB</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>最多可设置5张轮播图，超过后将按排序显示前5张</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>轮播图标题建议不超过20个字符，以保证显示效果</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>轮播图内容将在机构首页顶部展示，支持点击跳转</span>
            </li>
          </ul>
        </div>
      </div>
    </OrganizationAdminLayout>
  );
};