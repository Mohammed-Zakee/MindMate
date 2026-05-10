import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Brain,
  Zap,
  Target,
  Clock,
  ChevronRight,
  Plus,
  Smile,
  Meh,
  Frown,
  MoreVertical,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { id: 'chat', icon: <MessageSquare />, label: 'AI Chat' },
    { id: 'planner', icon: <Calendar />, label: 'Planner' },
    { id: 'analytics', icon: <BarChart3 />, label: 'Analytics' },
    { id: 'settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-24 lg:w-72 glass border-r flex flex-col p-6 z-50">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="p-2 bg-primary rounded-xl shrink-0">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold font-outfit hidden lg:block">MindMate <span className="text-primary">AI</span></span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
              activeTab === item.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
            }`}
          >
            <span className="shrink-0">{React.cloneElement(item.icon, { className: "w-6 h-6" })}</span>
            <span className="font-bold hidden lg:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-4 pt-6 border-t">
        <div className="hidden lg:flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=42" alt="avatar" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm truncate">Alex Johnson</p>
            <p className="text-xs text-slate-500 truncate">Pro Student</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:text-red-500 transition-colors">
          <LogOut className="w-6 h-6 shrink-0" />
          <span className="font-bold hidden lg:block">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold font-outfit mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-slate-500 font-medium italic">"Focus on progress, not perfection."</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass px-4 py-2.5 rounded-2xl flex items-center gap-3 border-wellness-positive/20">
             <div className="w-2 h-2 rounded-full bg-wellness-positive animate-pulse" />
             <span className="font-bold text-sm">Focus Mode Active</span>
          </div>
          <button className="p-3 glass rounded-2xl hover:text-primary transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Productivity', value: '85%', color: 'text-primary', bg: 'bg-primary/10', icon: <Zap /> },
          { label: 'Study Streak', value: '12 Days', color: 'text-wellness-purple', bg: 'bg-wellness-purple/10', icon: <Target /> },
          { label: 'Deep Work', value: '4.2h', color: 'text-wellness-cyan', bg: 'bg-wellness-cyan/10', icon: <Clock /> },
          { label: 'Mood Score', value: 'Great', color: 'text-wellness-positive', bg: 'bg-wellness-positive/10', icon: <Smile /> },
        ].map((stat, i) => (
          <div key={i} className="card !p-6 flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
              {React.cloneElement(stat.icon, { className: "w-7 h-7" })}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold font-outfit">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tasks Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card !p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold font-outfit">Upcoming Tasks</h3>
              <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors"><MoreVertical className="w-5 h-5 text-slate-400" /></button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Advanced Calculus Assignment', tag: 'Academic', time: 'Due in 2h', color: 'bg-blue-500' },
                { title: 'User Research Project', tag: 'Project', time: 'Tomorrow', color: 'bg-purple-500' },
                { title: 'Daily Meditation', tag: 'Wellness', time: 'Completed', done: true, color: 'bg-emerald-500' },
              ].map((task, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all ${task.done ? 'bg-slate-50 opacity-60' : 'bg-white shadow-sm'}`}>
                  <div className={`w-1.5 h-10 rounded-full ${task.color}`} />
                  <div className="flex-1">
                    <h4 className={`font-bold ${task.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>{task.title}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 uppercase">{task.tag}</span>
                      <span className="text-xs font-medium text-slate-400">{task.time}</span>
                    </div>
                  </div>
                  <button className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${task.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200'}`}>
                    {task.done && <CheckCircle2 className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              Add New Task
            </button>
          </div>
        </div>

        {/* AI Recommendations & Mood */}
        <div className="space-y-8">
          <div className="card !p-8 bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-none relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><Brain className="w-32 h-32" /></div>
             <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-indigo-200" />
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-100">AI Assistant Insights</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Taking a 10-min break now would boost your focus by 30%.</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6">Based on your deep work patterns today, your brain needs a quick reset before the next session.</p>
                <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold shadow-xl shadow-black/10 hover:bg-indigo-50 transition-colors">Apply Suggestion</button>
             </div>
          </div>

          <div className="card !p-8">
            <h3 className="text-xl font-bold mb-6">How are you feeling?</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Smile />, label: 'Good' },
                { icon: <Meh />, label: 'Neutral' },
                { icon: <Frown />, label: 'Bad' },
              ].map((m, i) => (
                <button key={i} className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {React.cloneElement(m.icon, { className: "w-8 h-8" })}
                  </div>
                  <span className="text-xs font-bold text-slate-500">{m.label}</span>
                </button>
              ))}
            </div>
            <div className="p-4 bg-wellness-cyan/10 rounded-2xl border border-wellness-cyan/20">
               <p className="text-xs font-bold text-wellness-cyan mb-1">PRO TIP</p>
               <p className="text-sm font-medium text-slate-600">Students who track mood daily improve productivity by 15%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="lg:ml-72 p-6 lg:p-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dashboard' && <DashboardHome />}
            {activeTab === 'chat' && (
              <div className="flex flex-col h-[calc(100vh-80px)] glass rounded-[2rem] overflow-hidden">
                <div className="p-6 border-b flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 text-primary rounded-xl"><Brain /></div>
                    <div>
                      <h2 className="font-bold">MindMate AI Companion</h2>
                      <p className="text-xs text-wellness-positive flex items-center gap-1 font-bold"><span className="w-1.5 h-1.5 bg-wellness-positive rounded-full animate-pulse" /> Always Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-8 overflow-y-auto space-y-6">
                   <div className="flex gap-4 max-w-2xl">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20"><Brain className="w-6 h-6" /></div>
                      <div className="p-5 bg-white rounded-3xl rounded-tl-none shadow-sm border border-slate-100">
                        <p className="text-slate-700 leading-relaxed font-medium">Hello Alex! I noticed you have been studying for 2 hours straight. How are you feeling? Remember to breathe. 🧘‍♂️</p>
                      </div>
                   </div>
                   <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0"><img src="https://i.pravatar.cc/150?u=42" className="rounded-full" /></div>
                      <div className="p-5 bg-primary text-white rounded-3xl rounded-tr-none shadow-lg shadow-primary/20">
                        <p className="leading-relaxed font-medium">I'm feeling a bit stressed about the calculus exam. Can you help me plan a quick review?</p>
                      </div>
                   </div>
                </div>
                <div className="p-6 border-t flex gap-4">
                  <input type="text" placeholder="Type your message..." className="input-field" />
                  <button className="btn-primary aspect-square !px-4"><MessageSquare className="w-6 h-6" /></button>
                </div>
              </div>
            )}
            {activeTab !== 'dashboard' && activeTab !== 'chat' && (
              <div className="flex flex-col items-center justify-center py-40">
                <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-8 animate-bounce"><Target className="w-16 h-16" /></div>
                <h2 className="text-3xl font-bold font-outfit text-slate-800">Coming Soon</h2>
                <p className="text-slate-500 mt-4 font-medium">The {activeTab} module is under development.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
