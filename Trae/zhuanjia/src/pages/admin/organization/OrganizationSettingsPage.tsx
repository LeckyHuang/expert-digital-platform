import React, { useState } from 'react';
import { OrganizationAdminLayout } from '../../../layouts/OrganizationAdminLayout';
import { Save, Upload, HelpCircle, AlertCircle, CheckCircle2, Users, Building, MapPin, Phone, Mail, Globe, Clock, FileText, ImageIcon } from 'lucide-react';

export const OrganizationSettingsPage: React.FC = () => {
  // 表单状态
  const [formData, setFormData] = useState({
    organizationName: '未来教育研究院',
    organizationCode: 'EDUFUTURE',
    shortName: '未来教育',
    logoFile: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    description: '未来教育研究院致力于推动教育创新和人才培养，通过整合优质教育资源，提供专业化、系统化的教育培训服务，培养适应未来社会发展需要的复合型人才。',
    contactPerson: '张院长',
    contactPhone: '021-58888888',
    contactEmail: 'contact@edufuture.org',
    address: '上海市浦东新区张江高科技园区博云路2号',
    website: 'www.edufuture.org',
    establishedDate: '2015-03-15',
    businessLicense: '310115000123456',
    operationalStatus: '正常运营',
    scale: '50-100人',
    businessScope: '教育研究、人才培训、学术交流、课程开发'
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showLogoUpload, setShowLogoUpload] = useState(false);
  
  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 清除对应字段的错误信息
    if (errors[name]) {
      setErrors(prev => { 
        const newErrors = { ...prev }; 
        delete newErrors[name]; 
        return newErrors; 
      });
    }
  };
  
  // 处理select元素变化
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleInputChange(e);
  };
  
  // 表单验证
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = '机构名称不能为空';
    }
    
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = '联系人不能为空';
    }
    
    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = '联系电话不能为空';
    } else if (!/^1[3-9]\d{9}$|^0\d{2,3}-\d{7,8}$/.test(formData.contactPhone)) {
      newErrors.contactPhone = '请输入正确的联系电话格式';
    }
    
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = '联系邮箱不能为空';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = '请输入正确的邮箱格式';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = '机构地址不能为空';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = '机构简介不能为空';
    } else if (formData.description.length > 500) {
      newErrors.description = '机构简介不能超过500个字符';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // 提交表单
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟API请求
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('机构信息已成功保存');
      
      // 3秒后清除成功消息
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };
  
  return (
    <OrganizationAdminLayout>
      <div className="space-y-8">
        {/* 页面标题 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">基本设置</h2>
          <p className="mt-2 text-sm text-gray-500">设置机构的基本信息，包括名称、简介、联系方式等</p>
        </div>
        
        {/* 成功提示 */}
        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  {successMessage}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 机构基本信息 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Building size={20} />
              <span>机构基本信息</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo上传 */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  机构Logo
                  <span className="ml-1 text-gray-500 text-xs">(建议尺寸：200x200px)</span>
                </label>
                <div className="flex flex-col items-center">
                  <div className="relative w-40 h-40 rounded-md overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-colors cursor-pointer mb-3" onClick={() => setShowLogoUpload(!showLogoUpload)}>
                    <img 
                      src={formData.logoFile} 
                      alt="机构Logo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Upload size={24} className="text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">点击上传Logo图片</p>
                  
                  {showLogoUpload && (
                    <div className="mt-4 w-full">
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                      />
                      <p className="mt-2 text-xs text-gray-500">支持JPG、PNG格式，图片大小不超过2MB</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:col-span-1 space-y-6">
                {/* 机构名称 */}
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                    机构名称 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    className={`w-full px-4 py-2 border ${errors.organizationName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    placeholder="请输入机构全称"
                  />
                  {errors.organizationName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.organizationName}
                    </p>
                  )}
                </div>
                
                {/* 机构代码 */}
                <div>
                  <label htmlFor="organizationCode" className="block text-sm font-medium text-gray-700 mb-1">
                    机构代码
                  </label>
                  <input
                    type="text"
                    id="organizationCode"
                    name="organizationCode"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.organizationCode}
                    onChange={handleInputChange}
                    placeholder="请输入机构代码"
                  />
                </div>
                
                {/* 机构简称 */}
                <div>
                  <label htmlFor="shortName" className="block text-sm font-medium text-gray-700 mb-1">
                    机构简称
                  </label>
                  <input
                    type="text"
                    id="shortName"
                    name="shortName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.shortName}
                    onChange={handleInputChange}
                    placeholder="请输入机构简称"
                  />
                </div>
              </div>
              
              {/* 机构简介 */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  机构简介 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none`}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="请输入机构简介，不超过500个字符"
                />
                <p className="mt-1 text-xs text-gray-500">{formData.description.length}/500</p>
                {errors.description && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* 联系方式 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Phone size={20} />
              <span>联系方式</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 联系人 */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                  联系人 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  className={`w-full px-4 py-2 border ${errors.contactPerson ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder="请输入联系人姓名"
                />
                {errors.contactPerson && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.contactPerson}
                  </p>
                )}
              </div>
              
              {/* 联系电话 */}
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  联系电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className={`w-full px-4 py-2 border ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  placeholder="请输入联系电话"
                />
                {errors.contactPhone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.contactPhone}
                  </p>
                )}
              </div>
              
              {/* 联系邮箱 */}
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  联系邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className={`w-full px-4 py-2 border ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="请输入联系邮箱"
                />
                {errors.contactEmail && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.contactEmail}
                  </p>
                )}
              </div>
              
              {/* 官方网站 */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  官方网站
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="请输入官方网站地址"
                />
              </div>
              
              {/* 机构地址 */}
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  机构地址 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className={`w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="请输入机构详细地址"
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.address}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* 机构资质信息 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <FileText size={20} />
              <span>机构资质信息</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 成立日期 */}
              <div>
                <label htmlFor="establishedDate" className="block text-sm font-medium text-gray-700 mb-1">
                  成立日期
                </label>
                <input
                  type="date"
                  id="establishedDate"
                  name="establishedDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.establishedDate}
                  onChange={handleInputChange}
                />
              </div>
              
              {/* 营业执照 */}
              <div>
                <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700 mb-1">
                  营业执照编号
                </label>
                <input
                  type="text"
                  id="businessLicense"
                  name="businessLicense"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.businessLicense}
                  onChange={handleInputChange}
                  placeholder="请输入营业执照编号"
                />
              </div>
              
              {/* 经营状态 */}
              <div>
                <label htmlFor="operationalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  经营状态
                </label>
                <select
                  id="operationalStatus"
                  name="operationalStatus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.operationalStatus}
                  onChange={handleChange}
                >
                  <option value="正常运营">正常运营</option>
                  <option value="暂停运营">暂停运营</option>
                  <option value="停止运营">停止运营</option>
                </select>
              </div>
              
              {/* 机构规模 */}
              <div>
                <label htmlFor="scale" className="block text-sm font-medium text-gray-700 mb-1">
                  机构规模
                </label>
                <select
                  id="scale"
                  name="scale"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.scale}
                  onChange={handleChange}
                >
                  <option value="50人以下">50人以下</option>
                  <option value="50-100人">50-100人</option>
                  <option value="100-300人">100-300人</option>
                  <option value="300-500人">300-500人</option>
                  <option value="500人以上">500人以上</option>
                </select>
              </div>
              
              {/* 经营范围 */}
              <div className="md:col-span-2">
                <label htmlFor="businessScope" className="block text-sm font-medium text-gray-700 mb-1">
                  经营范围
                </label>
                <input
                  type="text"
                  id="businessScope"
                  name="businessScope"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.businessScope}
                  onChange={handleInputChange}
                  placeholder="请输入经营范围"
                />
              </div>
            </div>
          </div>
          
          {/* 保存按钮 */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Save size={18} />
              <span>{isSubmitting ? '保存中...' : '保存设置'}</span>
            </button>
          </div>
        </form>
        
        {/* 设置说明 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <HelpCircle size={20} />
            <span>设置说明</span>
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
              <span>机构名称、联系方式等信息将在机构首页和相关页面显示，请确保信息准确有效</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
              <span>Logo图片建议使用正方形，尺寸为200x200px，以保证在不同设备上的显示效果</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
              <span>机构简介将在机构首页展示，建议简洁明了地介绍机构的主要业务和特色</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
              <span>资质信息将用于机构认证和信誉展示，建议如实填写相关信息</span>
            </li>
          </ul>
        </div>
      </div>
    </OrganizationAdminLayout>
  );
};