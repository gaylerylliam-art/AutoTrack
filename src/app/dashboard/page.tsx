"use client";

export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getFinancialInsights } from "@/lib/uae-insights";
import { useAuth, withAuth } from "@/context/AuthContext";
import { TrendingUp, Car, Receipt, FileText, Settings, ShieldCheck, ChevronRight } from "lucide-react";

/**
 * PREMIUM UAE SAAS DASHBOARD
 * Features: 64-72px Typography, VAT Tracking, Asset Intelligence.
 */
const PremiumDashboard = () => {
    const { user } = useAuth();
    const [activeVehicle, setActiveVehicle] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [insights, setInsights] = useState({ vatPaid: 0, taxSavedPotential: 0, fuelTrend: "0", isIncreasing: false });

    useEffect(() => {
        if (!user) return;
        fetchData();
    }, [user]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await supabase.from('vehicles').select('*');
            if (data && data.length > 0) setActiveVehicle(data[0]);

            const mockInsights = getFinancialInsights([
                { amount: 1200, tax_amount: 60 },
                { amount: 850, tax_amount: 42.5 }
            ]);
            setInsights(mockInsights);
        } catch (err) {
            console.error("Dashboard Load Error:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-20 text-slate-400 font-black uppercase text-xs tracking-widest">Syncing AutoTrack Intelligence...</div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
            <div className="mx-auto max-w-[1400px] px-8 py-12">
                
                {/* 64-72px TYPOGRAPHY HIERARCHY */}
                <header className="mb-16">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                        <ShieldCheck size={14} className="text-teal-500" /> AutoTrack UAE Edition
                    </div>
                    <h1 className="text-[64px] font-black leading-[1.05] tracking-tight md:text-[72px]">
                        Your fleet. <span className="font-medium text-slate-400 italic">Automated.</span>
                    </h1>
                </header>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-4 mb-20">
                    {/* Insights Cards */}
                    <div className="group rounded-[2rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-soft">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">UAE VAT Saved</p>
                        <h2 className="text-5xl font-black">AED {insights.taxSavedPotential}</h2>
                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-teal-500">
                             <TrendingUp size={16} /> 5% Recovered this month
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-[#0F172A] p-10 shadow-soft">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Fuel Trends</p>
                        <h2 className="text-5xl font-black text-white">{insights.fuelTrend}%</h2>
                        <div className={`mt-6 text-sm font-bold ${insights.isIncreasing ? 'text-rose-400' : 'text-teal-400'}`}>
                            {insights.isIncreasing ? 'Higher than avg.' : 'Optimized range'}
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-teal-50 p-10 border border-teal-100">
                        <p className="text-xs font-black uppercase tracking-widest text-teal-600/50 mb-6">Active Vehicle</p>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-teal-200"><Car className="text-teal-600" /></div>
                            <div>
                                <h3 className="font-black text-teal-900">{activeVehicle?.make || 'Fleet'} {activeVehicle?.model || 'Alpha'}</h3>
                                <p className="text-xs font-bold text-teal-600/70">{activeVehicle?.plate_number || 'DUBAI A 1029'}</p>
                            </div>
                        </div>
                        <button className="mt-8 flex w-full items-center justify-between rounded-xl bg-white px-6 py-4 text-sm font-black text-teal-900 shadow-sm hover:scale-105 active:scale-95 transition-all">
                            Switch Vehicle <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-black tracking-tight">Recent Automatic Trips</h3>
                        </div>
                        <div className="space-y-4">
                            {[1].map((_, i) => (
                                <div key={i} className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm border border-slate-50">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400"><Settings size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 leading-none">Business Visit</h4>
                                            <p className="mt-2 text-xs font-bold text-slate-400">12.4 km • Auto-Classified</p>
                                        </div>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-4 py-1 text-[10px] font-black uppercase text-slate-500 tracking-widest">Business</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default withAuth(PremiumDashboard);
