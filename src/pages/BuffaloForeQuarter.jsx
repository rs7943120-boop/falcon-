import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  X,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  ShieldCheck,
  Snowflake,
  PackageCheck,
  Globe2,
  Scissors,
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import foreQuarterHero from "../assets/frozen meat/Premium Frozen Beef Cuts on Ice.png"

// =====================================================
// PRODUCT IMAGES
// =====================================================

import blade from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Blade.png";
import chuck from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Chuck.png";
import cubeRoll from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Cube Roll.png";
import flank from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Flank.png";
import shinShank from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Shin Shank.png";
import brisketPE from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Brisket PE.png";
import tender from "../assets/frozen meat/Buffalo Hind Quarter Cuts/Chuck Tender.png";

// =====================================================
// PRODUCT DATA
// =====================================================

const cuts = [
  {
    name: "Buffalo Blade",
    shortName: "Blade",
    description:
      "A versatile fore quarter cut with rich flavor and balanced texture.",
    image: blade,
    source: "Shoulder / blade region of the buffalo fore quarter.",
    quality:
      "A firm but workable muscle with good natural flavor and consistent texture, suitable for commercial portions and food-service preparation.",
    whyUsed:
      "Its versatility makes it suitable for different cooking methods where flavor and a substantial meat texture are desired.",
    applications: [
      "Slow Cooking",
      "Curries",
      "Roasting",
      "Food Service",
    ],
    processing:
      "Can be trimmed, portioned and packed according to buyer specifications and export requirements.",
    features: [
      "Premium fore quarter cut",
      "Flavorful muscle",
      "Versatile application",
      "Food-service suitable",
    ],
  },

  {
    name: "Buffalo Chuck",
    shortName: "Chuck",
    description:
      "A flavorful fore quarter cut ideal for slow cooking and commercial preparations.",
    image: chuck,
    source: "Shoulder / chuck section of the buffalo fore quarter.",
    quality:
      "A robust muscle structure with naturally rich flavor. Its characteristics make it well suited to preparations where longer cooking develops a softer texture.",
    whyUsed:
      "Chuck provides a practical combination of flavor, versatility and commercial value for slow-cooked and minced meat applications.",
    applications: [
      "Slow Cooking",
      "Stews",
      "Curries",
      "Minced Meat",
      "Food Service",
    ],
    processing:
      "Can be trimmed, portioned or prepared according to customer specifications and intended application.",
    features: [
      "Flavorful cut",
      "Economical option",
      "Ideal for slow cooking",
      "Suitable for minced meat",
    ],
  },

  {
    name: "Buffalo Cube Roll",
    shortName: "Cube Roll",
    description:
      "A premium cut with desirable marbling and texture for premium preparations.",
    image: cubeRoll,
    source: "Rib / loin-side muscle section of the buffalo carcass.",
    quality:
      "A relatively tender muscle with desirable marbling and texture, suitable for premium preparations where portion quality and eating texture are important.",
    whyUsed:
      "Its texture and marbling characteristics make it suitable for grilling, pan preparation, roasting and other premium applications.",
    applications: [
      "Steaks",
      "Grilling",
      "Roasting",
      "Restaurant Preparations",
      "Food Service",
    ],
    processing:
      "Can be trimmed and portioned according to customer requirements and food-service specifications.",
    features: [
      "Premium cut",
      "Desirable marbling",
      "Good texture",
      "Suitable for steaks",
    ],
  },

  {
    name: "Buffalo Tender",
    shortName: "Tender",
    description:
      "A lean and tender cut valued for its soft texture and premium applications.",
    image: tender,
    source: "Tender muscle portion within the buffalo fore quarter range.",
    quality:
      "A lean muscle with a relatively soft and tender eating texture, suitable for premium culinary preparations.",
    whyUsed:
      "Used where a lean and tender portion is required, particularly for premium food-service and culinary applications.",
    applications: [
      "Roasting",
      "Grilling",
      "Pan Cooking",
      "Restaurant Preparations",
      "Food Service",
    ],
    processing:
      "Can be carefully trimmed and portioned according to buyer requirements and export preparation standards.",
    features: [
      "Lean cut",
      "Tender texture",
      "Premium portion",
      "Suitable for roasting",
    ],
  },

  {
    name: "Buffalo Flank",
    shortName: "Flank",
    description:
      "A lean and fibrous cut suitable for grilling, slicing and commercial cooking.",
    image: flank,
    source: "Flank / abdominal muscle region of the buffalo carcass.",
    quality:
      "A lean, firm and fibrous muscle structure where appropriate slicing and cooking methods help achieve the desired eating texture.",
    whyUsed:
      "Used where a lean and flavorful meat portion is required, particularly for grilling and slicing applications.",
    applications: [
      "Grilling",
      "Slicing",
      "Marinated Preparations",
      "Commercial Cooking",
      "Food Service",
    ],
    processing:
      "Can be trimmed and portioned according to buyer specifications and intended commercial application.",
    features: [
      "Lean cut",
      "Firm muscle structure",
      "Fibrous texture",
      "Suitable for grilling",
    ],
  },

  {
    name: "Buffalo Shin Shank",
    shortName: "Shin Shank",
    description:
      "A collagen-rich cut ideal for slow cooking, soups, broths and curries.",
    image: shinShank,
    source: "Lower leg / shank portion of the buffalo fore quarter.",
    quality:
      "A firm muscle structure rich in connective tissue and collagen, developing a rich texture during extended cooking.",
    whyUsed:
      "Slow cooking helps soften the connective tissue and creates a richer texture in soups, broths, stews and curries.",
    applications: [
      "Soups",
      "Broths",
      "Stews",
      "Curries",
      "Slow Cooking",
      "Food Service",
    ],
    processing:
      "Can be portioned, trimmed and packed according to customer requirements and export packing specifications.",
    features: [
      "Collagen-rich cut",
      "Rich texture after slow cooking",
      "Ideal for soups",
      "Suitable for curries",
    ],
  },

  {
    name: "Buffalo Brisket PE",
    shortName: "Brisket PE",
    description:
      "A rich and flavorful brisket cut suited for slow cooking and braising.",
    image: brisketPE,
    source: "Brisket / chest region of the buffalo fore quarter.",
    quality:
      "A substantial muscle structure with rich flavor and characteristics suited to longer cooking methods.",
    whyUsed:
      "Extended cooking can soften the muscle and connective tissue while developing a rich finished texture and flavor.",
    applications: [
      "Braising",
      "Smoking",
      "Slow Cooking",
      "Roasting",
      "Curries",
      "Food Service",
    ],
    processing:
      "Can be trimmed and prepared according to buyer requirements and export packing preferences.",
    features: [
      "Rich flavor",
      "Substantial muscle structure",
      "Suitable for braising",
      "Ideal for slow cooking",
    ],
  },
];

// =====================================================
// COMPONENT
// =====================================================

const BuffaloForeQuarter = () => {
  const [selectedCut, setSelectedCut] = useState(null);
  const [imageZoom, setImageZoom] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCut(null);
        setImageZoom(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openCut = (cut) => {
    setSelectedCut(cut);
    setImageZoom(false);
  };

  const closeCut = () => {
    setSelectedCut(null);
    setImageZoom(false);
  };

  const toggleImageZoom = () => {
    setImageZoom((prev) => !prev);
  };

  const scrollToCuts = () => {
    document.getElementById("available-cuts")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7F8] text-[#062D4A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#031B2B] text-white md:min-h-[760px]">

        <motion.img
          src={foreQuarterHero}
          alt="Buffalo Fore Quarter Cuts"
          aria-hidden="true"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1.10 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021522]/35 via-[#062D4A]/5 to-[#062D4A]/5" />


        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1450px] items-center px-6 py-20 lg:min-h-[760px] lg:px-12">

          <div className="max-w-4xl">

            <Link
              to="/frozen-meat"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ArrowLeft size={15} />
              Back to Frozen Meat
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-emerald-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300">
                Premium Frozen Meat
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Buffalo
              <span className="block text-emerald-300">
                Fore Quarter
              </span>
              <span className="block text-white/90">
                Cuts
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              A carefully presented range of buffalo fore quarter cuts
              prepared for commercial processing, food-service applications
              and international buyers. Each cut can be trimmed, portioned
              and packed according to customer requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={scrollToCuts}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#03253A] shadow-xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Cuts
                <ArrowRight size={17} />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#062D4A]"
              >
                Buyer Enquiry
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-black text-white">07</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300">
                  Product Cuts
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300">
                  Cut Focused
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-black text-white">B2B</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300">
                  Supply
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-black text-white">Global</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300">
                  Markets
                </p>
              </div>

            </div>
          </div>
        </div>

        <button
          onClick={scrollToCuts}
          className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition hover:text-white"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
            Explore
          </span>

          <ChevronDown className="animate-bounce" size={19} />
        </button>
      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="relative z-20 mx-auto -mt-10 max-w-[1250px] px-6">

        <div className="grid overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,45,74,0.12)] sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: ShieldCheck,
              title: "Quality Focused",
              text: "Consistent cut presentation",
            },
            {
              icon: Scissors,
              title: "Cut & Trim",
              text: "Prepared to buyer requirements",
            },
            {
              icon: Snowflake,
              title: "Frozen Supply",
              text: "Suitable for frozen meat trade",
            },
            {
              icon: Globe2,
              title: "Global Ready",
              text: "Built for international buyers",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-6 ${
                  index !== 3
                    ? "border-b border-slate-100 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7F2] text-emerald-600">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#062D4A]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto max-w-[1250px] px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-500" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-600">
                The Cut Collection
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#062D4A] md:text-5xl">
              From the fore quarter
              <span className="block text-emerald-600">
                to the finished cut.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Our fore quarter range brings together cuts suited to different
              commercial and culinary applications — from slow-cooking and
              curries to premium preparations, grilling and food-service use.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Each product is presented with its cut origin, characteristics,
              applications and processing possibilities, helping buyers
              understand the product before discussing specifications.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          CUTTING / CARVING SHOWCASE
      ===================================================== */}



      {/* =====================================================
          AVAILABLE CUTS
      ===================================================== */}

      <section
        id="available-cuts"
        className="mx-auto max-w-[1450px] px-6 py-20 lg:px-12 lg:py-28"
      >

        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-500" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-600">
                Premium Buffalo Cuts
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#062D4A] md:text-5xl">
              Explore the collection
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Select any cut to view its characteristics, source,
              applications, processing possibilities and product highlights.
            </p>

          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {cuts.length} Available Cuts
          </div>

        </div>


        {/* PREMIUM CARDS */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {cuts.map((cut, index) => (

            <motion.article
              key={cut.name}
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.07,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(6,45,74,0.06)] transition-all duration-500 hover:border-emerald-200 hover:shadow-[0_25px_60px_rgba(6,45,74,0.14)]"
            >

              {/* CARD IMAGE */}

              <button
                onClick={() => openCut(cut)}
                className="relative block h-[285px] w-full overflow-hidden bg-[#F3F6F5] text-left"
              >

                {/* subtle background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(239,244,242,1))]" />

                <img
                  src={cut.image}
                  alt={cut.name}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />

                {/* bottom fade */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#062D4A]/80 via-[#062D4A]/20 to-transparent" />

                {/* number */}
                <div className="absolute left-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[10px] font-black text-[#062D4A] shadow-lg backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* premium label */}
                <div className="absolute right-4 top-4 z-30 rounded-full border border-white/30 bg-[#062D4A]/80 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Premium Cut
                </div>

                {/* hover action */}
                <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#062D4A]/15 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black text-[#062D4A] shadow-2xl">
                    View Cut
                    <ArrowRight size={14} />
                  </span>
                </div>

                {/* name over image */}
                <div className="absolute bottom-4 left-5 right-5 z-30">
                  <p className="mb-1 text-[8px] font-black uppercase tracking-[0.2em] text-emerald-300">
                    Buffalo Fore Quarter
                  </p>

                  <h3 className="text-xl font-black leading-tight text-white">
                    {cut.name}
                  </h3>
                </div>

              </button>


              {/* CARD CONTENT */}

              <div className="p-5">

                <div className="mb-4 flex items-center gap-2">
                  <span className="h-[2px] w-8 rounded-full bg-emerald-500" />
                  <span className="h-[2px] w-2 rounded-full bg-slate-200" />
                </div>

                <p className="min-h-[72px] text-[13px] leading-6 text-slate-600">
                  {cut.description}
                </p>

                {/* Applications */}

                <div className="mt-5 flex flex-wrap gap-1.5">

                  {cut.applications.slice(0, 3).map((application) => (
                    <span
                      key={application}
                      className="rounded-full bg-[#F1F7F5] px-2.5 py-1 text-[9px] font-bold text-emerald-700"
                    >
                      {application}
                    </span>
                  ))}

                </div>

                <button
                  onClick={() => openCut(cut)}
                  className="mt-5 flex w-full items-center justify-between rounded-full bg-[#062D4A] px-4 py-3 text-[11px] font-bold text-white transition hover:bg-emerald-500"
                >
                  <span>Explore Product</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <ArrowRight size={14} />
                  </span>
                </button>

              </div>
            </motion.article>

          ))}

        </div>
      </section>


      {/* =====================================================
          PROCESSING JOURNEY
      ===================================================== */}

     
      {/* =====================================================
          APPLICATIONS
      
      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#031B2B] py-20 text-white lg:py-28">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-emerald-400/20 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">
            Ready To Discuss Your Requirement?
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Looking for the right
            <span className="block text-emerald-300">
              buffalo meat cuts?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Share your required cut, application and packing preferences with
            our team. We can discuss product specifications and buyer
            requirements with you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-black text-[#03253A] transition hover:-translate-y-1 hover:bg-white"
            >
              Send Enquiry
              <ArrowRight size={17} />
            </Link>

            <button
              onClick={scrollToCuts}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#062D4A]"
            >
              View All Cuts
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCT DETAIL POPUP
      ===================================================== */}

      <AnimatePresence>

        {selectedCut && (

          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#031827]/85 p-3 backdrop-blur-md sm:p-5 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCut}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[30px] bg-white shadow-2xl"
            >

              {/* CLOSE */}

              <button
                onClick={closeCut}
                aria-label="Close product details"
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#062D4A] shadow-lg transition hover:bg-emerald-400 hover:text-white"
              >
                <X size={20} />
              </button>


              <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-[0.95fr_1.05fr]">

                {/* IMAGE */}

                <div className="group relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#F0F4F2] md:min-h-[680px]">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,#EDF2F0)]" />

                  <motion.img
                    src={selectedCut.image}
                    alt={selectedCut.name}
                    onClick={toggleImageZoom}
                    animate={{
                      scale: imageZoom ? 1.45 : 1,
                    }}
                    whileHover={{
                      scale: imageZoom ? 1.48 : 1.03,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className={`relative z-10 h-full w-full select-none object-contain p-7 md:p-12 ${
                      imageZoom
                        ? "cursor-zoom-out"
                        : "cursor-zoom-in"
                    }`}
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-[#031827]/75 via-transparent to-transparent" />

                  <button
                    onClick={toggleImageZoom}
                    aria-label={imageZoom ? "Zoom out" : "Zoom in"}
                    className="absolute left-5 top-5 z-30 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-bold text-[#062D4A] shadow-lg transition hover:bg-emerald-400 hover:text-white"
                  >
                    {imageZoom ? (
                      <>
                        <ZoomOut size={15} />
                        Zoom Out
                      </>
                    ) : (
                      <>
                        <ZoomIn size={15} />
                        Zoom In
                      </>
                    )}
                  </button>

                  <div className="pointer-events-none absolute bottom-7 left-7 right-7 z-30">

                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300">
                      Buffalo Fore Quarter
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-white drop-shadow-lg md:text-4xl">
                      {selectedCut.name}
                    </h2>

                  </div>
                </div>


                {/* INFORMATION */}

                <div className="max-h-[92vh] overflow-y-auto p-6 md:p-9 lg:p-11">

                  <div className="border-b border-slate-200 pb-7">

                    <p className="text-[10px] font-black uppercase tracking-[0.23em] text-emerald-600">
                      Product Information
                    </p>

                    <h2 className="mt-3 pr-10 text-3xl font-black leading-tight text-[#062D4A] md:text-4xl">
                      {selectedCut.name}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {selectedCut.description}
                    </p>

                  </div>


                  {/* CUT FROM */}

                  <div className="border-b border-slate-200 py-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      Cut From
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {selectedCut.source}
                    </p>

                  </div>


                  {/* QUALITY */}

                  <div className="border-b border-slate-200 py-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      Quality & Characteristics
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {selectedCut.quality}
                    </p>

                  </div>


                  {/* APPLICATION */}

                  <div className="border-b border-slate-200 py-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      Why This Cut Is Used
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {selectedCut.whyUsed}
                    </p>

                  </div>


                  {/* APPLICATION TAGS */}

                  <div className="border-b border-slate-200 py-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      Applications
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {selectedCut.applications.map((application) => (
                        <span
                          key={application}
                          className="rounded-full bg-[#EAF7F2] px-3 py-2 text-[10px] font-bold text-emerald-700"
                        >
                          {application}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* PROCESSING */}

                  <div className="border-b border-slate-200 py-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      Processing & Preparation
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {selectedCut.processing}
                    </p>

                  </div>


                  {/* HIGHLIGHTS */}

                  <div className="py-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      Product Highlights
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">

                      {selectedCut.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-emerald-500"
                          />

                          <span className="text-xs font-semibold text-slate-700">
                            {feature}
                          </span>
                        </div>

                      ))}

                    </div>

                  </div>


                  {/* BUTTONS */}

                  <div className="flex flex-wrap gap-3 pt-2">

                    <Link
                      to="/contact"
                      onClick={closeCut}
                      className="inline-flex items-center gap-2 rounded-full bg-[#062D4A] px-7 py-3.5 text-sm font-black text-white transition hover:bg-emerald-500"
                    >
                      Enquire About This Cut
                      <ArrowRight size={16} />
                    </Link>

                    <button
                      onClick={closeCut}
                      className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#062D4A] hover:bg-slate-50"
                    >
                      Close
                    </button>

                  </div>

                </div>

              </div>
            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
};

export default BuffaloForeQuarter;