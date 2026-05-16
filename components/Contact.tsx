
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ t }: { t: any }) {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        if (form.current) {
            emailjs.sendForm(
                'service_jc9xwmd',
                'YOUR_TEMPLATE_ID',
                form.current,
                'YOUR_PUBLIC_KEY'
            )
                .then((result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setIsSending(false);
                    form.current?.reset();
                    setTimeout(() => setIsSent(false), 5000); // Reset success message after 5s
                }, (error) => {
                    console.log(error.text);
                    setIsSending(false);
                    alert("Failed to send message. Please try again.");
                });
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#0B0C10] relative">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <div>
                        <span className="text-6xl text-amber-500 font-serif mb-6 block">“</span>
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            {t.contact.title}
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            {t.contact.desc}
                        </p>
                        <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-wider rounded transition-colors">
                            {t.contact.cta}
                        </button>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-[#161b22]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">{t.contact.form.title}</h3>
                        <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.form.fname}</label>
                                    <input type="text" name="first_name" required className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.form.lname}</label>
                                    <input type="text" name="last_name" required className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.form.email}</label>
                                <input type="email" name="user_email" required className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.form.message}</label>
                                <textarea name="message" rows={4} required className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"></textarea>
                            </div>
                            <button disabled={isSending} className="w-full py-4 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded mt-4 transition-colors">
                                {isSending ? "Sending..." : isSent ? "Message Sent!" : t.contact.form.submit}
                            </button>
                            {isSent && <p className="text-green-500 text-sm text-center mt-2">Message sent successfully!</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
