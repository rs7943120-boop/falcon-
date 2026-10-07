import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import frozenMeatHero from "../assets/frozen meat .png";
import hindQuarterProduct from "../assets/frozen meat/Buffalo Hind Quarter Cuts.png";
import foreQuarterProduct from "../assets/frozen meat/Buffalo Fore Quarter Cuts.jpg";
import vealProduct from "../assets/frozen meat/Buffalo Veal Cuts.png";
import offalsProduct from "../assets/frozen meat/Buffalo Offals.png";
import buffaloCutsDiagram from "../assets/frozen meat/hero.png";

import apedaCertification from "../assets/apeda.png";
import halalCertification from "../assets/halal.png";
import fssaiCertification from "../assets/fssai.jpg";
import isoCertification from "../assets/ISO.png";
import haccpCertification from "../assets/haccp.jpg";

import {
  ShieldCheck,
  Globe2,
  Truck,
  Snowflake,
  Package,
  Award,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    title: "Buffalo Hind Quarter",
    img: hindQuarterProduct,
    desc: "Premium hind quarter cuts selected for quality, consistency and international export requirements.",
    link: "/frozen-meat/hind-quarter",
  },
  {
    title: "Buffalo Fore Quarter",
    img: foreQuarterProduct,
    desc: "Carefully prepared fore quarter cuts offering dependable quality for global meat buyers.",
    link: "/frozen-meat/fore-quarter",
  },
  {
    title: "Buffalo Veal Cuts",
    img: vealProduct,
    desc: "Selected veal cuts processed with careful handling and maintained under controlled conditions.",
    link: "/frozen-meat/veal",
  },
  {
    title: "Buffalo Offals",
    img: offalsProduct,
    desc: "A selected range of buffalo offal products prepared for international market requirements.",
    link: "/frozen-meat/offals",
  },
];

const features = [
  {
    icon: Truck,
    title: "Reliable Supply",
    desc: "Consistent sourcing with dependable delivery schedules.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "Careful handling and strict quality checks throughout.",
  },
  {
    icon: Package,
    title: "Flexible Packing",
    desc: "Packing solutions designed around buyer requirements.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Export-oriented solutions for international buyers.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain",
    desc: "Controlled frozen handling from processing to dispatch.",
  },
  {
    icon: Award,
    title: "Export Standards",
    desc: "Documentation and processes aligned with export needs.",
  },
];

const certifications = [
  { name: "APEDA", logo: apedaCertification },
  { name: "HALAL", logo: halalCertification },
  { name: "FSSAI", logo: fssaiCertification },
  { name: "ISO", logo: isoCertification },
  { name: "HACCP", logo: haccpCertification },
  { name: "QUALITY", Icon: Award },
];

const FrozenMeat = () => {
  return (
    <div className="overflow-hidden bg-white text-[#071426]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#020812]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{
            scale: [1.08, 1.03, 1.06],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={frozenMeatHero}
            alt="Premium frozen buffalo meat export"
            className="h-full w-full object-cover object-center brightness-[1.03] contrast-[1.08] saturate-[1.08]"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/5" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-white via-white/95 via-[48%] to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#020812]/80 via-transparent to-transparent" />

        <motion.div
          className="pointer-events-none absolute -left-40 top-[25%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="pointer-events-none absolute right-[12%] top-[15%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1450px] items-center px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[760px] pt-24 pb-32"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-2.5 shadow-[0_8px_30px_rgba(37,99,235,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-blue-500"
                  animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#071426] md:text-xs">
                Frozen Meat Export
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="font-bold text-blue-600"
              >
                →
              </motion.span>
            </motion.div>

            <h1 className="font-black leading-[0.94] tracking-[-0.045em] text-5xl sm:text-6xl lg:text-[78px]">
              <motion.span
                className="block text-[#071426] drop-shadow-[0_3px_10px_rgba(255,255,255,0.7)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                Premium Frozen
              </motion.span>

              <motion.span
                className="mt-3 block bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#16A34A] bg-[length:200%_auto] bg-clip-text font-black text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.8 },
                  y: { delay: 0.5, duration: 0.8 },
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                Buffalo Meat
              </motion.span>

              <motion.span
                className="mt-3 block bg-gradient-to-r from-[#DC2626] via-[#F97316] to-[#EAB308] bg-clip-text font-black text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                From India
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-8 max-w-[630px] text-base font-medium leading-8 text-[#172033] md:text-lg"
            >
              Supplying premium frozen buffalo meat and selected meat products
              to importers, distributors and food service buyers across
              international markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-r from-[#2563EB] via-[#0891B2] to-[#06B6D4] px-7 py-4 text-base font-bold text-white shadow-[0_12px_35px_rgba(37,99,235,0.45)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,182,212,0.55)]"
              >
                <span>View Product Range</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={17} />
                </span>
              </motion.a>

              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 rounded-2xl border-2 border-[#38BDF8] bg-[#071426] px-7 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(7,20,38,0.35)] transition-all duration-300 hover:bg-[#0B1F3A]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                    <ArrowUpRight size={17} />
                  </span>
                  <span>Contact Us</span>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 flex max-w-[720px] flex-wrap items-center gap-x-8 gap-y-5 border-t border-slate-300/70 pt-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50">
                  <ShieldCheck size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#071426]">Quality Focus</p>
                  <p className="mt-0.5 text-xs text-[#475569]">Export Grade</p>
                </div>
              </div>

              <div className="hidden h-9 w-px bg-slate-300 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50">
                  <Globe2 size={20} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#071426]">Global Supply</p>
                  <p className="mt-0.5 text-xs text-[#475569]">International Markets</p>
                </div>
              </div>

              <div className="hidden h-9 w-px bg-slate-300 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-200 bg-green-50">
                  <Truck size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#071426]">Cold Chain</p>
                  <p className="mt-0.5 text-xs text-[#475569]">Reliable Delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:flex lg:right-12"
        >
          <span className="h-px w-8 bg-cyan-400" />
          Premium Indian Export
        </motion.div>
      </section>

   

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-[#FFFDF8] py-20 lg:py-28">
       
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-7 inline-flex items-center gap-3">
                <span className="flex h-10 w-10 rotate-[-5deg] items-center justify-center rounded-[14px] border-2 border-[#CBE9BA] bg-[#E9F8E2]">
                  🌿
                </span>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#16A34A]">
                    About Our Frozen Meat
                  </div>
                  <div className="mt-1 h-1 w-12 rounded-full bg-[#16A34A]" />
                </div>
              </div>

              <h2 className="text-[45px] font-black leading-[0.96] tracking-[-0.045em] text-[#071426] sm:text-[56px] lg:text-[62px]">
                <span className="relative inline-block text-[#16A34A]">
                  Halal
                  <span className="absolute bottom-[-3px] left-1 right-1 -z-10 h-2 rounded-full bg-[#BFE7A7]" />
                </span>{" "}
                Frozen
                <span className="block">Buffalo Meat</span>
                <span className="mt-4 block bg-gradient-to-r from-[#2563EB] via-[#0891B2] to-[#06B6D4] bg-clip-text text-transparent">
                  From India
                </span>
              </h2>

              <p className="mt-7 max-w-[620px] text-base leading-8 text-[#475569] lg:text-[17px]">
                We supply premium frozen buffalo meat and selected buffalo
                cuts for international buyers, with a strong focus on product
                consistency, food safety, controlled handling and dependable
                export execution.
              </p>

              <div className="mt-9 grid max-w-[620px] grid-cols-3 gap-3">
                <div className="rounded-[20px] border-2 border-[#CBEAFF] bg-[#EAF7FF] px-4 py-5">
                  <div className="text-2xl font-black text-[#071426]">100%</div>
                  <div className="mt-1 text-[10px] font-bold text-[#64748B] sm:text-xs">
                    Quality Focus
                  </div>
                </div>

                <div className="rounded-[20px] border-2 border-[#D4EDC6] bg-[#EEFAE8] px-4 py-5">
                  <div className="text-2xl font-black text-[#16A34A]">Halal</div>
                  <div className="mt-1 text-[10px] font-bold text-[#64748B] sm:text-xs">
                    Certified Supply
                  </div>
                </div>

                <div className="rounded-[20px] border-2 border-[#FDE7B0] bg-[#FFF8E5] px-4 py-5">
                  <div className="text-2xl font-black text-[#D97706]">Export</div>
                  <div className="mt-1 text-[10px] font-bold text-[#64748B] sm:text-xs">
                    Market Ready
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[30px] border-[6px] border-white bg-[#071426] shadow-[0_25px_70px_rgba(7,20,38,0.18)]">
                <img
                  src={buffaloCutsDiagram}
                  alt="Buffalo meat cuts"
                  className="h-[430px] w-70 object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:h-full"
                />


          
               

              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* PRODUCTS */}
<section
  id="products"
  className="relative overflow-hidden bg-[#F7FAFC] py-16 sm:py-20 lg:py-24"
>
  {/* Background Decorations */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-[#E8F5FF] opacity-70 blur-3xl" />
    <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#EEF7F2] opacity-70 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1450px] px-6 lg:px-12">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-[#168FD0]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#168FD0]">
          Our Product Range
        </span>

        <span className="h-px w-10 bg-[#168FD0]" />
      </div>

      <h2 className="text-3xl font-black tracking-[-0.035em] text-[#071426] sm:text-4xl lg:text-5xl">
        Premium Buffalo Meat
        <span className="block text-[#168FD0]">
          For Global Markets
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#657789] sm:text-base">
        Carefully selected frozen buffalo meat products prepared for
        quality-conscious importers, distributors and food service buyers
        worldwide.
      </p>
    </motion.div>

    {/* PRODUCT GRID */}
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {products.map((item, index) => {
        const productLink = item.link || "#";

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: index * 0.07,
            }}
            whileHover={{ y: -6 }}
            className="
              group
              flex
              flex-col
              overflow-hidden
              rounded-[20px]
              border
              border-[#E1E8EF]
              bg-white
              shadow-[0_8px_30px_rgba(0,41,85,0.06)]
              transition-all
              duration-300
              hover:border-[#168FD0]/30
              hover:shadow-[0_18px_45px_rgba(0,41,85,0.13)]
            "
          >

            {/* IMAGE AREA */}
            <div className="relative h-[300px] w-full overflow-hidden bg-[#F3F6F8]">

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                  p-2
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* Bottom Gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-gradient-to-t
                  from-[#020812]/85
                  via-[#020812]/30
                  to-transparent
                "
              />

              {/* Number Badge */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-[#071426]/90
                  text-[10px]
                  font-bold
                  text-white
                  backdrop-blur-md
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Premium Badge */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  rounded-full
                  border
                  border-white/30
                  bg-[#071426]/80
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  backdrop-blur-md
                "
              >
                Premium
              </div>

              {/* Image Title */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8FD3F5]">
                  Frozen Meat Collection
                </p>

                <h3 className="text-[21px] font-bold leading-tight tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="flex flex-1 flex-col p-5">

              {/* Decorative Line */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[2px] w-8 rounded-full bg-[#168FD0]" />
                <span className="h-[2px] w-2 rounded-full bg-[#D7E1E9]" />
              </div>

              {/* Description */}
              <p className="min-h-[48px] text-[13px] leading-6 text-[#667789]">
                {item.desc}
              </p>

              {/* Bottom */}
              <div className="mt-5">

                {/* Export Grade */}
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#7A8B9B]
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF5FB]
                      text-[#168FD0]
                    "
                  >
                    ✓
                  </span>

                  Export Grade
                </div>

                {/* View Product Button */}
                <Link
                  to={productLink}
                  className="
                    group/button
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-[#06182B]
                    px-4
                    py-3
                    text-[12px]
                    font-semibold
                    tracking-wide
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#168FD0]
                  "
                >
                  <span>View Product</span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      transition-all
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* BOTTOM FEATURES */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-center
        gap-2
        text-center
        sm:flex-row
        sm:gap-4
      "
    >
      {/* Reliable Supply */}
      <span className="h-1.5 w-1.5 rounded-full bg-[#168FD0]" />

      <span
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-[#7A8B9B]
        "
      >
        Reliable Supply
      </span>

      <span className="hidden h-4 w-px bg-[#D5DEE6] sm:block" />

      {/* Quality Controlled */}
      <span
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-[#7A8B9B]
        "
      >
        Quality Controlled
      </span>

      <span className="hidden h-4 w-px bg-[#D5DEE6] sm:block" />

      {/* Export Ready */}
      <span
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-[#7A8B9B]
        "
      >
        Export Ready
      </span>
    </motion.div>

  </div>
</section>


      
   {/* CERTIFICATIONS */}
      <section className="border-y border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 items-center justify-items-center gap-7 sm:grid-cols-3 md:grid-cols-6">
            {certifications.map((item, index) => {
              const Icon = item.Icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="flex min-h-[90px] flex-col items-center justify-center"
                >
                  <div className="flex h-14 w-32 items-center justify-center">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.name} certification`}
                        className="max-h-14 max-w-[120px] object-contain"
                      />
                    ) : (
                      <Icon
                        size={48}
                        strokeWidth={1.6}
                        className="text-[#438A20]"
                      />
                    )}
                  </div>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#718096]">
                    {item.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#002955] py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-200/80">
                  Global Frozen Meat Supply
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                Looking For{" "}
                <span className="bg-gradient-to-r from-[#8DD8FF] via-[#39BDF8] to-[#B8EDFF] bg-clip-text text-transparent">
                  Bulk Frozen Meat
                </span>
                <br />
                Supply?
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/65 sm:text-lg">
                Partner with us for premium frozen buffalo meat, dependable
                supply, certified products and smooth international shipping
                solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="shrink-0"
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#002955] shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300"
                >
                  <span>Contact Our Export Team</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#002955] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 border-t border-white/10 pt-7"
          >
            <div className="flex flex-col gap-4 text-xs text-blue-100/40 sm:flex-row sm:items-center sm:justify-between">
              <span>Premium Frozen Buffalo Meat</span>
              <span className="hidden h-px flex-1 bg-white/10 sm:mx-8 sm:block" />
              <span>Reliable International Supply</span>
              <span className="hidden h-px flex-1 bg-white/10 sm:mx-8 sm:block" />
              <span>Export Ready</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FrozenMeat;
