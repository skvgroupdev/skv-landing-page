"use client";

import { motion } from "framer-motion";
import { functions } from "./data";
import { fadeUp, stagger } from "./animations";

export default function PosFunctionsSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Functions</span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-5xl">ຟັງຊັນຫຼັກທີ່ຮ້ານຕ້ອງມີ</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            ໂຄງສ້າງລະບົບຖືກຈັດໃຫ້ຮ້ານໃຊ້ງານໄດ້ຈິງ ບໍ່ຊັບຊ້ອນ ແລະ ມີຂໍ້ມູນພໍສຳລັບການຕັດສິນໃຈ.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {functions.map((item) => (
            <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -6 }} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
