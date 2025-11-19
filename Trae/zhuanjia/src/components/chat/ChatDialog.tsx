import React, { useState, useRef, useEffect } from 'react';
import { X, Send, User, Bot } from 'lucide-react';
import { useAppStore } from '../../stores/appStore';
import { ChatMessage } from '../../types/expert';

export const ChatDialog: React.FC = () => {
  const { 
    isChatOpen, 
    currentChatExpert, 
    closeChat, 
    chatMessages, 
    addChatMessage 
  } = useAppStore();
  
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);
  
  const handleSendMessage = () => {
    if (!inputMessage.trim() || !currentChatExpert) return;
    
    // 添加用户消息
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      expertId: currentChatExpert.id,
      content: inputMessage.trim(),
      type: 'user',
      timestamp: new Date()
    };
    
    addChatMessage(userMessage);
    setInputMessage('');
    
    // 模拟专家回复
    setTimeout(() => {
      const expertReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        expertId: currentChatExpert.id,
        content: `感谢您的提问。作为${currentChatExpert.title}，我很乐意为您提供关于"${inputMessage.trim()}"的专业建议。让我为您详细分析一下...`,
        type: 'expert',
        timestamp: new Date()
      };
      
      addChatMessage(expertReply);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  if (!isChatOpen || !currentChatExpert) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <img
              src={currentChatExpert.avatar}
              alt={currentChatExpert.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{currentChatExpert.name}</h3>
              <p className="text-sm text-gray-500">{currentChatExpert.role}</p>
            </div>
          </div>
          <button
            onClick={closeChat}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>
        
        {/* 消息区域 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <Bot size={32} className="mx-auto mb-2 text-gray-300" />
              <p>您好！我是{currentChatExpert.name}，有什么可以帮助您的吗？</p>
            </div>
          )}
          
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.type === 'expert' && (
                    <Bot size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{message.content}</p>
                  {message.type === 'user' && (
                    <User size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                </div>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* 输入区域 */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="输入您的问题..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-1"
            >
              <Send size={16} />
              <span>发送</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};