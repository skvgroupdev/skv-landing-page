import { LayoutGrid, Phone, BarChart3, ShoppingCart, Monitor } from "lucide-react";

export type Language = "en" | "la";

export const content = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      team: "Team",
      contact: "Contact",
    },
    hero: {
      label: "Trusted Business Partner",
      title1: "Marketing Consultation",
      title2: "Sales Support System",
      title3: "Ready for Any Business",
      desc: "We are ready to lead your business to the next level.",
      cta: "Let's Talk",
    },
    stats: {
      exp: { val: "3+", label: "Years of Experience" },
      proj: { val: "25+", label: "Completed Projects" },
      client: { val: "10+", label: "Happy Clients" },
    },
    team: {
      title: "Meet Our Team",
      subtitle: "The minds behind Synergy, Kindred, and Vision.",
      members: [
        // {
        //   name: "Soulixai Vialsit",
        //   role: "Head Team - Developer",
        //   img: "sou",
        //   social: "https://www.facebook.com/soulixai.vilasit"
        // },
        {
          name: "Kananda Keothonchan",
          role: "Consultants and Planners",
          img: "kun",
          social: "#"
        },
        {
          name: "Vongvilay Chounlany",
          role: "Senior Marketing",
          img: "vong",
          social: "https://www.facebook.com/vongvilay.chounlany"
        }
      ]
    },
    services: {
      title: "Our Services", // Added generic title key
      subtitle: "We are ready to provide the best service to help your business grow and succeed.",
      items: [
        {
          title: "Marketing Consultation",
          desc: "Analyze and plan marketing to increase sales and expand customer base for your business with a professional team.",
          icon: BarChart3,
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "group-hover:border-blue-500/50"
        },
        {
          title: "POS System Shop Manager",
          desc: "Comprehensive shop management system. Manage stock, record sales, and report results accurately and easily.",
          icon: Monitor,
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "group-hover:border-amber-500/50"
        },
        {
          title: "Ecommerce Website",
          desc: "Design and develop modern online sales websites supporting payments and shipping integration.",
          icon: ShoppingCart,
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "group-hover:border-green-500/50"
        },
      ]
    },
    values: {
      title: "Who Are We?",
      desc: "SKV Group was born from the gathering of three friends with a dream to create quality things that meet the needs of current businesses to serve society.",
      items: [
        {
          letter: "S",
          word: "Synergy",
          sub: "Collaboration",
          desc: "Collaborative power to achieve more together.",
          icon: "Users",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "group-hover:border-blue-500"
        },
        {
          letter: "K",
          word: "Kindred",
          sub: "Relationship",
          desc: "Building strong, kindred relationships.",
          icon: "Heart",
          color: "text-pink-500",
          bg: "bg-pink-500/10",
          border: "group-hover:border-pink-500"
        },
        {
          letter: "V",
          word: "Vision",
          sub: "Foresight",
          desc: "Clear foresight for future innovations.",
          icon: "Eye",
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "group-hover:border-amber-500"
        }
      ]
    },
    contact: {
      title: "Want to Grow Your Business?",
      desc: "We work with brands, startups, to SMEs. Collaborate for more impact and growth.",
      cta: "Hire Us",
      form: {
        title: "Let's Connect",
        fname: "First Name",
        lname: "Last Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Message"
      }
    }
  },
  la: {
    nav: {
      home: "ໜ້າຫຼັກ",
      products: "ຜະລິດຕະພັນ",
      services: "ບໍລິການ",
      portfolio: "ຜົນງານ",
      about: "ກ່ຽວກັບເຮົາ",
      team: "ທີມງານ",
      contact: "ຕິດຕໍ່",
    },
    hero: {
      label: "ຄູ່ຮ່ວມທຸລະກິດທີ່ທ່ານວາງໃຈໄດ້",
      title1: "ປຶກສາດ້ານການຕະຫຼາດ",
      title2: "ມີລະບົບຊັບພອດການຂາຍ",
      title3: "ພ້ອມບໍລິການທຸກທຸລະກິດ",
      desc: "ພວກເຮົາພ້ອມນຳພາທຸລະກິດຂອງທ່ານກ້າວໄປອິກຂັ້ນ.",
      cta: "ປຶກສາພວກເຮົາ",
    },
    stats: {
      exp: { val: "3+", label: "ປີແຫ່ງປະສົບການ" },
      proj: { val: "25+", label: "ໂຄງການສຳເລັດ" },
      client: { val: "10+", label: "ລູກຄ້າທີ່ພໍໃຈ" },
    },
    team: {
      title: "ທີມງານຂອງພວກເຮົາ",
      subtitle: "ຜູ້ຢູ່ເບື້ອງຫຼັງຄວາມສຳເລັດ.",
      members: [
        // {
        //   name: "ສຸລິໄຊ ວິລະສິດ",
        //   role: "ຫົວໜ້າທີມ - developer",
        //   img: "sou",
        //   social: "https://www.facebook.com/soulixai.vilasit"
        // },
        {
          name: "ການັນດາ ແກ້ວທ່ອນຈັນ",
          role: "ທີ່ປຶກສາ ແລະ ວາງແຜນ",
          img: "kun",
          social: "#"
        },
        {
          name: "ວົງວິໄລ ຈູນລະນີ",
          role: "ການຕະຫຼາດອາວຸໂສ",
          img: "vong",
          social: "https://www.facebook.com/vongvilay.chounlany"
        }
      ]
    },
    services: {
      title: "ບໍລິການຂອງພວກເຮົາ",
      subtitle: "ພວກເຮົາພ້ອມໃຫ້ບໍລິການທີ່ດີທີ່ສຸດເພື່ອຊ່ວຍໃຫ້ທຸລະກິດຂອງທ່ານເຕີບໃຫຍ່ ແລະ ປະສົບຜົນສຳເລັດ",
      items: [
        {
          title: "ໃຫ້ຄຳປືກສາການຕະຫຼາດ",
          desc: "ຊ່ວຍວິເຄາະ ແລະ ວາງແຜນການຕະຫຼາດ ເພື່ອເພີ່ມຍອດຂາຍ ແລະ ຂະຫຍາຍຖານລູກຄ້າໃຫ້ທຸລະກິດຂອງທ່ານ ດ້ວຍທີມງານມືອາຊີບ.",
          icon: BarChart3,
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "group-hover:border-blue-500/50",
          link: "#"
        },
        {
          title: "POS system Shop Manager",
          desc: "ລະບົບຈັດການຮ້ານຄ້າຄົບວົງຈອນ ຄຸ້ມຄອງສະຕັອກ ບັນທຶກການຂາຍ ແລະ ລາຍງານຜົນໄດ້ຢ່າງຖືກຕ້ອງ ໃຊ້ງານງ່າຍ.",
          icon: Monitor,
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "group-hover:border-amber-500/50",
          link: "/pos"
        },
        {
          title: "ຫນ້າເວັບ Ecomerce ຂາຍອອນລາຍ",
          desc: "ອອກແບບ ແລະ ພັດທະນາເວັບໄຊທ໌ຂາຍສິນຄ້າອອນລາຍ ທີ່ທັນສະໄໝ ຮອງຮັບການຊຳລະເງິນ ແລະ ການເຊື່ອມຕໍ່ລະບົບຂົນສົ່ງ.",
          icon: ShoppingCart,
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "group-hover:border-green-500/50",
          link: "#"
        },
      ]
    },
    values: {
      title: "ພວກເຮົາແມ່ນໃຜ?",
      desc: "SKV Group ເກີດຈາກການລວມຕົວຂອງສາມສ່ຽວທີ່ມີຄວາມຝັນຢາກສ້າງສິ່ງທີ່ມີຄຸນນະພາບ ແລະ ຕອບໂຈດຄວາມຕ້ອງການຂອງທຸລະກິດໃນປັດຈຸບັນ ເພື່ອມາຮັບໃຊ້ສັງຄົມ.",
      items: [
        {
          letter: "S",
          word: "Synergy",
          sub: "ຄວາມຮ່ວມມື",
          desc: "ພະລັງແຫ່ງການຮ່ວມມືເພື່ອຄວາມສຳເລັດ.",
          icon: "Users",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "group-hover:border-blue-500"
        },
        {
          letter: "K",
          word: "Kindred",
          sub: "ສາຍສຳພັນ",
          desc: "ສ້າງຄວາມຜູກພັນທີ່ແໜ້ນແຟ້ນ.",
          icon: "Heart",
          color: "text-pink-500",
          bg: "bg-pink-500/10",
          border: "group-hover:border-pink-500"
        },
        {
          letter: "V",
          word: "Vision",
          sub: "ວິໄສທັດ",
          desc: "ມຸມມອງກວ້າງໄກເພື່ອອະນາຄົດ.",
          icon: "Eye",
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "group-hover:border-amber-500"
        }
      ]
    },
    contact: {
      title: "ຕ້ອງການຂະຫຍາຍທຸລະກິດຂອງທ່ານບໍ?",
      desc: "ພວກເຮົາເຮັດວຽກຮ່ວມກັບແບຣນ, startup ແລະ SMEs. ຮ່ວມມືກັນເພື່ອຜົນກະທົບ ແລະ ການເຕີບໂຕ.",
      cta: "ຕິດຕໍ່ພວກເຮົາ",
      form: {
        title: "Let's Connect",
        fname: "ຊື່",
        lname: "ນາມສະກຸນ",
        email: "ອີເມວ",
        message: "ຂໍ້ຄວາມ",
        submit: "ສົ່ງຂໍ້ຄວາມ"
      }
    }
  }
};
