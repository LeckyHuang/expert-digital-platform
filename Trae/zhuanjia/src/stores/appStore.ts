import { create } from 'zustand';
import { Expert, Platform, ChatMessage } from '../types/expert';

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
  
  // 动作
  setCurrentPlatform: (platform: Platform) => void;
  setExperts: (experts: Expert[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedTags: (tags: string[]) => void;
  filterExperts: () => void;
  openChat: (expert: Expert) => void;
  closeChat: () => void;
  addChatMessage: (message: ChatMessage) => void;
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
  }))
}));
