import React, { useState } from 'react';
import { ExpertAdminLayout } from '../../../layouts/ExpertAdminLayout';

export const KnowledgeBasePage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles(Array.from(list));
  };

  const generate = async () => {
    if (files.length === 0) return;
    setStatus('processing');
    setTimeout(() => setStatus('done'), 1200);
  };

  return (
    <ExpertAdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">个人知识库</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">上传材料</h3>
          <input type="file" multiple onChange={e => onFiles(e.target.files)} className="block" />
          <div className="mt-2 text-sm text-gray-600">{files.length > 0 ? `已选择 ${files.length} 个文件` : '未选择文件'}</div>
          <div className="mt-4 flex space-x-2">
            <button onClick={generate} className="px-4 py-2 bg-blue-600 text-white rounded">生成AI语料</button>
            {status === 'processing' && <span className="text-sm text-gray-600">处理中...</span>}
            {status === 'done' && <span className="text-sm text-green-600">生成完成</span>}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">已生成语料</h3>
          <div className="text-sm text-gray-600">{status === 'done' ? '语料可用于应用配置与调用' : '暂无语料'}</div>
        </div>
      </div>
    </ExpertAdminLayout>
  );
};

export default KnowledgeBasePage;