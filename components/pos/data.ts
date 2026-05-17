import {
  Banknote,
  BarChart3,
  Boxes,
  Gauge,
  Headphones,
  LayoutDashboard,
  Monitor,
  PackageCheck,
  Printer,
  QrCode,
  ReceiptText,
  ScanBarcode,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
import type { EquipmentItem, FeatureItem, PosScreen, PricingPackage } from "./types";

export const contactUrl =
  "https://wa.me/8562096656554?text=%E0%BA%AA%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%8D%E0%BA%94%E0%BA%B5%2C%20%E0%BA%82%E0%BB%89%E0%BA%AD%E0%BA%8D%E0%BA%AA%E0%BA%BB%E0%BA%99%E0%BB%83%E0%BA%88%20SKV%20POS";

export const posStats = [
  ["3+", "ຮ້ານທີ່ຕິດຕັ້ງແລ້ວ"],
  ["58/80mm", "ຮອງຮັບໃບບິນ"],
  ["Local", "ທີມຊ່ວຍດູແລ"],
];

export const functions: FeatureItem[] = [
  {
    title: "ຂາຍໜ້າຮ້ານໄວ",
    desc: "ຄິດເງິນ, ຍິງບາໂຄດ, ເລືອກວິທີຈ່າຍ ແລະ ພິມໃບບິນໄດ້ຈາກໜ້າຈໍດຽວ.",
    icon: ShoppingCart,
  },
  {
    title: "ຈັດການສະຕັອກ",
    desc: "ເບິ່ງສິນຄ້າເຂົ້າ-ອອກ, ສິນຄ້າໃກ້ໝົດ ແລະ ຕົ້ນທຶນໄດ້ຊັດເຈນ.",
    icon: Boxes,
  },
  {
    title: "ລາຍງານຍອດຂາຍ",
    desc: "ສະຫຼຸບຍອດຂາຍລາຍວັນ, ລາຍເດືອນ, ສິນຄ້າຂາຍດີ ແລະ ກຳໄລເບື້ອງຕົ້ນ.",
    icon: BarChart3,
  },
  {
    title: "ຈັດການໃບບິນ",
    desc: "ຮອງຮັບໃບບິນ 58mm, 80mm ແລະ ບັນທຶກປະຫວັດການຂາຍສຳລັບກວດສອບ.",
    icon: ReceiptText,
  },
  {
    title: "ຜູ້ໃຊ້ ແລະ ສິດເຂົ້າໃຊ້",
    desc: "ແຍກບົດບາດເຈົ້າຂອງຮ້ານ, ແຄັດເຊຍ ແລະ ພະນັກງານໄດ້ຕາມຄວາມເໝາະສົມ.",
    icon: Users,
  },
  {
    title: "Dashboard ເຈົ້າຂອງຮ້ານ",
    desc: "ເບິ່ງສຸຂະພາບຮ້ານຢ່າງໄວ ທັງຍອດຂາຍ, ຈຳນວນບິນ, ສິນຄ້າ ແລະ ກະແສເງິນ.",
    icon: LayoutDashboard,
  },
];

export const reasons = [
  "ທີມງານຢູ່ລາວ ເຂົ້າໃຈຮ້ານຄ້າທ້ອງຖິ່ນ",
  "ຊ່ວຍຕັ້ງຄ່າສິນຄ້າ, ໃບບິນ ແລະ ອຸປະກອນກ່ອນເລີ່ມໃຊ້",
  "ຫນ້າຈໍຂາຍໃຊ້ງານງ່າຍ ພະນັກງານຮຽນຮູ້ໄດ້ໄວ",
  "ລາຍງານຊ່ວຍໃຫ້ຮູ້ວ່າຮ້ານກຳລັງໄດ້ກຳໄລຈາກຫຍັງ",
  "ຮອງຮັບການຂະຫຍາຍຮ້ານ ແລະ ເພີ່ມອຸປະກອນໃນອະນາຄົດ",
];

export const qualityCards = [
  { icon: Gauge, label: "ຂາຍໄວຂຶ້ນ" },
  { icon: ShieldCheck, label: "ຂໍ້ມູນປອດໄພ" },
  { icon: Headphones, label: "ມີທີມຊ່ວຍ" },
  { icon: PackageCheck, label: "ຕໍ່ອຸປະກອນໄດ້" },
];

export const packages: PricingPackage[] = [
  {
    name: "Enterprise",
    price: "299,000 ₭",
    period: "/ ເດືອນ",
    desc: "ເໝາະກັບຮ້ານທີ່ຕ້ອງການລະບົບຄົບ ແລະ ພ້ອມຂະຫຍາຍ.",
    highlight: true,
    items: [
      "ຈຳນວນຜູ້ໃຊ້ ບໍ່ຈຳກັດ",
      "ຈັດການລູກຄ້າ & ຕິດໜີ້",
      "ຕິດຕາມປະຫວັດສິນຄ້າ",
      "ຂາຍສົ່ງ & ຂາຍຫຼາຍສະກຸນ",
      // "ອອກໃບສະເໜີລາຄາ",
      "ຂະໜາດໃບບິນ 58mm, 80mm, A4, A5",
      "ສຳຮອງຂໍ້ມູນ ບໍ່ຈຳກັດ",
      "Support 24h",
    ],
  },
];

export const posScreens: PosScreen[] = [
    {
    title: "Login ແລະ ຄວາມປອດໄພ",
    label: "Secure access",
    desc: "ຈັດການການເຂົ້າໃຊ້ງານຂອງເຈົ້າຂອງຮ້ານ ແລະ ພະນັກງານ ໃຫ້ເປັນລະບຽບກ່ອນເຂົ້າໜ້າຂາຍ.",
    image: "/pos-ui/login.png",
    icon: ShieldCheck,
    imageClassName: "object-contain",
    features: ["ແຍກບັນຊີເຈົ້າຂອງຮ້ານ ແລະ ພະນັກງານ", "ຈັດການສິດການເຂົ້າໃຊ້", "ຊ່ວຍໃຫ້ການກວດສອບຂໍ້ມູນງ່າຍຂຶ້ນ"],
  },
  {
    title: "Dashboard ພາບລວມຮ້ານ",
    label: "Owner view",
    desc: "ເບິ່ງຍອດຂາຍ, ຈຳນວນບິນ, ສິນຄ້າຂາຍດີ ແລະ ສະຖານະສະຕັອກໃນບ່ອນດຽວ.",
    image: "/pos-ui/dashboard.png",
    icon: LayoutDashboard,
    imageClassName: "object-contain",
    features: ["ສະຫຼຸບຍອດຂາຍປະຈຳວັນ", "ເບິ່ງກຳໄລ ແລະ ສິນຄ້າຂາຍດີ", "ຕິດຕາມສະຕັອກໃກ້ໝົດ"],
  },

  {
    title: "POS ຫນ້າຂາຍສິນຄ້າ",
    label: "Cashier view",
    desc: "ຂາຍສິນຄ້າໄດ້ຈາກໜ້າຈໍດຽວ, ຕິດຕາມຍອດຂາຍ ແລະ ອອກແບບໃຫ້ເຂົ້າໃຈໄວ.",
    image: "/pos-ui/pos.png",
    icon: BarChart3,
    imageClassName: "object-contain ",
    features: ["ຂາຍສິນຄ້າ", "ໄລ່ເງິນ ທອນເງິນ", "ພິມໃບບິນ"],
  },
];

export const heroScreens: PosScreen[] = [
  {
    title: "Dashboard",
    label: "Macbook view",
    desc: "Dashboard ພາບລວມສຳລັບເຈົ້າຂອງຮ້ານ",
    image: "/pos-ui/dashboard.png",
    icon: LayoutDashboard,
    imageClassName: "object-contain",
  },
  {
    title: "Dashboard Mobile",
    label: "Mobile view",
    desc: "ພາບລວມສຳລັບເບິ່ງຜ່ານມືຖື",
    image: "/pos-ui/login.png",
    icon: Monitor,
    imageClassName: "object-contain",
  },
];

export const equipment: EquipmentItem[] = [
  {
    name: "Touchscreen POS Machine D15-A",
    type: "POS Terminal",
    price: "10,500,000 ₭",
    desc: "D15-A Single Screen Southeast Asia Version ເຄື່ອງ POS ຈໍສຳຜັດສຳລັບໜ້າຂາຍ ພ້ອມຈໍລູກຄ້າ ເໝາະກັບຮ້ານທີ່ຕ້ອງການຈຸດຄິດເງິນແບບມືອາຊີບ.",
    icon: Monitor,
    image: "/hardware/pos-machine-D15-single.png",
    specs: [
      "ຈໍສຳຜັດ 15 ນິ້ວ ",
      "LED guest display 8 ນິ້ວ",
      "CPU i5, RAM 8GB, SSD 128GB, WIFI",
      "Resolution 1024 x 768",
      "Windows 10 system",
    ],
    suitableFor: "ຮ້ານຂາຍຍ່ອຍ, ຄາເຟ່, ຮ້ານອາຫານ",
  },
  {
    name: "Barcode Scanner",
    type: "Scanner",
    price: "780,000 ₭",
    desc: "ຍິງບາໂຄດສິນຄ້າໄດ້ໄວ ແລະ ຕໍ່ USB ເພື່ອໃຊ້ງານງ່າຍ ແລະ ຮອງຮັບ 1D/2D QR Code.",
    icon: ScanBarcode,
    image: "/hardware/scanner-HY-6900TWL.png",
    specs: ["ຮອງຮັບ 1D/2D QR Code", "ສາມາດໃຊ້ສາຍ ແລະ Wireless"],
    suitableFor: "ຮ້ານຄ້າ, ສາງສິນຄ້າ, ຮ້ານເຄື່ອງສຳອາງ",
  },
  {
    name: "ເຄື່ອງພິມໃບບິນ 58mm",
    type: "Receipt Printer",
    price: "ເລີ່ມຕົ້ນ 450,000 ₭",
    desc: "ຂະໜາດກະທັດຮັດ ປະຢັດພື້ນທີ່ ເໝາະກັບຮ້ານນ້ອຍ.",
    icon: Printer,
    image: "/images/equipment-printer-58.png",
    specs: ["Thermal Printer", "ຂະໜາດເຈ້ຍ 58mm", "ພິມໄວສຳລັບງານຂາຍທົ່ວໄປ", "ຕໍ່ USB"],
    suitableFor: "ຮ້ານນ້ອຍ, ບູດຂາຍຂອງ, ຮ້ານ Online ມີໜ້າຮ້ານ",
  },
  {
    name: "ເຄື່ອງພິມໃບບິນ 80mm",
    type: "Receipt Printer",
    price: "ເລີ່ມຕົ້ນ 950,000 ₭",
    desc: "ໃບບິນອ່ານງ່າຍ ຮອງຮັບການພິມທີ່ລະອຽດ ແລະ ເໝາະກັບຮ້ານທີ່ມີລູກຄ້າຫຼາຍ.",
    icon: ReceiptText,
    image: "/images/equipment-printer-80.png",
    specs: ["Thermal Printer 80mm", "ມີລຸ້ນ USB/LAN", "ບາງລຸ້ນຕັດເຈ້ຍອັດຕະໂນມັດ", "ເໝາະກັບບິນມີລາຍການຫຼາຍ"],
    suitableFor: "ຄາເຟ່, ຮ້ານອາຫານ, Minimart",
  },
  {
    name: "Cash Drawer",
    type: "Money Drawer",
    price: "ເລີ່ມຕົ້ນ 490,000 ₭",
    desc: "ລິ້ນຊັກເກັບເງິນສຳລັບເຄົາເຕີ ເປີດພ້ອມໃບບິນໄດ້ເມື່ອຕໍ່ກັບ printer.",
    icon: Banknote,
    image: "/images/equipment-cash-drawer.png",
    specs: ["4 ຊ່ອງທະນະບັດ", "8 ຊ່ອງຫຼຽນ", "ກະແຈລັອກ", "ຮອງຮັບ RJ11"],
    suitableFor: "ຮ້ານທີ່ຮັບເງິນສົດທຸກມື້",
  },
  {
    name: "Label Printer",
    type: "Barcode Label",
    price: "ເລີ່ມຕົ້ນ 1,200,000 ₭",
    desc: "ພິມສະຕິກເກີບາໂຄດ ແລະ ປ້າຍລາຄາສຳລັບສິນຄ້າທີ່ຍັງບໍ່ມີບາໂຄດ.",
    icon: QrCode,
    image: "/images/equipment-label-printer.png",
    specs: ["ຄວາມລະອຽດ 203dpi", "ຮອງຮັບ sticker barcode", "ຂະໜາດ label ປັບໄດ້", "ຕໍ່ USB"],
    suitableFor: "ຮ້ານມີສິນຄ້າຈຳນວນຫຼາຍ",
  },
];
