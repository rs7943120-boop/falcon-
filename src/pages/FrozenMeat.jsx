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
} from "lucide-react";

const FrozenMeat = () => {


const products=[
{
title:"Buffalo Hind Quarter Cuts",
img:hindQuarterProduct,
desc:"Premium frozen buffalo hind quarter cuts."
},
{
title:"Buffalo Fore Quarter Cuts",
img:foreQuarterProduct,
desc:"Quality fore quarter cuts prepared for export."
},
{
title:"Buffalo Veal Cuts",
img:vealProduct,
desc:"Processed under strict hygiene standards."
},
{
title:"Buffalo Offals",
img:offalsProduct,
desc:"Wide range of buffalo offal products."
}
];



const features=[
["Reliable Supply","Consistent quality & timely delivery"],
["Consistent Quality","Strict quality control"],
["Container Loading","Secure container stuffing"],
["Customized Packing","As per buyer requirement"],
["Experienced Team","Global export expertise"],
["Fast Documentation","Smooth export process"]
];



return(

<div className="bg-white text-[#071426] overflow-hidden">



{/* HERO */}
<section className="relative min-h-screen overflow-hidden bg-[#020812]">

  {/* ================= BACKGROUND ================= */}
  <motion.div
    className="absolute inset-0"
    initial={{ scale: 1.12 }}
    animate={{
      scale: [1.12, 1.04, 1.08],
      x: [0, -8, 0],
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
      className="w-full h-full object-cover object-center"
    />
  </motion.div>


  {/* Bottom cinematic fade */}
  <div
    className="
      absolute inset-x-0 bottom-0
      h-64
      bg-gradient-to-t
      from-[#020812]
      via-[#020812]/60
      to-transparent
    "
  />

  {/* ================= AMBIENT GLOW ================= */}

  <motion.div
    className="
      absolute
      -left-40
      top-[25%]
      w-[550px]
      h-[550px]
      rounded-full
      bg-blue-600/10
      blur-[150px]
    "
    animate={{
      x: [0, 80, 0],
      y: [0, 50, 0],
      opacity: [0.35, 0.6, 0.35],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="
      absolute
      right-[10%]
      top-[15%]
      w-[300px]
      h-[300px]
      rounded-full
      bg-cyan-400/5
      blur-[120px]
    "
    animate={{
      scale: [1, 1.35, 1],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* ================= LIGHT STREAK ================= */}

  <motion.div
    className="
      absolute
      left-0
      top-[35%]
      w-[420px]
      h-px
      bg-gradient-to-r
      from-transparent
      via-blue-400/30
      to-transparent
      blur-sm
    "
    animate={{
      x: ["-100%", "180%"],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    }}
  />

  {/* ================= FLOATING PARTICLES ================= */}

  {[...Array(14)].map((_, i) => (
    <motion.span
      key={i}
      className="
        absolute
        w-1 h-1
        rounded-full
        bg-blue-300/40
      "
      style={{
        left: `${8 + (i * 7) % 88}%`,
        top: `${12 + (i * 13) % 72}%`,
      }}
      animate={{
        y: [-10, -45, -10],
        opacity: [0, 0.7, 0],
        scale: [0.7, 1.3, 0.7],
      }}
      transition={{
        duration: 4 + (i % 4),
        repeat: Infinity,
        delay: i * 0.35,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* ================= CONTENT ================= */}

  <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent pointer-events-none" />

  <div className="relative z-10 min-h-screen max-w-[1450px] mx-auto px-6 lg:px-12">

    <div className="min-h-screen flex items-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-[760px] pt-24 pb-36"
      >

        {/* ================= BADGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.04,
            borderColor: "rgba(96,165,250,0.4)",
          }}
          className="
            inline-flex
            items-center
            gap-3
            px-4 py-2.5
            rounded-full
            border border-white/15
            bg-white/[0.06]
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.2)]
            mb-8
            cursor-default
          "
        >

          <span className="relative flex h-2.5 w-2.5">

            <motion.span
              className="
                absolute
                inline-flex
                h-full w-full
                rounded-full
                bg-blue-400
              "
              animate={{
                scale: [1, 2, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <span
              className="
                relative
                inline-flex
                rounded-full
                h-2.5 w-2.5
                bg-blue-400
                shadow-[0_0_12px_rgba(96,165,250,0.8)]
              "
            />

          </span>

          <span
            className="
              text-[10px]
              md:text-xs
              tracking-[0.28em]
              font-semibold
              text-[#071426]
              uppercase
            "
          >
            Frozen Meat Export
          </span>

          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="text-blue-400"
          >
            →
          </motion.span>

        </motion.div>


        {/* ================= HEADING ================= */}

        <h1
          className="
            text-[#071426]
            font-bold
            tracking-[-0.045em]
            text-5xl
            sm:text-6xl
            lg:text-[78px]
            leading-[0.94]
          "
        >

          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
          >
            Premium Frozen
          </motion.span>

          <motion.span
            className="
              block
              mt-3
              text-[#071426]
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              opacity: {
                delay: 0.5,
                duration: 0.8,
              },
              y: {
                delay: 0.5,
                duration: 0.8,
              },
              backgroundPosition: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            Meat Exports
          </motion.span>

          <motion.span
            className="block mt-3 text-[#071426]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
          >
            From India
          </motion.span>

        </h1>


        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.85,
            duration: 0.8,
          }}
          className="
            mt-8
            max-w-[630px]
            text-base
            md:text-lg
            leading-8
            text-[#1e293b]
          "
        >
          Supplying high-quality halal certified frozen buffalo meat
          and related products to trusted importers, distributors
          and food service buyers across international markets.
        </motion.p>


        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >

          {/* PRIMARY BUTTON */}

          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 15px 55px rgba(37,99,235,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              relative
              flex items-center gap-3
              bg-blue-600
              hover:bg-blue-500
              text-white
              px-7 py-4
              rounded-full
              font-semibold
              overflow-hidden
              transition-all
              duration-300
            "
          >

            {/* Shine */}
            <motion.span
              className="
                absolute
                inset-y-0
                -left-20
                w-16
                bg-white/20
                skew-x-[-20deg]
              "
              animate={{
                x: ["0%", "600%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            <span className="relative z-10">
              Explore Products
            </span>

            <span
              className="
                relative z-10
                w-8 h-8
                rounded-full
                bg-white/15
                flex items-center justify-center
                overflow-hidden
              "
            >
              <motion.span
                className="flex"
                whileHover={{ x: 4 }}
              >
                <ArrowRight size={17} />
              </motion.span>
            </span>

          </motion.button>


          {/* SECONDARY BUTTON */}

          <motion.button
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(255,255,255,0.10)",
            }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              flex items-center gap-3
              px-7 py-4
              rounded-full
              border border-white/20
              bg-white/[0.05]
              backdrop-blur-xl
              text-white
              font-semibold
              transition-all
              duration-300
            "
          >

            <span
              className="
                w-8 h-8
                rounded-full
                border border-white/20
                flex items-center justify-center
              "
            >
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                ↓
              </motion.span>
            </span>

            Download Brochure

          </motion.button>

        </motion.div>


        {/* ================= TRUST ITEMS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            flex flex-wrap
            items-center
            gap-x-8
            gap-y-5
            mt-12
            pt-7
            border-t border-white/10
            max-w-[720px]
          "
        >

          {/* QUALITY */}

          <motion.div
            whileHover={{ y: -4 }}
            className="flex items-center gap-3"
          >

            <div
              className="
                w-11 h-11
                rounded-xl
                bg-blue-500/10
                border border-blue-400/20
                flex items-center justify-center
                shadow-[0_0_25px_rgba(59,130,246,0.08)]
              "
            >
              <ShieldCheck
                size={20}
                className="text-blue-400"
              />
            </div>

            <div>
              <p className="text-[#071426] text-sm font-semibold">
                Premium Quality
              </p>

              <p className="text-[#475569] text-xs mt-0.5">
                Export Grade
              </p>
            </div>

          </motion.div>


          <div className="hidden sm:block w-px h-9 bg-white/10" />


          {/* GLOBAL */}

          <motion.div
            whileHover={{ y: -4 }}
            className="flex items-center gap-3"
          >

            <div
              className="
                w-11 h-11
                rounded-xl
                bg-blue-500/10
                border border-blue-400/20
                flex items-center justify-center
              "
            >
              <Globe2
                size={20}
                className="text-blue-400"
              />
            </div>

            <div>
              <p className="text-[#071426] text-sm font-semibold">
                Global Standards
              </p>

              <p className="text-[#475569] text-xs mt-0.5">
                International Supply
              </p>
            </div>

          </motion.div>


          <div className="hidden sm:block w-px h-9 bg-white/10" />


          {/* COLD CHAIN */}

          <motion.div
            whileHover={{ y: -4 }}
            className="flex items-center gap-3"
          >

            <div
              className="
                w-11 h-11
                rounded-xl
                bg-blue-500/10
                border border-blue-400/20
                flex items-center justify-center
              "
            >
              <Truck
                size={20}
                className="text-blue-400"
              />
            </div>

            <div>
              <p className="text-[#071426] text-sm font-semibold">
                Cold Chain
              </p>

              <p className="text-[#475569] text-xs mt-0.5">
                Reliable Delivery
              </p>
            </div>

          </motion.div>

        </motion.div>

      </motion.div>

    </div>


    {/* ================= BOTTOM RIGHT ================= */}

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
      }}
      className="
        absolute
        right-8 lg:right-12
        bottom-10
        hidden md:flex
        items-center gap-3
        text-white/50
        text-xs
        tracking-[0.2em]
        uppercase
      "
    >

      <motion.span
        animate={{
          width: ["20px", "38px", "20px"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="h-px bg-blue-400/60"
      />

      Premium Indian Export

    </motion.div>


    {/* ================= SCROLL ================= */}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.8,
      }}
      className="
        absolute
        left-1/2
        bottom-7
        -translate-x-1/2
        hidden lg:flex
        flex-col
        items-center
        gap-2
        text-[#475569]
      "
    >

      <span
        className="
          text-[9px]
          tracking-[0.3em]
          uppercase
        "
      >
        Scroll
      </span>

      <div className="relative w-px h-10 overflow-hidden">

        <motion.div
          className="
            absolute
            top-[-100%]
            left-0
            w-px
            h-full
            bg-gradient-to-b
            from-transparent
            via-blue-400
            to-transparent
          "
          animate={{
            y: ["0%", "200%"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

    </motion.div>

  </div>

</section>







{/* CERTIFICATION BAR */}


<section className="py-8 bg-white border-y border-slate-100">

  <div className="max-w-6xl mx-auto px-6">

    <div className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-6
      gap-8
      items-center
      justify-items-center
    ">

      {[
        {
          name: "APEDA",
          logo: apedaCertification,
        },
        {
          name: "HALAL",
          logo: halalCertification,
        },
        {
          name: "FSSAI",
          logo: fssaiCertification,
        },
        {
          name: "ISO",
          logo: isoCertification,
        },
        {
          name: "HACCP",
          logo: haccpCertification,
        },
        {
          name: "CERTIFIED",
          Icon: Award,
        },
      ].map((item, i) => (

        <motion.div
          key={item.name}
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
            amount: 0.3,
          }}
          transition={{
            delay: i * 0.08,
            duration: 0.5,
          }}
          whileHover={{
            y: -4,
            scale: 1.04,
          }}
          className="
            group
            flex
            flex-col
            items-center
            justify-center
            min-h-[90px]
            transition-all
          "
        >

          <div className="
            h-14
            w-32
            flex
            items-center
            justify-center
          ">

            {item.logo ? (
              <img
                src={item.logo}
                alt={`${item.name} certification`}
                className="max-h-14 max-w-[120px] object-contain transition-all duration-300 group-hover:scale-105"
              />
            ) : (
              <item.Icon aria-hidden="true" size={48} strokeWidth={1.6} className="text-[#438A20]" />
            )}</div>

          <p className="
            mt-3
            text-[11px]
            tracking-[0.15em]
            text-[#475569]
            font-semibold
            uppercase
          ">
            {item.name}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>







{/* ABOUT */}

<section className="relative py-24 lg:py-32 bg-white overflow-hidden">

  {/* =========================================================
      BACKGROUND DECORATION
  ========================================================= */}

  <div
    className="
      absolute
      top-0
      right-0
      w-[500px]
      h-[500px]
      bg-blue-50
      rounded-full
      blur-3xl
      opacity-60
      -translate-y-1/2
      translate-x-1/3
      pointer-events-none
    "
  />

  <div
    className="
      absolute
      bottom-0
      left-0
      w-[350px]
      h-[350px]
      bg-green-50
      rounded-full
      blur-3xl
      opacity-40
      translate-y-1/2
      -translate-x-1/3
      pointer-events-none
    "
  />


  {/* =========================================================
      MAIN CONTAINER
  ========================================================= */}

  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

    <div
      className="
        grid
        lg:grid-cols-2
        gap-14
        lg:gap-20
        items-center
      "
    >


      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        {/* ================= SMALL TITLE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >

          <span
            className="
              w-10
              h-[2px]
              bg-blue-600
            "
          />

          <p
            className="
              text-blue-600
              text-xs
              sm:text-sm
              font-bold
              tracking-[0.2em]
              uppercase
            "
          >
            About Our Frozen Meat
          </p>

        </motion.div>


        {/* ================= MAIN HEADING ================= */}

        <h2
          className="
            text-4xl
            sm:text-5xl
            lg:text-[54px]
            font-bold
            tracking-[-0.04em]
            leading-[1.06]
            text-[#071426]
          "
        >

          <motion.span
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
              delay: 0.1,
              duration: 0.7,
            }}
            className="block"
          >

            <span className="text-[#16A34A]">
              Halal
            </span>{" "}

            Frozen Buffalo Meat

          </motion.span>


          <motion.span
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
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              block
              mt-3
              bg-gradient-to-r
              from-blue-600
              via-blue-500
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            Exporter From India
          </motion.span>

        </h2>


        {/* ================= DESCRIPTION ================= */}

        <motion.p
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
            delay: 0.35,
            duration: 0.7,
          }}
          className="
            text-[#334155]
            text-base
            lg:text-lg
            leading-8
            mt-7
            max-w-[650px]
          "
        >

          We are a trusted exporter of premium frozen buffalo meat,
          specializing in{" "}

          <span
            className="
              font-semibold
              text-[#16A34A]
            "
          >
            halal boneless buffalo meat
          </span>{" "}

          and a wide range of buffalo cuts. With a strong focus on
          food safety, quality control and international export
          standards, we provide reliable supply solutions to
          importers, distributors and food service buyers across
          global markets.

        </motion.p>


        {/* =====================================================
            FEATURES
        ===================================================== */}

        <div
          className="
            grid
            sm:grid-cols-2
            gap-5
            mt-9
          "
        >


          {/* ================= QUALITY ================= */}

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
              delay: 0.45,
              duration: 0.6,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              flex
              items-start
              gap-3
              p-4
              rounded-2xl
              bg-slate-50
              border
              border-slate-100
              hover:border-blue-100
              hover:bg-blue-50/40
              transition-all
              duration-300
            "
          >

            <div
              className="
                w-11
                h-11
                shrink-0
                rounded-xl
                bg-blue-600/10
                flex
                items-center
                justify-center
                group-hover:bg-blue-600/15
                transition-colors
              "
            >

              <ShieldCheck
                size={21}
                className="text-blue-600"
              />

            </div>


            <div>

              <h3
                className="
                  text-sm
                  font-bold
                  text-[#071426]
                "
              >
                Quality Controlled
              </h3>

              <p
                className="
                  text-xs
                  text-[#475569]
                  mt-1
                  leading-5
                "
              >
                Strict quality and food safety practices
              </p>

            </div>

          </motion.div>


          {/* ================= GLOBAL SUPPLY ================= */}

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
              delay: 0.55,
              duration: 0.6,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              flex
              items-start
              gap-3
              p-4
              rounded-2xl
              bg-slate-50
              border
              border-slate-100
              hover:border-blue-100
              hover:bg-blue-50/40
              transition-all
              duration-300
            "
          >

            <div
              className="
                w-11
                h-11
                shrink-0
                rounded-xl
                bg-blue-600/10
                flex
                items-center
                justify-center
                group-hover:bg-blue-600/15
                transition-colors
              "
            >

              <Globe2
                size={21}
                className="text-blue-600"
              />

            </div>


            <div>

              <h3
                className="
                  text-sm
                  font-bold
                  text-[#071426]
                "
              >
                Global Supply
              </h3>

              <p
                className="
                  text-xs
                  text-[#475569]
                  mt-1
                  leading-5
                "
              >
                Reliable supply for international buyers
              </p>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            STATS
        ===================================================== */}

        <motion.div
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
            delay: 0.7,
            duration: 0.7,
          }}
          className="
            flex
            flex-wrap
            items-center
            gap-7
            sm:gap-8
            mt-10
            pt-8
            border-t
            border-gray-100
          "
        >

          {/* 100% */}

          <div>

            <p
              className="
                text-3xl
                font-bold
                text-[#071426]
              "
            >
              100%
            </p>

            <p
              className="
                text-xs
                text-[#475569]
                mt-1
              "
            >
              Quality Focus
            </p>

          </div>


          <div
            className="
              hidden
              sm:block
              w-px
              h-10
              bg-gray-200
            "
          />


          {/* HALAL */}

          <div>

            <p
              className="
                text-3xl
                font-bold
                text-[#16A34A]
              "
            >
              Halal
            </p>

            <p
              className="
                text-xs
                text-[#475569]
                mt-1
              "
            >
              Certified Supply
            </p>

          </div>


          <div
            className="
              hidden
              sm:block
              w-px
              h-10
              bg-gray-200
            "
          />


          {/* GLOBAL */}

          <div>

            <p
              className="
                text-3xl
                font-bold
                text-[#071426]
              "
            >
              Global
            </p>

            <p
              className="
                text-xs
                text-[#475569]
                mt-1
              "
            >
              Export Markets
            </p>

          </div>

        </motion.div>

      </motion.div>


      {/* =====================================================
          RIGHT IMAGE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          relative
          mt-8
          lg:mt-0
        "
      >

        {/* ================= IMAGE ================= */}

        <motion.div
          whileHover={{
            scale: 1.015,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            relative
            rounded-[28px]
            overflow-hidden
            shadow-[0_25px_80px_rgba(15,23,42,0.18)]
          "
        >

          <motion.img
            src={frozenMeatHero}
            alt="Premium frozen buffalo meat"
            initial={{
              scale: 1.05,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              w-full
              h-[450px]
              sm:h-[520px]
              lg:h-[600px]
              object-cover
            "
          />


          {/* IMAGE DARK GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#020812]/80
              via-[#020812]/10
              to-transparent
            "
          />


          {/* ================= IMAGE LABEL ================= */}

          <div
            className="
              absolute
              left-6
              right-6
              bottom-6
              flex
              items-end
              justify-between
              gap-4
            "
          >

            <div>

              <p
                className="
                  text-white/70
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.2em]
                "
              >
                Premium Indian Export
              </p>

              <h3
                className="
                  text-white
                  text-xl
                  sm:text-2xl
                  font-bold
                  mt-1
                "
              >
                Frozen Buffalo Meat
              </h3>

            </div>


            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              className="
                shrink-0
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                flex
                items-center
                justify-center
              "
            >

              <ArrowUpRight
                size={20}
                className="text-white"
              />

            </motion.div>

          </div>

        </motion.div>


        {/* =================================================
            HALAL CERTIFIED FLOATING CARD
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          animate={{
            y: [0, -7, 0],
          }}
          className="
            absolute
            -bottom-7
            left-4
            sm:left-7
            bg-white
            rounded-2xl
            shadow-[0_15px_50px_rgba(15,23,42,0.15)]
            border
            border-green-100
            px-4
            sm:px-5
            py-4
            flex
            items-center
            gap-3
          "
        >

          {/* GREEN ICON */}

          <div
            className="
              w-11
              h-11
              shrink-0
              rounded-xl
              bg-green-50
              border
              border-green-100
              flex
              items-center
              justify-center
            "
          >

            <ShieldCheck
              size={22}
              className="text-[#16A34A]"
            />

          </div>


          {/* CARD TEXT */}

          <div>

            <p
              className="
                text-sm
                font-bold
                text-[#16A34A]
              "
            >
              Halal Certified
            </p>

            <p
              className="
                text-xs
                text-[#475569]
                mt-0.5
              "
            >
              Quality & Compliance
            </p>

          </div>

        </motion.div>


        {/* =================================================
            DECORATIVE ELEMENTS
        ================================================= */}

        <motion.div
          animate={{
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-6
            -right-6
            w-24
            h-24
            rounded-full
            border
            border-blue-100
            -z-10
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-10
            -right-10
            w-32
            h-32
            rounded-full
            bg-blue-50
            -z-10
          "
        />

      </motion.div>

    </div>

  </div>

</section>




{/* =========================================================
    PRODUCTS — FULL SCREEN PREMIUM
========================================================= */}

<section
  className="
    relative
    min-h-screen
    w-full
    overflow-hidden
    bg-[#f6f8fb]
    py-20
    lg:py-24
  "
>

  {/* =====================================================
      BACKGROUND GLOW
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -right-40
      -top-40
      h-[600px]
      w-[600px]
      rounded-full
      bg-blue-100/50
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-40
      -left-40
      h-[550px]
      w-[550px]
      rounded-full
      bg-cyan-100/40
      blur-3xl
    "
  />


  {/* =====================================================
      MAIN CONTAINER
  ===================================================== */}

  <div
    className="
      relative
      z-10
      w-full
      px-5
      sm:px-8
      lg:px-12
      xl:px-16
    "
  >


    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        mx-auto
        mb-14
        max-w-4xl
        text-center
      "
    >

      {/* Small Label */}

      <div
        className="
          mb-5
          flex
          items-center
          justify-center
          gap-3
        "
      >

        <span
          className="
            h-[2px]
            w-12
            bg-blue-600
          "
        />

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-blue-600
            sm:text-sm
          "
        >
          Premium Product Range
        </span>

        <span
          className="
            h-[2px]
            w-12
            bg-blue-600
          "
        />

      </div>


      {/* Heading */}

      <h2
        className="
          text-4xl
          font-bold
          tracking-[-0.04em]
          text-[#071426]
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
      >
        Our Products
      </h2>


      {/* Description */}

      <p
        className="
          mx-auto
          mt-5
          max-w-3xl
          text-base
          leading-8
          text-[#475569]
          sm:text-lg
        "
      >
        Premium frozen buffalo meat and carefully selected cuts,
        prepared to meet the requirements of international importers,
        distributors and food service buyers.
      </p>

    </motion.div>


    {/* =====================================================
        PRODUCT GRID
    ===================================================== */}

    <div
      className="
        grid
        w-full
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >

      {products.map((item, index) => {

        /* ================================================
           PRODUCT LINKS
        ================================================ */

        let productLink = "/contact";

        if (index === 0) {
          productLink = "/frozen-meat/hind-quarter";
        }

        if (index === 1) {
          productLink = "/frozen-meat/fore-quarter";
        }

        if (index === 2) {
          productLink = "/frozen-meat/veal";
        }

        if (index === 3) {
          productLink = "/frozen-meat/offals";
        }


        return (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.1,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}

            whileHover={{
              y: -12,
            }}

            className="
              group
              relative
              flex
              min-h-[620px]
              flex-col
              overflow-hidden
              rounded-[30px]
              border
              border-gray-200/70
              bg-white
              shadow-[0_15px_50px_rgba(15,23,42,0.08)]
              transition-all
              duration-500
              hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]
            "
          >


            {/* =================================================
                PRODUCT IMAGE
            ================================================= */}

            <div
              className="
                relative
                h-[430px]
                w-full
                shrink-0
                overflow-hidden
              "
            >

              <motion.img
                src={item.img}
                alt={item.title}

                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "

                initial={{
                  scale: 1,
                }}

                whileHover={{
                  scale: 1.12,
                }}

                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />


              {/* Dark Gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/25
                  to-transparent
                "
              />


              {/* Blue Hover Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-600/0
                  via-transparent
                  to-blue-500/30
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* =================================================
                  PRODUCT NUMBER
              ================================================= */}

              <div
                className="
                  absolute
                  left-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/30
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-xl
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* =================================================
                  PREMIUM BADGE
              ================================================= */}

              <div
                className="
                  absolute
                  right-6
                  top-6
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  backdrop-blur-xl
                "
              >
                Premium
              </div>


              {/* =================================================
                  IMAGE TEXT
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                "
              >

                <p
                  className="
                    mb-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-blue-300
                  "
                >
                  Frozen Meat Export
                </p>


                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {item.title}
                </h3>

              </div>

            </div>


            {/* =================================================
                CARD CONTENT
            ================================================= */}

            <div
              className="
                flex
                flex-1
                flex-col
                justify-between
                p-7
                lg:p-8
              "
            >

              {/* Description */}

              <p
                className="
                  text-sm
                  leading-7
                  text-[#475569]
                  lg:text-[15px]
                "
              >
                {item.desc}
              </p>


              {/* =================================================
                  EXPLORE BUTTON
              ================================================= */}

              <Link
                to={productLink}

                className="
                  group/button
                  mt-8
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-[#071426]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  hover:shadow-[0_12px_35px_rgba(37,99,235,0.25)]
                "
              >

                {/* SAME TEXT FOR ALL PRODUCTS */}

                <span>
                  Explore Product
                </span>


                {/* Arrow */}

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover/button:translate-x-1
                    group-hover/button:bg-white/20
                  "
                >

                  <ArrowRight
                    size={17}
                  />

                </span>

              </Link>

            </div>

          </motion.div>

        );
      })}

    </div>


    {/* =====================================================
        TRUST BAR
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.7,
        delay: 0.2,
      }}

      className="
        mt-8
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-6
        py-6
        shadow-sm
      "
    >

      <div
        className="
          grid
          grid-cols-2
          gap-5
          sm:grid-cols-4
        "
      >


        {/* =================================================
            QUALITY
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >

          <ShieldCheck
            size={22}
            className="text-blue-600"
          />

          <div>

            <p
              className="
                text-xs
                font-bold
                text-[#071426]
              "
            >
              Quality Controlled
            </p>

            <p
              className="
                text-[11px]
                text-[#475569]
              "
            >
              Export Grade
            </p>

          </div>

        </div>


        {/* =================================================
            HALAL
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >

          <ShieldCheck
            size={22}
            className="text-green-600"
          />

          <div>

            <p
              className="
                text-xs
                font-bold
                text-[#071426]
              "
            >
              Halal Supply
            </p>

            <p
              className="
                text-[11px]
                text-[#475569]
              "
            >
              Certified Products
            </p>

          </div>

        </div>


        {/* =================================================
            GLOBAL
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >

          <Globe2
            size={22}
            className="text-blue-600"
          />

          <div>

            <p
              className="
                text-xs
                font-bold
                text-[#071426]
              "
            >
              Global Markets
            </p>

            <p
              className="
                text-[11px]
                text-[#475569]
              "
            >
              International Supply
            </p>

          </div>

        </div>


        {/* =================================================
            COLD CHAIN
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >

          <Truck
            size={22}
            className="text-blue-600"
          />

          <div>

            <p
              className="
                text-xs
                font-bold
                text-[#071426]
              "
            >
              Cold Chain
            </p>

            <p
              className="
                text-[11px]
                text-[#475569]
              "
            >
              Reliable Delivery
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>







{/* CTA */}


{/* =========================================================
    PREMIUM CTA SECTION
========================================================= */}

<section
  className="
    relative
    overflow-hidden
    bg-[#002955]
    py-24
    lg:py-32
  "
>

  {/* =====================================================
      BACKGROUND GLOWS
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -left-40
      -top-40
      h-[500px]
      w-[500px]
      rounded-full
      bg-blue-400/10
      blur-[120px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-40
      -bottom-40
      h-[500px]
      w-[500px]
      rounded-full
      bg-cyan-400/10
      blur-[120px]
    "
  />


  {/* =====================================================
      DECORATIVE GRID
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.06]
    "
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />


  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-5xl
      px-6
      text-center
      lg:px-8
    "
  >

    {/* =================================================
        TOP BADGE
    ================================================= */}

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
        duration: 0.7,
      }}
      className="
        mx-auto
        mb-7
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/15
        bg-white/[0.07]
        px-5
        py-2.5
        backdrop-blur-xl
      "
    >

      <span className="relative flex h-2.5 w-2.5">

        <motion.span
          className="
            absolute
            inline-flex
            h-full
            w-full
            rounded-full
            bg-green-400
          "
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <span
          className="
            relative
            inline-flex
            h-2.5
            w-2.5
            rounded-full
            bg-green-400
          "
        />

      </span>


      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-blue-200
          sm:text-xs
        "
      >
        Global Frozen Meat Supply
      </span>

    </motion.div>


    {/* =================================================
        HEADING
    ================================================= */}

    <motion.h2
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
        duration: 0.8,
        delay: 0.1,
      }}
      className="
        text-4xl
        font-bold
        leading-tight
        tracking-[-0.04em]
        text-white
        sm:text-5xl
        lg:text-6xl
        xl:text-7xl
      "
    >

      Looking For{" "}

      <span
        className="
          bg-gradient-to-r
          from-blue-200
          via-cyan-300
          to-white
          bg-clip-text
          text-transparent
        "
      >
        Bulk Frozen Meat
      </span>

      <br className="hidden sm:block" />

      Supply?

    </motion.h2>


    {/* =================================================
        DESCRIPTION
    ================================================= */}

    <motion.p
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
        duration: 0.7,
        delay: 0.25,
      }}
      className="
        mx-auto
        mt-6
        max-w-2xl
        text-base
        leading-8
        text-blue-100/75
        sm:text-lg
      "
    >
      Partner with us for premium quality frozen buffalo meat,
      reliable supply, certified products and international
      shipping solutions.
    </motion.p>


    {/* =================================================
        CTA BUTTONS
    ================================================= */}

    <motion.div
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
        duration: 0.7,
        delay: 0.4,
      }}
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >

      {/* PRIMARY */}

      <motion.a
        href="/contact"
        whileHover={{
          scale: 1.04,
          boxShadow:
            "0 20px 50px rgba(255,255,255,0.15)",
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-white
          px-8
          py-4
          text-sm
          font-bold
          text-[#002955]
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          transition-all
          duration-300
        "
      >

        <span>
          Contact Us
        </span>

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[#002955]/10
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          <ArrowRight size={16} />
        </span>

      </motion.a>


      {/* SECONDARY */}

      <motion.a
        href="#products"
        whileHover={{
          scale: 1.03,
          backgroundColor: "rgba(255,255,255,0.10)",
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/20
          bg-white/[0.04]
          px-8
          py-4
          text-sm
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
        "
      >

        <span>
          Explore Products
        </span>

        <ArrowUpRight size={17} />

      </motion.a>

    </motion.div>


    {/* =================================================
        TRUST POINTS
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
      className="
        mx-auto
        mt-14
        flex
        max-w-3xl
        flex-wrap
        items-center
        justify-center
        gap-x-8
        gap-y-4
        border-t
        border-white/10
        pt-8
      "
    >

      {/* POINT 1 */}

      <div className="flex items-center gap-2.5">

        <ShieldCheck
          size={18}
          className="text-green-400"
        />

        <span
          className="
            text-xs
            font-medium
            text-blue-100/70
          "
        >
          Quality Controlled
        </span>

      </div>


      {/* POINT 2 */}

      <div className="flex items-center gap-2.5">

        <ShieldCheck
          size={18}
          className="text-green-400"
        />

        <span
          className="
            text-xs
            font-medium
            text-blue-100/70
          "
        >
          Halal Supply
        </span>

      </div>


      {/* POINT 3 */}

      <div className="flex items-center gap-2.5">

        <Globe2
          size={18}
          className="text-blue-300"
        />

        <span
          className="
            text-xs
            font-medium
            text-blue-100/70
          "
        >
          Global Shipping
        </span>

      </div>


      {/* POINT 4 */}

      <div className="flex items-center gap-2.5">

        <Truck
          size={18}
          className="text-blue-300"
        />

        <span
          className="
            text-xs
            font-medium
            text-blue-100/70
          "
        >
          Reliable Cold Chain
        </span>

      </div>

    </motion.div>

  </div>


  {/* =====================================================
      DECORATIVE CIRCLES
  ===================================================== */}

  <motion.div
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      -right-24
      top-1/2
      hidden
      h-72
      w-72
      -translate-y-1/2
      rounded-full
      border
      border-white/5
      lg:block
    "
  />

  <motion.div
    animate={{
      rotate: [360, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      -left-20
      top-1/2
      hidden
      h-48
      w-48
      -translate-y-1/2
      rounded-full
      border
      border-blue-300/5
      lg:block
    "
  />

</section>

</div>



)

}


export default FrozenMeat;




