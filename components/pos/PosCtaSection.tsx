import Link from "next/link";
import { ArrowRight, CircleDollarSign } from "lucide-react";
import { contactUrl } from "./data";

export default function PosCtaSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-950/15">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
                <CircleDollarSign className="h-4 w-4" />
                ປຶກສາກ່ອນເລືອກຊຸດ
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
                ບໍ່ແນ່ໃຈວ່າຮ້ານຄວນໃຊ້ຊຸດໃດ?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                ສົ່ງປະເພດຮ້ານ, ຈຳນວນສິນຄ້າ ແລະ ອຸປະກອນທີ່ມີຢູ່ໃຫ້ພວກເຮົາ. ທີມ SKV ຈະຊ່ວຍແນະນຳ package ແລະ hardware ທີ່ເໝາະກັບງົບ.
              </p>
            </div>
            <Link
              href={contactUrl}
              target="_blank"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-extrabold text-slate-950 transition hover:bg-blue-50"
            >
              ຕິດຕໍ່ທາງ WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
