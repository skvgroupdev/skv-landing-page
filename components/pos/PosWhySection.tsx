import { CheckCircle2, ClipboardList } from "lucide-react";
import { qualityCards, reasons } from "./data";

export default function PosWhySection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Why SKV POS</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-5xl">ເປັນຫຍັງຮ້ານຄວນໃຊ້ SKV POS?</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            ລະບົບ POS ບໍ່ແມ່ນແຕ່ເຄື່ອງຄິດເງິນ. ມັນຄືພື້ນຖານຂໍ້ມູນຂອງຮ້ານ ທີ່ຊ່ວຍໃຫ້ເຈົ້າຂອງເຫັນທຸກຢ່າງຊັດຂຶ້ນ.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {qualityCards.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <item.icon className="mb-3 h-6 w-6 text-blue-700" />
                <div className="font-bold text-slate-900">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <div className="text-sm font-bold text-blue-700">System qualities</div>
              <div className="text-2xl font-extrabold text-slate-950">ຄຸນສົມບັດລະບົບ</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <ClipboardList className="h-6 w-6" />
            </div>
          </div>
          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-7 text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
