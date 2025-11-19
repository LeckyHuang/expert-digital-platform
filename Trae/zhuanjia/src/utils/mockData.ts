import { Expert, Platform } from '../types/expert';

// 平台数据
export const mockPlatform: Platform = {
  id: '1',
  name: '外部专家数字人平台',
  description: '数字化赋能，专家服务触手可及',
  type: 'platform',
  logo: '/logo.png',
  contactInfo: {
    phone: '400-123-4567',
    email: 'info@expert-platform.com',
    address: '上海市浦东新区'
  }
};

// 机构数据
export const mockOrganization: Platform = {
  id: '2',
  name: '数字化转型研究院',
  description: '专注于企业数字化转型的专业研究机构',
  type: 'organization',
  logo: '/org-logo.png',
  contactInfo: {
    phone: '400-987-6543',
    email: 'contact@digital-transformation.org',
    address: '北京市海淀区'
  }
};

// 专家数据
export const mockExperts: Expert[] = [
  {
    id: '1',
    name: '张辉',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20business%20expert%20portrait%2C%20confident%20smile%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '特邀专家',
    title: '资深顾问',
    organization: '清华大学',
    tags: ['数字化转型', '项目管理', '数据治理', 'AI应用'],
    introduction: '拥有15年企业数字化转型咨询经验，专注于数据治理、项目管理与AI应用落地。',
    qualifications: [
      '企业数字化转型咨询与实施',
      '项目管理与流程优化',
      '数据治理与分析',
      '研发工程与系统架构',
      '多行业实战经验'
    ],
    stats: {
      services: 200,
      students: 120000,
      calls: 526,
      resources: 28
    },
    applications: [
      {
        id: '1',
        title: '数字项目助手',
        description: '协助梳理项目目标和里程碑，制定WBS与任务分配，生成计划书、周报与风险清单等',
        type: 'free',
        stats: {
          completions: 320,
          calls: 187
        }
      },
      {
        id: '2',
        title: '数字分析助手',
        description: '帮助快速完成数据清洗、统计分析、图表生成与报告撰写',
        type: 'free',
        stats: {
          completions: 5330,
          calls: 992
        }
      },
      {
        id: '3',
        title: 'AI对标',
        description: '支持行业对标与竞品分析，提供标杆研究方法与报告模板',
        type: 'free',
        stats: {
          completions: 5330,
          calls: 792
        }
      }
    ],
    knowledgeResources: [
      {
        id: '1',
        title: '《电控系统架构关键点剖析》',
        type: 'course',
        learners: 200,
        isCollected: false
      },
      {
        id: '2',
        title: '《敏捷产品设计与协同方法》',
        type: 'article',
        learners: 1500,
        isCollected: true
      },
      {
        id: '3',
        title: '《结构设计细节若干建议》',
        type: 'tool',
        learners: 2200,
        isCollected: false
      }
    ]
  },
  {
    id: '2',
    name: '李明',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20female%20business%20expert%20portrait%2C%20confident%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '高级专家',
    title: 'AI架构师',
    organization: '北京大学',
    tags: ['人工智能', '机器学习', '深度学习', '算法优化'],
    introduction: 'AI领域资深专家，专注于机器学习算法优化与深度学习应用。',
    qualifications: [
      '人工智能算法设计与优化',
      '深度学习模型开发',
      '机器学习工程化实践',
      '大数据处理与分析',
      '智能系统架构设计'
    ],
    stats: {
      services: 150,
      students: 80000,
      calls: 380,
      resources: 35
    },
    applications: [
      {
        id: '4',
        title: 'AI模型训练助手',
        description: '自动化模型训练流程，提供超参数优化和模型评估',
        type: 'free',
        stats: {
          completions: 1200,
          calls: 450
        }
      },
      {
        id: '5',
        title: '智能数据分析',
        description: '基于AI的数据分析和预测，支持多维度数据挖掘',
        type: 'paid',
        stats: {
          completions: 2800,
          calls: 890
        }
      }
    ],
    knowledgeResources: [
      {
        id: '4',
        title: '《深度学习实战指南》',
        type: 'course',
        learners: 3200,
        isCollected: true
      },
      {
        id: '5',
        title: '《机器学习算法详解》',
        type: 'article',
        learners: 2800,
        isCollected: false
      }
    ]
  },
  {
    id: '3',
    name: '王强',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20business%20expert%20portrait%2C%20serious%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '首席专家',
    title: '战略顾问',
    organization: '复旦大学',
    tags: ['企业战略', '商业模式', '创新管理', '组织变革'],
    introduction: '企业战略管理专家，擅长商业模式设计与组织变革管理。',
    qualifications: [
      '企业战略规划与实施',
      '商业模式创新设计',
      '组织变革管理',
      '创新管理体系建设',
      '产业生态分析'
    ],
    stats: {
      services: 180,
      students: 95000,
      calls: 420,
      resources: 22
    },
    applications: [
      {
        id: '6',
        title: '商业模式设计助手',
        description: '协助设计和优化商业模式，提供行业对标分析',
        type: 'free',
        stats: {
          completions: 890,
          calls: 340
        }
      }
    ],
    knowledgeResources: [
      {
        id: '6',
        title: '《战略管理实践》',
        type: 'course',
        learners: 1800,
        isCollected: true
      }
    ]
  }
];