import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Shield, ArrowRight, CheckCircle2, Sparkles, MessageSquare, Calendar, BarChart3 } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen mesh-gradient overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 py-6 px-8 flex justify-between items-center glass">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary rounded-2xl shadow-lg shadow-primary/20">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold font-outfit tracking-tight">MindMate <span className="text-primary">AI</span></span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="font-semibold text-slate-600 hover:text-primary transition-colors">Features</a>
          <a href="#" className="font-semibold text-slate-600 hover:text-primary transition-colors">How it works</a>
          <a href="#" className="font-semibold text-slate-600 hover:text-primary transition-colors">Community</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex font-bold text-slate-700 hover:text-primary transition-colors mr-4">Log in</button>
          <button onClick={onGetStarted} className="btn-primary">Get Started <ArrowRight className="w-5 h-5" /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Next Gen Student Wellness Platform</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold font-outfit leading-[1.1] mb-8">
              Navigate Student Life with <span className="text-gradient">Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              The AI-powered companion designed to balance your mental wellness, boost productivity, and master your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={onGetStarted} className="btn-primary text-lg px-8 py-4">Start Your Journey</button>
              <button className="btn-secondary text-lg px-8 py-4">Watch Demo</button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-slate-500 font-medium">Joined by <span className="text-slate-900 font-bold">10,000+</span> students</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-wellness-cyan/30 blur-[120px] -z-10 rounded-full" />
            <div className="glass rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
               <div className="bg-slate-900 aspect-video rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Brain className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">MindMate AI Assistant</h3>
                    <p className="text-slate-400">"How can I help you focus today?"</p>
                  </div>
               </div>
               
               {/* Floating Widgets */}
               <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-8 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border-wellness-positive/20"
               >
                  <div className="w-10 h-10 rounded-xl bg-wellness-positive/20 flex items-center justify-center text-wellness-positive">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Current Mood</p>
                    <p className="font-bold">Feeling Calm</p>
                  </div>
               </motion.div>

               <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-8 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border-primary/20"
               >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Productivity</p>
                    <p className="font-bold">92% Score</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-6">Designed for your <span className="text-gradient">Wellbeing.</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Everything you need to thrive in a high-pressure academic environment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare />, title: "AI Companion", desc: "Emotional support & academic guidance 24/7.", color: "bg-blue-500" },
              { icon: <Calendar />, title: "Smart Planner", desc: "AI-generated study schedules that adapt to you.", color: "bg-purple-500" },
              { icon: <BarChart3 />, title: "Wellness Insights", desc: "Track your mood, stress & focus levels.", color: "bg-emerald-500" },
              { icon: <Heart />, title: "Crisis Support", desc: "Immediate access to mental health resources.", color: "bg-red-500" },
              { icon: <Zap />, title: "Productivity Hub", desc: "Pomodoro, task tracking & focus mode.", color: "bg-orange-500" },
              { icon: <Shield />, title: "Privacy First", desc: "Your data is encrypted and secure.", color: "bg-slate-700" }
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="card group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${f.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-200`}>
                  {React.cloneElement(f.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-wellness-cyan/20 blur-[100px] -z-10" />
          
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-8">Ready to transform your <br/><span className="text-gradient">Student Experience?</span></h2>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">Join thousands of students who are already using MindMate AI to achieve more with less stress.</p>
          <button onClick={onGetStarted} className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-primary/40 mx-auto">Get Started Free</button>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-500 font-medium">
        <p>© 2026 MindMate AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
