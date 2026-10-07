import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  X,
  CheckCircle2,
  ZoomIn,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// IMAGES
// ============================================================

import offalFeet from "../assets/frozen meat/Buffalo Offals/Offal Feet.png";
import offalAorta from "../assets/frozen meat/Buffalo Offals/Aorta.png";
import offalHockTendon from "../assets/frozen meat/Buffalo Offals/Offal Hock Tendon.png";
import offalHeart from "../assets/frozen meat/Buffalo Offals/Offal Heart.png";

import offalLungs from "../assets/frozen meat/Buffalo Offals/Offal Lungs.png";
import offalOmasum from "../assets/frozen meat/Buffalo Offals/Offal Omasum.png";
import offalPancreas from "../assets/frozen meat/Buffalo Offals/Offal Pancreas.png";
import offalRectum from "../assets/frozen meat/Buffalo Offals/Offal Rectum.png";

import offalKneeTendon from "../assets/frozen meat/Buffalo Offals/kneeTendon.png";
import offalTripe from "../assets/frozen meat/Buffalo Offals/tripe.png";

import offalSnout from "../assets/frozen meat/Buffalo Offals/Offal Snout.png";
import offalReticulum from "../assets/frozen meat/Buffalo Offals/Offal Reticulum.png";

import offalHoneyComb from "../assets/frozen meat/Buffalo Offals/Offal Honey Comb.png";
import offalTail from "../assets/frozen meat/Buffalo Offals/Offal Tail.png";

import offalTongue from "../assets/frozen meat/Buffalo Offals/Offal Tongue.png";
import offalKidney from "../assets/frozen meat/Buffalo Offals/Offal Kidney.png";

import offalUdder from "../assets/frozen meat/Buffalo Offals/Offal Udder.png";
import offalRumen from "../assets/frozen meat/Buffalo Offals/Offal Rumen.png";

import offalIntestine from "../assets/frozen meat/Buffalo Offals/Offal Intestine.png";
import offalPaddywack from "../assets/frozen meat/Buffalo Offals/paddywack.png";

import offalBrain from "../assets/frozen meat/Buffalo Offals/Offal Brain.png";

import offalDiaphragm from "../assets/frozen meat/Buffalo Offals/Offal Diaphragm.png";
import offalPapillae from "../assets/frozen meat/Buffalo Offals/Offal Papillae.png";

import shortTendon from "../assets/frozen meat/Buffalo Offals/Short TEndon.png";
import offalNailMeat from "../assets/frozen meat/Buffalo Offals/Offal Nail Meat.png";

import offalsHero from "../assets/frozen meat/Artisanal Offal Platter on Ice.png";

// ============================================================
// PRODUCT DATA
// ============================================================

const parts = [
  {
    name: "Feet",
    description:
      "Cleaned buffalo feet prepared for packing according to buyer requirements.",
    image: offalFeet,
    cutFrom: "Feet and lower leg portion of the buffalo.",
    quality:
      "Buffalo feet that are cleaned and prepared for packing according to buyer requirements and destination specifications.",
    whyUsed:
      "Commonly used in traditional slow-cooked preparations and dishes requiring collagen-rich cuts.",
    features: [
      "Cleaned product",
      "Buyer-specific packing",
      "Export preparation",
      "Traditional application",
    ],
  },

  {
    name: "Aorta",
    description:
      "Carefully prepared buffalo aorta, handled and packed according to buyer requirements.",
    image: offalAorta,
    cutFrom:
      "Aorta portion of the buffalo cardiovascular system, carefully separated during processing.",
    quality:
      "Carefully handled and prepared buffalo aorta suitable for customer-specific packing requirements.",
    whyUsed:
      "Used in specialty food applications and markets requiring selected buffalo aorta products.",
    features: [
      "Carefully handled",
      "Selected product",
      "Buyer-specific packing",
      "Export suitable",
    ],
  },

  {
    name: "Hock Tendon",
    description:
      "Selected tendon portions, trimmed and prepared for export.",
    image: offalHockTendon,
    cutFrom: "Tendon portion from the buffalo hock area.",
    quality:
      "Selected hock tendon portions that are trimmed and prepared for packing according to buyer requirements.",
    whyUsed:
      "Valued for its firm texture and commonly used in slow-cooked and traditional preparations.",
    features: [
      "Selected portions",
      "Trimmed preparation",
      "Export suitable",
      "Firm texture",
    ],
  },

  {
    name: "Heart",
    description:
      "Carefully trimmed heart, processed with attention to quality and hygiene.",
    image: offalHeart,
    cutFrom:
      "Heart muscle of the buffalo, carefully separated during processing.",
    quality:
      "Carefully trimmed buffalo heart, processed and prepared with attention to handling, hygiene and customer packing requirements.",
    whyUsed:
      "Suitable for traditional dishes, grilling, roasting and other food-service preparations.",
    features: [
      "Carefully trimmed",
      "Hygienic handling",
      "Customer-specific packing",
      "Food-service suitable",
    ],
  },

  {
    name: "Lungs",
    description:
      "Selected lungs, hygienically handled and prepared for export.",
    image: offalLungs,
    cutFrom:
      "Lung portion of the buffalo, carefully separated during processing.",
    quality:
      "Selected buffalo lungs that are carefully handled and prepared for packing according to customer and export requirements.",
    whyUsed:
      "Suitable for traditional food preparations and markets requiring selected buffalo lung products.",
    features: [
      "Selected product",
      "Careful handling",
      "Export preparation",
      "Customer requirements",
    ],
  },

  {
    name: "Omasum",
    description:
      "Omasum tripe prepared and packed to customer specifications.",
    image: offalOmasum,
    cutFrom:
      "Omasum section of the buffalo stomach, separated during processing.",
    quality:
      "Omasum tripe carefully prepared and packed according to customer specifications and destination requirements.",
    whyUsed:
      "Used in traditional food preparations and international markets requiring selected omasum products.",
    features: [
      "Carefully prepared",
      "Custom packing",
      "Export suitable",
      "Selected product",
    ],
  },

  {
    name: "Pancreas",
    description:
      "Selected buffalo pancreas, carefully handled and prepared for customer requirements.",
    image: offalPancreas,
    cutFrom:
      "Pancreas portion of the buffalo, carefully separated during processing.",
    quality:
      "Selected pancreas prepared under controlled handling conditions and packed according to buyer specifications.",
    whyUsed:
      "Used in specialty food applications and specific international markets.",
    features: [
      "Selected product",
      "Careful handling",
      "Customer specifications",
      "Export preparation",
    ],
  },

  {
    name: "Rectum",
    description:
      "Carefully cleaned and prepared buffalo rectum, packed to buyer specifications.",
    image: offalRectum,
    cutFrom:
      "Rectum section of the buffalo digestive system, carefully separated during processing.",
    quality:
      "Carefully cleaned and prepared product suitable for customer-specific packing requirements.",
    whyUsed:
      "Used in specialty food markets and traditional food preparations.",
    features: [
      "Carefully cleaned",
      "Prepared for export",
      "Buyer-specific packing",
      "Specialty product",
    ],
  },

  {
    name: "Knee Tendon",
    description:
      "Carefully separated knee tendon, prepared to customer specifications.",
    image: offalKneeTendon,
    cutFrom: "Tendon portion around the buffalo knee joint.",
    quality:
      "Carefully separated knee tendon prepared and packed according to customer specifications.",
    whyUsed:
      "Suitable for slow cooking and traditional preparations where a firm, collagen-rich texture is desired.",
    features: [
      "Carefully separated",
      "Custom preparation",
      "Customer specifications",
      "Firm texture",
    ],
  },

  {
    name: "Tripe",
    description:
      "Carefully cleaned and prepared tripe, processed to customer specifications.",
    image: offalTripe,
    cutFrom: "Stomach lining and tripe sections of the buffalo.",
    quality:
      "Carefully cleaned and prepared buffalo tripe, processed and packed according to customer specifications.",
    whyUsed:
      "Used in traditional dishes and food-service preparations where cleaned buffalo tripe is required.",
    features: [
      "Carefully cleaned",
      "Prepared for packing",
      "Customer specifications",
      "Food-service suitable",
    ],
  },

  {
    name: "Snout",
    description:
      "Cleaned and carefully prepared buffalo snout suitable for traditional food applications.",
    image: offalSnout,
    cutFrom:
      "Snout portion of the buffalo head, separated and prepared during processing.",
    quality:
      "Carefully cleaned and handled buffalo snout prepared according to buyer requirements.",
    whyUsed:
      "Used in traditional dishes and specialty culinary preparations.",
    features: [
      "Cleaned product",
      "Careful handling",
      "Traditional application",
      "Export suitable",
    ],
  },

  {
    name: "Reticulum",
    description:
      "Selected reticulum tripe, cleaned and prepared according to customer requirements.",
    image: offalReticulum,
    cutFrom:
      "Reticulum section of the buffalo stomach, separated during processing.",
    quality:
      "Carefully cleaned and prepared reticulum suitable for customer-specific packing and international supply.",
    whyUsed:
      "Used in traditional food preparations and markets requiring selected reticulum products.",
    features: [
      "Carefully cleaned",
      "Selected product",
      "Custom packing",
      "Export suitable",
    ],
  },

  {
    name: "Honey Comb",
    description:
      "Honeycomb tripe, cleaned and prepared for international buyers.",
    image: offalHoneyComb,
    cutFrom:
      "Honeycomb section of the buffalo stomach, identified by its distinctive textured lining.",
    quality:
      "Honeycomb tripe that is carefully cleaned and prepared for packing and supply according to international buyer requirements.",
    whyUsed:
      "Popular for traditional recipes and food preparations where textured tripe is preferred.",
    features: [
      "Carefully cleaned",
      "Distinctive texture",
      "Prepared for export",
      "Buyer requirements",
    ],
  },

  {
    name: "Tail",
    description:
      "Trimmed tail portions suitable for a range of traditional dishes.",
    image: offalTail,
    cutFrom: "Tail section of the buffalo.",
    quality:
      "Trimmed buffalo tail portions prepared for packing and supply according to buyer requirements.",
    whyUsed:
      "Suitable for slow-cooked dishes, broths and traditional preparations where rich flavor and texture are desired.",
    features: [
      "Trimmed portions",
      "Versatile product",
      "Buyer-specific packing",
      "Traditional application",
    ],
  },

  {
    name: "Tongue",
    description:
      "Selected tongue portions handled and packed for international supply.",
    image: offalTongue,
    cutFrom: "Tongue portion of the buffalo head.",
    quality:
      "Selected buffalo tongue portions that are carefully handled and prepared for international supply according to customer requirements.",
    whyUsed:
      "Used in specialty food preparations and traditional dishes where tender tongue meat is preferred.",
    features: [
      "Selected portions",
      "Careful handling",
      "International supply",
      "Specialty product",
    ],
  },

  {
    name: "Kidney",
    description:
      "Freshly processed kidney portions prepared under careful handling standards.",
    image: offalKidney,
    cutFrom:
      "Kidney portion of the buffalo, separated and prepared during processing.",
    quality:
      "Buffalo kidney portions that are carefully processed and prepared for customer-specific packing and international supply.",
    whyUsed:
      "Used in a variety of traditional dishes and specialty food preparations.",
    features: [
      "Carefully processed",
      "Selected portions",
      "Customer-specific packing",
      "International supply",
    ],
  },

  {
    name: "Udder",
    description:
      "Carefully prepared buffalo udder, handled and packed according to buyer specifications.",
    image: offalUdder,
    cutFrom:
      "Udder portion of the buffalo, carefully separated during processing.",
    quality:
      "Carefully handled and prepared product suitable for customer-specific packing requirements.",
    whyUsed:
      "Used in specialty and traditional food preparations in selected markets.",
    features: [
      "Carefully prepared",
      "Selected product",
      "Buyer specifications",
      "Specialty product",
    ],
  },

  {
    name: "Rumen",
    description:
      "Carefully cleaned buffalo rumen, prepared and packed to customer requirements.",
    image: offalRumen,
    cutFrom:
      "Rumen section of the buffalo stomach, separated during processing.",
    quality:
      "Carefully cleaned and prepared buffalo rumen suitable for international buyer requirements.",
    whyUsed:
      "Used in traditional dishes and food-service preparations requiring selected rumen.",
    features: [
      "Carefully cleaned",
      "Prepared for packing",
      "Customer specifications",
      "Food-service suitable",
    ],
  },

  {
    name: "Intestine",
    description:
      "Carefully cleaned and prepared buffalo intestine suitable for buyer-specific requirements.",
    image: offalIntestine,
    cutFrom:
      "Intestinal portion of the buffalo digestive system, carefully separated during processing.",
    quality:
      "Carefully cleaned and handled intestine prepared for packing according to customer specifications.",
    whyUsed:
      "Used in traditional food preparations and specialty food applications.",
    features: [
      "Carefully cleaned",
      "Selected product",
      "Custom preparation",
      "Export suitable",
    ],
  },

  {
    name: "Paddywack",
    description:
      "Carefully prepared paddywack, processed to customer specifications.",
    image: offalPaddywack,
    cutFrom:
      "Paddywack tendon portion from the buffalo neck and spinal area.",
    quality:
      "Carefully prepared paddywack, processed and packed according to customer specifications and destination requirements.",
    whyUsed:
      "Used in specialty meat markets and traditional preparations requiring selected tendon products.",
    features: [
      "Carefully prepared",
      "Processed to specification",
      "Custom packing",
      "Specialty product",
    ],
  },

  {
    name: "Brain",
    description:
      "Carefully cleaned and prepared buffalo brain, packed to buyer requirements.",
    image: offalBrain,
    cutFrom:
      "Brain region of the buffalo head, carefully separated during processing.",
    quality:
      "Carefully cleaned and handled product prepared under controlled processing conditions and packed according to buyer requirements.",
    whyUsed:
      "Used in traditional culinary preparations and specialty food applications where buffalo brain is required.",
    features: [
      "Carefully cleaned",
      "Buyer-specific packing",
      "Prepared for export",
      "Specialty product",
    ],
  },

  {
    name: "Diaphragm",
    description:
      "Selected buffalo diaphragm, carefully handled and prepared for customer requirements.",
    image: offalDiaphragm,
    cutFrom:
      "Diaphragm muscle of the buffalo, carefully separated during processing.",
    quality:
      "Selected diaphragm prepared under controlled handling conditions and packed according to buyer requirements.",
    whyUsed:
      "Used in specialty culinary and food-service applications.",
    features: [
      "Selected portions",
      "Careful handling",
      "Buyer-specific packing",
      "Food-service suitable",
    ],
  },

  {
    name: "Papillae",
    description:
      "Carefully prepared buffalo papillae, handled according to customer specifications.",
    image: offalPapillae,
    cutFrom:
      "Papillae portion associated with the buffalo tongue and oral region.",
    quality:
      "Carefully handled and prepared product suitable for specialty customer requirements.",
    whyUsed:
      "Used in selected specialty food markets and specific culinary applications.",
    features: [
      "Carefully prepared",
      "Specialty product",
      "Customer specifications",
      "Export preparation",
    ],
  },

  {
    name: "Short Tendon",
    description:
      "Carefully separated short tendon, prepared to customer specifications.",
    image: shortTendon,
    cutFrom:
      "Short tendon portions from the buffalo, separated during processing.",
    quality:
      "Carefully separated short tendon that is prepared and packed according to customer requirements.",
    whyUsed:
      "Suitable for slow-cooked food preparations where firm, collagen-rich texture is desired.",
    features: [
      "Carefully separated",
      "Custom preparation",
      "Customer specifications",
      "Firm texture",
    ],
  },

  {
    name: "Nail Meat",
    description:
      "Carefully prepared buffalo nail meat, cleaned and packed according to buyer requirements.",
    image: offalNailMeat,
    cutFrom:
      "Nail and hoof-associated meat portion of the buffalo, carefully prepared during processing.",
    quality:
      "Carefully cleaned and prepared product suitable for customer-specific packing requirements.",
    whyUsed:
      "Used in specialty food markets and traditional preparations.",
    features: [
      "Carefully cleaned",
      "Specialty product",
      "Buyer-specific packing",
      "Export suitable",
    ],
  },
];

// ============================================================
// COMPONENT
// ============================================================

const BuffaloOffals = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // ============================================================
  // ESC KEY
  // ============================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPart(null);
        setIsZoomed(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ============================================================
  // LOCK BODY SCROLL
  // ============================================================

  useEffect(() => {
    if (selectedPart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPart]);

  // ============================================================
  // OPEN PRODUCT
  // ============================================================

  const openPart = (part) => {
    setSelectedPart(part);
    setIsZoomed(false);
  };

  // ============================================================
  // CLOSE PRODUCT
  // ============================================================

  const closePart = () => {
    setSelectedPart(null);
    setIsZoomed(false);
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

        <motion.img
          src={offalsHero}
          alt="Premium buffalo offals"
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

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041d31]/85 via-[#062d4a]/45 to-[#062d4a]/15" />

        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[#041d31]/80 to-transparent" />

        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

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
              Buffalo Offals
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl md:leading-8">
              Explore our buffalo offal range. Products are carefully handled,
              prepared and packed to meet buyer requirements.
            </p>

            <a
              href="#available-cuts"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-bold text-[#062d4a] shadow-lg transition duration-300 hover:bg-white hover:shadow-xl"
            >
              Explore available products
              <ArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>

      {/* ============================================================
          PRODUCTS
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
            Available Offal Products
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

              {/* PRODUCT IMAGE */}

              <button
                type="button"
                onClick={() => openPart(part)}
                className="relative block h-60 w-full overflow-hidden text-left"
              >

                <img
                  src={part.image}
                  alt={part.name}
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#062d4a]/80
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <span
                    className="
                      rounded-full
                      bg-white/95
                      px-5
                      py-2.5
                      text-sm
                      font-bold
                      text-[#062d4a]
                      shadow-xl
                      backdrop-blur
                    "
                  >
                    View Details
                  </span>
                </div>

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-xs
                    font-bold
                    text-[#062d4a]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

              </button>

              {/* PRODUCT CONTENT */}

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#062d4a]">
                  {part.name}
                </h3>

                <p
                  className="
                    mt-2
                    min-h-[48px]
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {part.description}
                </p>

                <button
                  type="button"
                  onClick={() => openPart(part)}
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
          PRODUCT DETAILS MODAL
      ============================================================ */}

      <AnimatePresence>

        {selectedPart && (

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePart}
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
                onClick={closePart}
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_65%)]
                  "
                />

                {/* PRODUCT IMAGE */}

                <motion.img
                  src={selectedPart.image}
                  alt={selectedPart.name}
                  className={`
                    relative
                    z-10
                    max-h-[270px]
                    w-[78%]
                    object-contain
                    rounded-xl
                    transition-transform
                    duration-700
                    sm:max-h-[310px]
                    md:max-h-[330px]
                    md:w-[76%]
                    ${isZoomed ? "scale-125" : "scale-100"}
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
                  onClick={() => setIsZoomed(!isZoomed)}
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
                  <ZoomIn size={14} />
                  {isZoomed ? "Zoom Out" : "Zoom In"}
                </button>

                {/* BOTTOM GRADIENT */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-36
                    bg-gradient-to-t
                    from-[#062d4a]/90
                    via-[#062d4a]/20
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
                    Buffalo Offals
                  </p>

                  <h3
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
                    {selectedPart.name}
                  </h3>

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
                    {selectedPart.name}
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
                    {selectedPart.description}
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
                    {selectedPart.cutFrom}
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
                    {selectedPart.quality}
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
                    Why This Product Is Used
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
                    {selectedPart.whyUsed}
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

                    {selectedPart.features.slice(0, 4).map((feature) => (

                      <span
                        key={feature}
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
                        {feature}
                      </span>

                    ))}

                  </div>

                </div>

                {/* PROCESSING & PREPARATION */}

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
                    Can be carefully handled, prepared, trimmed and packed
                    according to buyer specifications, destination requirements
                    and agreed product standards.
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

                    {selectedPart.features.map((feature) => (

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
                    onClick={closePart}
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
                    Enquire About This Product
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={closePart}
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

export default BuffaloOffals;