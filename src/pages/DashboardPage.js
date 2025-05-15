import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  // Sample projects data
  const [projects] = useState([
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesigning the company website with new branding',
      progress: 75,
      tasks: { total: 20, completed: 15 },
      priority: 'High',
      dueDate: '2023-06-30'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Building a new mobile app for iOS and Android',
      progress: 40,
      tasks: { total: 30, completed: 12 },
      priority: 'Medium',
      dueDate: '2023-08-15'
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q3 digital marketing campaign planning',
      progress: 20,
      tasks: { total: 15, completed: 3 },
      priority: 'Low',
      dueDate: '2023-07-20'
    }
  ]);

  // Sample notifications
  const [notifications] = useState([
    {
      id: 1,
      message: 'John assigned you a new task',
      time: '2 hours ago',
      isRead: false
    },
    {
      id: 2,
      message: 'Meeting scheduled for tomorrow at 10 AM',
      time: '5 hours ago',
      isRead: false
    },
    {
      id: 3,
      message: 'Website Redesign project deadline updated',
      time: '1 day ago',
      isRead: true
    }
  ]);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(project => 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, projects]);

  const unreadNotificationsCount = notifications.filter(n => !n.isRead).length;

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}
        initial={false}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">CollabEase</h1>
        </div>
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            <button onClick={() => navigate('/dashboard')} className="group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700">
              <svg className="mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </button>
            <button onClick={() => navigate('/projects')} className="group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Projects
            </button>
            <button onClick={() => navigate('/calendar')} className="group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendar
            </button>
            <button onClick={() => navigate('/reports')} className="group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Reports
            </button>
          </div>
        </nav>
        <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs font-medium text-gray-500">View profile</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Top Navigation */}
        <div className="sticky top-0 z-10 bg-white md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 shadow-sm">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center">
              {/* Search */}
              <div className="max-w-lg w-full lg:max-w-xs mr-4">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search projects"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                  )}
                </button>
                
                {isNotificationsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''}`}>
                            <p className="text-sm text-gray-900">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 px-4 py-2">
                        <button className="text-sm text-blue-600 hover:text-blue-500">
                          View all notifications
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <span className="text-sm font-medium">JD</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Welcome Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <div className="bg-white rounded-lg shadow-sm px-5 py-6 sm:px-6 border border-gray-100">
                  <div className="pb-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Welcome back, John Doe!
                    </h3>
                    <p className="mt-2 max-w-4xl text-sm text-gray-500">
                      You have {projects.reduce((acc, project) => acc + (project.tasks.total - project.tasks.completed), 0)} pending tasks across {projects.length} projects.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="mt-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100"
                  >
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
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100"
                  >
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
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100"
                  >
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
                  </motion.div>
                </div>
              </div>

              {/* Projects */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Projects</h2>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    New Project
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                    <motion.div 
                      key={project.id} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {project.name}
                          </h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(project.priority)}`}>
                            {project.priority}
                          </span>
                        </div>
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
                            <div 
                              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            {project.tasks.completed}/{project.tasks.total} tasks completed
                          </div>
                          <div className="text-sm text-gray-500">
                            Due: {new Date(project.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button 
                            onClick={() => navigate(`/project/${project.id}`)} 
                            className="w-full text-sm font-medium text-blue-600 hover:text-blue-500 bg-blue-50 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                          >
                            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View project
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {/* Add Project Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-50 overflow-hidden shadow-sm rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors duration-300"
                  >
                    <button className="w-full h-full px-4 py-5 sm:p-6 flex flex-col items-center justify-center">
                      <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      <span className="mt-2 block text-sm font-medium text-gray-500">Create a new project</span>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Recent Activity */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 mb-8"
              >
                <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h2>
                <div className="mt-4 bg-white shadow-sm overflow-hidden sm:rounded-md border border-gray-100">
                  <ul className="divide-y divide-gray-200">
                    {notifications.map((notification, index) => (
                      <motion.li 
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <button className={`block hover:bg-gray-50 w-full text-left ${!notification.isRead ? 'bg-blue-50' : ''}`}>
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
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;