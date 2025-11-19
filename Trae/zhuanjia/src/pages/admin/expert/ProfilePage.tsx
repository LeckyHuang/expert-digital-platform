import React, { useEffect, useState } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { useAppStore } from '../../../stores/appStore';
import { mockExperts } from '../../../utils/mockData';

export const ProfilePage: React.FC = () => {
  const { experts, setExperts } = useAppStore();
  const currentId = '1';
  const expert = experts.find(e => e.id === currentId) || mockExperts[0];
  const [name, setName] = useState(expert.name);
  const [title, setTitle] = useState(expert.title);
  const [organization, setOrganization] = useState(expert.organization);
  const [tags, setTags] = useState<string[]>(expert.tags);
  const [certs, setCerts] = useState<File[]>([]);

  useEffect(() => {
    if (experts.length === 0) setExperts(mockExperts);
  }, [experts.length, setExperts]);

  const save = () => {
    const updated = experts.map(e =>
      e.id === expert.id ? { ...e, name, title, organization, tags } : e
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
        <h2 className="text-xl font-semibold text-gray-900">个人资料</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="姓名" className="border border-gray-300 rounded px-3 py-2" />
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="头衔" className="border border-gray-300 rounded px-3 py-2" />
            <input value={organization} onChange={e => setOrganization(e.target.value)} placeholder="机构" className="border border-gray-300 rounded px-3 py-2" />
            <input value={tags.join(',')} onChange={e => setTags(e.target.value.split(',').map(s => s.trim()).filter(Boolean))} placeholder="标签，逗号分隔" className="border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mt-4">
            <button onClick={save} className="px-4 py-2 bg-blue-600 text-white rounded">保存资料</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">上传证书</h3>
          <input type="file" multiple onChange={e => onFiles(e.target.files)} className="block" />
          <div className="mt-3 text-sm text-gray-600">{certs.length > 0 ? `已选择 ${certs.length} 个文件` : '未选择文件'}</div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded">提交审核</button>
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};

export default ProfilePage;