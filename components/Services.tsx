import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
    title: string;
    desc: string;
    icon?: LucideIcon;
    color?: string;
    bg?: string;
    logo?: string;
    link?: string;
}

interface ServicesCopy {
    services: {
        title: string;
        subtitle: string;
        items: ServiceItem[];
    };
}

export default function Services({ t }: { t: ServicesCopy }) {
    return (
        <section id="services" className="bg-white py-20 md:py-24">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <p className="text-sm font-semibold text-blue-600">ສິ່ງທີ່ SKV ຊ່ວຍໄດ້</p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                        {t.services.title}
                    </h2>
                    <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="-mx-6 snap-x snap-mandatory overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex gap-4 md:grid md:grid-cols-4 md:gap-5">
                        {t.services.items.map((service, index) => {
                            const Icon = service.icon || BarChart3;
                            const serviceHref = service.link || "#";

                            return (
                                <Link
                                    href={serviceHref}
                                    key={service.title}
                                    className="group flex min-h-[280px] w-[78vw] max-w-[320px] shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70 md:w-auto md:max-w-none"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-sm font-semibold text-slate-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.bg || "bg-blue-50"} ${service.color || "text-blue-600"}`}>
                                            {service.logo ? (
                                                <Image src={service.logo} alt={service.title} width={34} height={34} className="object-contain" />
                                            ) : (
                                                <Icon size={23} strokeWidth={1.8} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {service.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-8 flex items-center justify-between">
                                        <span className="text-sm font-semibold text-slate-500">ລາຍລະອຽດ</span>
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
