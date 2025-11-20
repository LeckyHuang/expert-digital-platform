import React, { useState, useEffect } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';
import { BookOpen, FileText, Download, Zap, Upload } from 'lucide-react';
import { useAppStore } from '../../../stores/appStore';

interface FileItem {
  id: string;
  name: string;
  size: string;
  type: string;
  format: string;
  createdAt: string;
  corpusId: string;
  status: 'processing' | 'done';
}

interface CorpusItem {
  id: string;
  title: string;
  relatedApp: string;
  fileCount: number;
  createdAt: string;
}

// 模拟数据
const mockCorpus: CorpusItem[] = [
  { id: '1', title: '人工智能基础', relatedApp: '智能问答助手', fileCount: 5, createdAt: '2023-05-10' },
  { id: '2', title: '行业研究报告', relatedApp: '数据分析工具', fileCount: 3, createdAt: '2023-05-15' },
  { id: '3', title: '技术文档合集', relatedApp: '文档摘要生成器', fileCount: 8, createdAt: '2023-05-20' },
];

const mockFiles: FileItem[] = [
  { id: 'f1', name: 'AI基础理论.pdf', size: '2.4 MB', type: 'application/pdf', format: 'pdf', createdAt: '2023-05-10', corpusId: '1', status: 'done' },
  { id: 'f2', name: '机器学习算法详解.docx', size: '1.8 MB', type: 'application/docx', format: 'docx', createdAt: '2023-05-10', corpusId: '1', status: 'done' },
  { id: 'f3', name: '2023年行业趋势报告.pdf', size: '3.2 MB', type: 'application/pdf', format: 'pdf', createdAt: '2023-05-15', corpusId: '2', status: 'done' },
  { id: 'f4', name: '技术白皮书.docx', size: '1.5 MB', type: 'application/docx', format: 'docx', createdAt: '2023-05-20', corpusId: '3', status: 'done' },
];

export const KnowledgeBasePage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  // 使用全局状态管理知识库数据
  const { files, setFiles, corpus, setCorpus } = useAppStore();
  
  // 初始化模拟数据
  useEffect(() => {
    if (files.length === 0) {
      setFiles(mockFiles);
    }
    if (corpus.length === 0) {
      setCorpus(mockCorpus);
    }
  }, []);

  // 创建一个隐藏的文件输入引用
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []).map(f => ({
      id: Math.random().toString(36),
      name: f.name,
      size: `${(f.size / 1024).toFixed(1)} KB`,
      type: f.type || 'unknown',
      format: f.name.split('.').pop() || 'unknown',
      createdAt: new Date().toISOString().split('T')[0],
      corpusId: '',
      status: 'processing' as const
    }));
    
    setFiles([...files, ...newFiles]);
    
    // 重置文件输入，以便可以重新选择相同的文件
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // 模拟处理过程
    setTimeout(() => {
      setFiles(files.map(f =>
        newFiles.some(nf => nf.id === f.id) ? {...f, status: 'done'} : f
      ));
      setIsProcessing(false);
    }, 2000);
  };

  const generateCorpus = () => {
    setIsProcessing(true);
    // 模拟生成过程
    setTimeout(() => {
      // 添加新的语料项
      const newCorpusItem: CorpusItem = {
        id: Math.random().toString(36),
        title: `新生成的语料-${new Date().toLocaleDateString()}`,
        relatedApp: '智能助手',
        fileCount: Math.floor(Math.random() * 5) + 1,
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      setCorpus([newCorpusItem, ...corpus]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">知识库管理</h2>
          <>
            <button
              onClick={handleFileUpload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Upload size={16} />
              <span>上传文件</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              multiple
            />
          </>
        </div>
        
        {/* 文件清单 - 优先显示 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">文件清单</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件名称</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">格式</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上传时间</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属知识库</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {files.map(file => {
                  const corpusItem = corpus.find(c => c.id === file.corpusId);
                  return (
                    <tr key={file.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{file.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {file.format}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.createdAt}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {corpusItem ? corpusItem.title : '未知'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 flex items-center">
                            <Zap size={14} className="mr-1" />
                            AI提取
                          </button>
                          <button className="text-red-600 hover:text-red-900 flex items-center">
                            <Download size={14} className="mr-1" />
                            删除
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 知识库卡片 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">我的知识库</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {corpus.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="text-blue-600" size={20} />
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {item.fileCount}个文件
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">关联应用: {item.relatedApp}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500">创建于 {item.createdAt}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
            <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50">
              <div className="text-gray-400 flex justify-center">
                <FileText size={24} />
              </div>
              <div className="text-sm text-gray-500 mt-2">创建新知识库</div>
            </div>
          </div>
        </div>
        
        {/* 快速操作 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={handleFileUpload}
              className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Upload className="text-blue-600 mb-2" size={24} />
              <span className="text-blue-800 font-medium">上传文件</span>
            </button>
            <button 
              onClick={() => window.location.hash = '/admin/expert/courses'}
              className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <BookOpen className="text-green-600 mb-2" size={24} />
              <span className="text-green-800 font-medium">课程管理</span>
            </button>
          </div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};