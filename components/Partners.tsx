
import Image from "next/image";

const partners = [
    {
        name: "SALAVAN INDY",
        logo: "/images/salavan_indy.jpg",
        link: "https://www.facebook.com/SalavanIndy",
    },
    {
        name: "ຮ້ານເຄື່ອງສຳອາງພັດທະນາ",
        logo: "/images/phatthana_cosmetic.jpg",
        link: "https://www.facebook.com/profile.php?id=61564899894482",
    },
    {
        name: "ທອງມາໂຮມ",
        logo: "/images/tma_home.png",
        link: "#",
    },
    {
        name: "ສະໝອງເສດຖີ",
        logo: "/images/smong-set-thi.jpg",
        link: "https://www.facebook.com/profile.php?id=100080014844899",
    },
    {
        name: "sou dev",
        logo: "/images/sou-dev.png",
        link: "https://www.facebook.com/profile.php?id=61589070775221",
    },
];

export default function Partners() {
    return (
        <section className="py-6 bg-white border-b border-slate-100">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => {
                        const isExternal = partner.link.startsWith("http");

                        return (
                            <a
                                key={partner.name}
                                href={partner.link}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 relative overflow-hidden rounded-full shadow-sm bg-slate-100">
                                    <Image src={partner.logo} alt={partner.name} fill className="object-cover" />
                                </div>
                                <span className="text-sm md:text-base font-bold text-slate-500 group-hover:text-blue-600 transition-colors">{partner.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
