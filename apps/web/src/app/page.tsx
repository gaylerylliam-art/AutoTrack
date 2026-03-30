import React from 'react';
import Link from 'next/link';
import { Shield, TrendingUp, Layers, UserCheck } from 'lucide-react';

/* 
 * AutoTrack Landing Page for Live Demo 
 * Inspired by Everlance, MileIQ, and Modern Fintech SaaS.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-teal-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#0F172A] p-1.5 shadow-lg">
                <div className="h-full w-full rounded-sm bg-teal-400" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">AutoTrack</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
             <a href="#features" className="hover:text-teal-500 transition-colors">Features</a>
             <a href="#compliance" className="hover:text-teal-500 transition-colors">Compliance</a>
             <a href="#pricing" className="hover:text-teal-500 transition-colors">Pricing</a>
          </div>
          <Link href="/dashboard" className="rounded-xl bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
             Open Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
             <div className="h-[600px] w-[600px] rounded-full bg-indigo-50/50 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
             <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
             Live Demo Built for Production
          </div>
          <h1 className="mt-8 text-5xl font-black tracking-tight text-[#0F172A] md:text-7xl leading-[1.1]">
            Vehicle Financial Intelligence <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">for Modern Fleets.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-500">
            Automated expense tracking, real-time depreciation engines, and comprehensive fleet compliance. Experience the SaaS standard for vehicle asset lifecycle.
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
             <Link href="/dashboard" className="flex items-center justify-center h-14 rounded-2xl bg-[#0F172A] px-8 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-slate-800">
               Start 30-Day Free Trial
             </Link>
             <button className="h-14 rounded-2xl border-2 border-slate-100 bg-white px-8 text-base font-bold text-slate-600 shadow-sm transition-all hover:bg-slate-50">
               Watch Demo Video
             </button>
          </div>
        </div>
      </section>

      {/* Feature Soft Cards Section */}
      <section id="features" className="px-6 pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
             
             {/* Card 1: Expenses */}
             <div className="relative group overflow-hidden rounded-[2.5rem] border border-white bg-white p-10 shadow-2xl shadow-slate-100 transition-all hover:-translate-y-2">
                <div className="absolute bottom-[-40px] right-[-40px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                    <Shield size={200} className="text-[#0F172A]" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0FDF4] text-teal-600 shadow-sm">
                   <TrendingUp size={24} />
                </div>
                <h3 className="mt-8 text-xl font-bold text-[#0F172A]">Financial Analytics</h3>
                <p className="mt-4 font-medium leading-relaxed text-slate-500">
                   Real-time expense categorization with VAT isolation and regional tax recovery intelligence.
                </p>
             </div>

             {/* Card 2: Fleet Intelligence */}
             <div className="relative group overflow-hidden rounded-[2.5rem] border border-white bg-white p-10 shadow-2xl shadow-slate-100 transition-all hover:-translate-y-2">
                <div className="absolute bottom-[-40px] right-[-40px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                    <Layers size={200} className="text-[#0F172A]" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-blue-600 shadow-sm">
                   <Layers size={24} />
                </div>
                <h3 className="mt-8 text-xl font-bold text-[#0F172A]">Fleet OS</h3>
                <p className="mt-4 font-medium leading-relaxed text-slate-500">
                   Manage drivers, maintenance lifecycles, and vehicle assignments from a single production-grade dashboard.
                </p>
             </div>

             {/* Card 3: Compliance */}
             <div className="relative group overflow-hidden rounded-[2.5rem] border border-white bg-white p-10 shadow-2xl shadow-slate-100 transition-all hover:-translate-y-2">
                <div className="absolute bottom-[-40px] right-[-40px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                    <UserCheck size={200} className="text-[#0F172A]" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F3FF] text-indigo-600 shadow-sm">
                   <Shield size={24} />
                </div>
                <h3 className="mt-8 text-xl font-bold text-[#0F172A]">Legal Compliance</h3>
                <p className="mt-4 font-medium leading-relaxed text-slate-500">
                   GDPR/CCPA compliant data handling, versioned consent logging, and secure driver verification.
                </p>
             </div>

          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="mx-auto mb-20 max-w-6xl px-6">
        <div className="rounded-[3rem] bg-[#0F172A] p-12 text-center text-white shadow-3xl">
           <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Ready to automate your fleet intelligence?</h2>
           <p className="mx-auto mt-6 max-w-xl text-slate-400 font-medium">
             Join over 500 organizations managing £1B+ in vehicle assets with AutoTrack. 
           </p>
           <Link href="/dashboard" className="flex items-center justify-center mt-10 h-16 rounded-2xl bg-white px-10 text-lg font-black text-slate-900 shadow-lg transition-transform hover:scale-105 active:scale-95">
             Create Your Free Account
           </Link>
        </div>
        <div className="mt-12 text-center text-sm font-bold text-slate-400">
           © 2026 AutoTrack Financial Intelligence. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
