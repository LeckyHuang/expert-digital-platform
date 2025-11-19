import React, { useEffect, useMemo, useState } from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { useAppStore } from '../../../stores/appStore';
import { mockExperts } from '../../../utils/mockData';
import { Expert } from '../../../types/expert';
import { Users } from 'lucide-react';

export const ExpertsPage: React.FC = () => {
  const { experts, setExperts } = useAppStore();
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<Expert | null>(null);
  const [form, setForm] = useState<Partial<Expert>>({
    name: '',
    role: '特邀专家',
    title: '',
    organization: '',
    tags: [],
    avatar: '',
    introduction: '',
    qualifications: [],
  });

  useEffect(() => {
    if (experts.length === 0) setExperts(mockExperts);
  }, [experts.length, setExperts]);

  const filtered = useMemo(() => {
    if (!search) return experts;
    return experts.filter(e =>
      e.name.includes(search) ||
      e.organization.includes(search) ||
      e.tags.some(t => t.includes(search))
    );
  }, [experts, search]);

  const resetForm = () => {
    setForm({ name: '', role: '特邀专家', title: '', organization: '', tags: [], avatar: '', introduction: '', qualifications: [] });
    setEditing(null);
  };

  const submit = () => {
    const base: Expert = {
      id: editing?.id || String(Date.now()),
      name: form.name || '',
      avatar: form.avatar || '',
      role: (form.role as string) || '特邀专家',
      title: form.title || '',
      organization: form.organization || '',
      tags: (form.tags as string[]) || [],
      introduction: form.introduction || '',
      qualifications: (form.qualifications as string[]) || [],
      stats: editing?.stats || { services: 0, students: 0, calls: 0, resources: 0 },
      applications: editing?.applications || [],
      knowledgeResources: editing?.knowledgeResources || []
    };
    if (editing) {
      setExperts(experts.map(e => (e.id === editing.id ? base : e)));
    } else {
      setExperts([base, ...experts]);
    }
    resetForm();
  };

  const remove = (id: string) => {
    setExperts(experts.filter(e => e.id !== id));
  };

  const startEdit = (e: Expert) => {
    setEditing(e);
    setForm({ ...e });
  };

  return (
    <PlatformAdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">专家管理</h2>
          <div className="flex items-center space-x-2">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="搜索专家姓名/机构/标签"
              className="border border-gray-300 rounded px-3 py-2 w-64"
            />
            <button onClick={resetForm} className="px-4 py-2 bg-blue-600 text-white rounded-lg">添加专家</button>
          </div>
        </div>

        {(editing || form.name !== '') && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input value={form.name as string} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="姓名" className="border border-gray-300 rounded px-3 py-2" />
              <input value={form.title as string} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="头衔" className="border border-gray-300 rounded px-3 py-2" />
              <input value={form.organization as string} onChange={e => setForm({ ...form, organization: e.target.value })} placeholder="机构" className="border border-gray-300 rounded px-3 py-2" />
              <input value={(form.tags as string[])?.join(',') || ''} onChange={e => setForm({ ...form, tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} placeholder="标签，逗号分隔" className="border border-gray-300 rounded px-3 py-2" />
              <input value={form.avatar as string} onChange={e => setForm({ ...form, avatar: e.target.value })} placeholder="头像URL" className="border border-gray-300 rounded px-3 py-2 col-span-1 md:col-span-2" />
              <textarea value={form.introduction as string} onChange={e => setForm({ ...form, introduction: e.target.value })} placeholder="简介" className="border border-gray-300 rounded px-3 py-2 col-span-1 md:col-span-2" />
            </div>
            <div className="mt-4 flex space-x-2">
              <button onClick={submit} className="px-4 py-2 bg-green-600 text-white rounded">{editing ? '保存' : '创建'}</button>
              <button onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded">取消</button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b flex items-center space-x-2">
            <Users size={18} className="text-gray-600" />
            <span className="font-medium">专家列表</span>
            <span className="text-sm text-gray-500">{filtered.length}</span>
          </div>
          <div className="divide-y">
            {filtered.map(e => (
              <div key={e.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={e.avatar} alt={e.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-900">{e.name} · {e.title}</div>
                    <div className="text-sm text-gray-500">{e.organization} · {e.tags.join(' / ')}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => startEdit(e)} className="px-3 py-1 text-sm bg-blue-600 text-white rounded">编辑</button>
                  <button onClick={() => remove(e.id)} className="px-3 py-1 text-sm border border-gray-300 rounded">删除</button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="p-6 text-center text-gray-500">暂无专家数据</div>
            )}
          </div>
        </div>
      </div>
    </PlatformAdminLayout>
  );
};

export default ExpertsPage;