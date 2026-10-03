import Link from "next/link";
import { ArrowUpRight, KeyRound, MonitorPlay } from "lucide-react";
import { demoCredentials, demoUrl } from "./data";

export default function PosDemoSection() {
  return (
    <section id="demo" className="bg-slate-950 py-16 text-white md:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] border border-blue-400/20 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.3),transparent_38%),linear-gradient(135deg,#0f172a_0%,#172554_100%)] p-8 shadow-2xl shadow-blue-950/20 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-100">
                <MonitorPlay className="h-4 w-4" />
                Demo SKV POS
              </div>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
                ລອງໃຊ້ລະບົບ SKV POS ໄດ້ທັນທີ
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100/80 md:text-lg">
                ເຂົ້າໄປສຳຜັດໜ້າຈໍຂາຍ, dashboard ແລະ ຟັງຊັ່ນຈັດການຮ້ານດ້ວຍບັນຊີ Demo ຂອງ SKV.
              </p>

              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-extrabold text-blue-900 transition hover:bg-blue-50"
              >
                ເຂົ້າຫຼິ້ນ Demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm md:min-w-[330px]">
              <div className="mb-5 flex items-center gap-2 text-sm font-bold text-blue-100">
                <KeyRound className="h-4 w-4" />
                ຂໍ້ມູນເຂົ້າໃຊ້ Demo
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-950/50 px-4 py-3">
                  <div className="text-xs font-semibold text-blue-200/70">Username</div>
                  <div className="mt-1 break-all font-mono text-lg font-bold text-white">{demoCredentials.username}</div>
                </div>
                <div className="rounded-2xl bg-slate-950/50 px-4 py-3">
                  <div className="text-xs font-semibold text-blue-200/70">Password</div>
                  <div className="mt-1 break-all font-mono text-lg font-bold text-white">{demoCredentials.password}</div>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-blue-100/60">ສຳລັບການທົດລອງໃຊ້ງານເທົ່ານັ້ນ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
