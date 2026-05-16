import { BarChart3, ShoppingCart, Monitor, Palette } from "lucide-react";

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
          border: "group-hover:border-blue-500/50",
          link: "#"
        },
        {
          title: "POS System Shop Manager",
          desc: "Comprehensive shop management system. Manage stock, record sales, and report results accurately and easily.",
          icon: Monitor,
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "group-hover:border-amber-500/50",
          link: "/pos"
        },
        {
          title: "Ecommerce Website",
          desc: "Design and develop modern online sales websites supporting payments and shipping integration.",
          icon: ShoppingCart,
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "group-hover:border-green-500/50",
          link: "#"
        },
        {
          title: "Logo & Advertising Sign Design",
          desc: "Create logos, brand visuals, and advertising signs that help your business look professional and memorable.",
          icon: Palette,
          color: "text-pink-500",
          bg: "bg-pink-500/10",
          border: "group-hover:border-pink-500/50",
          link: "#"
        },
      ]
    },
    values: {
      title: "The Story of SKV Group",
      desc: "SKV Group began with three childhood friends from Salavan who shared one dream: to build a business that helps others and brings something better back to their hometown."
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
      subtitle: "ເຮົາເຮັດວຽກກັບຮ້ານຄ້າ ແລະ ທຸລະກິດທ້ອງຖິ່ນ ຕັ້ງແຕ່ວາງແຜນ, ອອກແບບ ຈົນເຖິງເຄື່ອງມືຊ່ວຍຂາຍ.",
      items: [
        {
          title: "ປຶກສາການຕະຫຼາດ",
          desc: "ເບິ່ງຈຸດແຂງຂອງຮ້ານ, ກຳນົດກຸ່ມລູກຄ້າ ແລະ ວາງແຜນໂປຣໂມຊັນໃຫ້ເໝາະກັບຕະຫຼາດຈິງ.",
          icon: BarChart3,
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "group-hover:border-blue-500/50",
          link: "#"
        },
        {
          title: "ລະບົບ POS",
          desc: "ຊ່ວຍຂາຍໜ້າຮ້ານ, ເບິ່ງສະຕັອກ, ສະຫຼຸບຍອດຂາຍ ແລະ ຮູ້ກຳໄລໄດ້ງ່າຍຂຶ້ນ.",
          icon: Monitor,
          logo: "/images/logo-no-bg.png",
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "group-hover:border-amber-500/50",
          link: "/pos"
        },
        {
          title: "ອອກແບບເວັບ Ecommerce",
          desc: "ສ້າງໜ້າຮ້ານອອນລາຍໃຫ້ເບິ່ງໜ້າເຊື່ອຖື ຈັດການສິນຄ້າໄດ້ ແລະ ພ້ອມຕໍ່ຍອດການຂາຍ.",
          icon: ShoppingCart,
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "group-hover:border-green-500/50",
          link: "#"
        },
        {
          title: "ອອກແບບໂລໂກ້ ແລະ ປ້າຍໂຄສະນາ",
          desc: "ອອກແບບໃຫ້ຈື່ງ່າຍ ໃຊ້ໄດ້ທັງໜ້າຮ້ານ, Facebook, ປ້າຍ ແລະ ສື່ໂຄສະນາອື່ນໆ.",
          icon: Palette,
          color: "text-pink-500",
          bg: "bg-pink-500/10",
          border: "group-hover:border-pink-500/50",
          link: "#"
        },
      ]
    },
    values: {
      title: "ເລື່ອງລາວຂອງ SKV GROUP",
      desc: "SKV GROUP ເກີດຈາກເດັກນ້ອຍສາມຄົນ: ສຸ, ກັນ ແລະ ວົງ. ພວກເຮົາເກີດ ແລະ ເຕີບໃຫຍ່ຢູ່ແຂວງສາລະວັນ, ຮຽນນຳກັນຕັ້ງແຕ່ ປ.1 ຈົນຮອດມັດທະຍົມປາຍ. ພວກເຮົາມີຄວາມຝັນຄືກັນ: ຢາກສ້າງທຸລະກິດທີ່ຊ່ວຍຄົນອື່ນ ແລະ ພັດທະນາບ້ານເກີດໃຫ້ດີຂຶ້ນ."
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
