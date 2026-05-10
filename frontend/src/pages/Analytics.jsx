import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, 
  Brain, 
  Zap, 
  Clock, 
  Calendar, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const moodData = [
  { name: 'Mon', score: 8 },
  { name: 'Tue', score: 6 },
  { name: 'Wed', score: 7 },
  { name: 'Thu', score: 5 },
  { name: 'Fri', score: 9 },
  { name: 'Sat', score: 8 },
  { name: 'Sun', score: 7 },
];

const productivityData = [
  { name: 'Week 1', tasks: 12, hours: 24 },
  { name: 'Week 2', tasks: 18, hours: 32 },
  { name: 'Week 3', tasks: 15, hours: 28 },
  { name: 'Week 4', tasks: 22, hours: 40 },
];

const subjectData = [
  { name: 'Math', value: 400, color: '#6366F1' },
  { name: 'Physics', value: 300, color: '#8B5CF6' },
  { name: 'Design', value: 300, color: '#06B6D4' },
  { name: 'English', value: 200, color: '#10B981' },
];

const StatHighlight = ({ icon, label, value, trend, color }) => (
  <div className="card !p-8 flex flex-col gap-4">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg`}>
      {icon}
    </div>
    <div>
      <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-1">{label}</p>
      <div className="flex items-end gap-3">
        <h3 className="text-4xl font-bold font-outfit">{value}</h3>
        {trend && (
          <span className="text-wellness-positive text-sm font-bold flex items-center gap-1 mb-1">
            <TrendingUp className="w-4 h-4" /> {trend}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold font-outfit mb-2">System Analytics</h1>
          <p className="text-slate-500 font-medium italic">"Data-driven insights for your personal growth."</p>
        </div>
        <button className="btn-primary">
          <Calendar className="w-5 h-5" /> Export Report
        </button>
      </div>

      {/* High-level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatHighlight 
          icon={<Zap className="w-7 h-7" />} 
          label="Productivity" 
          value="92.4%" 
          trend="+5.2%" 
          color="bg-primary" 
        />
        <StatHighlight 
          icon={<Brain className="w-7 h-7" />} 
          label="Avg. Mood" 
          value="Great" 
          trend="Stable" 
          color="bg-wellness-purple" 
        />
        <StatHighlight 
          icon={<Award className="w-7 h-7" />} 
          label="Total XP" 
          value="12,450" 
          trend="+1,200" 
          color="bg-wellness-cyan" 
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mood Trends Chart */}
        <div className="card !p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold font-outfit">Mood Trends</h3>
            <select className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm font-bold text-slate-500 focus:ring-0">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366F1" strokeWidth={4} fillOpacity={1} fill="url(#colorMood)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Productivity vs Time */}
        <div className="card !p-8">
          <h3 className="text-2xl font-bold font-outfit mb-8">Study Hours vs Tasks</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600}} />
                <Tooltip 
                  cursor={{fill: '#F1F5F9'}}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="tasks" fill="#8B5CF6" radius={[6, 6, 0, 0]} barSize={20} />
                <Bar dataKey="hours" fill="#06B6D4" radius={[6, 6, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-wellness-purple" />
              <span className="text-xs font-bold text-slate-500">Tasks Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-wellness-cyan" />
              <span className="text-xs font-bold text-slate-500">Hours Studied</span>
            </div>
          </div>
        </div>

        {/* Subject Breakdown */}
        <div className="card !p-8">
          <h3 className="text-2xl font-bold font-outfit mb-8">Subject Distribution</h3>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="h-[250px] w-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={subjectData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {subjectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-4 w-full">
              {subjectData.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-hover hover:border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="font-bold text-slate-700">{s.name}</span>
                  </div>
                  <span className="font-bold">{s.value} XP</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="card !p-8 bg-gradient-to-br from-slate-900 to-indigo-950 text-white border-none">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold font-outfit">Predictive AI Insights</h3>
          </div>
          <div className="space-y-6">
            {[
              "Your focus peaks between 9 AM and 11 AM. Schedule your Math assignments then.",
              "Study sessions longer than 90 mins show a 40% decline in task retention.",
              "Friday shows the highest stress levels. Recommend a lighter schedule or active recovery."
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all cursor-default">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                   <Clock className="w-5 h-5" />
                </div>
                <p className="font-medium text-slate-300 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 btn-primary py-4">Generate Weekly Strategy</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
