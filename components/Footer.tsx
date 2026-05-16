
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const facebookPageUrl = "https://www.facebook.com/profile.php?id=61586674563507";
const whatsappUrl = "https://wa.me/8562096656554";
const quickLinks = [
    { href: "#services", label: "ບໍລິການ" },
    { href: "#about", label: "ເລື່ອງລາວ SKV" },
    { href: "#portfolio", label: "ຜົນງານ" },
    { href: "#contact", label: "ຕິດຕໍ່" },
];
const services = [
    "ປຶກສາການຕະຫຼາດ",
    "ລະບົບ POS",
    "ອອກແບບເວັບ Ecommerce",
    "ອອກແບບໂລໂກ້ ແລະ ປ້າຍໂຄສະນາ",
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 text-slate-400">
            <div className="container max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
                            <Image src="/web-app-manifest-512x512.png" alt="Logo" width={100} height={100} />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            ບໍລິສັດທີ່ໃຫ້ບໍລິການດ້ານ ການຕະຫຼາດ, ລະບົບ POS ແລະ ພັດທະນາເວັບໄຊ ເພື່ອຊ່ວຍທຸລະກິດຂອງທ່ານເຕີບໃຫຍ່.
                        </p>
                        <div className="flex gap-3">
                            <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer" aria-label="SKV Group Facebook" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="SKV Group WhatsApp" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-green-500 hover:border-green-400 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">ລິງກ໌ດ່ວນ</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-slate-500 hover:text-blue-500 text-sm transition-colors">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-4">ບໍລິການຂອງເຮົາ</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-slate-500 text-sm">{service}</li>
                            ))}
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
                                <Link href="tel:8562096656554" className="hover:text-blue-500 transition-colors">+856 20 9665 6554</Link>
                            </li>
                            <li className="flex items-center gap-3 text-slate-500 text-sm">
                                <MessageCircle size={16} className="flex-shrink-0 text-green-500" />
                                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">WhatsApp</Link>
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
                            From Salavan, building tools for local businesses.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
