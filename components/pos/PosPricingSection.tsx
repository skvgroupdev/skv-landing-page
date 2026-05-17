"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { contactUrl, packages } from "./data";
import { fadeUp, stagger } from "./animations";

export default function PosPricingSection() {
  const enterprisePlan = packages[0];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="block text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
            Package Price
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-extrabold text-slate-950 md:text-5xl">
            ແພັກເກັດທີ່ເປີດໃຊ້ຕອນນີ້
          </motion.h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-[2.25rem] border border-blue-100 bg-white shadow-2xl shadow-blue-950/10"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative bg-blue-700 p-8 text-white md:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-blue-50">
                  <Sparkles className="h-4 w-4" />
                  Open now
                </div>
                <h3 className="text-3xl font-extrabold md:text-5xl">{enterprisePlan.name}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-blue-50 md:text-base">
                  {enterprisePlan.desc}
                </p>

                <div className="mt-8">
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-5xl font-extrabold md:text-6xl">{enterprisePlan.price}</span>
                    <span className="pb-2 text-base font-bold text-blue-100">{enterprisePlan.period}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-blue-100">
                    ລາຄາລະບົບບໍ່ລວມຄ່າອຸປະກອນ POS
                  </p>
                </div>

                <Link
                  href={contactUrl}
                  target="_blank"
                  className="mt-9 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-extrabold text-blue-700 transition hover:bg-blue-50"
                >
                  ສົນໃຈແພັກເກັດນີ້
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-6">
                <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700">Included</div>
                <h4 className="mt-2 text-2xl font-extrabold text-slate-950">ສິ່ງທີ່ໄດ້ໃນແພັກເກັດ</h4>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {enterprisePlan.items.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
