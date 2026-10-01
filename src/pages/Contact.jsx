import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Globe2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin />, title: "Our Location", text: "GRD/2 Vijaya Bhavan, CTS-61, Prabhat Colony, Santacruz East Mumbai" },
    { icon: <Phone />, title: "Call Us", text: "+91 93200 05152" },
    { icon: <Mail />, title: "Email", text: "info@falconinternationalco.com" },
  ];
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative bg-[#002955] py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002955] via-[#002955]/90 to-[#002955]/65" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-semibold tracking-widest text-blue-300">CONTACT US</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 whitespace-pre-line text-5xl font-bold text-white md:text-6xl">Let's Connect{"\n"}For Global Business</motion.h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">Get in touch with Falcon International Co. for export inquiries, partnerships and international trading solutions.</p>
        </div>
      </section>
      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {contactInfo.map((item, index) => <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="rounded-3xl border bg-white p-8 text-center shadow-lg"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#0057c8]">{item.icon}</div><h3 className="mt-5 text-xl font-bold text-[#002955]">{item.title}</h3><p className="mt-3 text-gray-600">{item.text}</p></motion.div>)}
      </div></section>
      <section className="bg-[#f5f9ff] py-20"><div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div><p className="font-semibold text-blue-600">BUSINESS INQUIRY</p><h2 className="mt-4 text-4xl font-bold text-[#002955]">Send Us Your Requirement</h2><p className="mt-5 text-gray-600">Whether you need frozen meat, fresh fruits export or agricultural products, our team will assist you with complete solutions.</p><div className="mt-8 space-y-5"><div className="flex gap-4"><Globe2 className="text-blue-600"/><p>Worldwide Export Network</p></div><div className="flex gap-4"><Clock className="text-blue-600"/><p>Working Hours: 9 AM - 8 PM</p></div></div></div>
        <motion.form initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-3xl bg-white p-8 shadow-xl"><input placeholder="Your Name" className="mb-4 w-full rounded-xl border px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"/><input placeholder="Company Name" className="mb-4 w-full rounded-xl border px-5 py-4 outline-none"/><input placeholder="Email Address" className="mb-4 w-full rounded-xl border px-5 py-4 outline-none"/><input placeholder="Phone Number" className="mb-4 w-full rounded-xl border px-5 py-4 outline-none"/><textarea placeholder="Your Message" rows="5" className="mb-4 w-full rounded-xl border px-5 py-4 outline-none"/><button className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#0057c8] py-4 font-semibold text-white">Send Inquiry <Send size={18}/></button></motion.form>
      </div></section>
      <section className="py-16"><div className="mx-auto max-w-7xl px-6"><div className="h-[400px] overflow-hidden rounded-3xl shadow-xl"><iframe title="Falcon International location in Mumbai" className="h-full w-full" src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"/></div></div></section>
      <section className="bg-[#002955] py-16 text-center"><h2 className="text-4xl font-bold text-white">Ready To Start Business With Us?</h2><p className="mt-4 text-blue-100">Connect with Falcon International Co. for reliable global trading solutions.</p><button className="mt-8 rounded-full bg-white px-10 py-4 font-bold text-[#002955]">Contact Our Team</button></section>
    </div>
  );
};
export default Contact;