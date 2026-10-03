"use client";

import Footer from "../../components/Footer";
import MyCustomer from "../../components/MyCustomer";
import Navbar from "../../components/Navbar";
import PosCtaSection from "../../components/pos/PosCtaSection";
import PosDemoSection from "../../components/pos/PosDemoSection";
import PosEquipmentSection from "../../components/pos/PosEquipmentSection";
import PosFunctionsSection from "../../components/pos/PosFunctionsSection";
import PosHero from "../../components/pos/PosHero";
import PosPricingSection from "../../components/pos/PosPricingSection";
import PosScreensSection from "../../components/pos/PosScreensSection";
import PosWhySection from "../../components/pos/PosWhySection";
import { content } from "../../lib/content";

export default function PosPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar t={content.la} lang="la" toggleLang={() => undefined} scrolled />

      <main>
        <PosHero />
        <PosDemoSection />
        <PosScreensSection />
        <PosFunctionsSection />
        <PosWhySection />
        <PosPricingSection />
        <PosEquipmentSection />
        <MyCustomer />
        <PosCtaSection />
      </main>

      <Footer />
    </div>
  );
}
