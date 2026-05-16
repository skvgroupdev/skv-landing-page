
import { Quote } from "lucide-react";

export default function MyCustomer({ t }: { t: any }) {
    const customers = [
        {
            name: "ຮ້ານຂາຍເຄື່ອງສຳອາງ ພັດທະນາ (ນ ແຫຼ້) ",
            category: "ຮ້ານເຄື່ອງສຳອາງ (ສາລະວັນ)",
            service: "POS System + Marketing + LOGO Design",
            testimonial: "",

        },
        {
            name: "ຮ້ານ ລັດດາຮຸ່ງຊັບອໍໂຕ້",
            category: "ຮ້ານຂາຍອາໄຫຼ່ລົດ (ສາລະວັນ)",
            service: "POS System",
            testimonial: "",
        },
        {
            name: "ຮ້ານ ທອງມາໂຮມ",
            category: "ຮ້ານຂາຍເຄື່ອງກໍ່ສ້າງ (ນະຄອນຫລວງວຽງຈັນ)",
            service: "POS System + LOGO Design",
            testimonial: "",
        },

    ];

    return (
        <section id="customers" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none"></div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    {/* <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">Our Clients</span> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ລູກຄ້າທີ່ໄວ້ວາງໃຈເຮົາ</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        ຄວາມພໍໃຈຂອງລູກຄ້າຄືກຳລັງໃຈຂອງພວກເຮົາ ຂອບໃຈທີ່ໄວ້ວາງໃຈໃຫ້ພວກເຮົາເປັນສ່ວນໜຶ່ງໃນຄວາມສຳເລັດຂອງທ່ານ
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {customers.map((customer, index) => (
                        <div key={index} className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-blue-500/5">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={40} className="text-blue-500" />
                            </div>

                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {customer.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-medium">{customer.category}</p>
                                    </div>
                                </div>

                                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-600 font-semibold">
                                    {customer.service}
                                </div>
                            </div>

                            {/* Stars */}
                            {/* <div className="flex gap-1 mb-4">
                                {[...Array(customer.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                                ))}
                            </div> */}

                            {/* Testimonial */}
                            {/* <p className="text-slate-400 text-sm leading-relaxed italic">
                                "{customer.testimonial}"
                            </p> */}

                            {/* Bottom accent line */}
                            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-6 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Trust Badge */}
                {/* <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-sm">30+ ລູກຄ້າທີ່ພໍໃຈ</p>
                            <p className="text-slate-500 text-xs">ແລະ ຍັງເພີ່ມຂຶ້ນທຸກວັນ</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
