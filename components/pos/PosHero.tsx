"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronRight } from "lucide-react";
import { contactUrl, heroScreens } from "./data";
import { fadeUp, stagger } from "./animations";
import ImageSlot from "./ImageSlot";

const MotionLink = motion.create(Link);

export default function PosHero() {
  const [activeScreen, setActiveScreen] = useState(0);
  const currentScreen = heroScreens[activeScreen];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % heroScreens.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_72%)] pt-28 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-px bg-blue-100" />
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <BadgeCheck className="h-4 w-4" />
            SKV POS 
          </motion.div>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
            ຮ້ານນ້ອຍຈ່າຍໄຫວ 
            <span className="block text-blue-700">ຮ້ານໃຫຍ່ຈ່າຍຄຸ້ມ</span>
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SKV POS ອອກແບບມາສຳລັບຮ້ານຄ້າ, ຂະໜາດນ້ອຍ-ກາງ. ໃຊ້ງານງ່າຍ, ຕິດຕັ້ງໄວ, ມີທີມຊ່ວຍດູແລ.
          </motion.p>
    
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MotionLink
              href={contactUrl}
              target="_blank"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-blue-700 px-7 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              ປຶກສາລະບົບ POS
              <ArrowRight className="h-4 w-4" />
            </MotionLink>
            <MotionLink
              href="#pricing"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
            >
              ເບິ່ງແພັກເກັດ
              <ChevronRight className="h-4 w-4" />
            </MotionLink>
          </motion.div>

    
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 36, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-amber-200/60 blur-2xl" />
          <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-blue-200/70 blur-2xl" />
          <div className="relative">
            <div className="relative aspect-16/11 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen.image}
                  initial={{ opacity: 0, x: 34, scale: 0.985 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -34, scale: 0.985 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <ImageSlot
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    icon={currentScreen.icon}
                    label={`${currentScreen.label} screenshot`}
                    className={currentScreen.imageClassName}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              {heroScreens.map((screen, index) => (
                <button
                  key={screen.title}
                  type="button"
                  aria-label={`Show ${screen.title}`}
                  onClick={() => setActiveScreen(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeScreen ? "w-8 bg-blue-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
