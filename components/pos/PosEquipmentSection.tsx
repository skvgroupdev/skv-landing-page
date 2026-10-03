"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { equipment } from "./data";
import { fadeUp, stagger } from "./animations";
import ImageSlot from "./ImageSlot";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PosEquipmentSection() {
  return (
    <section id="equipment" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.11),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)] py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-600/8 to-transparent" />
      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_30px_90px_-38px_rgba(15,23,42,0.42)] backdrop-blur md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.28em] text-blue-700">
                Hardware Price
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                ລາຄາອຸປະກອນ POS
              </h2>

            </div>
          
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {equipment.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.45)] transition duration-300 hover:border-blue-200 hover:shadow-[0_28px_90px_-32px_rgba(59,130,246,0.36)]"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-600/10 via-sky-500/5 to-transparent" />
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <ImageSlot src={item.image} alt={item.name} icon={item.icon} label={item.name} className="object-cover transition duration-500 group-hover:scale-105" />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-700">{item.type}</div>
                    <h3 className="mt-1 text-lg font-black leading-6 text-slate-950 sm:text-xl">{item.name}</h3>
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">ລາຄາ</div>
                  </div>
                  <div className="shrink-0 text-right text-lg font-black text-blue-700">{item.price}</div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mt-4 w-full justify-center gap-2 rounded-2xl border-blue-200 bg-white text-blue-700 hover:bg-blue-50">
                      <Eye className="h-4 w-4" />
                      ເບິ່ງລາຍລະອຽດ
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-black text-slate-950">{item.name}</DialogTitle>
                      <DialogDescription className="text-sm leading-7 text-slate-600">
                        {item.desc}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-2 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                      <ImageSlot src={item.image} alt={item.name} icon={item.icon} label={item.name} className="h-56 object-cover" />
                    </div>

                    <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                      <div className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">ຄຸນສົມບັດ</div>
                      <ul className="mt-3 space-y-2.5">
                        {item.specs.map((spec) => (
                          <li key={spec} className="flex gap-2 text-sm text-slate-700">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-3">
                      <div className="text-[11px] font-black uppercase tracking-[0.24em] text-blue-700">ເໝາະສຳລັບ</div>
                      <div className="mt-1 text-sm font-semibold text-slate-800">{item.suitableFor}</div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <div className="text-sm font-semibold text-slate-600">ລາຄາ</div>
                      <div className="text-lg font-black text-blue-700">{item.price}</div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
