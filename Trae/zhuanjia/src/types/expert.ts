export interface Expert {
  id: string;
  name: string;
  avatar: string;
  role: string;
  title: string;
  organization: string;
  tags: string[];
  introduction: string;
  qualifications: string[];
  stats: {
    services: number;
    students: number;
    calls: number;
    resources: number;
  };
  applications: ExpertApplication[];
  knowledgeResources: KnowledgeResource[];
}

export interface ExpertApplication {
  id: string;
  title: string;
  description: string;
  type: 'free' | 'paid';
  pricing?: {
    perCall: number;
    currency: string;
  };
  stats: {
    completions: number;
    calls: number;
  };
}

export interface KnowledgeResource {
  id: string;
  title: string;
  type: 'course' | 'article' | 'tool';
  learners: number;
  isCollected: boolean;
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  type: 'platform' | 'organization';
  logo: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface ChatMessage {
  id: string;
  expertId: string;
  content: string;
  type: 'user' | 'expert';
  timestamp: Date;
}