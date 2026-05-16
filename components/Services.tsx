
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Services({ t }: { t: any }) {


    return (
        <section id="services" className="py-24 bg-white">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    {/* <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">Services</span> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">ບໍລິການ</h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm">
                       ຄວາມພໍໃຈຂອງລູກຄ້າຄືເປົ້າໝາຍຂອງພວກເຮົາ
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.services.items.slice(0, 3).map((service: any, index: number) => {
                        // Mocking the reference design where the middle card is highlighted
                        const isCenter = index === 1;
                        const Icon = service.icon || BarChart3;

                        return (
                            <Link href={service.link} key={index} className={`group text-center p-8 rounded-2xl transition-all duration-300 flex flex-col items-center
                                ${isCenter ? "bg-white shadow-2xl scale-105 border-b-4 border-blue-500 z-10" : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-100"}`}>

                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110
                                    ${isCenter ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400 group-hover:text-blue-500"}`}>
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className={`text-lg font-bold mb-3 ${isCenter ? "text-slate-800" : "text-slate-700"}`}>
                                    {service.title}
                                </h3>

                                <p className={`text-sm leading-relaxed mb-4 ${isCenter ? "text-slate-500" : "text-slate-400"}`}>
                                    {service.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
