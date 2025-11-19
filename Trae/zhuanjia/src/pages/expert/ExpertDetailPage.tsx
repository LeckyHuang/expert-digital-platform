import React from 'react';
import { Star, MessageCircle, BookOpen, Award, TrendingUp, Users, AlertCircle } from 'lucide-react';
import { Expert } from '../../types/expert';
import { useAppStore } from '../../stores/appStore';
import { formatToWan } from '../../lib/utils';

interface ExpertDetailPageProps {
  expert: Expert;
  isFallback?: boolean;
}

export const ExpertDetailPage: React.FC<ExpertDetailPageProps> = ({ expert, isFallback }) => {
  const { openChat } = useAppStore();
  
  const handleChatClick = () => {
    openChat(expert);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <a href="/" className="px-3 py-1 bg-white/20 rounded-md hover:bg-white/30 transition-colors text-sm">返回首页</a>
            <div></div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">外部专家数字人平台</h1>
            <p className="text-blue-100">数字化赋能，专家服务触手可及</p>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧专家信息 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* 头像和基本信息 */}
              <div className="text-center mb-6">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <h2 className="text-xl font-bold text-gray-900">{expert.name}</h2>
                <p className="text-gray-600">{expert.role} · {expert.title}</p>
                <p className="text-sm text-gray-500">{expert.organization}</p>
              </div>
              
              {/* 统计数据 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{expert.stats.services}+</div>
                  <div className="text-xs text-gray-500">服务企业</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{formatToWan(expert.stats.students)}</div>
                  <div className="text-xs text-gray-500">学员数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{expert.stats.calls}+</div>
                  <div className="text-xs text-gray-500">被调用</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{expert.stats.resources}</div>
                  <div className="text-xs text-gray-500">知识资源</div>
                </div>
              </div>
              
              {/* 操作按钮 */}
              <div className="space-y-3">
                <button
                  onClick={handleChatClick}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={16} />
                  <span>和TA聊聊</span>
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                  <Star size={16} />
                  <span>收藏TA</span>
                </button>
              </div>
              
              {/* 标签 */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">专业领域</h4>
                <div className="flex flex-wrap gap-1">
                  {expert.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧详细信息 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 无效ID提示 */}
            {isFallback && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-3 flex items-center">
                <AlertCircle size={18} className="mr-2" />
                未找到对应专家，已为您展示默认专家信息。
              </div>
            )}
            
            {/* 专家详情 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-5 bg-blue-600 mr-3"></div>
                专家数字人详情
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  {expert.introduction} 我拥有丰富的{expert.tags.join('、')}经验，致力于为企业提供专业咨询服务。
                </p>
                <p className="mb-4">
                  作为{expert.title}，我能够通过AI数字人技术为您提供7×24小时的专业咨询服务，
                  包括实时问答、方案推荐、文档起草等多种形式的智能支持。
                </p>
                <p>
                  我的服务涵盖培训、项目咨询、应用场景分析等多个维度，
                  期待能够帮助您提升效率、改善质量，实现业务目标。
                </p>
              </div>
            </div>
            
            {/* AI技能应用 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                AI技能个人核心应用
              </h3>
              <p className="text-center text-gray-600 mb-6">
                直击业务场景，快速赋能生产、研发、运营、销售、职能等
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {expert.applications.map((app) => (
                  <div key={app.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-blue-600 mb-2">{app.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{app.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-gray-500">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {app.type === 'free' ? '免费' : '付费'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-blue-600">{app.stats.completions}</div>
                        <div className="text-xs text-gray-500">任务完成</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{app.stats.calls}</div>
                        <div className="text-xs text-gray-500">AI调用</div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                        免费使用
                      </button>
                      <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-3 rounded text-sm hover:bg-blue-50 transition-colors">
                        快速体验
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 知识资源库 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                专家知识资源库
              </h3>
              
              <div className="space-y-4">
                {expert.knowledgeResources.map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-500">
                          {resource.type === 'course' ? '课程' : resource.type === 'article' ? '文章' : '工具'}
                          {' · '}{resource.learners}+ 人学
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        {resource.isCollected ? '已收藏' : '收藏'}
                      </button>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                        查看
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 核心优势 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                核心优势
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">实战经验丰富</h4>
                  <p className="text-sm text-gray-600">
                    累计服务企业50+，参与重大项目120+，覆盖多行业领域
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">跨界解决方案</h4>
                  <p className="text-sm text-gray-600">
                    80%+项目实现综合解决；平均节约成本35%
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">工具资源沉淀</h4>
                  <p className="text-sm text-gray-600">
                    模板与工具库200+套，覆盖50+工作场景
                  </p>
                </div>
              </div>
            </div>
            
            {/* 学员好评 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                学员好评
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Users className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">宫正鹏</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    "老师非常专业，针对企业实际情况，帮助我们明确目标与路径，优化实施方案，课程内容落地性强，工具好用，效果显著。"
                  </p>
                  <div className="text-xs text-gray-500">
                    效率提升25% · 满意度98%
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Users className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">王建强</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    "课程干货满满，工具库非常好用，项目推进更顺畅。老师耐心指导，帮助我们解决关键问题，团队满意度高。"
                  </p>
                  <div className="text-xs text-gray-500">
                    好评率97% · 推荐度96%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
