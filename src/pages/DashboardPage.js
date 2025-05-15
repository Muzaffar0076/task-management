import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  // Sample projects data
  const [projects] = useState([
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesigning the company website with new branding',
      progress: 75,
      tasks: { total: 20, completed: 15 }
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Building a new mobile app for iOS and Android',
      progress: 40,
      tasks: { total: 30, completed: 12 }
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q3 digital marketing campaign planning',
      progress: 20,
      tasks: { total: 15, completed: 3 }
    }
  ]);

  // Sample notifications
  const [notifications] = useState([
    {
      id: 1,
      message: 'John assigned you a new task',
      time: '2 hours ago'
    },
    {
      id: 2,
      message: 'Meeting scheduled for tomorrow at 10 AM',
      time: '5 hours ago'
    },
    {
      id: 3,
      message: 'Website Redesign project deadline updated',
      time: '1 day ago'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-blue-600">CollabEase</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button onClick={() => navigate('/dashboard')} className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </button>
                <button onClick={() => navigate('/projects')} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </button>
                <button onClick={() => navigate('/calendar')} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Calendar
                </button>
                <button onClick={() => navigate('/reports')} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Reports
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">JD</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Welcome Section */}
          <div className="py-4">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Welcome back, John Doe!
                </h3>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">
                  You have {projects.reduce((acc, project) => acc + (project.tasks.total - project.tasks.completed), 0)} pending tasks across {projects.length} projects.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Projects
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {projects.length}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Tasks
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {projects.reduce((acc, project) => acc + project.tasks.total, 0)}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Completed Tasks
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {projects.reduce((acc, project) => acc + project.tasks.completed, 0)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Projects</h2>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                New Project
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">
                          Progress
                        </div>
                        <div className="text-sm font-medium text-blue-600">
                          {project.progress}%
                        </div>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: ${project.progress}% }}></div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div className="text-sm text-gray-500">
                        {project.tasks.completed}/{project.tasks.total} tasks completed
                      </div>
                      <button onClick={() => navigate(/project/${project.id})} className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        View project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Add Project Card */}
              <div className="bg-gray-50 overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300">
                <div className="px-4 py-5 sm:p-6 flex flex-col items-center justify-center h-full">
                  <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span className="mt-2 block text-sm font-medium text-gray-500">Create a new project</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li key={notification.id}>
                    <button className="block hover:bg-gray-50 w-full text-left">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-blue-600 truncate">
                            {notification.message}
                          </p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;