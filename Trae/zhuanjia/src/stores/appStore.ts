import { create } from 'zustand';
import { Expert, Platform, ChatMessage } from '../types/expert';

// 扩展类型定义，支持专家管理页面的状态
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

interface AppItem {
  id: string;
  name: string;
  description: string;
  type: 'free' | 'paid';
  status: 'draft' | 'published' | 'unlisted';
  knowledgeBase: string | null;
  usageCount: number;
  lastUsed: string;
  users: number;
  rating: number;
}

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

interface AppState {
  // 平台信息
  currentPlatform: Platform | null;
  
  // 专家列表
  experts: Expert[];
  filteredExperts: Expert[];
  
  // 搜索和筛选
  searchQuery: string;
  selectedTags: string[];
  
  // 聊天状态
  isChatOpen: boolean;
  currentChatExpert: Expert | null;
  chatMessages: ChatMessage[];
  
  // 知识库相关
  files: FileItem[];
  corpus: CorpusItem[];
  
  // 应用相关
  apps: AppItem[];
  
  // 课程相关
  courses: Course[];
  
  // 动作
  setCurrentPlatform: (platform: Platform) => void;
  setExperts: (experts: Expert[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedTags: (tags: string[]) => void;
  filterExperts: () => void;
  openChat: (expert: Expert) => void;
  closeChat: () => void;
  addChatMessage: (message: ChatMessage) => void;
  
  // 知识库相关动作
  setFiles: (files: FileItem[]) => void;
  setCorpus: (corpus: CorpusItem[]) => void;
  
  // 应用相关动作
  setApps: (apps: AppItem[]) => void;
  
  // 课程相关动作
  setCourses: (courses: Course[]) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  currentPlatform: null,
  experts: [],
  filteredExperts: [],
  searchQuery: '',
  selectedTags: [],
  isChatOpen: false,
  currentChatExpert: null,
  chatMessages: [],
  
  // 初始化空数组以避免undefined错误
  files: [],
  corpus: [],
  apps: [],
  courses: [],
  
  setCurrentPlatform: (platform) => set({ currentPlatform: platform }),
  
  setExperts: (experts) => set({ experts, filteredExperts: experts }),
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterExperts();
  },
  
  setSelectedTags: (tags) => {
    set({ selectedTags: tags });
    get().filterExperts();
  },
  
  filterExperts: () => {
    const { experts, searchQuery, selectedTags } = get();
    let filtered = experts;
    
    // 搜索筛选
    if (searchQuery) {
      filtered = filtered.filter(expert => 
        expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.introduction.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // 标签筛选
    if (selectedTags.length > 0) {
      filtered = filtered.filter(expert =>
        selectedTags.some(tag => expert.tags.includes(tag))
      );
    }
    
    set({ filteredExperts: filtered });
  },
  
  openChat: (expert) => set({ 
    isChatOpen: true, 
    currentChatExpert: expert 
  }),
  
  closeChat: () => set({ 
    isChatOpen: false, 
    currentChatExpert: null,
    chatMessages: [] 
  }),
  
  addChatMessage: (message) => set((state) => ({
    chatMessages: [...state.chatMessages, message]
  })),
  
  // 知识库相关动作
  setFiles: (files) => set({ files }),
  setCorpus: (corpus) => set({ corpus }),
  
  // 应用相关动作
  setApps: (apps) => set({ apps }),
  
  // 课程相关动作
  setCourses: (courses) => set({ courses })
}));
