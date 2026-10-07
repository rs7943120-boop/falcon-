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
// PRODUCT IMAGES
// ============================================================
import heroImage from "../assets/frozen meat/Premium Butcher’s Meat Selection.png";
import bobbyVeal from "../assets/frozen meat/Buffalo Veal Cuts/Bobby Veal.png";
import vealCube from "../assets/frozen meat/Buffalo Veal Cuts/Veal Cube.png";
import vealLeg from "../assets/frozen meat/Buffalo Veal Cuts/Veal Leg.png";
import vealTenderloin from "../assets/frozen meat/Buffalo Veal Cuts/Veal Tenderloin.png";


const cuts = [
  {
    id: "leg",
    name: "Leg",
    description:
      "Lean, tender and ideal for roasting and premium meat preparations.",
    source: "Hind leg section of the buffalo veal carcass.",
    quality:
      "A lean, tender cut with a fine texture, suited to premium meat preparations.",
    whyUsed:
      "Its tender texture and lean profile make it a good choice for roasting and premium meals.",
    image: vealLeg,
    features: [
      "Lean and tender",
      "Suitable for roasting",
      "Premium meat preparation",
    ],
  },

  {
    id: "cube",
    name: "Cube",
    description:
      "A versatile cut with excellent texture for slicing, roasting and processing.",
    source: "Buffalo veal leg, prepared into convenient portions.",
    quality:
      "A versatile cut with a consistent texture that works well across different preparations.",
    whyUsed:
      "Its adaptable shape and texture suit slicing, roasting, food service and processing.",
    image: vealCube,
    features: [
      "Versatile cut",
      "Suitable for processing",
      "Food-service suitable",
    ],
  },

  {
    id: "bobby",
    name: "Bobby Veal",
    description:
      "Carefully prepared veal portions, trimmed and packed to buyer requirements.",
    source: "Young buffalo veal, portioned to buyer specifications.",
    quality:
      "Carefully prepared portions with trimming and packing options for buyer requirements.",
    whyUsed:
      "Its portioned format supports convenient preparation and food-service use.",
    image: bobbyVeal,
    features: [
      "Carefully prepared",
      "Custom trimming",
      "Buyer-specific packing",
    ],
  },

  {
    id: "tenderloin",
    name: "Tenderloin",
    description:
      "A tender premium cut, suited to roasting, grilling and fine dining.",
    source: "Tenderloin section of the buffalo veal carcass.",
    quality:
      "A naturally tender premium cut with a fine texture.",
    whyUsed:
      "Its tenderness makes it suitable for grilling, roasting and premium food service.",
    image: vealTenderloin,
    features: [
      "Premium cut",
      "Tender texture",
      "Suitable for grilling",
    ],
  },
];

// ============================================================
// COMPONENT
// ============================================================

const BuffaloVealCuts = () => {
  const [selectedCut, setSelectedCut] = useState(null);
  const [imageZoom, setImageZoom] = useState(false);

  // ==========================================================
  // ESC KEY
  // ==========================================================

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

  // ==========================================================
  // OPEN PRODUCT
  // ==========================================================

  const openCut = (cut) => {
    setSelectedCut(cut);
    setImageZoom(false);
  };

  // ==========================================================
  // CLOSE PRODUCT
  // ==========================================================

  const closeCut = () => {
    setSelectedCut(null);
    setImageZoom(false);
  };

  // ==========================================================
  // IMAGE ZOOM
  // ==========================================================

  const toggleImageZoom = () => {
    setImageZoom((previous) => !previous);
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen bg-[#f5f7f8]">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#062d4a] px-6 py-16 text-white md:min-h-[700px] md:py-20">

        {/* HERO IMAGE */}

        <motion.img
          src={heroImage}
          alt="Premium Buffalo Veal Cuts"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.16 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#031827]/55 via-[#062d4a]/5 to-[#062d4a]/30" />

 

       

        {/* HERO CONTENT */}

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center md:min-h-[580px]">

          <div className="max-w-3xl">

            {/* BACK BUTTON */}

            <Link
              to="/frozen-meat"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md transition hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to frozen meat
            </Link>

            {/* LABEL */}

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Our Frozen Meat Range
            </p>

            {/* TITLE */}

            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Buffalo
              <br />
              <span className="text-emerald-300">Veal Cuts</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Explore our range of carefully prepared buffalo veal cuts,
              selected for quality, consistency and suitability for premium
              food-service and international buyers.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#available-cuts"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-emerald-400"
              >
                Explore Cuts
                <ArrowRight size={17} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#062d4a]"
              >
                Enquire Now
              </Link>

            </div>

          </div>

        </div>

        {/* HERO BOTTOM LABEL */}

        <div className="absolute bottom-6 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-12 bg-emerald-400" />
              Premium Frozen Meat
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================
          AVAILABLE VEAL CUTS
      ====================================================== */}

      <section
        id="available-cuts"
        className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      >

        {/* SECTION HEADER */}

        <div className="mb-10 max-w-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">
            Product Range
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062d4a] md:text-4xl">
            Available Veal Cuts
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Explore our selected buffalo veal cuts. Click on any product to
            view detailed product information.
          </p>

        </div>

        {/* PRODUCT GRID */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {cuts.map((cut, index) => (

            <motion.article
              key={cut.id}
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
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* PRODUCT IMAGE */}

              <button
                type="button"
                onClick={() => openCut(cut)}
                className="relative block h-64 w-full overflow-hidden text-left"
              >

                <img
                  src={cut.image}
                  alt={cut.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#062d4a]/90 via-transparent to-transparent opacity-80" />

                {/* PRODUCT NUMBER */}

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#062d4a] shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* VIEW DETAILS */}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                  <span className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-[#062d4a] shadow-xl">
                    View Details
                  </span>

                </div>

                {/* IMAGE NAME */}

                <div className="absolute bottom-4 left-5 right-5">

                  <p className="text-lg font-extrabold text-white drop-shadow-lg">
                    {cut.name}
                  </p>

                </div>

              </button>

              {/* CARD CONTENT */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#062d4a]">
                  {cut.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {cut.description}
                </p>

                <button
                  type="button"
                  onClick={() => openCut(cut)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-600 hover:text-white"
                >
                  View Details
                  <ArrowRight size={15} />
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* ======================================================
          QUALITY / INFORMATION STRIP
      ====================================================== */}

      <section className="bg-[#062d4a] px-6 py-16 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500">
              <CheckCircle2 size={22} />
            </div>

            <h3 className="text-lg font-bold">
              Carefully Prepared
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Products are prepared with attention to cut quality, trimming
              and presentation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500">
              <CheckCircle2 size={22} />
            </div>

            <h3 className="text-lg font-bold">
              Buyer Requirements
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Trimming and packing options can be prepared according to buyer
              and destination requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500">
              <CheckCircle2 size={22} />
            </div>

            <h3 className="text-lg font-bold">
              Food-Service Ready
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Selected cuts are suitable for food-service, processing and
              premium meat applications.
            </p>
          </div>

        </div>

      </section>

      {/* ======================================================
          PRODUCT POPUP
      ====================================================== */}

      <AnimatePresence>

        {selectedCut && (

          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#031827]/85 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCut}
          >

            {/* MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[30px] bg-white shadow-2xl"
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={closeCut}
                aria-label="Close product details"
                className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#062d4a] shadow-xl backdrop-blur transition hover:bg-emerald-500 hover:text-white"
              >
                <X size={21} />
              </button>

              {/* MODAL GRID */}

              <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-2">

                {/* ==================================================
                    LEFT IMAGE
                ================================================== */}

                <div className="group relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#f4f1eb] md:min-h-[650px]">

                  <motion.img
                    src={selectedCut.image}
                    alt={selectedCut.name}
                    onClick={toggleImageZoom}
                    animate={{
                      scale: imageZoom ? 1.45 : 1,
                    }}
                    whileHover={{
                      scale: imageZoom ? 1.5 : 1.04,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: "easeInOut",
                    }}
                    className={`h-full w-full select-none object-contain p-5 md:p-8 ${
                      imageZoom
                        ? "cursor-zoom-out"
                        : "cursor-zoom-in"
                    }`}
                  />

                  {/* IMAGE GRADIENT */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031827]/70 via-transparent to-transparent" />

                  {/* ZOOM BUTTON */}

                  <button
                    type="button"
                    onClick={toggleImageZoom}
                    className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-bold text-[#062d4a] shadow-lg backdrop-blur transition hover:bg-emerald-500 hover:text-white"
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

                  {/* IMAGE TITLE */}

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-7">

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                      Buffalo Veal Cuts
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold text-white drop-shadow-lg md:text-4xl">
                      {selectedCut.name}
                    </h2>

                  </div>

                </div>

                {/* ==================================================
                    RIGHT PRODUCT INFORMATION
                ================================================== */}

                <div className="max-h-[92vh] overflow-y-auto p-6 md:p-9 lg:p-10">

                  {/* PRODUCT HEADER */}

                  <div className="border-b border-slate-200 pb-6">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Product Information
                    </p>

                    <h2 className="mt-2 pr-10 text-3xl font-extrabold leading-tight text-[#062d4a] md:text-4xl">
                      {selectedCut.name}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {selectedCut.description}
                    </p>

                  </div>

                  {/* CUT FROM */}

                  <div className="border-b border-slate-200 py-5">

                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Cut From
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {selectedCut.source}
                    </p>

                  </div>

                  {/* QUALITY */}

                  <div className="border-b border-slate-200 py-5">

                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Quality
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {selectedCut.quality}
                    </p>

                  </div>

                  {/* WHY USED */}

                  <div className="border-b border-slate-200 py-5">

                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Why It Is Used
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {selectedCut.whyUsed}
                    </p>

                  </div>

                  {/* FEATURES */}

                  <div className="py-5">

                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Product Highlights
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">

                      {selectedCut.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-2"
                        >

                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-emerald-500"
                          />

                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* ACTION BUTTONS */}

                  <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">

                    <Link
                      to="/contact"
                      onClick={closeCut}
                      className="inline-flex items-center gap-2 rounded-full bg-[#062d4a] px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
                    >
                      Enquire Now
                      <ArrowRight size={16} />
                    </Link>

                    <button
                      type="button"
                      onClick={closeCut}
                      className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#062d4a] hover:bg-slate-100"
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

export default BuffaloVealCuts;