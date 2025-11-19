import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { ExpertDetailPage } from './pages/expert/ExpertDetailPage';
import { PlatformDashboard } from './pages/admin/platform/PlatformDashboard';
import { ExpertDashboard } from './pages/admin/expert/ExpertDashboard';
import { ExpertsPage } from './pages/admin/platform/ExpertsPage';
import { AppsPage as PlatformAppsPage } from './pages/admin/platform/AppsPage';
import { ProfilePage } from './pages/admin/expert/ProfilePage';
import { KnowledgeBasePage } from './pages/admin/expert/KnowledgeBasePage';
import { ExpertAppsPage } from './pages/admin/expert/AppsPage';
import { CoursesPage } from './pages/admin/expert/CoursesPage';
import { OrganizationHomePage } from './pages/organization/OrganizationHomePage';
import { ChatDialog } from './components/chat/ChatDialog';
import { mockExperts } from './utils/mockData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/organization',
    element: <OrganizationHomePage />
  },
  {
    path: '/expert/:id',
    element: <ExpertDetailPageWrapper />
  },
  {
    path: '/admin/platform/dashboard',
    element: <PlatformDashboard />
  },
  {
    path: '/admin/platform/experts',
    element: <ExpertsPage />
  },
  {
    path: '/admin/platform/apps',
    element: <PlatformAppsPage />
  },
  {
    path: '/admin/expert/dashboard',
    element: <ExpertDashboard />
  }
  ,
  {
    path: '/admin/expert/profile',
    element: <ProfilePage />
  },
  {
    path: '/admin/expert/knowledge',
    element: <KnowledgeBasePage />
  },
  {
    path: '/admin/expert/apps',
    element: <ExpertAppsPage />
  },
  {
    path: '/admin/expert/courses',
    element: <CoursesPage />
  }
]);

function ExpertDetailPageWrapper() {
  const { id } = useParams<{ id: string }>();
  // 根据ID查找专家，这里简化处理
  const expert = mockExperts.find(e => e.id === id) || mockExperts[0];
  const isFallback = !mockExperts.some(e => e.id === id);
  return <ExpertDetailPage expert={expert} isFallback={isFallback} />;
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ChatDialog />
    </div>
  );
}

export default App;
