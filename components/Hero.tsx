import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Banner from "../public/images/vong1.jpg";
import BgHero from "../public/backgrounds/bg-hero1.jpg";
import Image from "next/image";
export default function Hero({ t }: { t: any }) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgrounds/bg1.webp"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
            </div>

            {/* Background Effects - Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                <div className="relative z-10">
                    <div className="inline-block mb-4">
                        <span className="text-blue-100 font-medium tracking-wide text-sm uppercase bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">{t.hero.label}</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                        {t.hero.title1} <br />
                        {t.hero.title2} <br />
                        <span className="text-blue-200">{t.hero.title3}</span>
                    </h1>
                    <p className="text-blue-100/90 text-lg mb-8 max-w-lg leading-relaxed">
                        {t.hero.desc}
                    </p>
                    <div className="flex gap-4">
                        <Link href="#contact" className="inline-flex items-center justify-center h-14 px-8 bg-white text-blue-700 font-bold rounded-full transition-all hover:bg-blue-50 hover:shadow-lg shadow-xl shadow-blue-900/20">
                            {t.hero.cta}
                        </Link>
                        {/* <Link href="#services" className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all">
                            <Play size={20} className="ml-1" />
                        </Link> */}
                    </div>
                </div>

                <div className="hidden md:block lg:block relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <div className="relative w-full max-w-[500px]">
                        {/* Blob Shape Mask for Image */}
                        <div className="relative z-10 w-full aspect-square">
                            <div className="absolute inset-0 bg-blue-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob opacity-30 blur-2xl"></div>

                            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl">
                                <Image
                                    src={Banner}
                                    alt="Hero Banner"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Play Button Overlay matching reference */}
                                {/* <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 group/play">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Floating elements matching reference style aesthetics */}
                        {/* <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Project Completed</p>
                                <p className="font-bold text-slate-800">100% Success</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Stats Strip */}
            {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden xl:flex flex-col gap-12 pr-12 text-right">
                <div className="group">
                    <h3 className="text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">{t.stats.exp.val}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t.stats.exp.label}</p>
                </div>
                <div className="group">
                    <h3 className="text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">{t.stats.proj.val}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t.stats.proj.label}</p>
                </div>
                <div className="group">
                    <h3 className="text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">{t.stats.client.val}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t.stats.client.label}</p>
                </div>
            </div> */}
        </section>
    );
}
