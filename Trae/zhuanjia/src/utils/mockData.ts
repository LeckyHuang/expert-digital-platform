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
    role: '首席专家',
    title: '资深顾问',
    organization: '数字化转型研究院',
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
    role: '特邀专家',
    title: '战略顾问',
    organization: '数字化转型研究院',
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
  },
  {
    id: '4',
    name: '陈丽',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20female%20business%20expert%20portrait%2C%20friendly%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '资深专家',
    title: '产品经理',
    organization: '上海交通大学',
    tags: ['产品设计', '用户体验', '需求分析', '市场调研'],
    introduction: '资深产品经理，专注于用户体验设计和产品需求分析。',
    qualifications: [
      '产品规划设计',
      '用户体验优化',
      '需求分析与管理',
      '市场调研与分析',
      '跨部门协作沟通'
    ],
    stats: {
      services: 120,
      students: 65000,
      calls: 310,
      resources: 18
    },
    applications: [
      {
        id: '7',
        title: '产品需求分析助手',
        description: '协助进行产品需求收集、整理和分析，输出PRD文档',
        type: 'free',
        stats: {
          completions: 650,
          calls: 280
        }
      }
    ],
    knowledgeResources: [
      {
        id: '7',
        title: '《用户体验设计原则》',
        type: 'article',
        learners: 1200,
        isCollected: true
      }
    ]
  },
  {
    id: '5',
    name: '刘伟',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20business%20expert%20portrait%2C%20professional%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '高级专家',
    title: '数据分析师',
    organization: '浙江大学',
    tags: ['数据分析', '商业智能', '数据可视化', '统计学'],
    introduction: '数据分析师，擅长商业智能分析和数据可视化。',
    qualifications: [
      '数据分析与建模',
      '商业智能解决方案',
      '数据可视化设计',
      '统计学应用',
      '数据库管理'
    ],
    stats: {
      services: 140,
      students: 78000,
      calls: 360,
      resources: 25
    },
    applications: [
      {
        id: '8',
        title: '商业智能分析助手',
        description: '提供数据洞察和商业智能分析报告',
        type: 'paid',
        stats: {
          completions: 420,
          calls: 190
        }
      }
    ],
    knowledgeResources: [
      {
        id: '8',
        title: '《数据可视化最佳实践》',
        type: 'course',
        learners: 2100,
        isCollected: false
      }
    ]
  },
  {
    id: '6',
    name: '赵敏',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20female%20business%20expert%20portrait%2C%20confident%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '特邀专家',
    title: '市场营销专家',
    organization: '中山大学',
    tags: ['市场营销', '品牌管理', '数字营销', '消费者行为'],
    introduction: '市场营销专家，专注于品牌管理和数字营销策略。',
    qualifications: [
      '市场营销策略制定',
      '品牌建设与管理',
      '数字营销推广',
      '消费者行为研究',
      '广告创意策划'
    ],
    stats: {
      services: 160,
      students: 88000,
      calls: 410,
      resources: 30
    },
    applications: [
      {
        id: '9',
        title: '数字营销策略助手',
        description: '协助制定数字营销策略和执行方案',
        type: 'free',
        stats: {
          completions: 580,
          calls: 260
        }
      }
    ],
    knowledgeResources: [
      {
        id: '9',
        title: '《品牌管理核心要素》',
        type: 'article',
        learners: 1800,
        isCollected: true
      }
    ]
  },
  {
    id: '7',
    name: '孙浩',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20business%20expert%20portrait%2C%20serious%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '首席专家',
    title: '财务顾问',
    organization: '厦门大学',
    tags: ['财务管理', '投资分析', '风险控制', '税务筹划'],
    introduction: '资深财务顾问，专注于企业财务管理和投资分析。',
    qualifications: [
      '财务管理体系建设',
      '投资项目分析评估',
      '财务风险识别控制',
      '税务筹划与合规',
      '资本运作'
    ],
    stats: {
      services: 130,
      students: 72000,
      calls: 330,
      resources: 20
    },
    applications: [
      {
        id: '10',
        title: '投资分析助手',
        description: '提供投资项目分析和财务评估报告',
        type: 'paid',
        stats: {
          completions: 320,
          calls: 150
        }
      }
    ],
    knowledgeResources: [
      {
        id: '10',
        title: '《企业财务风险管理》',
        type: 'course',
        learners: 1500,
        isCollected: false
      }
    ]
  },
  {
    id: '8',
    name: '周婷',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20female%20business%20expert%20portrait%2C%20friendly%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '高级专家',
    title: '人力资源专家',
    organization: '华中科技大学',
    tags: ['人力资源', '组织发展', '人才招聘', '绩效管理'],
    introduction: '人力资源专家，专注于组织发展和人才管理体系。',
    qualifications: [
      '人力资源战略规划',
      '组织发展与变革',
      '人才招聘与选拔',
      '绩效管理体系设计',
      '员工培训与发展'
    ],
    stats: {
      services: 110,
      students: 58000,
      calls: 290,
      resources: 15
    },
    applications: [
      {
        id: '11',
        title: '组织诊断助手',
        description: '协助进行组织健康度评估和改进建议',
        type: 'free',
        stats: {
          completions: 280,
          calls: 130
        }
      }
    ],
    knowledgeResources: [
      {
        id: '11',
        title: '《高效团队建设方法》',
        type: 'article',
        learners: 1300,
        isCollected: true
      }
    ]
  },
  {
    id: '9',
    name: '吴磊',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20business%20expert%20portrait%2C%20professional%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '资深专家',
    title: '法律顾问',
    organization: '中国政法大学',
    tags: ['法律咨询', '合同审查', '知识产权', '公司法务'],
    introduction: '法律顾问，专注于企业法律事务和知识产权保护。',
    qualifications: [
      '企业法律事务处理',
      '合同起草与审查',
      '知识产权保护',
      '公司法务管理',
      '诉讼仲裁代理'
    ],
    stats: {
      services: 100,
      students: 52000,
      calls: 260,
      resources: 12
    },
    applications: [
      {
        id: '12',
        title: '合同审查助手',
        description: '协助审查各类商务合同，提供法律意见',
        type: 'paid',
        stats: {
          completions: 410,
          calls: 180
        }
      }
    ],
    knowledgeResources: [
      {
        id: '12',
        title: '《企业常见法律风险防范》',
        type: 'course',
        learners: 1100,
        isCollected: false
      }
    ]
  },
  {
    id: '10',
    name: '郑芳',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20female%20business%20expert%20portrait%2C%20confident%20expression%2C%20business%20attire%2C%20clean%20background&image_size=square',
    role: '高级专家',
    title: '供应链专家',
    organization: '北京理工大学',
    tags: ['供应链管理', '物流优化', '库存控制', '采购管理'],
    introduction: '供应链专家，专注于物流优化和库存控制。',
    qualifications: [
      '供应链体系设计',
      '物流网络优化',
      '库存管理策略',
      '采购成本控制',
      '供应商关系管理'
    ],
    stats: {
      services: 125,
      students: 68000,
      calls: 320,
      resources: 19
    },
    applications: [
      {
        id: '13',
        title: '供应链优化助手',
        description: '协助优化供应链流程，降低运营成本',
        type: 'free',
        stats: {
          completions: 350,
          calls: 160
        }
      }
    ],
    knowledgeResources: [
      {
        id: '13',
        title: '《现代供应链管理实务》',
        type: 'article',
        learners: 1600,
        isCollected: true
      }
    ]
  }
];