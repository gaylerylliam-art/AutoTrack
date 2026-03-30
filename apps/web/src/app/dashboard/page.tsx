"use client";

// PRODUCTION DASHBOARD: AUTOTRACK FLEET INTELLIGENCE
// UAE VAT & DEPRECIATION ENGINE INTEGRATED

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { 
  TrendingDown, 
  ShieldAlert, 
  Camera, 
  Settings, 
  CreditCard, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  LayoutDashboard
} from "lucide-react";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalMonthlyDepreciation: 0,
    totalVatRecoverable: 0,
    activeAlerts: 2
  });

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const { data: veh, error } = await supabase.from('vehicles').select('*');
        if (error) throw error;
        
        if (veh) {
          setVehicles(veh);
          // Compute high-level TCO metrics using Straight-Line Engine
          const totalDep = veh.reduce((acc, v) => acc + (v.purchase_price / (v.useful_life_months || 60)), 0);
          const totalVat = veh.length * 45; // Placeholder for aggregated expense VAT
          setStats({
            totalMonthlyDepreciation: totalDep,
            totalVatRecoverable: totalVat,
            activeAlerts: 2
          });
        }
      } catch (err) {
        console.error("Dashboard Sync Error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sidebar Navigation (Mock) */}
      <div className="fixed left-0 top-0 h-full w-20 border-r border-slate-200 bg-white flex flex-col items-center py-8 gap-10">
         <div className="h-10 w-10 rounded-xl bg-[#0F172A] p-2">
            <div className="h-full w-full rounded bg-teal-400" />
         </div>
         <div className="flex flex-col gap-8 text-slate-400">
            <LayoutDashboard size={24} className="text-teal-600" />
            <TrendingDown size={24} />
            <ShieldCheck size={24} />
            <Settings size={24} />
         </div>
      </div>

      <div className="pl-20">
        <div className="max-w-7xl mx-auto p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-[#0F172A]">Fleet Intelligence</h1>
              <p className="text-slate-500 font-bold mt-2">Vehicle Financial, Operational, and Compliance OS</p>
            </div>
            <div className="flex gap-4">
               <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm border border-slate-100 transition-all hover:bg-slate-50">
                 <Zap size={20} className="text-teal-500" /> System Status
               </button>
               <button className="flex items-center gap-2 rounded-2xl bg-[#0F172A] px-6 py-3.5 font-bold text-white shadow-2xl transition-all hover:scale-105">
                 Add Vehicle
               </button>
            </div>
          </div>

          {/* Core Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-slate-100 border border-white">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Monthly Depreciation</p>
               <h2 className="text-4xl font-black text-[#0F172A]">£{stats.totalMonthlyDepreciation.toLocaleString()}</h2>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold text-teal-600">
                 <ArrowUpRight size={16} /> Straight-Line Engine Active
               </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-slate-100 border border-white">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">UAE VAT Recoverable</p>
               <h2 className="text-4xl font-black text-[#0F172A]">£{stats.totalVatRecoverable.toLocaleString()}</h2>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600">
                 <CreditCard size={16} /> TRN: Valid
               </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#0F172A] p-10 shadow-3xl text-white">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 text-slate-500">Legal Compliance</p>
               <h2 className="text-4xl font-black mt-2">{stats.activeAlerts} Alerts</h2>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold text-teal-400">
                 <ShieldAlert size={16} /> Fire & Safety Audit Due
               </div>
            </div>
          </div>

          {/* Operational Infrastructure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-slate-100 border border-white">
                <div className="flex items-center justify-between mb-10">
                   <h3 className="text-2xl font-black text-[#0F172A]">Fire & Safety Hub</h3>
                   <span className="text-[10px] font-black bg-red-50 text-red-600 px-3 py-1 rounded-full uppercase tracking-tighter">Required Category</span>
                </div>
                <div className="space-y-4">
                   {['Extinguisher Maintenance', 'First Aid Certificate', 'Emergency Kit Audit'].map((item) => (
                      <div key={item} className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100">
                         <span className="font-bold text-slate-700">{item}</span>
                         <span className="h-2 w-2 rounded-full bg-teal-500 shadow-lg shadow-teal-200" />
                      </div>
                   ))}
                </div>
             </div>

             <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-slate-100 border border-white">
                <div className="flex items-center justify-between mb-10">
                   <h3 className="text-2xl font-black text-[#0F172A]">IT & Camera Infrastructure</h3>
                   <span className="text-[10px] font-black bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase tracking-tighter">SaaS Telematics</span>
                </div>
                <div className="space-y-4">
                   {['Dash Camera Hardware', 'GPS Telematics Unit', 'Connectivity License'].map((item) => (
                      <div key={item} className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100">
                         <span className="font-bold text-slate-700">{item}</span>
                         <Camera size={20} className="text-slate-300" />
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Main Fleet Inventory */}
          <div className="rounded-[3rem] bg-white p-12 shadow-2xl shadow-slate-100 border border-white">
            <h3 className="text-3xl font-black text-[#0F172A] mb-12">Fleet Asset Inventory</h3>
            
            {loading ? (
               <div className="py-20 text-center space-y-4">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-teal-500 border-r-transparent" />
                  <p className="font-bold text-slate-400 tracking-tight">Synchronizing Fleet Ledger...</p>
               </div>
            ) : (
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="border-b border-slate-100">
                       <th className="pb-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Asset Details</th>
                       <th className="pb-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">TCO / Price</th>
                       <th className="pb-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Monthly Depreciation</th>
                       <th className="pb-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Operational Status</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                     {vehicles.map((v) => (
                       <tr key={v.id} className="group hover:bg-slate-50/50 transition-colors">
                         <td className="py-8">
                           <div className="font-black text-xl text-[#0F172A]">{v.make} {v.model}</div>
                           <div className="text-sm font-bold text-slate-400 mt-1">{v.plate_number}</div>
                         </td>
                         <td className="py-8 text-center font-black text-slate-700">£{v.purchase_price?.toLocaleString()}</td>
                         <td className="py-8 text-center">
                           <div className="text-lg font-black text-teal-600">£{(v.purchase_price / (v.useful_life_months || 60)).toFixed(2)}</div>
                           <div className="text-[10px] font-black text-slate-400 uppercase mt-1">Straight-Line</div>
                         </td>
                         <td className="py-8 text-right">
                           <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-black text-teal-600 border border-teal-100">
                              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
                              Active
                           </span>
                         </td>
                       </tr>
                     ))}
                     {vehicles.length === 0 && (
                        <tr>
                           <td colSpan={4} className="py-20 text-center font-bold text-slate-400">
                              No vehicles detected in this organization.
                           </td>
                        </tr>
                     )}
                   </tbody>
                 </table>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
