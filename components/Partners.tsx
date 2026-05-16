
import { Box, Hexagon, Triangle, Circle, Disc } from "lucide-react";
import Image from "next/image";

export default function Partners() {
    return (
        <section className="py-6 bg-white border-b border-slate-100">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 relative overflow-hidden rounded-full shadow-sm">
                            <Image src="/images/salavan_indy.jpg" alt="Salavan Indy" fill className="object-cover" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-500 group-hover:text-blue-600 transition-colors">SALAVAN INDY</span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 relative overflow-hidden rounded-full shadow-sm">
                            <Image src="/images/phatthana_cosmetic.jpg" alt="Phatthana Cosmetic" fill className="object-cover" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-500 group-hover:text-blue-600 transition-colors">ຮ້ານເຄື່ອງສຳອາງພັດທະນາ</span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 relative overflow-hidden rounded-full shadow-sm">
                            <Image src="/images/tma_home.png" alt="TMA Home" fill className="object-cover" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-500 group-hover:text-blue-600 transition-colors">ທອງມາໂຮມ</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
