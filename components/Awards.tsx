import { Award, Trophy, Star, Calendar, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Banner from "../public/images/606561495_1445363853842380_2013213022203434344_n.jpg";
import Cover_Muan_Award from "../public/images/muan-awards.jpg";
import Cover_Award from "../public/images/award.jpg";

export default function Awards({ t }: { t: any }) {
    // Placeholder images - replace with actual Muan Awards photos
    const awardPhotos = [
        { src: Banner, alt: "Muan Awards 2025 Ceremony", caption: "ພິທີມອບລາງວັນ Muan Awards 2025" },
        { src: Cover_Award, alt: "Award Trophy", caption: "ລາງວັນນັກສ້າງເນື້ອຫາສາຍແຮງບັນດານໃຈ" },
        { src: Cover_Muan_Award, alt: "Team at Event", caption: "ທີມງານ SKV Group ໃນງານ" },
    ];

    return (
        <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold mb-6">
                        <Trophy size={16} />
                        <span>Recognition & Achievement</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ລາງວັນແລະຄວາມສຳເລັດ</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        ພວກເຮົາພູມໃຈທີ່ໄດ້ຮັບການຍອມຮັບໃນຄວາມພະຍາຍາມສ້າງສັນເນື້ອຫາທີ່ມີຄຸນນະພາບ
                    </p>
                </div>

                {/* Main Award Card */}
                <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                    <div className="relative bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
                        {/* Award Badge - Top Right */}
                        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-2xl border-2 md:border-4 border-slate-900">
                                    <Trophy size={24} className="text-white md:w-8 md:h-8" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
                            {/* Left Content */}
                            <div className="flex flex-col justify-center space-y-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-700 text-xs font-bold mb-4">
                                        <Calendar size={14} />
                                        24 December 2025
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">
                                        Muan Awards 2025
                                    </h3>
                                    <p className="text-lg md:text-xl text-amber-600 font-bold mb-4">
                                        ນັກສ້າງເນື້ອຫາສາຍແຮງບັນດານໃຈ
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        ພວກເຮົາພູມໃຈທີ່ໄດ້ຮັບລາງວັນ <span className="text-slate-900 font-semibold">Inspirational Content Creator</span> ຈາກ Muan Awards 2025 - ງານເຊີດຊູຜົນງານດ້ານອຸດສາຫະກຳສ້າງສັນດິຈິຕອນທີ່ໃຫຍ່ທີ່ສຸດຂອງລາວ.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Star className="text-amber-500" size={20} />
                                        <span className="text-sm font-medium">20+ Categories</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Award className="text-amber-500" size={20} />
                                        <span className="text-sm font-medium">Expert-Judged</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <p className="text-slate-600 text-sm italic border-l-2 border-amber-500 pl-4">
                                        "Muan Awards is not just an award ceremony; it's a platform to bring creators, businesses, and marketing experts together to help shape Laos' creative economy."
                                    </p>
                                    <p className="text-slate-500 text-xs mt-2 pl-4">
                                        — Mangkonphet Sayasane, CEO of Muan
                                    </p>
                                </div>
                            </div>

                            {/* Right Visual */}
                            <div className="relative flex items-center justify-center hidden md:flex">
                                <div className="relative w-full max-w-md aspect-square">
                                    {/* Decorative Circles */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-48 md:w-64 h-48 md:h-64 rounded-full border-2 border-amber-500/20 border-dashed animate-spin-slow"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-36 md:w-48 h-36 md:h-48 rounded-full border-2 border-amber-500/30 animate-pulse"></div>
                                    </div>

                                    {/* Center Trophy */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-2xl opacity-50"></div>
                                            <div className="relative w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-2xl">
                                                <Trophy size={48} className="text-white md:w-16 md:h-16" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Stars */}
                                    <Star className="absolute top-12 right-12 text-amber-500 animate-bounce" size={24} style={{ animationDelay: '0s' }} />
                                    <Star className="absolute bottom-12 left-12 text-amber-500 animate-bounce" size={20} style={{ animationDelay: '0.5s' }} />
                                    <Star className="absolute top-24 left-16 text-amber-500 animate-bounce" size={16} style={{ animationDelay: '1s' }} />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Info Bar */}
                        <div className="border-t border-slate-200 px-6 md:px-12 py-4 md:py-6 bg-slate-100">
                            <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center md:justify-between gap-3 md:gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="text-sm">
                                        <span className="text-slate-500">Event Venue:</span>
                                        <span className="text-slate-900 ml-2 font-semibold">Holiday Inn & Suites Vientiane</span>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <span className="text-slate-500">Media Partner:</span>
                                    <span className="text-slate-900 ml-2 font-semibold">The Laotian Times</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mt-16">
                    <div className="flex items-center gap-3 mb-8">
                        <ImageIcon className="text-blue-500" size={24} />
                        <h3 className="text-2xl font-bold text-slate-900">ຮູບພາບຈາກງານ</h3>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
                        {awardPhotos.map((photo, index) => (
                            <div key={index} className="group relative rounded-xl md:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm">
                                <div className="aspect-[16/9] md:aspect-[3/3] relative overflow-hidden">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="้ object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                {/* <div className="p-4 bg-slate-900/80 backdrop-blur-sm">
                                    <p className="text-sm text-slate-300 text-center">{photo.caption}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        ການຍອມຮັບນີ້ເປັນແຮງບັນດານໃຈໃຫ້ພວກເຮົາສືບຕໍ່ສ້າງສັນເນື້ອຫາທີ່ມີຄຸນນະພາບ ແລະ ຊ່ວຍພັດທະນາອຸດສາຫະກຳດິຈິຕອນຂອງລາວຕໍ່ໄປ
                    </p>
                </div>
            </div>
        </section>
    );
}
