import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  X,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// HERO IMAGE
// ============================================================

import hindQuarterHero from "../assets/frozen meat/Premium Frozen Beef Cuts on Ice.png";

// ============================================================
// PRODUCT IMAGES
// ============================================================

import eyeRound from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Eye Round.png";
import knuckle from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Hind Quarter Knuckle.png";
import rumpSteak from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Hind Quarter Rump Steak.png";
import silverSide from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Hind Quarter Silver Side.png";
import hindQuarterSlice from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Hind Quarter Slice.png";
import HindQuarterKhasila from "../assets/frozen meat/Buffalo Fore Quarter Cuts/khasila.png";
import stripLoin from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Hind Quarter Strip Loin.png";
import tenderloin from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Hind Quarter Tenderloin.png";
import neck from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Neck.png";
import ribs from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Ribs.png";
import topside from "../assets/frozen meat/Buffalo Fore Quarter Cuts/Topside.png";

// ============================================================
// PRODUCT DATA
// ============================================================

const cuts = [
  {
    name: "Topside",
    description:
      "A lean, tender cut suited to roasting, steaks and slow cooking.",
    image: topside,
    cutFrom:
      "Topside is taken from the hind quarter and is a lean, boneless muscle.",
    details:
      "Topside is a lean and versatile cut suitable for roasting, slicing, steaks and slow-cooked preparations.",
    quality:
      "A firm but workable muscle with a clean appearance, consistent texture and good portioning potential.",
    whyUsed:
      "Its versatility makes it suitable for different cooking methods where a lean and substantial meat texture is desired.",
    applications: [
      "Slow Cooking",
      "Roasting",
      "Steaks",
      "Food Service",
    ],
    processing:
      "Can be trimmed, portioned and packed according to buyer specifications and export requirements.",
    features: [
      "Lean cut",
      "Versatile preparation",
      "Suitable for roasting",
      "Food-service suitable",
    ],
  },

  {
    name: "Ribs",
    description:
      "Richly flavoured ribs prepared for hearty, slow-cooked dishes.",
    image: ribs,
    cutFrom:
      "Rib section of the buffalo carcass, prepared according to buyer requirements.",
    details:
      "Buffalo ribs offer a rich flavour profile and are suitable for slow cooking, grilling and hearty culinary preparations.",
    quality:
      "A flavourful cut with good texture and consistent preparation suitable for commercial and food-service applications.",
    whyUsed:
      "Ribs are valued for their rich flavour and are particularly suitable for cooking methods that develop tenderness over time.",
    applications: [
      "Slow Cooking",
      "Grilling",
      "Roasting",
      "Food Service",
    ],
    processing:
      "Can be trimmed, portioned and packed according to customer specifications and destination requirements.",
    features: [
      "Rich flavour",
      "Grilling suitable",
      "Slow-cooking suitable",
      "Food-service suitable",
    ],
  },

  {
    name: "Neck",
    description:
      "A flavourful cut that becomes tender with gentle, slow cooking.",
    image: neck,
    cutFrom:
      "Neck section of the buffalo, carefully separated during processing.",
    details:
      "Buffalo neck is a flavourful cut particularly suitable for slow cooking, stews and other long-cooking preparations.",
    quality:
      "A flavourful muscle with good texture that performs well in long-cooking applications.",
    whyUsed:
      "The cut develops tenderness and flavour during slow cooking, making it useful for hearty commercial and traditional dishes.",
    applications: [
      "Slow Cooking",
      "Stews",
      "Curries",
      "Food Service",
    ],
    processing:
      "Can be trimmed and portioned according to buyer requirements before packing.",
    features: [
      "Rich flavour",
      "Slow-cooking suitable",
      "Versatile cut",
      "Food-service suitable",
    ],
  },

  {
    name: "Slice",
    description:
      "Versatile slices prepared for everyday cooking and portioning.",
    image: hindQuarterSlice,
    cutFrom:
      "Prepared slice portions from selected muscles of the buffalo hind quarter.",
    details:
      "Prepared slices offering convenient portioning for commercial kitchens, restaurants and food-service operations.",
    quality:
      "Consistent slice preparation with convenient portion sizing and a clean presentation.",
    whyUsed:
      "Prepared slices make portioning easier and support efficient food-service preparation.",
    applications: [
      "Food Service",
      "Quick Cooking",
      "Portioning",
      "Restaurants",
    ],
    processing:
      "Can be sliced to agreed thickness and packed according to buyer and export specifications.",
    features: [
      "Ready portions",
      "Convenient preparation",
      "Food-service suitable",
      "Consistent sizing",
    ],
  },

  {
    name: "Tenderloin",
    description:
      "A prized, tender portion with a fine texture and mild flavour.",
    image: tenderloin,
    cutFrom:
      "Tenderloin muscle located within the hind quarter of the buffalo.",
    details:
      "Tenderloin is a prized portion known for its fine texture and suitability for premium food-service applications.",
    quality:
      "A premium muscle with a naturally tender texture and clean appearance when properly prepared.",
    whyUsed:
      "Its tenderness and fine texture make it suitable for premium dishes and food-service menus.",
    applications: [
      "Premium Steaks",
      "Grilling",
      "Pan Searing",
      "Fine Dining",
    ],
    processing:
      "Can be carefully trimmed, portioned and packed according to buyer specifications.",
    features: [
      "Premium cut",
      "Fine texture",
      "Food-service suitable",
      "Tender muscle",
    ],
  },

  {
    name: "Khasila",
    description:
      "Carefully trimmed hind quarter cut, packed to buyer requirements.",
    image: HindQuarterKhasila,
    cutFrom:
      "Selected muscle portion from the buffalo hind quarter.",
    details:
      "Hind Quarter Khasila is carefully prepared and can be trimmed and packed according to customer requirements and destination specifications.",
    quality:
      "Carefully prepared with consistent trimming and suitable for customer-specific commercial requirements.",
    whyUsed:
      "Its flexible preparation makes it useful for different commercial and food-service applications.",
    applications: [
      "Food Service",
      "Curries",
      "Portioning",
      "Commercial Use",
    ],
    processing:
      "Can be trimmed and portioned according to customer specifications and export requirements.",
    features: [
      "Carefully trimmed",
      "Custom packing",
      "Export suitable",
      "Commercial use",
    ],
  },

  {
    name: "Rump Steak",
    description:
      "A lean steak cut with a firm texture, ideal for grilling or pan searing.",
    image: rumpSteak,
    cutFrom:
      "Rump section of the buffalo hind quarter.",
    details:
      "A lean and versatile steak portion suitable for grilling, pan searing and commercial food-service preparation.",
    quality:
      "A firm, lean muscle offering good portioning and consistent cooking characteristics.",
    whyUsed:
      "Its balance of flavour and firm texture makes it suitable for steak-focused food-service applications.",
    applications: [
      "Grilling",
      "Pan Searing",
      "Steaks",
      "Food Service",
    ],
    processing:
      "Can be trimmed and portioned into agreed steak sizes and packed according to buyer requirements.",
    features: [
      "Lean steak cut",
      "Grilling suitable",
      "Pan-searing suitable",
      "Food-service suitable",
    ],
  },

  {
    name: "Eye Round",
    description:
      "A compact, lean cut suitable for roasting and thin slicing.",
    image: eyeRound,
    cutFrom:
      "Eye round muscle from the buffalo hind quarter.",
    details:
      "Eye Round is a compact, lean boneless cut with a firm texture. It is suitable for roasting, slicing and commercial food preparations.",
    quality:
      "A clean, lean and compact muscle offering consistent shape and convenient portioning.",
    whyUsed:
      "Its compact shape and lean profile make it useful for roasting, slicing and prepared food applications.",
    applications: [
      "Roasting",
      "Slicing",
      "Cold Cuts",
      "Food Service",
    ],
    processing:
      "Can be trimmed, portioned and packed according to buyer specifications.",
    features: [
      "Lean boneless cut",
      "Suitable for roasting",
      "Ideal for slicing",
      "Consistent shape",
    ],
  },

  {
    name: "Strip Loin",
    description:
      "A tender strip loin portion prepared for consistent export specifications.",
    image: stripLoin,
    cutFrom:
      "Strip loin section of the buffalo hind quarter.",
    details:
      "A premium strip loin portion with a desirable texture, prepared and packed according to buyer and export requirements.",
    quality:
      "A premium muscle with a desirable balance of texture and flavour suitable for commercial steak applications.",
    whyUsed:
      "Its texture and shape make it suitable for steaks, grilling and premium food-service applications.",
    applications: [
      "Steaks",
      "Grilling",
      "Pan Searing",
      "Food Service",
    ],
    processing:
      "Can be trimmed and portioned according to buyer specifications before export packing.",
    features: [
      "Premium portion",
      "Tender texture",
      "Export specifications",
      "Steak suitable",
    ],
  },

  {
    name: "Silver Side",
    description:
      "A lean, boneless cut suited to roasting and slow-cooked recipes.",
    image: silverSide,
    cutFrom:
      "Silver side muscle from the buffalo hind quarter.",
    details:
      "Silver Side is a lean boneless cut commonly used for roasting, slow cooking and portioning.",
    quality:
      "A lean and firm muscle with consistent structure and good slicing potential.",
    whyUsed:
      "Its lean profile makes it suitable for roasting, slow cooking and commercial portioning.",
    applications: [
      "Roasting",
      "Slow Cooking",
      "Slicing",
      "Food Service",
    ],
    processing:
      "Can be trimmed, portioned and packed according to customer and export requirements.",
    features: [
      "Boneless",
      "Lean texture",
      "Suitable for slow cooking",
      "Good slicing potential",
    ],
  },

  {
    name: "Knuckle",
    description:
      "A versatile boneless cut, trimmed and portioned for export.",
    image: knuckle,
    cutFrom:
      "Knuckle muscle from the buffalo hind quarter.",
    details:
      "Hind Quarter Knuckle is a versatile boneless portion that can be trimmed according to buyer specifications and prepared for different food-service applications.",
    quality:
      "A lean, boneless muscle with consistent structure and strong portioning potential.",
    whyUsed:
      "Its versatility allows it to be used for steaks, cubes, roasting and a range of commercial food-service preparations.",
    applications: [
      "Steaks",
      "Cubes",
      "Roasting",
      "Food Service",
    ],
    processing:
      "Can be custom trimmed, portioned and packed according to buyer specifications and destination requirements.",
    features: [
      "Boneless",
      "Export ready",
      "Custom trimming",
      "Versatile application",
    ],
  },
];

// ============================================================
// COMPONENT
// ============================================================

const BuffaloHindQuarter = () => {
  const [selectedCut, setSelectedCut] = useState(null);
  const [imageZoom, setImageZoom] = useState(false);

  // ============================================================
  // ESC KEY
  // ============================================================

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

  // ============================================================
  // BODY SCROLL LOCK
  // ============================================================

  useEffect(() => {
    if (selectedCut) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCut]);

  // ============================================================
  // OPEN PRODUCT
  // ============================================================

  const openCut = (cut) => {
    setSelectedCut(cut);
    setImageZoom(false);
  };

  // ============================================================
  // CLOSE PRODUCT
  // ============================================================

  const closeCut = () => {
    setSelectedCut(null);
    setImageZoom(false);
  };

  // ============================================================
  // IMAGE ZOOM
  // ============================================================

  const toggleImageZoom = () => {
    setImageZoom((previous) => !previous);
  };

  // ============================================================
  // RETURN
  // ============================================================

  return (
    <main className="min-h-screen bg-[#f5f7f8]">

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative isolate flex min-h-screen w-full overflow-hidden bg-[#062d4a] text-white">

        {/* HERO IMAGE */}

        <motion.img
          src={hindQuarterHero}
          alt="Buffalo hind quarter cuts"
          initial={{ scale: 1.03 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041d31]/80 via-[#062d4a]/40 to-[#062d4a]/10" />

        {/* BOTTOM OVERLAY */}

        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[#041d31]/80 to-transparent" />

        {/* HERO GLOW */}

        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        {/* HERO CONTENT */}

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 md:px-10 lg:px-12">

          <div className="max-w-3xl">

            <Link
              to="/frozen-meat"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to frozen meat
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Our frozen meat range
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Buffalo Hind Quarter Cuts
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl md:leading-8">
              Explore the cuts available from our buffalo hind quarter range.
              Each product can be prepared and packed to buyer requirements.
            </p>

            <a
              href="#available-cuts"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-bold text-[#062d4a] shadow-lg transition duration-300 hover:bg-white hover:shadow-xl"
            >
              Explore available cuts
              <ArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>

      {/* ============================================================
          AVAILABLE CUTS
      ============================================================ */}

      <section
        id="available-cuts"
        className="mx-auto max-w-7xl px-6 py-14 md:py-20"
      >

        <div className="mb-9">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Premium Selection
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#062d4a] md:text-3xl">
            Available Cuts
          </h2>

          <p className="mt-2 text-slate-600">
            Click on any cut to explore detailed product information.
          </p>

        </div>

        {/* PRODUCT GRID */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {cuts.map((cut, index) => (

            <motion.article
              key={cut.name}
              initial={{
                opacity: 0,
                y: 18,
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
                delay: (index % 3) * 0.06,
              }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* CARD IMAGE */}

              <button
                type="button"
                onClick={() => openCut(cut)}
                className="relative block h-60 w-full overflow-hidden text-left"
              >

                <img
                  src={cut.image}
                  alt={cut.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* IMAGE GRADIENT */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#062d4a]/80 via-transparent to-transparent opacity-70" />

                {/* VIEW DETAILS */}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                  <span className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-[#062d4a] shadow-xl backdrop-blur">
                    View Details
                  </span>

                </div>

                {/* NUMBER */}

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#062d4a]">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </button>

              {/* CARD CONTENT */}

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#062d4a]">
                  {cut.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
                  {cut.description}
                </p>

                <button
                  type="button"
                  onClick={() => openCut(cut)}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-emerald-700
                    transition
                    hover:text-[#062d4a]
                  "
                >
                  View product details
                  <ArrowRight size={15} />
                </button>

              </div>

            </motion.article>

          ))}

        </div>
      </section>

      {/* ============================================================
          PRODUCT DETAILS POPUP
      ============================================================ */}

      <AnimatePresence>

        {selectedCut && (

          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-[#071b2a]/80
              px-3
              py-4
              backdrop-blur-md
              sm:px-6
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeCut}
          >

            {/* ======================================================
                MAIN MODAL
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                flex
                w-full
                max-w-[1120px]
                max-h-[92vh]
                flex-col
                overflow-hidden
                rounded-[24px]
                bg-[#f8faf9]
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                md:flex-row
              "
            >

              {/* ==================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={closeCut}
                aria-label="Close product information"
                className="
                  absolute
                  right-3
                  top-3
                  z-50
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#062d4a]
                  shadow-lg
                  transition
                  duration-200
                  hover:rotate-90
                  hover:bg-[#062d4a]
                  hover:text-white
                "
              >
                <X size={19} strokeWidth={1.8} />
              </button>

              {/* ==================================================
                  LEFT IMAGE PANEL
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-[430px]
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#f5f8f6]
                  via-white
                  to-[#edf2ef]
                  md:min-h-[680px]
                  md:w-[46%]
                "
              >

                {/* BACKGROUND LIGHT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_65%)]
                  "
                />

                {/* PRODUCT IMAGE */}

                <motion.img
                  src={selectedCut.image}
                  alt={selectedCut.name}
                  onClick={toggleImageZoom}
                  animate={{
                    scale: imageZoom ? 1.35 : 1,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeInOut",
                  }}
                  className={`
                    relative
                    z-10
                    max-h-[270px]
                    w-[78%]
                    select-none
                    object-contain
                    rounded-xl
                    sm:max-h-[310px]
                    md:max-h-[350px]
                    md:w-[76%]
                    ${
                      imageZoom
                        ? "cursor-zoom-out"
                        : "cursor-zoom-in"
                    }
                  `}
                />

                {/* IMAGE SHADOW */}

                <div
                  className="
                    absolute
                    bottom-[25%]
                    left-1/2
                    h-10
                    w-[65%]
                    -translate-x-1/2
                    rounded-[50%]
                    bg-black/10
                    blur-2xl
                  "
                />

                {/* ZOOM BUTTON */}

                <button
                  type="button"
                  onClick={toggleImageZoom}
                  className="
                    absolute
                    left-4
                    top-4
                    z-30
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-[#062d4a]
                    shadow-[0_5px_20px_rgba(0,0,0,0.12)]
                    transition
                    hover:scale-105
                  "
                >

                  {imageZoom ? (
                    <>
                      <ZoomOut size={14} />
                      Zoom Out
                    </>
                  ) : (
                    <>
                      <ZoomIn size={14} />
                      Zoom In
                    </>
                  )}

                </button>

                {/* BOTTOM GRADIENT */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-gradient-to-t
                    from-[#062d4a]/95
                    via-[#062d4a]/25
                    to-transparent
                  "
                />

                {/* PRODUCT NAME */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-20
                    p-6
                    sm:p-7
                    md:p-8
                  "
                >

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-emerald-300
                    "
                  >
                    Buffalo Hind Quarter
                  </p>

                  <h2
                    className="
                      mt-1
                      font-serif
                      text-3xl
                      font-bold
                      leading-tight
                      text-white
                      sm:text-4xl
                    "
                  >
                    {selectedCut.name}
                  </h2>

                </div>

              </div>

              {/* ==================================================
                  RIGHT INFORMATION PANEL
              ================================================== */}

              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  bg-white
                  px-6
                  py-7
                  sm:px-8
                  sm:py-8
                  md:px-8
                  md:py-9
                "
              >

                {/* PRODUCT INFORMATION */}

                <div className="border-b border-slate-200 pb-5 pr-8">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Product Information
                  </p>

                  <h2
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      font-bold
                      leading-tight
                      text-[#062d4a]
                      sm:text-4xl
                    "
                  >
                    {selectedCut.name}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-slate-600
                      sm:text-sm
                    "
                  >
                    {selectedCut.description}
                  </p>

                </div>

                {/* CUT FROM */}

                <div className="border-b border-slate-200 py-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Cut From
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-slate-700
                      sm:text-sm
                    "
                  >
                    {selectedCut.cutFrom}
                  </p>

                </div>

                {/* QUALITY */}

                <div className="border-b border-slate-200 py-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Quality & Characteristics
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-slate-700
                      sm:text-sm
                    "
                  >
                    {selectedCut.quality}
                  </p>

                </div>

                {/* WHY USED */}

                <div className="border-b border-slate-200 py-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Why This Cut Is Used
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-slate-700
                      sm:text-sm
                    "
                  >
                    {selectedCut.whyUsed}
                  </p>

                </div>

                {/* APPLICATIONS */}

                <div className="border-b border-slate-200 py-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Applications
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {selectedCut.applications.map((application) => (

                      <span
                        key={application}
                        className="
                          rounded-full
                          bg-emerald-50
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          text-emerald-700
                        "
                      >
                        {application}
                      </span>

                    ))}

                  </div>

                </div>

                {/* PROCESSING */}

                <div className="border-b border-slate-200 py-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Processing & Preparation
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-slate-700
                      sm:text-sm
                    "
                  >
                    {selectedCut.processing}
                  </p>

                </div>

                {/* PRODUCT HIGHLIGHTS */}

                <div className="py-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-emerald-600
                    "
                  >
                    Product Highlights
                  </p>

                  <div
                    className="
                      mt-3
                      grid
                      grid-cols-1
                      gap-2
                      sm:grid-cols-2
                    "
                  >

                    {selectedCut.features.map((feature) => (

                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-lg
                          bg-slate-50
                          px-3
                          py-2
                        "
                      >

                        <CheckCircle2
                          size={14}
                          strokeWidth={2}
                          className="shrink-0 text-emerald-500"
                        />

                        <span
                          className="
                            text-[11px]
                            font-medium
                            text-slate-700
                          "
                        >
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* BUTTONS */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    pt-2
                  "
                >

                  <Link
                    to="/contact"
                    onClick={closeCut}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#062d4a]
                      px-6
                      py-3
                      text-xs
                      font-bold
                      text-white
                      shadow-lg
                      transition
                      hover:bg-emerald-500
                    "
                  >
                    Enquire About This Cut
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={closeCut}
                    className="
                      rounded-full
                      border
                      border-slate-300
                      px-6
                      py-3
                      text-xs
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-[#062d4a]
                      hover:bg-slate-100
                    "
                  >
                    Close
                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
};

export default BuffaloHindQuarter;