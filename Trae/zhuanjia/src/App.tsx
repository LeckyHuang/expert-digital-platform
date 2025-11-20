import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { ExpertDetailPage } from './pages/expert/ExpertDetailPage';
import { PlatformDashboard } from './pages/admin/platform/PlatformDashboard';
import { ExpertDashboard } from './pages/admin/expert/ExpertDashboard';
import { PlatformExpertManagement } from './pages/admin/platform/PlatformExpertManagement';
import { PlatformOrganizationManagement } from './pages/admin/platform/PlatformOrganizationManagement';
import { PlatformApplicationManagement } from './pages/admin/platform/PlatformApplicationManagement';
import { ProfilePage } from './pages/admin/expert/ProfilePage';
import { KnowledgeBasePage } from './pages/admin/expert/KnowledgeBasePage';
import { AppsPage } from './pages/admin/expert/AppsPage';
import { CoursesPage } from './pages/admin/expert/CoursesPage';
import { OrganizationHomePage } from './pages/organization/OrganizationHomePage';
import { OrganizationDashboard } from './pages/admin/organization/OrganizationDashboard';
import { OrganizationExpertsPage } from './pages/admin/organization/OrganizationExpertsPage';
import { OrganizationCoursesPage } from './pages/admin/organization/OrganizationCoursesPage';
import { OrganizationNewsPage } from './pages/admin/organization/OrganizationNewsPage';
import { OrganizationSettingsPage } from './pages/admin/organization/OrganizationSettingsPage';
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
    element: <PlatformExpertManagement />
  },
  {
    path: '/admin/platform/organizations',
    element: <PlatformOrganizationManagement />
  },
  {
    path: '/admin/platform/applications',
    element: <PlatformApplicationManagement />
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
  { path: '/admin/expert/apps', element: <AppsPage /> },
  {
    path: '/admin/expert/courses',
    element: <CoursesPage />
  },
  {
    path: '/admin/organization/dashboard',
    element: <OrganizationDashboard />
  },
  {
    path: '/admin/organization/experts',
    element: <OrganizationExpertsPage />
  },
  {
    path: '/admin/organization/courses',
    element: <OrganizationCoursesPage />
  },
  {
    path: '/admin/organization/news',
    element: <OrganizationNewsPage />
  },
  {
    path: '/admin/organization/settings',
    element: <OrganizationSettingsPage />
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
