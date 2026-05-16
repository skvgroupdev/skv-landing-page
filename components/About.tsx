import { CalendarDays, Crown, MapPin, Sparkles } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import AvatarKun from "../public/images/avatar_kun.jpg";
import AvatarVong from "../public/images/avatar_vong.jpg";
import Honglisa from "../public/images/honglisa.png";
import Soulixai from "../public/images/soulixai.jpg";

interface AboutCopy {
    values: {
        title: string;
        desc: string;
    };
}

interface TeamMember {
    name: string;
    role: string;
    note: string;
    image: StaticImageData;
    href?: string;
    featured?: boolean;
    badge?: "CEO" | "COO";
    objectFit?: "cover" | "contain";
}

const story = [
    {
        title: "ເລີ່ມຈາກສາລະວັນ",
        desc: "ສຸ, ກັນ ແລະ ວົງ ເກີດ ແລະ ເຕີບໃຫຍ່ຢູ່ແຂວງສາລະວັນ ຮຽນນຳກັນຕັ້ງແຕ່ ປ.1 ຈົນຮອດມັດທະຍົມປາຍ.",
        icon: MapPin,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "ຄວາມຝັນດຽວກັນ",
        desc: "ຕອນຮຽນມັດທະຍົມປາຍ ພວກເຮົາເຄີຍໂອ້ລົມເລື່ອງອະນາຄົດ ແລະ ຮູ້ວ່າຢາກມີທຸລະກິດທີ່ຊ່ວຍຄົນອື່ນ ແລະ ພັດທະນາບ້ານເກີດ.",
        icon: Sparkles,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        title: "2019 - 2027",
        desc: "ຕັ້ງແຕ່ປີ 2019 ພວກເຮົາແຍກຍ້າຍໄປເກັບກ່ຽວປະສົບການ. ໃນປີ 2027 ພວກເຮົາວາງແຜນກັບມາບ້ານເກີດ ແລະ ລຸຍເປົ້າໝາຍນີ້ຮ່ວມກັນ.",
        icon: CalendarDays,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
];

const teamMembers: TeamMember[] = [
    {
        name: "ສຸລິໄຊ ວິລະສິດ",
        role: "CEO / Lead Developer",
        note: "",
        image: Soulixai,
        featured: true,
        badge: "CEO",
    },
    {
        name: "ການັນດາ ແກ້ວທ່ອນຈັນ",
        role: "Consultant & Planner",
        note: "",
        image: AvatarKun,
        badge: "COO",
    },
    {
        name: "ວົງວິໄລ ຈູນລະນີ",
        role: "Senior Marketing",
        note: "",
        image: AvatarVong,
        href: "",
        badge: "COO",
    },
    {
        name: "ຫົງລິສາ",
        role: "Graphic Design",
        note: "",
        image: Honglisa,
    },
];

function TeamCard({ member }: { member: TeamMember }) {
    const card = (
        <article
            className={
                member.featured
                    ? "group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70"
                    : "group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70"
            }
        >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-50">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={member.objectFit === "contain" ? "object-contain p-8" : "object-cover"}
                    sizes="(max-width: 768px) 80vw, 25vw"
                />
                {member.badge && (
                    <div className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm ${member.badge === "CEO" ? "bg-blue-600" : "bg-slate-900/85 backdrop-blur-sm"}`}>
                        {member.badge === "CEO" && <Crown size={14} />}
                        {member.badge}
                    </div>
                )}
            </div>

            <div className="pt-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-950">
                        {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-blue-600">{member.role}</p>
                </div>
                <p className="text-sm leading-7 text-slate-600">{member.note}</p>
            </div>
        </article>
    );

    if (!member.href) {
        return card;
    }

    return (
        <Link href={member.href} className="block">
            {card}
        </Link>
    );
}

export default function About({ t }: { t: AboutCopy }) {
    return (
        <section id="about" className="bg-white py-16 md:py-20">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-semibold text-blue-600">About SKV Group</p>
                        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-950">
                            {t.values.title}
                        </h2>
                    </div>
                    <p className="text-base md:text-lg leading-8 text-slate-600">
                        {t.values.desc}
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {story.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                                    <item.icon size={22} />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-slate-950">{item.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-14">
                    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-blue-600">Our Team</p>
                            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-950">ທີມງານຂອງພວກເຮົາ</h2>
                        </div>
                        <p className="max-w-xl text-sm leading-7 text-slate-600">
                            ທີມນ້ອຍໆ ທີ່ເຮັດວຽກຫຼາຍດ້ານ: ວາງແຜນ, ພັດທະນາລະບົບ, ການຕະຫຼາດ ແລະ ຊັບພອດລູກຄ້າ.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
