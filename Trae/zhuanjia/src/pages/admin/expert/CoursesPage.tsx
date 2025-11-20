import React, { useState, useEffect } from 'react';
import { Plus, BookOpen } from 'lucide-react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { useAppStore } from '../../../stores/appStore';

interface Course {
  id: string;
  title: string;
  type: 'online' | 'offline';
  date: string;
  duration: string;
  price: number;
  status: 'draft' | 'published' | 'archived';
  students: number;
  rating: number;
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: '人工智能基础课程',
    type: 'online',
    date: '2023-12-10',
    duration: '8小时',
    price: 0,
    students: 258,
    rating: 4.8,
    status: 'published'
  },
  {
    id: '2',
    title: 'Python数据分析实战',
    type: 'online',
    date: '2023-12-15',
    duration: '12小时',
    price: 99,
    students: 124,
    rating: 4.9,
    status: 'published'
  },
  {
    id: '3',
    title: '机器学习进阶专题',
    type: 'online',
    date: '2023-12-20',
    duration: '16小时',
    price: 199,
    students: 89,
    rating: 4.7,
    status: 'published'
  },
  {
    id: '4',
    title: '深度学习实战项目',
    type: 'online',
    date: '2024-01-05',
    duration: '20小时',
    price: 299,
    students: 45,
    rating: 4.6,
    status: 'draft'
  },
  {
    id: '5',
    title: '数据结构与算法分析',
    type: 'offline',
    date: '2023-11-30',
    duration: '3天',
    price: 1599,
    students: 28,
    rating: 4.9,
    status: 'archived'
  }
];

export const CoursesPage: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'online' | 'offline'>('online');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState(0);
  
  // 使用全局状态管理课程数据
  const { courses, setCourses } = useAppStore();

  const publishCourse = () => {
    if (!title || !date || !duration) {
      alert('请填写所有必填字段');
      return;
    }
    
    const newCourse: Course = {
      id: Math.random().toString(36),
      title,
      type,
      date,
      duration,
      price,
      status: 'published',
      students: 0,
      rating: 0
    };
    
    setCourses([newCourse, ...courses]);
    setTitle('');
    setDate('');
    setDuration('');
    setPrice(0);
    setShowCreateModal(false);
    alert(`课程 "${title}" 已发布`);
  };

  const archiveCourse = (id: string) => {
    setCourses(courses.map(course => 
      course.id === id ? {...course, status: 'archived'} : course
    ));
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return '已发布';
      case 'draft': return '草稿';
      case 'archived': return '已归档';
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // 获取已发布的课程
  const publishedCourses = courses.filter(c => c.status === 'published');
  // 获取草稿课程
  const draftCourses = courses.filter(c => c.status === 'draft');
  // 获取已归档课程
  const archivedCourses = courses.filter(c => c.status === 'archived');

  useEffect(() => {
    // 初始化模拟数据到全局状态
    if (courses.length === 0) {
      setCourses([...mockCourses]);
    }
  }, []);

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">课程管理</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} />
            <span>创建课程</span>
          </button>
        </div>

        {/* 我的课程列表 - 优先显示 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">个人发布的课程</h3>
          {courses.filter(c => c.status !== 'archived').length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              暂无发布的课程
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">课程标题</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">开课日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时长</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学生数</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">评分</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.filter(c => c.status !== 'archived').map(course => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.type === 'online' ? '线上' : '线下'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.price > 0 ? `¥${course.price}` : '免费'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.students}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.rating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(course.status)}`}>
                          {getStatusText(course.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {course.status === 'published' && (
                          <button 
                            onClick={() => archiveCourse(course.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            归档
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 草稿课程 - 优先显示 */}
        {courses.filter(c => c.status === 'draft').length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">草稿课程</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">课程标题</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">开课日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时长</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.filter(c => c.status === 'draft').map(course => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.type === 'online' ? '线上' : '线下'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.price > 0 ? `¥${course.price}` : '免费'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 快速操作 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => window.location.hash = '/admin/expert/knowledge-base'}
              className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <BookOpen className="text-green-600 mb-2" size={24} />
              <span className="text-green-800 font-medium">知识库管理</span>
            </button>
          </div>
        </div>

        {/* 创建课程弹窗 */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">创建课程</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">课程标题 *</label>
                    <input 
                      value={title} 
                      onChange={e => setTitle(e.target.value)} 
                      placeholder="请输入课程标题" 
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">课程类型</label>
                    <select 
                      value={type} 
                      onChange={e => setType(e.target.value as any)} 
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="online">线上课程</option>
                      <option value="offline">线下课程</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">开课日期 *</label>
                    <input 
                      type="date" 
                      value={date} 
                      onChange={e => setDate(e.target.value)} 
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">课程时长 *</label>
                    <input 
                      value={duration} 
                      onChange={e => setDuration(e.target.value)} 
                      placeholder="例如：2小时 或 3天" 
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">课程价格</label>
                    <input 
                      type="number" 
                      value={price} 
                      onChange={e => setPrice(Number(e.target.value))} 
                      placeholder="请输入价格" 
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  取消
                </button>
                <button 
                  onClick={publishCourse}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  发布课程
                </button>
              </div>
            </div>
          </div>
        )}


        
        {/* 已归档课程 */}
        {courses.filter(c => c.status === 'archived').length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">已归档课程</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">课程标题</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">开课日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时长</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学生数</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">评分</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.filter(c => c.status === 'archived').map(course => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.type === 'online' ? '线上' : '线下'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.price > 0 ? `¥${course.price}` : '免费'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.students}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </ExpertAdminLayout>
  );
};