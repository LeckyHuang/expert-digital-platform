import React, { useState } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';

interface CourseItem {
  id: string;
  title: string;
  type: '线上' | '线下';
  schedule: string;
  price: number;
}

export const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [form, setForm] = useState<CourseItem>({ id: '', title: '', type: '线上', schedule: '', price: 0 });

  const publish = () => {
    const item: CourseItem = { ...form, id: String(Date.now()) };
    setCourses([item, ...courses]);
    setForm({ id: '', title: '', type: '线上', schedule: '', price: 0 });
  };

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">课程管理</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">发布课程</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="课程标题" className="border border-gray-300 rounded px-3 py-2" />
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value as '线上' | '线下' })} className="border border-gray-300 rounded px-3 py-2">
              <option value="线上">线上</option>
              <option value="线下">线下</option>
            </select>
            <input value={form.schedule} onChange={e => setForm({ ...form, schedule: e.target.value })} placeholder="时间安排" className="border border-gray-300 rounded px-3 py-2" />
            <input type="number" value={form.price} onChange={e => setForm({ ...form, price: Number(e.target.value) })} placeholder="价格" className="border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mt-4">
            <button onClick={publish} className="px-4 py-2 bg-blue-600 text-white rounded">发布课程</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b font-medium">我的课程</div>
          <div className="divide-y">
            {courses.map(c => (
              <div key={c.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{c.title}</div>
                  <div className="text-sm text-gray-500">{c.type} · {c.schedule} · ¥{c.price}</div>
                </div>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded">管理</button>
              </div>
            ))}
            {courses.length === 0 && <div className="p-6 text-center text-gray-500">暂无课程</div>}
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};

export default CoursesPage;