
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Leaf,
  Package,
  ShieldCheck,
  Ship,
  Wheat,
  CheckCircle2,
  Boxes,
  Truck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import exportHeroImage from "../assets/export/export hero section .png";

import bananaImage from "../assets/export/banana.png";
import pomegranateImage from "../assets/export/pomegranate.png";
import grapesImage from "../assets/export/grapes.png";
import chilliesImage from "../assets/export/chillies.png";
import tomatoImage from "../assets/export/tomato.png";
import gingerImage from "../assets/export/ginger.png";
import riceImage from "../assets/export/rice.png";
import teaImage from "../assets/export/tea.png";
import coffeeImage from "../assets/export/coffee.png";
import turmericImage from "../assets/export/turmeric.png";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    title: "Fresh Cavendish Banana",
    short: "Cavendish Banana",
    category: "Fresh Fruits",
    description:
      "Premium Cavendish bananas carefully sourced from India for international markets, with a strong focus on freshness, appearance and export-ready handling.",
    image: bananaImage,
  },
  {
    title: "Pomegranates",
    short: "Pomegranates",
    category: "Fresh Fruits",
    description:
      "Fresh and vibrant Indian pomegranates selected for quality, appearance and freshness, suitable for international fruit markets.",
    image: pomegranateImage,
  },
  {
    title: "Indian Seedless Grapes",
    short: "Seedless Grapes",
    category: "Fresh Fruits",
    description:
      "Premium Indian seedless grapes sourced from reliable growing regions and prepared for consistent international supply.",
    image: grapesImage,
  },
  {
    title: "Fresh Chillies",
    short: "Fresh Chillies",
    category: "Fresh Vegetables",
    description:
      "Fresh green chillies sourced with attention to colour, freshness and quality for international buyers and food markets.",
    image: chilliesImage,
  },
  {
    title: "Fresh Tomato",
    short: "Fresh Tomato",
    category: "Fresh Vegetables",
    description:
      "Quality fresh tomatoes selected for firmness, appearance and freshness, suitable for export and international trading requirements.",
    image: tomatoImage,
  },
  {
    title: "Fresh Ginger",
    short: "Fresh Ginger",
    category: "Fresh Vegetables",
    description:
      "Fresh Indian ginger sourced through reliable agricultural networks with focus on quality, freshness and dependable supply.",
    image: gingerImage,
  },

  {
    title: "Indian Rice",
    short: "Indian Rice",
    category: "Dry Products",
    description:
      "Quality Indian rice sourced from dependable suppliers and prepared according to international buyer and market requirements.",
    image: riceImage,
  },
  {
    title: "Tea",
    short: "Tea",
    category: "Dry Products",
    description:
      "Selected tea products sourced from quality producers, offering dependable supply for international trading and distribution.",
    image: teaImage,
  },
  {
    title: "Coffee Bean",
    short: "Coffee Bean",
    category: "Dry Products",
    description:
      "Quality coffee beans sourced through reliable agricultural supply networks for international buyers and trading requirements.",
    image: coffeeImage,
  },
  {
    title: "Turmeric",
    short: "Turmeric",
    category: "Dry Products",
    description:
      "Premium Indian turmeric selected for quality, colour and consistency, suitable for international food and agricultural markets.",
    image: turmericImage,
  },
];

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    number: "01",
    icon: <Leaf size={22} />,
    title: "Reliable Sourcing",
    description:
      "Carefully sourced agricultural products from reliable Indian supply networks.",
  },
  {
    number: "02",
    icon: <ShieldCheck size={22} />,
    title: "Quality Focus",
    description:
      "Attention to freshness, appearance, consistency and buyer requirements.",
  },
  {
    number: "03",
    icon: <Boxes size={22} />,
    title: "Export Packaging",
    description:
      "Professional preparation and packaging for safe international transportation.",
  },
  {
    number: "04",
    icon: <Ship size={22} />,
    title: "Global Logistics",
    description:
      "Export-oriented coordination supporting dependable international movement.",
  },
];

const markets = [
  "Oman",
  "Saudi Arabia",
  "UAE",
  "Qatar",
  "Kuwait",
  "Gulf Countries",
];

/* =========================================================
   EXPORT PAGE
========================================================= */

const Export = () => {
  return (
    <main className="overflow-hidden bg-white text-[#102a43]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[820px] overflow-hidden bg-[#031c2e] text-white">

        {/* Hero Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={exportHeroImage}
            alt="Indian agricultural products prepared for export"
            className="h-full w-full object-cover"
          />
        </motion.div>

     
      

        {/* Decorative Glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[130px]" />

        <div className="absolute right-0 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Main Container */}
        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1450px] items-center px-6 py-24 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 backdrop-blur-xl">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
                Export & Trading
              </span>

              <ArrowUpRight
                size={15}
                className="text-emerald-400"
              />

            </div>

            {/* Heading */}
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[82px]">

              <span className="block">
                Quality from
              </span>

              <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                India.
              </span>

              <span className="mt-3 block">
                Delivered Worldwide.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              We source and export a wide range of fresh fruits, vegetables
              and agricultural products from India to international markets,
              with a strong focus on quality, consistency and dependable supply.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              From fresh Cavendish bananas, pomegranates and Indian seedless
              grapes to rice, tea, coffee beans and turmeric, we connect
              reliable Indian sourcing with buyers across Oman, Saudi Arabia
              and Gulf markets.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#export-products"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-7 py-4 text-sm font-bold text-[#062d4a] shadow-[0_12px_40px_rgba(52,211,153,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
              >
                Explore Products

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#062d4a]/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Link>

            </div>

            {/* Hero Trust Row */}
            <div className="mt-12 flex max-w-3xl flex-wrap items-center gap-x-7 gap-y-5 border-t border-white/10 pt-7">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                  <Leaf size={19} className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Fresh Sourcing
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Quality Products
                  </p>
                </div>
              </div>

              <div className="hidden h-9 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                  <Ship size={19} className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Export Logistics
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Global Movement
                  </p>
                </div>
              </div>

              <div className="hidden h-9 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                  <Globe2 size={19} className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Global Markets
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Gulf & Beyond
                  </p>
                </div>
              </div>

            </div>

          </motion.div>


          {/* Floating Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.7,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-12 right-8 hidden w-[270px] lg:block xl:right-12"
          >

            <div className="rounded-[26px] border border-white/15 bg-[#062d4a]/80 p-5 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Export Range
                  </p>

                  <p className="mt-2 text-3xl font-black text-white">
                    11+
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Agricultural products
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-[#062d4a]">
                  <Package size={22} />
                </div>

              </div>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-4 flex items-center justify-between">

                <span className="text-xs text-slate-400">
                  Key markets
                </span>

                <span className="text-xs font-bold text-emerald-300">
                  Gulf Region
                </span>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll */}
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 lg:flex">

          <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-9 w-px overflow-hidden bg-white/10">

            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-full w-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-32">

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-emerald-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                  Indian Export & Trading
                </span>

              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#062d4a] sm:text-5xl lg:text-6xl">
                Connecting Indian agriculture with global markets.
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >

              <p className="text-lg leading-8 text-slate-700">
                Falcon International is engaged in the export and trading of
                quality agricultural products sourced from India for
                international markets.
              </p>

              <p className="text-lg leading-8 text-slate-700">
                Our product range includes fresh fruits, vegetables,
                agricultural produce and selected dry products such as rice,
                tea, coffee beans and turmeric.
              </p>

              <p className="text-lg leading-8 text-slate-700">
                We serve international buyers and markets including{" "}
                <strong className="font-bold text-[#062d4a]">
                  Oman, Saudi Arabia and Gulf Countries
                </strong>
                , with emphasis on dependable sourcing, product quality,
                professional handling and responsive service.
              </p>

            </motion.div>

          </div>


          {/* Stats */}
          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-slate-200 bg-[#f7faf9] sm:grid-cols-3">

            <div className="border-b border-slate-200 p-7 sm:border-b-0 sm:border-r">
              <p className="text-4xl font-black text-[#062d4a]">
                11+
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                Export Products
              </p>
            </div>

            <div className="border-b border-slate-200 p-7 sm:border-b-0 sm:border-r">
              <p className="text-4xl font-black text-[#062d4a]">
                3+
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                Core Gulf Markets
              </p>
            </div>

            <div className="p-7">
              <p className="text-4xl font-black text-emerald-600">
                India
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                Sourcing Base
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section
        id="export-products"
        className="relative scroll-mt-20 overflow-hidden bg-[#f4f7f6] px-6 py-24 lg:px-12 lg:py-32"
      >

        {/* Background */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-emerald-600" />

                <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                  Our Export Products
                </span>

              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#062d4a] sm:text-5xl lg:text-6xl">
                Products selected for
                <span className="text-emerald-600">
                  {" "}global markets.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-base leading-7 text-slate-700 lg:text-right">
              Fresh fruits, vegetables and selected agricultural products
              sourced from India for international buyers.
            </p>

          </motion.div>


          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product, index) => (

              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.07,
                }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,.06)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,.13)]"
              >

                {/* Image */}
                <div className="relative h-[270px] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#041f35]/80 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#062d4a]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {product.category}
                  </div>

                  {/* Number */}
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Image Title */}
                  <div className="absolute bottom-5 left-5 right-5">

                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                      Falcon International
                    </p>

                    <h3 className="text-xl font-bold leading-tight text-white">
                      {product.short}
                    </h3>

                  </div>

                </div>


                {/* Content */}
                <div className="p-6">

                  <h3 className="text-lg font-extrabold text-[#062d4a]">
                    {product.title}
                  </h3>

                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-700">
                    {product.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#062d4a]"
                  >

                    <span className="transition-colors group-hover:text-emerald-700">
                      Enquire about product
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#062d4a] text-white transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-[#062d4a]">
                      <ArrowUpRight size={16} />
                    </span>

                  </Link>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY US
      ====================================================== */}

      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-emerald-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                  Why Work With Us
                </span>

              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#062d4a] sm:text-5xl">
                Built around quality, reliability and trade relationships.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Our approach is focused on making international sourcing
                straightforward for buyers by combining reliable agricultural
                sourcing with professional export coordination.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Reliable Indian sourcing network",
                  "Freshness and product quality focus",
                  "Export-ready handling",
                  "International buyer coordination",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-emerald-600"
                    />

                    <span className="font-semibold text-slate-800">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>


            {/* Capabilities */}
            <div className="grid gap-5 sm:grid-cols-2">

              {capabilities.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-[#f7faf9] p-7 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-xl"
                >

                  <span className="absolute right-5 top-3 text-6xl font-black text-slate-100 transition-colors group-hover:text-emerald-50">
                    {item.number}
                  </span>

                  <div className="relative">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      {item.icon}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#062d4a]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MARKETS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#062d4a] px-6 py-24 text-white lg:px-12 lg:py-28">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">

            <div>

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-emerald-400" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  International Markets
                </span>

              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Connecting Indian products with Gulf markets.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Our export and trading activities are focused on serving
                international buyers across key Gulf markets with quality
                products sourced from India.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {markets.map((market, index) => (

                <motion.div
                  key={market}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="group rounded-[20px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-[#062d4a]">
                    <Globe2 size={19} />
                  </div>

                  <p className="mt-4 text-sm font-bold text-white">
                    {market}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Export Market
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-[#f4f7f6] px-6 py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-emerald-600" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                Export Process
              </span>

              <span className="h-[2px] w-10 bg-emerald-600" />

            </div>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#062d4a] sm:text-5xl">
              A dependable journey from source to destination.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              We support the export journey from product sourcing and quality
              selection through preparation, packaging and international
              logistics.
            </p>

          </div>


          <div className="relative mt-16 grid gap-6 md:grid-cols-4">

            {/* Connecting line */}
            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-slate-200 md:block" />

            {[
              {
                number: "01",
                icon: <Leaf size={21} />,
                title: "Source",
                text: "Identify and source products according to buyer requirements.",
              },
              {
                number: "02",
                icon: <BadgeCheck size={21} />,
                title: "Quality Check",
                text: "Focus on product quality, freshness and consistency.",
              },
              {
                number: "03",
                icon: <Package size={21} />,
                title: "Prepare",
                text: "Prepare products for safe handling and export transportation.",
              },
              {
                number: "04",
                icon: <Ship size={21} />,
                title: "Export",
                text: "Coordinate supply and logistics for international delivery.",
              },
            ].map((step, index) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative z-10 rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    {step.icon}
                  </div>

                  <span className="text-4xl font-black text-slate-100">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold text-[#062d4a]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {step.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#062d4a] px-7 py-16 text-center md:px-14 md:py-20">

          {/* Glow */}
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/15 blur-[100px]" />

          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
              <Sparkles size={25} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
              Start a Trade Conversation
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Looking for a reliable Indian export partner?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us about your product requirements, destination market and
              quantity. Our team can help you explore suitable sourcing and
              export options.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-sm font-bold text-[#062d4a] transition hover:-translate-y-1 hover:bg-emerald-300"
              >
                Start a Trade Inquiry

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#062d4a]/10 transition group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>

              <a
                href="#export-products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Products
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Export;