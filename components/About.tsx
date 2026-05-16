import { Users, Heart, Eye } from "lucide-react";
import Avatar_vong from "../public/images/avatar_vong.jpg";
import Avatar_kun from "../public/images/avatar_kun.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About({ t }: { t: any }) {
    const values = [
        {
            letter: "S",
            word: "Synergy",
            lao: "ຄວາມຮ່ວມມື",
            desc: "ພະລັງແຫ່ງການຮ່ວມມືເພື່ອຄວາມສຳເລັດ.",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500",

        },
        {
            letter: "K",
            word: "Kindred",
            lao: "ສາຍສຳພັນ",
            desc: "ສ້າງຄວາມຜູກພັນທີ່ແໜ້ນແຟ້ນ.",
            icon: Heart,
            color: "text-pink-500",
            bg: "bg-pink-500/10",
            border: "group-hover:border-pink-500",

        },
        {
            letter: "V",
            word: "Vision",
            lao: "ວິໄສທັດ",
            desc: "ມຸມມອງກວ້າງໄກເພື່ອອະນາຄົດ.",
            icon: Eye,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "group-hover:border-amber-500",
            avatar: Avatar_vong
        }
    ];

    return (
        <section id="about" className="py-24 bg-[#0f1115] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#12141a] to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    {/* <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block"></span> */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">ພວກເຮົາແມ່ນໃຜ?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        SKV Group ເກີດຈາກການລວມຕົວຂອງສາມສ່ຽວທີ່ມີຄວາມຝັນຢາກສ້າງສິ່ງທີ່ມີຄຸນນະພາບ ແລະ ຕອບໂຈດຄວາມຕ້ອງການຂອງທຸລະກິດໃນປັດຈຸບັນ ເພື່ອມາຮັບໃຊ້ສັງຄົມ.
                    </p>

                </div>

                {/* SKV Values Grid */}
                <div className="grid grid-cols-3 gap-3 md:gap-8 mb-16 md:mb-32">
                    {values.map((item, index) => (
                        <div key={index} className={`group relative p-4 md:p-10 rounded-xl md:rounded-3xl bg-slate-900/40 border border-slate-800 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${item.border}`}>

                            {/* Abstract Background Shape */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${item.bg} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Letter & Icon Header */}
                                <div className="flex justify-between items-start mb-4 md:mb-8">
                                    <span className={`text-5xl md:text-8xl font-black ${item.color} opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left select-none`}>
                                        {item.letter}
                                    </span>
                                    <div className={`w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:rotate-12 transition-transform duration-500`}>
                                        <item.icon className="w-4 h-4 md:w-7 md:h-7" />
                                    </div>
                                </div>

                                <div className="space-y-1 md:space-y-3">
                                    <h3 className="text-lg md:text-3xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                                        {item.word}
                                    </h3>
                                    <p className={`text-[0.6rem] md:text-sm font-bold tracking-widest uppercase ${item.color}`}>
                                        {item.lao}
                                    </p>
                                    <div className="h-px w-8 md:w-12 bg-slate-700 group-hover:w-full transition-all duration-500 ease-out my-2 md:my-4"></div>
                                    <p className="text-slate-400 leading-relaxed text-xs md:text-lg">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="relative">
                    <div className="text-center">
                        {/* <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">Our Team</span> */}
                        <h2 className="text-amber-500 text-3xl md:text-4xl font-bold">OUR TEAM</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-6 items-center pt-10 max-w-5xl mx-auto">


                        {/* kun - Left on Desktop */}
                        <div className="group relative order-1 mt-4 md:mt-8">
                            <div className="relative z-10 bg-slate-800 rounded-lg md:rounded-2xl p-0.5 md:p-1 pb-0 overflow-hidden border border-slate-700 hover:border-pink-500/50 transition-colors duration-300">
                                <div className="aspect-[3/4] bg-slate-900 rounded-t-lg md:rounded-t-xl overflow-hidden relative group-hover:bg-slate-800/50 transition-colors">
                                    <Image
                                        src={Avatar_kun}
                                        alt="Avatar"
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2 md:p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pt-12 md:pt-20">
                                        <h3 className="text-xs md:text-xl font-bold text-white mb-0.5 md:mb-1 leading-tight">ການັນດາ<br className="md:hidden" /> ແກ້ວທ່ອນຈັນ</h3>
                                        <p className="text-pink-400 text-[0.6rem] md:text-sm font-medium">ນັກວາງແຜນ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-pink-500/20 rounded-[2rem] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10"></div>
                        </div>

                        {/* vong - Right on Desktop */}
                        <Link href={"/team/vongchln"} className="group relative order-3 md:order-3 mt-4 md:mt-8">
                            <div className="relative z-10 bg-slate-800 rounded-lg md:rounded-2xl p-0.5 md:p-1 pb-0 overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                                <div className="aspect-[3/4] bg-slate-900 rounded-t-lg md:rounded-t-xl overflow-hidden relative group-hover:bg-slate-800/50 transition-colors">
                                    <Image
                                        src={Avatar_vong}
                                        alt="Avatar"
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2 md:p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pt-12 md:pt-20">
                                        <h3 className="text-xs md:text-xl font-bold text-white mb-0.5 md:mb-1 leading-tight">ວົງວິໄລ<br className="md:hidden" /> ຈູນລະນີ</h3>
                                        <p className="text-blue-400 text-[0.6rem] md:text-sm font-medium">ນັກການຕະຫຼາດ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-blue-500/20 rounded-[2rem] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10"></div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}
