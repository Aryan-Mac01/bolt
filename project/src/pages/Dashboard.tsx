import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  Bell,
  Settings,
  LogOut,
  User,
  Activity,
  Calendar,
  MessageSquare,
  BarChart2,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [notifications] = useState([
    { id: 1, text: 'New feature released', time: '1h ago' },
    { id: 2, text: 'System update completed', time: '2h ago' },
    { id: 3, text: 'Weekly report available', time: '1d ago' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNotificationClick = () => {
    toast('Checking for new notifications...', {
      icon: '🔔',
    });
  };

  const handleSettingsClick = () => {
    toast('Settings panel coming soon!', {
      icon: '⚙️',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleNotificationClick}
                className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <Bell className="h-6 w-6" />
              </button>
              <button 
                onClick={handleSettingsClick}
                className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <Settings className="h-6 w-6" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <LogOut className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Welcome, {user?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer" onClick={() => toast('View all tasks', { icon: '📋' })}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Today's Tasks
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">12</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer" onClick={() => toast('Open messages', { icon: '💬' })}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Messages
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">4</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer" onClick={() => toast('View progress details', { icon: '📊' })}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart2 className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Progress
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">78%</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer" onClick={() => toast('View activity log', { icon: '📈' })}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Activity className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Activity
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">High</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Notifications
              </h3>
              <div className="mt-6 flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <li 
                      key={notification.id} 
                      className="py-5 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => toast(`Opening: ${notification.text}`, { icon: '📬' })}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Bell className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {notification.text}
                          </p>
                          <p className="text-sm text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}