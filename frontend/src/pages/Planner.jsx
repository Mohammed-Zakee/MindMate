import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  BookOpen, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const scheduleData = [
  { time: '08:00 AM', event: 'Morning Focus: Math', type: 'study', duration: '2h' },
  { time: '10:00 AM', event: 'Active Recovery: Meditation', type: 'wellness', duration: '30m' },
  { time: '11:00 AM', event: 'Physics Lab Report', type: 'assignment', duration: '1.5h' },
  { time: '01:00 PM', event: 'Lunch Break', type: 'break', duration: '1h' },
  { time: '02:00 PM', event: 'User Research Synthesis', type: 'project', duration: '2h' },
  { time: '04:00 PM', event: 'Peer Review Session', type: 'academic', duration: '1h' },
];

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold font-outfit mb-2">Study Planner</h1>
          <p className="text-slate-500 font-medium italic">"A goal without a plan is just a wish."</p>
        </div>
        <div className="flex gap-4">
           <button className="btn-secondary !px-4"><Plus className="w-5 h-5" /> Quick Add</button>
           <button className="btn-primary">Generate AI Plan</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="card !p-8 h-fit">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold font-outfit">May 2026</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <span key={i} className="text-xs font-bold text-slate-400 uppercase">{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === 10;
              const isSelected = day === 10;
              return (
                <button 
                  key={i} 
                  className={`aspect-square rounded-xl flex items-center justify-center font-bold text-sm transition-all
                    ${isSelected ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'hover:bg-slate-50 text-slate-600'}
                    ${isToday && !isSelected ? 'text-primary border border-primary/20' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-10 p-6 bg-wellness-cyan/10 rounded-2xl border border-wellness-cyan/20">
            <div className="flex items-center gap-2 text-wellness-cyan mb-2">
               <AlertCircle className="w-4 h-4" />
               <span className="text-xs font-bold uppercase tracking-wider">Exam Alert</span>
            </div>
            <p className="text-sm font-bold text-slate-700">Calculus Finals in 4 days.</p>
            <p className="text-xs text-slate-500 mt-1">AI recommends increasing Math focus time by 20% this week.</p>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card !p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">10</div>
                <div>
                  <h3 className="text-xl font-bold font-outfit">Today's Schedule</h3>
                  <p className="text-sm text-slate-500 font-medium">Monday, May 10th 2026</p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors"><MoreHorizontal className="w-6 h-6 text-slate-400" /></button>
            </div>

            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {scheduleData.map((item, i) => (
                <div key={i} className="flex gap-6 relative group">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-md z-10 mt-1 transition-all group-hover:scale-125
                    ${item.type === 'study' ? 'bg-primary' : 
                      item.type === 'wellness' ? 'bg-wellness-positive' : 
                      item.type === 'break' ? 'bg-slate-300' : 'bg-wellness-purple'}
                  `} />
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl border border-slate-50 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[70px]">
                        <p className="text-xs font-bold text-slate-400">{item.time}</p>
                        <p className="text-[10px] font-bold text-slate-500 bg-slate-100 rounded px-1 mt-1">{item.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{item.event}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-300 hover:text-primary transition-colors"><Clock className="w-5 h-5" /></button>
                       <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-300 hover:text-wellness-positive transition-colors"><CheckCircle2 className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;
