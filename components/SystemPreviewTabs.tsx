"use client";

import { useState } from 'react';
import { Monitor, ShoppingCart, BarChart3 } from 'lucide-react';

export default function SystemPreviewTabs() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'pos' | 'reports'>('dashboard');

    const previewFeatures = [
        {
            id: 'dashboard',
            icon: Monitor,
            title: "Dashboard ພາບລວມ",
            desc: "ສະແດງຍອດຂາຍແບບ Real-time, ສິນຄ້າຂາຍດີ, ແລະ ສະຖິຕິຕ່າງໆ ເພື່ອໃຫ້ທ່ານວາງແຜນທຸລະກິດໄດ້ທັນທີ.",
            color: "text-amber-500",
            border: "border-amber-500/50",
            bg: "bg-amber-500/10",
            content: "Dashboard Overview Screen"
        },
        {
            id: 'pos',
            icon: ShoppingCart,
            title: "POS ໜ້າຂາຍ",
            desc: "ອອກແບບມາໃຫ້ຄິດເງິນໄວ, ຮອງຮັບການຍິງບາໂຄດ, ພັກບິນ, ແລະ ຫຼາຍຊ່ອງທາງການຊຳລະເງິນ.",
            color: "text-blue-500",
            border: "border-blue-500/50",
            bg: "bg-blue-500/10",
            content: "POS Cashier Screen"
        },
        {
            id: 'reports',
            icon: BarChart3,
            title: "ລາຍງານລະອຽດ",
            desc: "ລາຍງານຍອດຂາຍ, ກຳໄລ-ຂາດທຶນ, ສະຕັອກຄົງເຫຼືອ ແລະ ປະຫວັດການຂາຍ ຢ່າງລະອຽດ.",
            color: "text-green-500",
            border: "border-green-500/50",
            bg: "bg-green-500/10",
            content: "Detailed Reports Screen"
        }
    ];

    const activeFeature = previewFeatures.find(f => f.id === activeTab) || previewFeatures[0];

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Text Content - Clickable Tabs */}
            <div className="space-y-6 order-2 lg:order-1">
                {previewFeatures.map((feature) => (
                    <div
                        key={feature.id}
                        onClick={() => setActiveTab(feature.id as any)}
                        className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeTab === feature.id ? `bg-slate-800 ${feature.border} shadow-lg shadow-${feature.color}/5` : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-600'}`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`mt-1 p-2 rounded-lg ${activeTab === feature.id ? feature.bg : 'bg-slate-700/30'} transition-colors duration-300`}>
                                <feature.icon className={`${activeTab === feature.id ? feature.color : 'text-slate-400'} w-6 h-6 transition-colors duration-300`} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${activeTab === feature.id ? 'text-white' : 'text-slate-300'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm transition-colors duration-300 ${activeTab === feature.id ? 'text-slate-300' : 'text-slate-500'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Image Content (Mockup) */}
            <div className="relative order-1 lg:order-2">
                {/* Main Laptop Screen Mockup */}
                <div className="relative z-10 bg-slate-900 border-8 border-slate-800 rounded-xl shadow-2xl overflow-hidden aspect-video transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-6 bg-slate-800 flex items-center px-4 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="pt-6 h-full bg-slate-900 flex items-center justify-center text-slate-700 relative overflow-hidden group">
                        {/* Animated Content Transition */}
                        <div key={activeTab} className="animate-fade-in-up w-full h-full flex flex-col items-center justify-center bg-slate-800/50">
                            <activeFeature.icon className={`w-16 h-16 ${activeFeature.color} mb-4 opacity-50`} />
                            <span className={`text-2xl font-bold ${activeFeature.color}`}>{activeFeature.content}</span>
                            <span className="text-sm text-slate-500 mt-2">1920x1080</span>
                        </div>
                    </div>
                </div>

                {/* Floating Mobile Mockup */}
                <div className="absolute -bottom-10 -right-5 w-1/3 aspect-[9/19] bg-slate-900 border-8 border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 pointer-events-none">
                    <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center">
                        <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                    </div>
                    <div className="h-full bg-slate-800 flex items-center justify-center text-slate-600 text-xs text-center p-2">
                        <div key={activeTab} className="animate-fade-in-up w-full h-full flex flex-col items-center justify-center">
                            <activeFeature.icon className={`w-8 h-8 ${activeFeature.color} mb-2 opacity-50`} />
                            <span className={`${activeFeature.color} font-bold`}>Mobile App</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
