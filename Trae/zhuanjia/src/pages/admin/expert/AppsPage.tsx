import React, { useState } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { ExpertApplication } from '../../../types/expert';

const platformTemplates: ExpertApplication[] = [
  { id: 'tpl-1', title: '报告生成助手', description: '输入要点生成结构化报告', type: 'free', stats: { completions: 0, calls: 0 } },
  { id: 'tpl-2', title: '流程梳理助手', description: '基于模板梳理流程与角色', type: 'free', stats: { completions: 0, calls: 0 } },
  { id: 'tpl-3', title: '数据分析助手', description: '上传数据自动分析生成图表', type: 'paid', pricing: { perCall: 0.2, currency: 'CNY' }, stats: { completions: 0, calls: 0 } }
];

export const ExpertAppsPage: React.FC = () => {
  const [myApps, setMyApps] = useState<ExpertApplication[]>([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [base, setBase] = useState<string>(platformTemplates[0].id);

  const createFromTemplate = () => {
    const tpl = platformTemplates.find(t => t.id === base)!;
    const app: ExpertApplication = {
      id: String(Date.now()),
      title: name || `${tpl.title}（副本）`,
      description: desc || tpl.description,
      type: tpl.type,
      pricing: tpl.pricing,
      stats: { completions: 0, calls: 0 }
    };
    setMyApps([app, ...myApps]);
    setName('');
    setDesc('');
  };

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">应用管理</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">基于平台轻应用创建</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select value={base} onChange={e => setBase(e.target.value)} className="border border-gray-300 rounded px-3 py-2">
              {platformTemplates.map(t => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="个人轻应用名称" className="border border-gray-300 rounded px-3 py-2" />
            <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="描述" className="border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mt-4">
            <button onClick={createFromTemplate} className="px-4 py-2 bg-blue-600 text-white rounded">创建个人轻应用</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b font-medium">我的轻应用</div>
          <div className="divide-y">
            {myApps.map(app => (
              <div key={app.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{app.title}</div>
                  <div className="text-sm text-gray-500">{app.type === 'paid' ? `按次计费 ¥${app.pricing?.perCall}/次` : '免费'} · {app.description}</div>
                </div>
                <div className="text-sm text-gray-500">{app.stats.calls} 次调用</div>
              </div>
            ))}
            {myApps.length === 0 && <div className="p-6 text-center text-gray-500">暂无个人轻应用</div>}
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};

export default ExpertAppsPage;