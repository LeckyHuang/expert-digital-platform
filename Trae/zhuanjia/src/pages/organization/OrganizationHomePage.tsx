import React, { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '../../stores/appStore';
import { mockExperts, mockOrganization } from '../../utils/mockData';
import { ExpertCard } from '../../components/expert/ExpertCard';
import { ExpertSearch } from '../../components/expert/ExpertSearch';

const carouselItems = [
  {
    img: 'https://images.unsplash.com/photo-1529336953121-4f3c499e4c0b?q=80&w=1600&auto=format&fit=crop',
    title: '数字化转型峰会',
    desc: '年度产业数字化高峰论坛，汇聚行业专家与企业代表'
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    title: 'AI应用实战营',
    desc: '面向研发与运营的AI应用训练营，助力企业落地'
  },
  {
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    title: '数据治理研讨会',
    desc: '聚焦数据治理方法论与最佳实践分享'
  }
];

const sampleNews = [
  { id: 'n1', title: '机构发布企业数字化评估体系V2.0' },
  { id: 'n2', title: '开放报名：智能分析工具实践工作坊' },
  { id: 'n3', title: '新书发布：《AI项目管理最佳实践》' }
];

const sampleCourses = [
  { id: 'c1', title: '数字化转型路线与方法', type: '线上', price: 199, brief: '系统梳理数字化转型的方法与路径' },
  { id: 'c2', title: 'AI赋能产品研发', type: '线下', price: 1299, brief: '面向研发团队的AI工具与流程训练' },
  { id: 'c3', title: '数据治理与分析', type: '线上', price: 299, brief: '打造高质量数据资产的操作指南' }
];

export const OrganizationHomePage: React.FC = () => {
  const { currentPlatform, setCurrentPlatform, experts, setExperts, filteredExperts } = useAppStore();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!currentPlatform || currentPlatform.type !== 'organization') setCurrentPlatform(mockOrganization);
    if (experts.length === 0) setExperts(mockExperts);
  }, [currentPlatform, experts.length, setCurrentPlatform, setExperts]);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % carouselItems.length), 3000);
    return () => clearInterval(t);
  }, []);

  const bannerUrl = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop';
  const displayedExperts = useMemo(() => filteredExperts, [filteredExperts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">平台首页</a>
            <h1 className="text-xl font-semibold text-gray-900">{mockOrganization.name}</h1>
          </div>
          <div></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="rounded-lg overflow-hidden">
          <img src={bannerUrl} alt="banner" className="w-full h-64 object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">机构简介</h2>
              <p className="text-gray-700 leading-relaxed">
                我们致力于推动企业数字化转型，聚焦战略规划、流程优化、数据治理与AI应用的系统落地，
                汇聚跨界专家资源，提供课程培训、咨询辅导与工具方法，帮助组织打造敏捷、高效、智能的业务能力。
              </p>
              <div className="mt-6">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  {carouselItems.map((item, i) => (
                    <div key={item.title} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-3">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                  <div className="absolute inset-0 flex items-center justify-between px-3">
                    <button onClick={() => setIdx((idx - 1 + carouselItems.length) % carouselItems.length)} className="bg-white/70 px-2 py-1 rounded">‹</button>
                    <button onClick={() => setIdx((idx + 1) % carouselItems.length)} className="bg-white/70 px-2 py-1 rounded">›</button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {sampleNews.map(n => (
                    <a key={n.id} href="#" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                      <span className="text-sm text-gray-900">{n.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">联系方式</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>{mockOrganization.contactInfo.phone}</div>
                <div>{mockOrganization.contactInfo.email}</div>
                <div>{mockOrganization.contactInfo.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">课程专区</h2>
          <p className="text-gray-600 mb-4">展示专家发布的课程，涵盖线上与线下形式</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleCourses.map(c => (
              <div key={c.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="font-semibold text-gray-900 mb-1">{c.title}</div>
                <div className="text-sm text-gray-600 mb-2">{c.type} · ¥{c.price}</div>
                <div className="text-sm text-gray-700 mb-4">{c.brief}</div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">了解详情</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">专家库</h2>
          <p className="text-gray-600">汇聚行业专家，为您提供专业的课程与咨询</p>
          <ExpertSearch allTags={Array.from(new Set(mockExperts.flatMap(e => e.tags)))} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {displayedExperts.map(expert => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
          {displayedExperts.length === 0 && (
            <div className="text-center py-12 text-gray-500">暂无专家</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationHomePage;