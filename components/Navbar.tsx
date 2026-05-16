import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Language } from "../lib/content";
import Image from "next/image";
interface NavbarProps {
    t: any;
    lang: Language;
    toggleLang: () => void;
    scrolled: boolean;
}

export default function Navbar({ t, lang, toggleLang, scrolled }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    {/* <Link href="" className="hover:text-blue-600 transition-colors">{t.nav.products}</Link> */}
                    <Link href="#services" className={`hover:text-blue-500 transition-colors ${!scrolled && "hover:text-white"}`}>ບໍລິການ</Link>
                    <Link href="#portfolio" className={`hover:text-blue-500 transition-colors ${!scrolled && "hover:text-white"}`}>ຜົນງານ</Link>

                    <Link href="#about" className={`hover:text-blue-500 transition-colors ${!scrolled && "hover:text-white"}`}>{t.nav.about}</Link>
                    <Link href="#contact" className={`hover:text-blue-500 transition-colors ${!scrolled && "hover:text-white"}`}>{t.nav.contact}</Link>
                    <button onClick={toggleLang} className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all ${scrolled ? "border-slate-200 hover:border-blue-500 hover:text-blue-600" : "border-white/20 hover:border-white text-blue-100 hover:text-white"}`}>
                        <Globe className="w-3.5 h-3.5" />
                        <span className="uppercase text-xs tracking-widest">{lang}</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden ${scrolled ? "text-slate-700" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 text-center shadow-xl">
                    <Link href="/pos" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600">{t.nav.products}</Link>
                    <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600">{t.nav.about}</Link>
                    <Link href="#team" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600">{t.nav.team}</Link>
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600">{t.nav.contact}</Link>
                    <button onClick={() => { toggleLang(); setMobileMenuOpen(false); }} className="mx-auto text-blue-600 uppercase font-bold">{lang}</button>
                </div>
            )}
        </nav>
    );
}
