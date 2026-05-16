"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { content } from "../../lib/content";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Monitor, ShoppingCart, BarChart3, ChevronDown, MousePointer2, LayoutGrid } from 'lucide-react';
import SystemPreviewTabs from '@/components/SystemPreviewTabs';
import Footer from "../../components/Footer";
import BgHero from "../../public/backgrounds/bg-hero1.jpg"; // Reusing existing assets

export default function PosPage() {
  const [scrolled, setScrolled] = useState(false);
  const t = content.la; // Hardcoded Lao as requested

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "ຈັດການສະຕັອກ",
      desc: "ຕິດຕາມສິນຄ້າເຂົ້າ-ອອກ, ແຈ້ງເຕືອນເມື່ອໃກ້ໝົດ, ແລະ ຈັດການສາງສິນຄ້າໄດ້ຢ່າງມີປະສິດທິພາບ.",
      icon: LayoutGrid,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Points of Sale",
      desc: "ໜ້າຂາຍທີ່ອອກແບບມາໃຫ້ໃຊ້ງານງ່າຍ, ຮອງຮັບການຍິງບາໂຄດ, ແລະ ພິມໃບບິນໄດ້ທັນທີ.",
      icon: Monitor,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "ລາຍງານຍອດຂາຍ",
      desc: "ເບິ່ງຍອດຂາຍປະຈຳວັນ, ເດືອນ, ປີ ແລະ ສິນຄ້າຂາຍດີໄດ້ທຸກທີ່ທຸກເວລາ.",
      icon: BarChart3,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "ພາບລວມທຸລະກິດ",
      desc: "Dashboard ສະແດງຜົນການດຳເນີນງານທັງໝົດ ຊ່ວຍໃຫ້ທ່ານວາງແຜນທຸລະກິດໄດ້ຢ່າງຖືກຕ້ອງ.",
      icon: ShoppingCart,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const pricing = [
    {
      name: "BASIC",
      price: "170,000 ₭",
      period: "/ ເດືອນ",
      desc: "ສຳລັບຮ້ານຄ້າຂະໜາດນ້ອຍ ເລີ່ມຕົ້ນໃຊ້ງານໄດ້ທັນທີ",
      features: [
        "ຈຳນວນຜູ້ໃຊ້ 1 ທ່ານ",
        "ຂະໜາດໃບບິນ 58mm, 80mm",
        "ສຳຮອງຂໍ້ມູນ 1 ປີ"
      ],
      cta: "ສົນໃຈແພັກເກັດນີ້",
      highlight: true
    },
    {
      name: "PRO",
      price: "Coming Soon",
      period: "",
      desc: "ກຳລັງມາໃນໄວໆນີ້...",
      features: [
        "ຈຳນວນຜູ້ໃຊ້ 10 ທ່ານ",
        "ຈັດການລູກຄ້າ",
        "ຈັດການຕິດໜີ້",
        "ຕິດຕາມປະຫວັດສິນຄ້າ",
        "ຂະໜາດໃບບິນ 58mm, 80mm",
        "ສຳຮອງຂໍ້ມູນ 3 ປີ"
      ],
      cta: "ລໍຖ້າອັບເດດ",
      highlight: false
    },
    {
      name: "ENTERPRISE",
      price: "Coming Soon",
      period: "",
      desc: "ກຳລັງມາໃນໄວໆນີ້...",
      features: [
        "ຈຳນວນຜູ້ໃຊ້ ບໍ່ຈຳກັດ",
        "ຈັດການລູກຄ້າ & ຕິດໜີ້",
        "ຕິດຕາມປະຫວັດສິນຄ້າ",
        "ຂາຍສົ່ງ & ຂາຍຫຼາຍສະກຸນ",
        "ອອກໃບສະເໜີລາຄາ",
        "ຂະໜາດໃບບິນ 58mm, 80mm, A4, A5",
        "ສຳຮອງຂໍ້ມູນ ບໍ່ຈຳກັດ",
        "Support 24h"
      ],
      cta: "ລໍຖ້າອັບເດດ",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-100 font-sans selection:bg-amber-500 selection:text-black scroll-smooth">

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f1115]">
        <div className="absolute inset-0 z-0">
          <Image
            src={BgHero}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-float pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-float-delayed pointer-events-none"></div>

        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none z-0"></div>

        <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <span className="text-amber-500 font-semibold tracking-wide text-sm uppercase mb-4 inline-block border border-amber-500/30 px-4 py-1 rounded-full bg-amber-500/10 backdrop-blur-sm">
              Professional POS System
            </span>
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              SKV POS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                ລະບົບຈັດການຮ້ານຄ້າມືອາຊີບ
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              ຈັດການງ່າຍ, ຂາຍຄ່ອງ, ຮູ້ກຳໄລທັນທີ. ຍົກລະດັບການບໍລິຫານຮ້ານຄ້າຂອງທ່ານໃຫ້ທັນສະໄໝ ແລະ ມີປະສິດທິພາບ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-1">
              <Link href="#pricing" className="relative group inline-flex items-center justify-center h-14 px-8 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/25 overflow-hidden">
                <span className="relative z-10">ຈັດເລີຍ</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-300 transform skew-x-12"></div>
              </Link>
              <Link href="#features" className="inline-flex items-center justify-center h-14 px-8 bg-slate-800/80 hover:bg-slate-700 text-white font-bold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm">
                ຄຸນສົມບັດ
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#12141a] relative">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ຄຸນສົມບັດຂອງລະບົບ</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              ຄົບທຸກຟັງຊັ້ນທີ່ຮ້ານຄ້າຕ້ອງການ ເຮົາລວມມາໃຫ້ທ່ານແລ້ວ
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* System Preview Section */}
      {/* System Preview Section */}
      <section className="py-24 bg-[#0f1115] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ໜ້າຈໍທີ່ <span className="text-amber-500">ທັນສະໄໝ</span> ແລະ <span className="text-blue-500">ໃຊ້ງານງ່າຍ</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              ອອກແບບມາເພື່ອຮ້ານຄ້າຂອງທ່ານໂດຍສະເພາະ ບໍ່ວ່າຈະເປັນຮ້ານອາຫານ, ຮ້ານຂາຍຍ່ອຍ ຫຼື ຄາເຟ່
            </p>
          </div>

          <SystemPreviewTabs />

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0f1115] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Pricing Plan</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ເລືອກແພັກເກັດທີ່ເໝາະກັບທ່ານ</h2>
            <p className="text-slate-400">ເລີ່ມຕົ້ນໃຊ້ງານໄດ້ຟຣີ ມື້ນີ້</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.highlight ? 'bg-slate-800 border-amber-500 shadow-2xl shadow-amber-500/10 scale-100 md:scale-110 z-10' : 'bg-slate-800/30 border-slate-800 hover:border-slate-700'}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Best Seller
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className={`text-3xl font-bold ${plan.highlight ? 'text-amber-500' : 'text-white'}`}>{plan.price}</span>
                    <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className={plan.highlight ? 'text-amber-500' : 'text-slate-600'} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-lg shadow-amber-500/20' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-24 bg-[#0f1115] border-y border-white/5 relative">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Accessories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ອຸປະກອນເສີມທີ່ຮອງຮັບ</h2>
            <p className="text-slate-400">ຄັດສັນອຸປະກອນຄຸນນະພາບສູງ ເພື່ອການໃຊ້ງານທີ່ບໍ່ມີສະດຸດ</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "ເຄື່ອງພິມໃບບິນ 58mm",
                price: "450,000 ₭",
                desc: "Thermal Printer, USB Port, ພິມໄວ 90mm/s",
                image: "/equipment/printer58.png"
              },
              {
                id: 2,
                name: "ເຄື່ອງພິມໃບບິນ 80mm",
                price: "950,000 ₭",
                desc: "Thermal Printer, LAN/USB, ຕັດເຈ້ຍອັດຕະໂນມັດ",
                image: "/equipment/printer80.png"
              },
              {
                id: 3,
                name: "ເຄື່ອງຍິງບາໂຄດ (Scanner)",
                price: "350,000 ₭",
                desc: "ຮອງຮັບ 1D/2D QR Code, ມີຂາຕັ້ງ",
                image: "/equipment/scanner.png"
              },
              {
                id: 4,
                name: "ລິ້ນຊັກເກັບເງິນ (Cash Drawer)",
                price: "490,000 ₭",
                desc: "4 ຊ່ອງທະນະບັດ, 8 ຊ່ອງຫຼຽນ, ເຊື່ອມຕໍ່ RJ11",
                image: "/equipment/drawer.png"
              },
              {
                id: 5,
                name: "ເຄື່ອງພິມບາໂຄດ (Label Printer)",
                price: "1,200,000 ₭",
                desc: "ພິມສະຕິກເກົ່າບາໂຄດ, ຄວາມລະອຽດ 203dpi",
                image: "/equipment/label-printer.png"
              },
              {
                id: 6,
                name: "ເຈ້ຍຄວາມຮ້ອນ (Thermal Paper)",
                price: "5,000 ₭ / ມ້ວນ",
                desc: "ຂະໜາດ 57x30mm, 57x50mm, 80x80mm",
                image: "/equipment/paper.png"
              }
            ].map((item) => (
              <div key={item.id} className="group relative bg-[#161b22] border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                {/* Image Placeholder (16:9 Aspect Ratio) */}
                <div className="aspect-video bg-slate-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900/50">
                    <span className="text-sm">ຮູບພາບສິນຄ້າ (16:9)</span>
                  </div>
                  {/* Provide real image source when available */}
                  {/* <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      /> */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{item.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 min-h-[40px]">{item.desc}</p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                    <span className="text-amber-500 font-bold text-xl">{item.price}</span>
                    {/* <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors">
                      ລາຍລະອຽດ
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 bg-slate-900 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">ພ້ອມທີ່ຈະຍົກລະດັບຮ້ານຄ້າຂອງທ່ານແລ້ວບໍ່?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            ປຶກສາທີມງານຜູ້ຊ່ຽວຊານຂອງພວກເຮົາ ເພື່ອຮັບຄຳແນະນຳທີ່ດີທີ່ສຸດສຳລັບທຸລະກິດຂອງທ່ານ.
          </p>
          <Link href="https://wa.me/8562078852010?text=ສະບາຍດີ, ຂ້ອຍສົນໃຈ ລະບົບຈັດການຮ້ານຄ້າ" target="_blank" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:gap-3 transition-all">
            ຕິດຕໍ່ພວກເຮົາ <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div >
  );
}