import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SKV POS - ລະບົບຈັດການຮ້ານຄ້າທີ່ທັນສະໄໝ | Point of Sale System Laos",
    description: "ຍົກລະດັບທຸລະກິດຂອງທ່ານດ້ວຍ SKV POS. ລະບົບຂາຍໜ້າຮ້ານທີ່ອອກແບບມາເພື່ອຮ້ານອາຫານ, ຮ້ານຂາຍຍ່ອຍ ແລະ ທຸລະກິດຂະໜາດນ້ອຍ-ກາງໃນລາວ. ໃຊ້ງານງ່າຍ, ລາຄາປະຢັດ, ຟັງຊັ່ນຄົບ.",
    keywords: ["SKV POS", "POS System Laos", "Point of Sale", "ລະບົບ POS", "ໂປຣແກຣມຂາຍໜ້າຮ້ານ", "Inventory Management", "Retail POS", "Restaurant POS"],
    openGraph: {
        title: "SKV POS - ລະບົບ POS ທີ່ດີທີ່ສຸດສຳລັບທຸລະກິດລາວ",
        description: "ຈັດການສະຕັອກ, ຍອດຂາຍ ແລະ ລູກຄ້າໄດ້ງ່າຍໆ ດ້ວຍ SKV POS. ເລີ່ມຕົ້ນມື້ນີ້ເພື່ອການເຕີບໂຕທີ່ຍືນຍົງ.",
        url: "https://www.skvlao.com/pos",
        siteName: "SKV Group",
        images: [
            {
                url: "/web-app-manifest-512x512.png", // Fallback to main logo, can be updated to specific POS image later
                width: 512,
                height: 512,
                alt: "SKV POS System",
            },
        ],
        locale: "lo_LA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SKV POS - ລະບົບຈັດການຮ້ານຄ້າທີ່ທັນສະໄໝ",
        description: "ລະບົບ POS ທີ່ເຂົ້າໃຈຜູ້ປະກອບການລາວ. ໃຊ້ງານງ່າຍ, ຟັງຊັ່ນຄົບ, ລາຄາສະບາຍກະເປົ໋າ.",
        images: ["/web-app-manifest-512x512.png"],
    },
    alternates: {
        canonical: "https://www.skvlao.com/pos",
    },
};

export default function PosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
