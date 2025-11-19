import React, { useState } from 'react';
import { PlatformAdminLayout } from '../../../layouts/PlatformAdminLayout';
import { ExpertApplication } from '../../../types/expert';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

type AuditStatus = 'pending' | 'approved' | 'rejected';

export const AppsPage: React.FC = () => {
  const [platformApps, setPlatformApps] = useState<ExpertApplication[]>([]);
  const [expertApps, setExpertApps] = useState<(ExpertApplication & { status: AuditStatus })[]>([
    { id: 'ea-1', title: '数据清洗助手', description: '专家提交的轻应用', type: 'paid', pricing: { perCall: 0.2, currency: 'CNY' }, stats: { completions: 0, calls: 0 }, status: 'pending' },
    { id: 'ea-2', title: '项目日报生成器', description: '专家提交的轻应用', type: 'free', stats: { completions: 0, calls: 0 }, status: 'pending' }
  ]);
  const [form, setForm] = useState<{ title: string; description: string; perCall: number; type: 'free' | 'paid' }>({ title: '', description: '', perCall: 0, type: 'free' });

  const createApp = () => {
    const app: ExpertApplication = {
      id: String(Date.now()),
      title: form.title,
      description: form.description,
      type: form.type,
      pricing: form.type === 'paid' ? { perCall: form.perCall, currency: 'CNY' } : undefined,
      stats: { completions: 0, calls: 0 }
    };
    setPlatformApps([app, ...platformApps]);
    setForm({ title: '', description: '', perCall: 0, type: 'free' });
  };

  const setAudit = (id: string, status: AuditStatus) => {
    setExpertApps(expertApps.map(a => (a.id === id ? { ...a, status } : a)));
  };

  return (
    <PlatformAdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">应用管理</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">发布平台轻应用</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="应用名称" className="border border-gray-300 rounded px-3 py-2" />
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value as 'free' | 'paid' })} className="border border-gray-300 rounded px-3 py-2">
              <option value="free">免费</option>
              <option value="paid">付费</option>
            </select>
            <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="应用描述" className="border border-gray-300 rounded px-3 py-2 col-span-1 md:col-span-2" />
            {form.type === 'paid' && (
              <input type="number" value={form.perCall} onChange={e => setForm({ ...form, perCall: Number(e.target.value) })} placeholder="按调用次数定价，单位/次" className="border border-gray-300 rounded px-3 py-2" />
            )}
          </div>
          <div className="mt-4">
            <button onClick={createApp} className="px-4 py-2 bg-blue-600 text-white rounded">发布应用</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b font-medium">平台轻应用列表</div>
          <div className="divide-y">
            {platformApps.map(app => (
              <div key={app.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{app.title}</div>
                  <div className="text-sm text-gray-500">{app.type === 'paid' ? `按次计费 ¥${app.pricing?.perCall}/次` : '免费'} · {app.description}</div>
                </div>
                <div className="text-sm text-gray-500">{app.stats.calls} 次调用</div>
              </div>
            ))}
            {platformApps.length === 0 && <div className="p-6 text-center text-gray-500">暂无平台轻应用</div>}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b font-medium">专家轻应用审核</div>
          <div className="divide-y">
            {expertApps.map(app => (
              <div key={app.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {app.status === 'pending' && <Clock className="text-yellow-600" size={18} />}
                  {app.status === 'approved' && <CheckCircle className="text-green-600" size={18} />}
                  {app.status === 'rejected' && <XCircle className="text-red-600" size={18} />}
                  <div>
                    <div className="font-medium text-gray-900">{app.title}</div>
                    <div className="text-sm text-gray-500">{app.type === 'paid' ? `按次计费 ¥${app.pricing?.perCall}/次` : '免费'} · {app.description}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setAudit(app.id, 'approved')} className="px-3 py-1 text-sm bg-green-600 text-white rounded">通过</button>
                  <button onClick={() => setAudit(app.id, 'rejected')} className="px-3 py-1 text-sm border border-gray-300 rounded">拒绝</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlatformAdminLayout>
  );
};

export default AppsPage;