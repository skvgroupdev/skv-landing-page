import Banner from "../public/images/3friend.png";
import Image from "next/image";

interface HeroCopy {
    hero: {
        label: string;
        title1: string;
        title2: string;
        title3: string;
        desc: string;
        cta: string;
    };
}

const facebookPageUrl = "https://www.facebook.com/profile.php?id=61586674563507";
const whatsappUrl = "https://wa.me/8562096656554";

export default function Hero({ t }: { t: HeroCopy }) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-sky-50">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgrounds/bg1.webp"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-700/55 via-blue-500/35 to-white/35"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-sky-100/10 to-white/45"></div>
            </div>

            {/* Background Effects - Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-200/45 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/35 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

                <div className="relative z-10">
                    <div className="inline-block mb-4">
                        <span className="text-white font-medium tracking-wide text-sm uppercase bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/25 shadow-sm">{t.hero.label}</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                        {t.hero.title1} <br />
                        {t.hero.title2} <br />
                        <span className="text-sky-100">{t.hero.title3}</span>
                    </h1>
                    <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed">
                        {t.hero.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-8 bg-white text-blue-700 font-bold rounded-full transition-all hover:bg-sky-50 hover:shadow-lg shadow-xl shadow-blue-700/15">
                            {t.hero.cta}
                        </a>
                        <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-8 bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-sm transition-all hover:bg-white/30 hover:shadow-lg">
                            Facebook
                        </a>
                    </div>
                </div>

                <div className="relative w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                    <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]">
                        <div className="absolute -inset-4 rounded-[34%_66%_62%_38%/36%_34%_66%_64%] bg-white/45 blur-3xl animate-float"></div>
                        <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-br from-white/45 via-sky-200/30 to-blue-500/20"></div>

                        <div className="relative z-10 w-full aspect-square rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/35 shadow-2xl shadow-blue-700/20 bg-white/20 backdrop-blur-sm">
                            <Image
                                src={Banner}
                                alt="SKV Group founders"
                                fill
                                className="object-cover object-center saturate-105 contrast-100 brightness-110"
                                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 500px"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/10 via-transparent to-white/20 mix-blend-soft-light"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-700/18 to-transparent"></div>
                        </div>

                        <div className="absolute -bottom-3 left-5 right-5 h-10 rounded-full bg-blue-500/20 blur-2xl"></div>
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
