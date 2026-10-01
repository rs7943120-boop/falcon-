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

import offalBrain from "../assets/frozen meat/Buffalo Offals/Offal Brain.png";
import offalFeet from "../assets/frozen meat/Buffalo Offals/Offal Feet.png";
import offalHeart from "../assets/frozen meat/Buffalo Offals/Offal Heart.png";
import offalHockTendon from "../assets/frozen meat/Buffalo Offals/Offal Hock Tendon.png";
import offalHoneyComb from "../assets/frozen meat/Buffalo Offals/Offal Honey Comb.png";
import offalKidney from "../assets/frozen meat/Buffalo Offals/Offal Kidney.png";
import offalLungs from "../assets/frozen meat/Buffalo Offals/Offal Lungs.png";
import offalOmasum from "../assets/frozen meat/Buffalo Offals/Offal Omasum.png";
import offalSpinalCord from "../assets/frozen meat/Buffalo Offals/Offal Spinal Cord.png";
import offalTail from "../assets/frozen meat/Buffalo Offals/Offal Tail.png";
import offalTongue from "../assets/frozen meat/Buffalo Offals/Offal Tongue.png";
import liver from "../assets/frozen meat/Buffalo Offals/offal liver.png";
import shortTendon from "../assets/frozen meat/Buffalo Offals/Short TEndon.png";
import paddywack from "../assets/frozen meat/Buffalo Offals/paddywack.png";
import kneeTendon from "../assets/frozen meat/Buffalo Offals/kneeTendon.png";
import Tripe from "../assets/frozen meat/Buffalo Offals/tripe.png";


const parts = [
  {
    name: " Brain",
    description:
      "Carefully cleaned and prepared brain, packed to buyer requirements.",
    image: offalBrain,
    details:
      "Carefully cleaned and prepared buffalo brain, handled and packed according to buyer requirements and destination specifications.",
    features: [
      "Carefully cleaned",
      "Buyer-specific packing",
      "Prepared for export",
    ],
  },

  {
    name: " Lungs",
    description:
      "Selected lungs, hygienically handled and prepared for export.",
    image: offalLungs,
    details:
      "Selected buffalo lungs that are carefully handled and prepared for packing according to customer and export requirements.",
    features: [
      "Selected product",
      "Careful handling",
      "Export preparation",
    ],
  },

  {
    name: "Kidney",
    description:
      "Freshly processed kidney portions prepared under careful handling standards.",
    image: offalKidney,
    details:
      "Buffalo kidney portions that are carefully processed and prepared for customer-specific packing and international supply.",
    features: [
      "Carefully processed",
      "Selected portions",
      "Customer-specific packing",
    ],
  },

  {
    name: "Honey Comb",
    description:
      "Honeycomb tripe, cleaned and prepared for international buyers.",
    image: offalHoneyComb,
    details:
      "Honeycomb tripe that is carefully cleaned and prepared for packing and supply according to international buyer requirements.",
    features: [
      "Carefully cleaned",
      "Prepared for export",
      "Buyer requirements",
    ],
  },

  {
    name: " Omasum",
    description:
      "Omasum tripe prepared and packed to customer specifications.",
    image: offalOmasum,
    details:
      "Omasum tripe carefully prepared and packed according to customer specifications and destination requirements.",
    features: [
      "Carefully prepared",
      "Custom packing",
      "Export suitable",
    ],
  },

  {
    name: "Hock Tendon",
    description:
      "Selected tendon portions, trimmed and prepared for export.",
    image: offalHockTendon,
    details:
      "Selected hock tendon portions that are trimmed and prepared for packing according to buyer requirements.",
    features: [
      "Selected portions",
      "Trimmed preparation",
      "Export suitable",
    ],
  },

  {
    name: " Heart",
    description:
      "Carefully trimmed heart, processed with attention to quality and hygiene.",
    image: offalHeart,
    details:
      "Carefully trimmed buffalo heart, processed and prepared with attention to handling, hygiene and customer packing requirements.",
    features: [
      "Carefully trimmed",
      "Hygienic handling",
      "Customer-specific packing",
    ],
  },

  {
    name: " Feet",
    description:
      "Cleaned feet prepared for packing according to buyer requirements.",
    image: offalFeet,
    details:
      "Buffalo feet that are cleaned and prepared for packing according to buyer requirements and destination specifications.",
    features: [
      "Cleaned product",
      "Buyer-specific packing",
      "Export preparation",
    ],
  },

  {
    name: "Tongue",
    description:
      "Selected tongue portions handled and packed for international supply.",
    image: offalTongue,
    details:
      "Selected buffalo tongue portions that are carefully handled and prepared for international supply according to customer requirements.",
    features: [
      "Selected portions",
      "Careful handling",
      "International supply",
    ],
  },

  {
    name: "Tail",
    description:
      "Trimmed tail portions suitable for a range of traditional dishes.",
    image: offalTail,
    details:
      "Trimmed buffalo tail portions prepared for packing and supply according to buyer requirements.",
    features: [
      "Trimmed portions",
      "Versatile product",
      "Buyer-specific packing",
    ],
  },

  {
    name: " Spinal Cord",
    description:
      "Carefully separated spinal cord, prepared to customer specifications.",
    image: offalSpinalCord,
    details:
      "Carefully separated buffalo spinal cord prepared and packed according to customer specifications.",
    features: [
      "Carefully separated",
      "Customer specifications",
      "Prepared for packing",
    ],
  },

  {
    name: "Short Tendon",
    description:
      "Carefully separated short tendon, prepared to customer specifications.",
    image: shortTendon,
    details:
      "Carefully separated short tendon that is prepared and packed according to customer requirements.",
    features: [
      "Carefully separated",
      "Custom preparation",
      "Customer specifications",
    ],
  },

  {
    name: "Paddywack",
    description:
      "Carefully prepared paddywack, processed to customer specifications.",
    image: paddywack,
    details:
      "Carefully prepared paddywack, processed and packed according to customer specifications and destination requirements.",
    features: [
      "Carefully prepared",
      "Processed to specification",
      "Custom packing",
    ],
  },

  {
    name: "Liver",
    description:
      "Carefully processed liver, prepared to customer specifications.",
    image: liver,
    details:
      "Carefully processed buffalo liver, prepared and packed according to customer requirements.",
    features: [
      "Carefully processed",
      "Customer specifications",
      "Export preparation",
    ],
  },

  {
    name: "Knee Tendon",
    description:
      "Carefully separated knee tendon, prepared to customer specifications.",
    image: kneeTendon,
    details:
      "Carefully separated knee tendon prepared and packed according to customer specifications.",
    features: [
      "Carefully separated",
      "Custom preparation",
      "Customer specifications",
    ],
  },

  {
    name: "Tripe",
    description:
      "Carefully cleaned and prepared tripe, processed to customer specifications.",
    image: Tripe,
    details:
      "Carefully cleaned and prepared buffalo tripe, processed and packed according to customer specifications.",
    features: [
      "Carefully cleaned",
      "Prepared for packing",
      "Customer specifications",
    ],
  },
];


const BuffaloOffals = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const [imageZoom, setImageZoom] = useState(false);


  /* ============================================================
     ESC KEY
  ============================================================ */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPart(null);
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

  const openPart = (part) => {
    setSelectedPart(part);
    setImageZoom(false);
  };


  /* ============================================================
     CLOSE PRODUCT
  ============================================================ */

  const closePart = () => {
    setSelectedPart(null);
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
          HERO
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
            Buffalo Offals
          </h1>


          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Explore our buffalo offal range. Products are carefully handled,
            prepared and packed to meet buyer requirements.
          </p>

        </div>

      </section>



      {/* ============================================================
          PRODUCTS
      ============================================================ */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">

        <div className="mb-9">

          <h2 className="text-2xl font-bold text-[#062d4a] md:text-3xl">
            Available offal products
          </h2>


          <p className="mt-2 text-slate-600">
            Click on any product to explore detailed product information.
          </p>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {parts.map((part, index) => (

            <motion.article
              key={part.name}

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

              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >


              {/* =====================================================
                  PRODUCT IMAGE
              ====================================================== */}

              <button
                type="button"
                onClick={() => openPart(part)}

                className="relative block h-60 w-full overflow-hidden text-left"
              >

                <img
                  src={part.image}
                  alt={part.name}
                  loading="lazy"

                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />


                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#062d4a]/80 via-transparent to-transparent opacity-70" />


                {/* View Details */}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                  <span className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-[#062d4a] shadow-xl backdrop-blur">

                    View Details

                  </span>

                </div>


                {/* Number */}

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#062d4a]">

                  {String(index + 1).padStart(2, "0")}

                </div>

              </button>



              {/* =====================================================
                  PRODUCT CONTENT
              ====================================================== */}

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#062d4a]">
                  {part.name}
                </h3>


                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
                  {part.description}
                </p>


                <button
                  type="button"
                  onClick={() => openPart(part)}

                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-[#062d4a]"
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
          PREMIUM PRODUCT POPUP
      ============================================================ */}

      <AnimatePresence>

        {selectedPart && (

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

            onClick={closePart}
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

                onClick={closePart}

                className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#062d4a] shadow-lg backdrop-blur transition hover:bg-emerald-400 hover:text-white"
              >

                <X size={21} />

              </button>



              <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-2">


                {/* ====================================================
                    LEFT — FULL PRODUCT IMAGE
                ===================================================== */}

                <div className="group relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[#f4f1eb] md:min-h-[600px]">


                  {/* FULL IMAGE */}

                  <motion.img

                    src={selectedPart.image}

                    alt={selectedPart.name}

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


                  {/* Bottom gradient */}

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
                      Buffalo Offals
                    </p>


                    <h2 className="mt-2 text-3xl font-extrabold text-white drop-shadow-lg md:text-4xl">
                      {selectedPart.name}
                    </h2>

                  </div>

                </div>



                {/* ====================================================
                    RIGHT — INFORMATION
                ===================================================== */}

                <div className="flex flex-col justify-center p-7 md:p-10">


                  {/* PRODUCT INFORMATION */}

                  <div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                      Product Information
                    </p>


                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#062d4a] md:text-4xl">
                      {selectedPart.name}
                    </h2>


                    <div className="mt-5 h-1 w-16 rounded-full bg-emerald-400" />


                    <p className="mt-6 text-base leading-7 text-slate-600">
                      {selectedPart.details}
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

                      {selectedPart.features.map((feature) => (

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
                      onClick={closePart}

                      className="inline-flex items-center gap-2 rounded-full bg-[#062d4a] px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
                    >

                      Enquire Now

                      <ArrowRight size={16} />

                    </Link>


                    <button
                      type="button"
                      onClick={closePart}

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


export default BuffaloOffals;