import { Mail, Phone } from "lucide-react";

export default function Team({ t }: { t: any }) {
    return (
        <section id="team" className="py-24 bg-[#12141a] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">The Leadership</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">OUR TRAM</h2>
                    <p className="text-slate-400 mt-4">{t.team.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.team.members.map((member: any, idx: number) => (
                        <div key={idx} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500 transition-colors">
                            {/* Profile Decoration */}
                            <div className="h-32 bg-gradient-to-r from-slate-900 to-slate-800 relative">
                                <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-xl bg-amber-500 flex items-center justify-center text-4xl font-black text-black shadow-lg">
                                    {member.type}
                                </div>
                            </div>
                            <div className="pt-14 p-6">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-slate-400 text-sm font-medium mt-1">{member.role}</p>

                                <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {/* Social Placeholders */}
                                    <div className="w-8 h-8 rounded bg-slate-700 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-colors cursor-pointer">
                                        <Mail size={14} />
                                    </div>
                                    <div className="w-8 h-8 rounded bg-slate-700 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-colors cursor-pointer">
                                        <Phone size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
