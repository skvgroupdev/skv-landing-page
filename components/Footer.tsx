
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 text-slate-400">
            <div className="container max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
                            <Image src="/web-app-manifest-512x512.png" alt="Logo" width={100} height={100} />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            ບໍລິສັດທີ່ໃຫ້ບໍລິການດ້ານ ການຕະຫຼາດ, ລະບົບ POS ແລະ ພັດທະນາເວັບໄຊ ເພື່ອຊ່ວຍທຸລະກິດຂອງທ່ານເຕີບໃຫຍ່.
                        </p>
                        {/* <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h4 className="text-white font-bold mb-4">ລິງກ໌ດ່ວນ</h4>
                        <ul className="space-y-3">
                            <li><Link href="#services" className="text-slate-500 hover:text-blue-500 text-sm transition-colors">ບໍລິການ</Link></li>
                            <li><Link href="#about" className="text-slate-500 hover:text-blue-500 text-sm transition-colors">ກ່ຽວກັບພວກເຮົາ</Link></li>
                            <li><Link href="#portfolio" className="text-slate-500 hover:text-blue-500 text-sm transition-colors">ຜົນງານ</Link></li>
                            <li><Link href="#customers" className="text-slate-500 hover:text-blue-500 text-sm transition-colors">ລູກຄ້າ</Link></li>
                            <li><Link href="#contact" className="text-slate-500 hover:text-blue-500 text-sm transition-colors">ຕິດຕໍ່ພວກເຮົາ</Link></li>
                        </ul>
                    </div> */}

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-4">ບໍລິການຂອງເຮົາ</h4>
                        <ul className="space-y-3">
                            <li className="text-slate-500 text-sm hover:text-blue-400 transition-colors cursor-default">ໃຫ້ຄຳປຶກສາການຕະຫຼາດ</li>
                            <li className="text-slate-500 text-sm hover:text-blue-400 transition-colors cursor-default">POS System Shop Manager</li>
                            <li className="text-slate-500 text-sm hover:text-blue-400 transition-colors cursor-default">ຫນ້າເວັບ E-commerce</li>
                            <li className="text-slate-500 text-sm hover:text-blue-400 transition-colors cursor-default">ການຕະຫຼາດດິຈິຕອນ</li>
                            <li className="text-slate-500 text-sm hover:text-blue-400 transition-colors cursor-default">ອອກແບບແບຣນ</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">ຕິດຕໍ່ພວກເຮົາ</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-500 text-sm">
                                <MapPin size={16} className="mt-1 flex-shrink-0 text-blue-500" />
                                <span>ບ້ານ ຫຼັກສອງ, ເມືອງ ສາລະວັນ, ແຂວງ ສາລະວັນ, ສປປ ລາວ</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-500 text-sm">
                                <Phone size={16} className="flex-shrink-0 text-blue-500" />
                                <Link href="tel:8562078852010" className="hover:text-blue-500 transition-colors">+856 20 5638 8013</Link>
                            </li>
                            <li className="flex items-center gap-3 text-slate-500 text-sm">
                                <Mail size={16} className="flex-shrink-0 text-blue-500" />
                                <Link href="mailto:skvgroup2025@gmail.com" className="hover:text-blue-500 transition-colors">skvgroup2025@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-600 text-sm text-center md:text-left">
                            © 2026 SKV Group.
                        </p>
                        <p className="text-slate-600 text-sm font-medium">
                            <span className="text-blue-500">Synergy</span> • <span className="text-amber-500">Kindred</span> • <span className="text-slate-400">Vision</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
