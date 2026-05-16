import { ArrowUpRight, BadgeCheck, Brush, MonitorCheck } from "lucide-react";
import Image from "next/image";

const posProjects = [
    {
        name: "ຮ້ານເຄື່ອງສຳອາງພັດທະນາ",
        location: "ສາລະວັນ",
        image: "/images/phatthana_cosmetic.jpg",
        images: ["/images/ptn-pos1.jpg", "/images/ptn-pos-2.jpg", "/images/ptn-pos3.jpg"],
        work: ["ຕິດຕັ້ງ POS", "ຈັດການສະຕັອກ", "ອອກແບບ Logo"],
    },
    {
        name: "ຮ້ານ ລັດດາຮຸ່ງຊັບອໍໂຕ້",
        location: "ສາລະວັນ",
        image: "/images/logo-no-bg.png",
        work: ["ຕິດຕັ້ງ POS", "ຕັ້ງຄ່າລະບົບ", "ແນະນຳການໃຊ້ງານ"],
    },
    {
        name: "ຮ້ານ ທອງມາໂຮມ",
        location: "ນະຄອນຫຼວງວຽງຈັນ",
        image: "/images/tma_home.png",
        work: ["ຕິດຕັ້ງ POS", "ອອກແບບ Logo", "ຈັດການຂໍ້ມູນສິນຄ້າ"],
    },
];

const designWorks = [
    {
        title: "Logo Design",
        client: "ພັດທະນາ Cosmetic",
        image: "/images/phatthana_cosmetic.jpg",
    },
    {
        title: "Brand Visual",
        client: "Salavan Indy",
        image: "/images/salavan_indy.jpg",
    },
    {
        title: "Logo / Store Identity",
        client: "ທອງມາໂຮມ",
        image: "/images/tma_home.png",
    },
    {
        title: "Content Brand",
        client: "ສະໝອງເສດຖີ",
        image: "/images/smong-set-thi.jpg",
    },
];

export default function MyCustomer() {
    return (
        <section id="portfolio" className="bg-slate-50 py-20 md:py-24">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                    <div>
                        <p className="text-sm font-semibold text-blue-600">Portfolio</p>
                        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-950">
                            ຜົນງານຂອງເຮົາ
                        </h2>
                    </div>
        
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {posProjects.map((project) => (
                        <article key={project.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <div className="relative aspect-[4/3] bg-slate-100">
                                {project.images ? (
                                    <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-1">
                                        <div className="relative overflow-hidden">
                                            <Image src={project.images[0]} alt={`${project.name} POS installation`} fill className="object-cover" sizes="(max-width: 768px) 65vw, 22vw" />
                                        </div>
                                        <div className="grid gap-1">
                                            {project.images.slice(1).map((image, index) => (
                                                <div key={image} className="relative overflow-hidden">
                                                    <Image src={image} alt={`${project.name} POS installation ${index + 2}`} fill className="object-cover" sizes="(max-width: 768px) 35vw, 11vw" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                                )}
                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-sm">
                                    <MonitorCheck size={14} />
                                    POS Install
                                </div>
                            </div>

                            <div className="p-5">
                                <p className="text-sm font-semibold text-slate-500">{project.location}</p>
                                <h3 className="mt-1 text-xl font-bold text-slate-950">{project.name}</h3>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.work.map((item) => (
                                        <span key={item} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                            <BadgeCheck size={13} className="text-blue-500" />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold text-blue-600">Design Work</p>
                            <h3 className="mt-1 text-2xl font-bold text-slate-950">Logo, Banner ແລະ Brand Visual</h3>
                        </div>
                        <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 md:flex">
                            <Brush size={21} />
                        </div>
                    </div>

                    <div className="-mx-5 snap-x snap-mandatory overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0">
                        <div className="flex gap-4 md:grid md:grid-cols-4">
                            {designWorks.map((work) => (
                                <article key={`${work.title}-${work.client}`} className="group w-[72vw] max-w-[260px] shrink-0 snap-start md:w-auto md:max-w-none">
                                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                                        <Image src={work.image} alt={work.client} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 72vw, 25vw" />
                                    </div>
                                    <div className="mt-3 flex items-start justify-between gap-3">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-950">{work.title}</h4>
                                            <p className="mt-1 text-sm text-slate-500">{work.client}</p>
                                        </div>
                                        <ArrowUpRight size={16} className="mt-1 text-slate-400" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
