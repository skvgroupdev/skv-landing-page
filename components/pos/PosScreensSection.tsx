"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { posScreens } from "./data";
import { fadeUp, stagger } from "./animations";
import ImageSlot from "./ImageSlot";

const slideLeft = {
  hidden: { opacity: 0, x: -72 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 72 },
  visible: { opacity: 1, x: 0 },
};

export default function PosScreensSection() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="block text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
            Real Interface
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-extrabold text-slate-950 md:text-5xl">
            ຕົວຢ່າງໜ້າລະບົບຂອງ SKV POS
          </motion.h2>

        </motion.div>

        <div className="space-y-10 lg:space-y-14">
          {posScreens.map((screen, index) => {
            const isReversed = index % 2 === 1;
            const imageVariant = isReversed ? slideRight : slideLeft;
            const textVariant = isReversed ? slideLeft : slideRight;

            return (
              <motion.article
                key={screen.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.24 }}
                className="overflow-hidden rounded-[2.25rem] border border-blue-100 bg-white p-4 shadow-xl shadow-blue-950/5 md:p-5"
              >
                <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
                  <motion.div
                    variants={imageVariant}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className={isReversed ? "lg:order-2" : ""}
                  >
                    <div className="h-full overflow-hidden rounded-[1.75rem]  p-3">
                      <div className="relative aspect-16/10 overflow-hidden rounded-[1.25rem] bg-white lg:h-full lg:min-h-97.5 lg:aspect-auto">
                        <ImageSlot
                          src={screen.image}
                          alt={screen.title}
                          icon={screen.icon}
                          label={screen.label}
                          className={screen.imageClassName}
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={textVariant}
                    transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
                    className={isReversed ? "lg:order-1" : ""}
                  >
                    <div className="flex h-full flex-col justify-center rounded-[1.75rem] p-7 md:p-9">
                      <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-blue-700 shadow-sm">
                        <screen.icon className="h-4 w-4" />
                        {screen.label}
                      </div>
                      <h3 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
                        {screen.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {screen.desc}
                      </p>

                      <div className="mt-7 space-y-3">
                        {screen.features?.map((feature) => (
                          <div key={feature} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
