import React from 'react';
import { MessageCircle, Users, BookOpen, TrendingUp, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Expert } from '../../types/expert';
import { useAppStore } from '../../stores/appStore';
import { formatToWan } from '../../lib/utils';

interface ExpertCardProps {
  expert: Expert;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  const { openChat } = useAppStore();
  const navigate = useNavigate();
  
  const handleChatClick = () => {
    openChat(expert);
  };
  
  const handleViewDetails = () => {
    navigate(`/expert/${expert.id}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        {/* 头像 */}
        <button className="flex-shrink-0" onClick={handleViewDetails} aria-label="查看详情">
          <img
            src={expert.avatar}
            alt={expert.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
          />
        </button>
        
        {/* 基本信息 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <button onClick={handleViewDetails} className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  {expert.name}
                  {expert.role === '首席专家' && (
                    <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full flex items-center">
                      <Crown size={12} className="mr-1" />
                      王牌专家
                    </span>
                  )}
                </h3>
              </button>
              <p className="text-sm text-gray-600">{expert.role} · {expert.title}</p>
              <p className="text-xs text-gray-500">{expert.organization}</p>
            </div>
            
            {/* 聊天按钮 */}
            <button
              onClick={handleChatClick}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              title="和TA聊聊"
            >
              <MessageCircle size={20} />
            </button>
          </div>
          
          {/* 标签 */}
          <div className="mt-3 flex flex-wrap gap-1">
            {expert.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
            {expert.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-50 text-gray-500 rounded-full">
                +{expert.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* 简介 */}
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">
            {expert.introduction}
          </p>
          
          {/* 统计数据 */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center text-blue-600">
                <Users size={16} className="mr-1" />
                <span className="text-lg font-semibold">{expert.stats.services}+</span>
              </div>
              <span className="text-xs text-gray-500">服务企业</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center text-blue-600">
                <BookOpen size={16} className="mr-1" />
                <span className="text-lg font-semibold">{formatToWan(expert.stats.students)}</span>
              </div>
              <span className="text-xs text-gray-500">学员数</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center text-blue-600">
                <TrendingUp size={16} className="mr-1" />
                <span className="text-lg font-semibold">{expert.stats.calls}+</span>
              </div>
              <span className="text-xs text-gray-500">被调用</span>
            </div>
          </div>
          
          {/* 应用标签 */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs border border-blue-200 text-blue-600 rounded">
                智能体应用
              </span>
              <span className="px-2 py-1 text-xs border border-green-200 text-green-600 rounded">
                知识库资源
              </span>
            </div>
            
            <button 
              onClick={handleViewDetails}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              查看详情 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
