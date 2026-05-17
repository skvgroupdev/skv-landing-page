"use client";

import { motion } from "framer-motion";
import { equipment } from "./data";
import { fadeUp, stagger } from "./animations";
import ImageSlot from "./ImageSlot";

export default function PosEquipmentSection() {
  return (
    <section id="equipment" className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Hardware Price</span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-5xl">ລາຄາອຸປະກອນ POS</h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            ອຸປະກອນແຕ່ລະຊິ້ນມີ spec ແລະ ລາຄາຕ່າງກັນຕາມລຸ້ນ. ໂຄງສ້າງນີ້ຖືກວາງໄວ້ໃຫ້ເພີ່ມຮູບ, spec ແລະ ລາຄາຫຼາຍລາຍການໄດ້ງ່າຍ.
          </p>
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
              whileHover={{ y: -7 }}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-slate-950/5"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <ImageSlot src={item.image} alt={item.name} icon={item.icon} label={item.name} className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700">{item.type}</div>
                    <h3 className="mt-1 text-xl font-extrabold text-slate-950">{item.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  
                  <ul className="space-y-2">
                    {item.specs.map((spec) => (
                      <li key={spec} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
                  <div>
                    <div className="text-xs font-semibold text-slate-500">ລາຄາ</div>
                  </div>
                  <div className="shrink-0 text-right text-lg font-extrabold text-blue-700">{item.price}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
