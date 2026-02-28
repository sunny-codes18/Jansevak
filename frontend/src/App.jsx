import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Users,
  Map,
  BarChart3,
  AlertTriangle,
  Settings,
  Bell,
  Plus,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import adminBg from './assets/admin.png';
import heatmapImg from './assets/heatmap.png';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-6 py-4 transition-all relative ${active ? 'bg-saffron/10 text-saffron' : 'text-gray-500 hover:bg-gray-50'
      }`}
  >
    {active && <div className="saffron-indicator" />}
    <Icon size={20} className={active ? 'text-saffron' : 'text-gray-400'} />
    <span className={`font-medium ${active ? 'text-saffron' : 'text-gray-600'}`}>{label}</span>
  </button>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard Overview' },
    { icon: Building2, label: 'Departments' },
    { icon: MessageSquare, label: 'Complaint Monitoring' },
    { icon: Users, label: 'Worker & Sector Management' },
    { icon: Map, label: 'Geo Heatmap Analytics' },
    { icon: BarChart3, label: 'Performance Reports' },
    { icon: AlertTriangle, label: 'Escalation Control' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex"
      style={{ backgroundImage: `url(${adminBg})` }}
    >
      <div className="flex-1 flex min-h-screen backdrop-blur-[2px] bg-white/40">
        {/* Sidebar */}
        <aside className={`bg-white/60 backdrop-blur-md border-r border-gray-100 flex-col fixed inset-y-0 left-0 z-50 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          <div className="p-6 flex items-center justify-between">
            {isSidebarOpen ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-saffron rounded flex items-center justify-center text-white font-bold">J</div>
                <span className="text-xl font-bold font-display text-navy">JanSevak</span>
              </div>
            ) : (
              <div className="w-8 h-8 bg-saffron rounded flex items-center justify-center text-white font-bold mx-auto">J</div>
            )}
          </div>

          <nav className="mt-6 flex-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={isSidebarOpen ? item.label : ''}
                active={activeTab === item.label}
                onClick={() => setActiveTab(item.label)}
              />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          {/* Header */}
          <header className="h-20 bg-white/60 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:bg-gray-50 p-2 rounded-lg">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center space-x-6">
              <button className="bg-saffron text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-saffron-dark transition-all font-medium">
                <Plus size={18} />
                <span>Quick Add</span>
              </button>

              <div className="relative">
                <Bell className="text-gray-400 cursor-pointer hover:text-saffron transition-all" size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">3</span>
              </div>

              <div className="flex items-center space-x-3 pl-6 border-l border-gray-100">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-navy">Hon. MLA Rajesh Kumar</p>
                  <div className="flex justify-end">
                    <span className="text-[10px] bg-saffron/10 text-saffron px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">MLA / MP Role</span>
                  </div>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-navy font-bold border-2 border-white shadow-sm overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Rajesh+Kumar&background=FF9933&color=fff" alt="Profile" />
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-navy">{activeTab}</h1>
                <p className="text-gray-500 mt-1 uppercase text-xs font-bold tracking-widest">Digital Governance Intelligence Platform</p>
              </div>
              <div className="flex items-center space-x-3 text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-100">
                <span>Feb 26, 2026</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-green-600">System Live</span>
              </div>
            </div>

            {activeTab === 'Dashboard Overview' && (
              <>
                {/* KPI Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="kpi-card border-l-4 border-l-saffron">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-saffron/10 rounded-lg text-saffron font-bold">
                        <MessageSquare size={20} />
                      </div>
                      <span className="text-green-500 text-sm font-bold">↑ 12%</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Complaints</p>
                    <h2 className="text-3xl font-bold text-navy mt-1">1,284</h2>
                  </div>

                  <div className="kpi-card border-l-4 border-l-orange-400">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-orange-400/10 rounded-lg text-orange-400 font-bold">
                        <AlertTriangle size={20} />
                      </div>
                      <span className="text-red-500 text-sm font-bold">↑ 5%</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Pending Issues</p>
                    <h2 className="text-3xl font-bold text-navy mt-1">432</h2>
                  </div>

                  <div className="kpi-card border-l-4 border-l-green-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-green-500/10 rounded-lg text-green-500 font-bold">
                        <Users size={20} />
                      </div>
                      <span className="text-green-500 text-sm font-bold">↑ 8%</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Active Workers</p>
                    <h2 className="text-3xl font-bold text-navy mt-1">86</h2>
                  </div>

                  <div className="kpi-card border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 font-bold">
                        <BarChart3 size={20} />
                      </div>
                      <span className="text-blue-500 text-sm font-bold">↓ 4%</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Avg Resolution</p>
                    <h2 className="text-3xl font-bold text-navy mt-1">4.2 <span className="text-sm font-normal text-gray-400">days</span></h2>
                  </div>
                </div>

                {/* Constituency & Activity Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                  {/* Belapur Constituency Card */}
                  <div className="lg:col-span-1 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-bold text-navy uppercase text-xs tracking-widest text-gray-400">Constituency Intelligence</h3>
                        <h2 className="text-xl font-bold text-navy mt-1">Belapur Constituency</h2>
                      </div>
                      <div className="p-2 bg-saffron/10 rounded-lg text-saffron">
                        <Map size={20} />
                      </div>
                    </div>

                    <div className="space-y-4 flex-1">
                      {[
                        { name: 'Nerul', complaints: 42, status: 'Stable' },
                        { name: 'Seawoods', complaints: 28, status: 'Stable' },
                        { name: 'Belapur', complaints: 86, status: 'Critical' },
                        { name: 'Juinagar', complaints: 15, status: 'Stable' }
                      ].map((area) => (
                        <div key={area.name} className="p-3 bg-white/40 rounded-lg border border-gray-50 flex items-center justify-between hover:border-saffron/50 transition-all group">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${area.status === 'Critical' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                            <span className="font-bold text-navy text-sm">{area.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-gray-400 uppercase">{area.complaints} Active Issues</p>
                            <p className={`text-[10px] font-bold ${area.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{area.status.toUpperCase()}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-xs font-bold hover:border-saffron hover:text-saffron transition-all">
                      + VIEW ALL WARDS
                    </button>
                  </div>

                  {/* Recent Activity Heatmap */}
                  <div className="lg:col-span-2 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-gray-100 shadow-sm h-full flex flex-col items-center justify-center space-y-4 overflow-hidden group">
                    <div className="w-full flex justify-between items-center mb-4">
                      <h3 className="font-bold text-navy uppercase text-[10px] tracking-widest text-gray-400">Activity Heatmap Analytics</h3>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] font-bold text-gray-400">WEEKLY</button>
                        <button className="px-3 py-1 bg-saffron text-white rounded text-[10px] font-bold">MONTHLY</button>
                      </div>
                    </div>
                    <div className="flex-1 w-full bg-gray-50 rounded-lg relative overflow-hidden flex items-center justify-center">
                      <img src={heatmapImg} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Heatmap" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron/5 to-transparent h-1/2 w-full animate-scan pointer-events-none"></div>

                      <p className="absolute bottom-4 left-4 text-white bg-navy/60 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border border-white/20">Geo-spatial Engine Active</p>

                      {/* Interactive Pulse Markers */}
                      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-red-500/30 rounded-full animate-pulse border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-saffron/30 rounded-full animate-pulse delay-700 border-2 border-saffron shadow-[0_0_15px_rgba(255,153,51,0.5)]"></div>
                      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse delay-1000 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Departments' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-navy mb-4 flex items-center space-x-2 uppercase text-xs tracking-widest text-gray-400">
                    <span>Register New Department</span>
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Department Name</label>
                      <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron text-sm" placeholder="e.g. Health Department" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Priority Level</label>
                        <select className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron text-sm">
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">SLA Target (Days)</label>
                        <input type="number" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron text-sm" placeholder="7" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Head of Department</label>
                      <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron text-sm" placeholder="Dr. S. Sharma" />
                    </div>
                    <button className="w-full bg-saffron text-white py-3 rounded-lg font-bold hover:bg-saffron-dark transition-all mt-4 text-sm shadow-lg shadow-saffron/20">
                      Add Department
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                    <h3 className="font-bold text-navy uppercase text-[10px] tracking-widest text-gray-400">Live Department Monitoring</h3>
                    <div className="flex space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Live Stats</span>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-50/30 text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                          <th className="px-6 py-4">Department Entity</th>
                          <th className="px-6 py-4 text-center">Active Load</th>
                          <th className="px-6 py-4 text-center">Resolution</th>
                          <th className="px-6 py-4">SLA Status</th>
                          <th className="px-6 py-4 text-right">Control</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          { name: 'Health Department', issues: 124, sla: '98%', status: 'Active' },
                          { name: 'Electricity Department', issues: 86, sla: '82%', status: 'Active' },
                          { name: 'PWD Infrastructure', issues: 215, sla: '64%', status: 'Critical' },
                          { name: 'Education Services', issues: 43, sla: '95%', status: 'Active' },
                          { name: 'Civic & Municipal', issues: 156, sla: '78%', status: 'Overloaded' },
                        ].map((dept) => (
                          <tr key={dept.name} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <span className="text-sm font-bold text-navy block">{dept.name}</span>
                              <span className="text-[10px] text-gray-400">Admin: Rajesh V.</span>
                            </td>
                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-600">{dept.issues}</td>
                            <td className="px-6 py-4 text-center text-sm font-bold text-navy">{dept.sla}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${dept.status === 'Critical' ? 'bg-red-100 text-red-600' :
                                dept.status === 'Overloaded' ? 'bg-orange-100 text-orange-600' :
                                  'bg-green-100 text-green-600'
                                }`}>
                                {dept.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-gray-400 hover:text-saffron transition-all p-1 hover:bg-saffron/5 rounded">
                                <Settings size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Complaint Monitoring' && (
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm border-t-4 border-t-saffron">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-navy uppercase text-xs tracking-widest text-gray-400">Real-time Complaint Stream</h3>
                  <div className="flex space-x-2">
                    <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <span className="text-[10px] font-bold text-gray-400">FILTER:</span>
                      <select className="bg-transparent text-[10px] font-bold text-navy outline-none">
                        <option>All Status</option>
                        <option>Escalated</option>
                        <option>Pending</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { id: 'C-1001', title: 'Street Light Failure', dept: 'Electricity', time: '2h ago', status: 'Pending', priority: 'Medium' },
                    { id: 'C-1002', title: 'Water Leakage Main Rd', dept: 'Civic Services', time: '5h ago', status: 'Escalated', priority: 'High' },
                    { id: 'C-1003', title: 'Teacher Absence', dept: 'Education', time: '1d ago', status: 'Assigned', priority: 'High' },
                  ].map((item) => (
                    <div key={item.id} className="p-4 bg-gray-50/50 rounded-lg border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-all cursor-pointer group">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-10 rounded ${item.status === 'Escalated' ? 'bg-red-500' : 'bg-saffron'}`}></div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-bold text-gray-400">{item.id}</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.status === 'Escalated' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>{item.status.toUpperCase()}</span>
                          </div>
                          <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                          <span className="text-[10px] text-gray-400 italic">Affected Area: Block A, Market St. ({item.dept})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">{item.time}</p>
                        <button className="mt-1 text-saffron text-xs font-bold opacity-0 group-hover:opacity-100 transition-all">TAKE ACTION →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Geo Heatmap Analytics' && (
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm overflow-hidden h-screen max-h-[700px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-navy uppercase text-xs tracking-widest text-gray-400">Constituency Intelligence Heatmap</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold text-gray-500">CRITICAL ZONES</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-saffron rounded-full"></div>
                      <span className="text-[10px] font-bold text-gray-500">HIGH DENSITY</span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center relative border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  <div className="z-10 text-center">
                    <Map size={80} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Processing Geo-tag Data...</p>
                    <button className="mt-4 px-6 py-2 border-2 border-saffron text-saffron font-bold rounded-full hover:bg-saffron hover:text-white transition-all text-xs">LAUNCH FULL ANALYTICS</button>
                  </div>
                  <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-saffron/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
