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

import bobbyVeal from "../assets/frozen meat/Buffalo Veal Cuts/Bobby Veal.png";
import vealCube from "../assets/frozen meat/Buffalo Veal Cuts/Veal Cube.png";
import vealLeg from "../assets/frozen meat/Buffalo Veal Cuts/Veal Leg.png";
import vealTenderloin from "../assets/frozen meat/Buffalo Veal Cuts/Veal Tenderloin.png";


const cuts = [
  {
    name: "Leg",
    description:
      "Lean, tender and ideal for roasting and premium meat preparations.",
    image: vealLeg,
    details:
      "Veal Leg is a lean and tender cut suitable for roasting and premium meat preparations. It can be prepared and packed according to buyer requirements.",
    features: [
      "Lean and tender",
      "Suitable for roasting",
      "Premium meat preparation",
    ],
  },

  {
    name: " Cube",
    description:
      "A versatile cut with excellent texture for slicing, roasting and processing.",
    image: vealCube,
    details:
      "Veal Cube is a versatile product with a suitable texture for slicing, roasting and different food-service and processing applications.",
    features: [
      "Versatile cut",
      "Suitable for processing",
      "Food-service suitable",
    ],
  },

  {
    name: "Bobby ",
    description:
      "Carefully prepared veal portions, trimmed and packed to buyer requirements.",
    image: bobbyVeal,
    details:
      "Bobby Veal consists of carefully prepared veal portions that can be trimmed and packed according to buyer requirements and destination specifications.",
    features: [
      "Carefully prepared",
      "Custom trimming",
      "Buyer-specific packing",
    ],
  },

  {
    name: " Tenderloin",
    description:
      "A tender premium cut, suited to roasting, grilling and fine dining.",
    image: vealTenderloin,
    details:
      "Veal Tenderloin is a tender premium cut suitable for roasting, grilling and premium food-service applications.",
    features: [
      "Premium cut",
      "Tender texture",
      "Suitable for grilling",
    ],
  },
];


const BuffaloVealCuts = () => {
  const [selectedCut, setSelectedCut] = useState(null);

  const [imageZoom, setImageZoom] = useState(false);


  /* ============================================================
     ESC KEY
  ============================================================ */

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


  /* ============================================================
     OPEN PRODUCT
  ============================================================ */

  const openCut = (cut) => {
    setSelectedCut(cut);
    setImageZoom(false);
  };


  /* ============================================================
     CLOSE PRODUCT
  ============================================================ */

  const closeCut = () => {
    setSelectedCut(null);
    setImageZoom(false);
  };


  /* ============================================================
     IMAGE ZOOM
  ============================================================ */

  const toggleImageZoom = () => {
    setImageZoom((previous) => !previous);
  };


  return (
    <main className="min-h-screen bg-[#f5f7f8]">


      {/* ============================================================
          HERO SECTION
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#062d4a] px-6 py-14 text-white md:py-20">

        {/* Decorative background */}

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />


        <div className="relative mx-auto max-w-7xl">

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


          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
            Buffalo Veal Cuts
          </h1>


          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Explore our veal cuts, selected and prepared with care for premium
            food service and international buyers.
          </p>

        </div>

      </section>



      {/* ============================================================
          AVAILABLE VEAL CUTS
      ============================================================ */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">

        <div className="mb-9">

          <h2 className="text-2xl font-bold text-[#062d4a] md:text-3xl">
            Available veal cuts
          </h2>


          <p className="mt-2 text-slate-600">
            Click on any product to explore detailed product information.
          </p>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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
                delay: index * 0.06,
              }}

              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >


              {/* =====================================================
                  PRODUCT IMAGE
              ====================================================== */}

              <button
                type="button"
                onClick={() => openCut(cut)}

                className="relative block h-60 w-full overflow-hidden text-left"
              >

                <img
                  src={cut.image}
                  alt={cut.name}
                  loading="lazy"

                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
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



              {/* =====================================================
                  CARD CONTENT
              ====================================================== */}

              <div className="p-5 text-center">

                <h3 className="text-lg font-bold text-[#062d4a]">
                  {cut.name}
                </h3>


                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
                  {cut.description}
                </p>


                <button
                  type="button"
                  onClick={() => openCut(cut)}

                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-600 hover:text-white"
                >

                  View Details

                  <ArrowRight size={15} />

                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </section>



      {/* ============================================================
          PREMIUM PRODUCT POPUP
      ============================================================ */}

      <AnimatePresence>

        {selectedCut && (

          <motion.div

            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#031827]/80 p-4 backdrop-blur-md md:p-8"

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
                MODAL
            ======================================================= */}

            <motion.div

              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}

              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}

              onClick={(event) => event.stopPropagation()}

              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
            >


              {/* ====================================================
                  CLOSE BUTTON
              ===================================================== */}

              <button
                type="button"

                onClick={closeCut}

                className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#062d4a] shadow-lg backdrop-blur transition hover:bg-emerald-400 hover:text-white"
              >

                <X size={21} />

              </button>



              <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-2">


                {/* ====================================================
                    LEFT — FULL IMAGE
                ===================================================== */}

                <div className="group relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[#f4f1eb] md:min-h-[600px]">


                  {/* FULL PRODUCT IMAGE */}

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

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031827]/65 via-transparent to-transparent" />


                  {/* ==================================================
                      ZOOM BUTTON
                  =================================================== */}

                  <button
                    type="button"

                    onClick={toggleImageZoom}

                    className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-bold text-[#062d4a] shadow-lg backdrop-blur transition hover:bg-emerald-400 hover:text-white"
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



                  {/* ==================================================
                      IMAGE TITLE
                  =================================================== */}

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-7">

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                      Buffalo Veal Cuts
                    </p>


                    <h2 className="mt-2 text-3xl font-extrabold text-white drop-shadow-lg md:text-4xl">
                      {selectedCut.name}
                    </h2>

                  </div>

                </div>



                {/* ====================================================
                    RIGHT — PRODUCT INFORMATION
                ===================================================== */}

                <div className="flex flex-col justify-center p-7 md:p-10">


                  {/* PRODUCT INFORMATION */}

                  <div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Product Information
                    </p>


                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#062d4a] md:text-4xl">
                      {selectedCut.name}
                    </h2>


                    <div className="mt-5 h-1 w-16 rounded-full bg-emerald-400" />


                    <p className="mt-6 text-base leading-7 text-slate-600">
                      {selectedCut.details}
                    </p>

                  </div>



                  {/* ====================================================
                      PRODUCT HIGHLIGHTS
                  ===================================================== */}

                  <div className="mt-7">

                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#062d4a]">
                      Product Highlights
                    </h3>


                    <div className="mt-4 space-y-3">

                      {selectedCut.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >

                          <CheckCircle2
                            size={19}
                            className="shrink-0 text-emerald-500"
                          />


                          <span className="text-sm font-medium text-slate-700">
                            {feature}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* ====================================================
                      BUTTONS
                  ===================================================== */}

                  <div className="mt-9 flex flex-wrap gap-3">


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