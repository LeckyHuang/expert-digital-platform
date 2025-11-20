import React, { useState } from 'react';
import { BookOpen, Calendar, Users, Tag } from 'lucide-react';
import { mockExperts } from '../../utils/mockData';

interface Course {
  id: string;
  title: string;
  type: '线上' | '线下';
  schedule: string;
  price: number;
  description: string;
  learners: number;
  isOnline: boolean;
  instructor?: string;
  instructorId?: string;
  curriculum?: string[];
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 根据instructorId查找专家信息
  const instructorInfo = course.instructorId ? mockExperts.find(expert => expert.id === course.instructorId) : null;

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
        onClick={handleOpenModal}
      >
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              course.type === '线上' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {course.type}
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              {course.schedule}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              {course.learners}人已报名
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">¥{course.price}</div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              查看详情
            </button>
          </div>
        </div>
      </div>

      {/* 课程详情弹窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.type === '线上' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {course.type}
                </span>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {course.learners}人已报名
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center text-gray-700 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">时间安排:</span>
                  <span className="ml-2">{course.schedule}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">课程介绍</h3>
                <p className="text-gray-700 leading-relaxed">{course.description}</p>
              </div>
              
              {course.instructor && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">主讲导师</h3>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    {instructorInfo ? (
                      <img 
                        src={instructorInfo.avatar} 
                        alt={instructorInfo.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 mr-3"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 mr-3 flex items-center justify-center bg-blue-500 text-white font-bold">
                        {course.instructor.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{course.instructor}</div>
                      <div className="text-sm text-gray-600">
                        {instructorInfo ? instructorInfo.organization : '数字化转型研究院专家'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {course.curriculum && course.curriculum.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">课程大纲</h3>
                  <ul className="space-y-2">
                    {course.curriculum.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="text-3xl font-bold text-blue-600">¥{course.price}</div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  立即报名
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};