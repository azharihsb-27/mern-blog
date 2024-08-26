import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardProfile from '../components/DashboardProfile';
import DashboardPosts from '../components/DashboardPosts';
import DashboardUsers from '../components/DashboardUsers';
import DashboardComments from '../components/DashboardComments';
import DashboardMain from '../components/DashboardMain';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() => {
    // getting tab query from url
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-56">
        <DashboardSidebar />
      </div>
      {/* Main Content */}
      {tab === 'overview' && <DashboardMain />}
      {tab === 'profile' && <DashboardProfile />}
      {tab === 'posts' && <DashboardPosts />}
      {tab === 'users' && <DashboardUsers />}
      {tab === 'comments' && <DashboardComments />}
    </div>
  );
}
