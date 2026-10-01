import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Leaf,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
  Ship,
} from "lucide-react";

import aboutImage1 from "../assets/aboout/1.png";
import aboutImage2 from "../assets/aboout/2.png";
import aboutImage3 from "../assets/aboout/3.png";
import aboutImage4 from "../assets/aboout/4.png";
import aboutHeroImage from "../assets/aboout/hero.png";

/* =========================================================
   DATA
========================================================= */

const expertise = [
  {
    icon: <Apple size={25} />,
    title: "Fresh Fruits Export",
    text: "Premium quality fruits sourced from trusted orchards worldwide.",
  },
  {
    icon: <Leaf size={25} />,
    title: "Agricultural Trading",
    text: "Fresh, dry and processed agricultural commodities.",
  },
  {
    icon: <Package size={25} />,
    title: "Packaging Solutions",
    text: "Export packaging solutions for agricultural products.",
  },
];

const strengths = [
  {
    icon: <Globe2 size={24} />,
    title: "Global Network",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Premium Quality",
  },
  {
    icon: <Truck size={24} />,
    title: "Reliable Supply Chain",
  },
  {
    icon: <MapPin size={24} />,
    title: "Worldwide Reach",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

const About = () => {
  return (
    <main className="overflow-hidden bg-white text-[#062d4a]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[820px] overflow-hidden bg-[#031c2e] text-white">

        {/* HERO IMAGE */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={aboutHeroImage}
            alt="Global agricultural trade and supply network"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* DARK OVERLAYS */}
     
        {/* GLOW */}
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[130px]" />

        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1450px] items-center px-6 py-24 lg:px-12">

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >

            {/* EYEBROW */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 backdrop-blur-xl">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
                About Falcon International
              </span>

              <ArrowUpRight
                size={15}
                className="text-emerald-400"
              />

            </div>


            {/* HEADING */}
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">

              <span className="block">
                Connecting Global
              </span>

              <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Orchards
              </span>

              <span className="mt-3 block">
                With Indian Markets.
              </span>

            </h1>


            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Delivering fresh, wholesome and high-quality agricultural
              products from trusted global sources.
            </p>


            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#our-story"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-7 py-4 text-sm font-bold text-[#062d4a] shadow-[0_12px_40px_rgba(52,211,153,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
              >
                Explore Our Journey

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#062d4a]/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>


              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Trade Inquiry
                <ArrowUpRight size={17} />
              </Link>

            </div>


            {/* HERO STATS */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-white/10 pt-7">

              <div>
                <p className="text-3xl font-black text-emerald-300">
                  20+
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  Countries
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-3xl font-black text-emerald-300">
                  50+
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  Products
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-3xl font-black text-emerald-300">
                  2020
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  Established
                </p>
              </div>

            </div>

          </motion.div>


          {/* FLOATING HERO CARD */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 1,
            }}
            className="absolute bottom-12 right-8 hidden w-[285px] lg:block xl:right-12"
          >

            <div className="rounded-[28px] border border-white/15 bg-[#062d4a]/80 p-5 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Falcon International
                  </p>

                  <p className="mt-2 text-2xl font-black text-white">
                    Global Trade
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-[#062d4a]">
                  <Globe2 size={22} />
                </div>

              </div>


              <div className="mt-5 h-px bg-white/10" />


              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-white/[0.06] p-3">
                  <Leaf
                    size={17}
                    className="text-emerald-400"
                  />

                  <p className="mt-2 text-xs font-bold text-white">
                    Fresh Produce
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.06] p-3">
                  <Ship
                    size={17}
                    className="text-emerald-400"
                  />

                  <p className="mt-2 text-xs font-bold text-white">
                    Global Supply
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}

   <section
  id="our-story"
  className="relative scroll-mt-20 overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-32"
>
  {/* Soft background glow */}
  <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-emerald-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">

      {/* =====================================================
          SINGLE IMAGE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative"
      >

        {/* Image Glow */}
        <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,.12)]">

          <div className="relative overflow-hidden rounded-[27px]">

            <img
              src={aboutImage1}
              alt="Fresh agricultural produce"
              className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062d4a]/70 via-transparent to-transparent" />

            {/* Image Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">
                Falcon International
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Global Agricultural Trade
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                Connecting trusted sources, quality agricultural products and
                international markets.
              </p>

            </div>

          </div>

        </div>


        {/* Floating Year Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="absolute -bottom-7 left-6 rounded-[22px] border border-white/70 bg-white/95 px-6 py-5 shadow-2xl backdrop-blur-xl"
        >

          <p className="text-3xl font-black text-[#062d4a]">
            2020
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-600">
            Global Agricultural Trade
          </p>

        </motion.div>

      </motion.div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        {/* Eyebrow */}

        <div className="mb-6 flex items-center gap-3">

          <span className="h-[2px] w-10 bg-emerald-600" />

          <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
            Who We Are
          </span>

        </div>


        {/* Heading */}

        <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#062d4a] sm:text-5xl lg:text-6xl">

          Sharing Fruits

          <span className="block text-emerald-600">
            Of Success.
          </span>

        </h2>


        {/* Accent */}

        <div className="mt-7 h-1 w-20 rounded-full bg-emerald-500" />


        {/* Paragraph */}

        <p className="mt-8 text-lg leading-8 text-slate-700">
          Falcon International Co. has been working since 2020 to
          connect Indian markets with fresh, wholesome and high-quality
          fruits sourced from different parts of the world.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          We bring together trusted global growers, efficient logistics
          and strict quality control to deliver high-value agricultural
          products with consistency and care.
        </p>


        {/* Highlights */}

        <div className="mt-9 grid gap-3 sm:grid-cols-2">

          {/* Card 1 */}

          <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f7faf9] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">

              <Leaf size={18} />

            </div>

            <span className="text-sm font-bold text-[#062d4a]">
              Fresh Agricultural Products
            </span>

          </div>


          {/* Card 2 */}

          <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f7faf9] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">

              <Globe2 size={18} />

            </div>

            <span className="text-sm font-bold text-[#062d4a]">
              Global Trade Network
            </span>

          </div>

        </div>


        {/* Small CTA */}

        <Link
          to="/contact"
          className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#062d4a]"
        >

          Learn More About Us

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#062d4a] text-white transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-[#062d4a] group-hover:translate-x-1">
            <ArrowRight size={15} />
          </span>

        </Link>

      </motion.div>

    </div>

  </div>
</section>

      {/* =====================================================
          EXPERTISE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#062d4a] px-6 py-24 text-white lg:px-12 lg:py-32">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-emerald-400" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Our Expertise
              </span>

            </div>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Trade That Delivers
              <span className="text-emerald-400">
                {" "}Quality.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Our expertise brings together agricultural sourcing, global
              trading and export-oriented packaging solutions.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {expertise.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/30 hover:bg-white/[0.08]"
              >

                <span className="absolute right-6 top-2 text-7xl font-black text-white/[0.035]">
                  0{index + 1}
                </span>


                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-[#062d4a]">
                    {item.icon}
                  </div>


                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>


                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {item.text}
                  </p>


                  <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STRENGTHS
      ====================================================== */}

      <section className="bg-[#f4f7f6] px-6 py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-emerald-600" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                Our Strengths
              </span>

              <span className="h-[2px] w-10 bg-emerald-600" />

            </div>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#062d4a] sm:text-5xl">
              Built For
              <span className="text-emerald-600">
                {" "}Global Trade.
              </span>
            </h2>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {strengths.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,.05)] transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_25px_55px_rgba(15,23,42,.10)]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  <span className="text-4xl font-black text-slate-100">
                    0{index + 1}
                  </span>

                </div>


                <h3 className="mt-6 text-xl font-bold text-[#062d4a]">
                  {item.title}
                </h3>


                <div className="mt-5 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-16" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GLOBAL REACH
      ====================================================== */}



      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-6 pb-24 lg:px-12 lg:pb-32">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#062d4a] px-7 py-16 text-center md:px-14 md:py-20">

          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/15 blur-[100px]" />

          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
              <Sparkles size={25} />
            </div>


            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
              Work With Falcon International
            </p>


            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Let's build stronger global agricultural connections.
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Connect with our team to discuss agricultural products,
              sourcing requirements and international trade opportunities.
            </p>


            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-sm font-bold text-[#062d4a] transition hover:-translate-y-1 hover:bg-emerald-300"
              >
                Contact Our Team

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#062d4a]/10 transition group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>

              </Link>


              <Link
                to="/export"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Export
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;