import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Language } from "../lib/content";
import Image from "next/image";
interface NavbarProps {
    t: {
        nav: {
            services: string;
            portfolio: string;
            about: string;
            contact: string;
        };
    };
    lang: Language;
    toggleLang: () => void;
    scrolled: boolean;
}

export default function Navbar({ t, scrolled }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = [
        { href: "#services", label: t.nav.services },
        { href: "#about", label: t.nav.about },
        { href: "#portfolio", label: t.nav.portfolio },
        { href: "#contact", label: t.nav.contact },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100" : "bg-transparent py-6 border-b border-white/10"}`}>
            <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <div className={`h-12 w-12 overflow-hidden rounded-full flex items-center justify-center border ${scrolled ? "bg-slate-100 border-slate-200" : "bg-white/10 border-white/20"}`}>
                        <Image src="/web-app-manifest-512x512.png" alt="Logo" width={100} height={100} className="object-cover w-full h-full" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-slate-600" : "text-blue-100"}`}>
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className={`hover:text-blue-500 transition-colors ${!scrolled && "hover:text-white"}`}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden ${scrolled ? "text-slate-700" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 text-center shadow-xl">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600">
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/pos" onClick={() => setMobileMenuOpen(false)} className="mx-auto rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white hover:bg-blue-700">
                        SKV POS
                    </Link>
                </div>
            )}
        </nav>
    );
}
