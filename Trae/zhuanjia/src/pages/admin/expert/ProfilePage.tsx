import React, { useEffect, useState } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { useAppStore } from '../../../stores/appStore';
import { mockExperts } from '../../../utils/mockData';
import { User, MessageCircle, BookOpen } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { experts, setExperts } = useAppStore();
  const currentId = '1';
  const expert = experts.find(e => e.id === currentId) || mockExperts[0];
  const [name, setName] = useState(expert.name);
  const [title, setTitle] = useState(expert.title);
  const [organization, setOrganization] = useState(expert.organization);
  const [avatar, setAvatar] = useState('');
  const [description, setDescription] = useState(expert.introduction || '');
  const [tags, setTags] = useState<string[]>(expert.tags);
  const [certs, setCerts] = useState<File[]>([]);

  useEffect(() => {
    if (experts.length === 0) setExperts(mockExperts);
  }, [experts.length, setExperts]);

  const save = () => {
    const updated = experts.map(e =>
      e.id === expert.id ? { ...e, name, title, organization, tags, bio: description } : e
    );
    setExperts(updated);
  };

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    setCerts(Array.from(files));
  };

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">个人设置</h2>
        
        {/* 快速操作 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => document.getElementById('profile-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <User className="text-blue-600 mb-2" size={24} />
              <span className="text-blue-800 font-medium">编辑资料</span>
            </button>
            <button 
                onClick={() => {
                  const event = new CustomEvent('openExpertChat');
                  window.dispatchEvent(event);
                }}
                className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
              <MessageCircle className="text-purple-600 mb-2" size={24} />
              <span className="text-purple-800 font-medium">在线咨询</span>
            </button>
            <button 
              onClick={() => window.location.hash = '/admin/expert/knowledge-base'}
              className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <BookOpen className="text-green-600 mb-2" size={24} />
              <span className="text-green-800 font-medium">知识库管理</span>
            </button>
          </div>
        </div>
        
        {/* 个人信息编辑 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">个人信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">头像</label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  {avatar ? (
                    <img src={avatar} alt="头像" className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <User className="text-gray-500" size={24} />
                  )}
                </div>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded">上传头像</button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
              <input 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="姓名" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">头衔</label>
              <input 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="头衔" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">机构</label>
              <input 
                value={organization} 
                onChange={e => setOrganization(e.target.value)} 
                placeholder="机构" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">个人描述</label>
              <textarea 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                placeholder="个人描述" 
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2" 
              />
            </div>
          </div>
          
          <div className="mt-4">
            <button onClick={save} className="px-4 py-2 bg-blue-600 text-white rounded">保存信息</button>
          </div>
        </div>

        {/* 标签维护 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">专长标签</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {tag}
                <button 
                  onClick={() => setTags(tags.filter((_, i) => i !== index))}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex">
            <input 
              placeholder="添加新标签" 
              className="flex-1 border border-gray-300 rounded-l px-3 py-2" 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const value = e.currentTarget.value.trim();
                  if (value && !tags.includes(value)) {
                    setTags([...tags, value]);
                    e.currentTarget.value = '';
                  }
                }
              }}
            />
            <button 
              className="px-4 py-2 bg-gray-100 text-gray-700 border border-l-0 border-gray-300 rounded-r"
              onClick={(e) => {
                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                const value = input.value.trim();
                if (value && !tags.includes(value)) {
                  setTags([...tags, value]);
                  input.value = '';
                }
              }}
            >
              添加
            </button>
          </div>
        </div>

        {/* 证书上传 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">证书上传</h3>
          <input type="file" multiple onChange={e => onFiles(e.target.files)} className="block mb-3" />
          <div className="mt-3 text-sm text-gray-600">{certs.length > 0 ? `已选择 ${certs.length} 个文件` : '未选择文件'}</div>
          
          {/* 已上传证书列表 */}
          {certs.length > 0 && (
            <div className="mt-4">
              <h4 className="text-md font-medium text-gray-800 mb-2">已选择的证书：</h4>
              <ul className="space-y-2">
                {certs.map((file, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{file.name}</span>
                    <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded">提交审核</button>
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};

export default ProfilePage;