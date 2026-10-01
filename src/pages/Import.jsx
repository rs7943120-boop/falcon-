import React from "react";
import { motion } from "framer-motion";
import dryFruitsImage from "../import/dry fruts .png";
import exportImage from "../import/export .png";
import fruitsImage from "../import/fruits.png";
import importHeroImage from "../import/hero.png";
import vegetablesImage from "../import/vegiatble.png";
import appleImage from "../assets/apples.png";
import avocadoImage from "../assets/hero-fruits.jpg";
import blueberryImage from "../assets/grapes.png";
import cherryImage from "../assets/pomogrante.png";
import datesImage from "../assets/Dates.png";
import dragonFruitImage from "../import/fruits.png";
import grapefruitImage from "../assets/hero-fruits1.png";
import grapesImage from "../assets/grapes.png";
import kiwiImage from "../assets/kiwi.png";
import lemonImage from "../import/fruits.png";
import longanImage from "../assets/date2.png";
import mandarinImage from "../assets/hero-fruits1.png";
import orangeImage from "../import/fruits.png";
import pearsImage from "../assets/pear.png";
import plumImage from "../assets/plum.png";
import rambutanImage from "../assets/pomogrante.png";
import coconutImage from "../assets/hero-fruits.jpg";
import softCitrusImage from "../assets/hero-fruits1.png";
import tamarindImage from "../assets/date2.png";
import {
  Globe2,
  ShieldCheck,
  Ship,
  Truck,
  Leaf,
  ArrowRight
} from "lucide-react";

const mangosteenImage = fruitsImage;

const Import = () => {

  const images = [
    { src: fruitsImage, alt: "Fresh fruit assortment prepared for import" },
    { src: vegetablesImage, alt: "Fresh vegetables prepared for import" },
    { src: dryFruitsImage, alt: "Dry fruits, grains, nuts and spices" },
    { src: exportImage, alt: "Imported produce and goods at an international port" },
  ];

  return (
    <div className="bg-white overflow-hidden">



      <section className="relative min-h-screen w-full overflow-hidden flex items-center">

        {/* ================= FULL SCREEN BACKGROUND IMAGE ================= */}

        <motion.img
          src={importHeroImage}
          alt="Premium imported fruits"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
        />
        <div
          className="
      absolute
      -bottom-40
      right-0
      w-[500px]
      h-[500px]
      rounded-full
      bg-green-400/10
      blur-3xl
    "
        />

        {/* ================= CONTENT ================= */}

        <div
          className="
      relative
      z-10
      mx-auto
      w-full
      max-w-7xl
      px-6
      py-32
      lg:px-8
    "
        >

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >

            {/* SMALL LABEL */}

            <div className="flex items-center gap-3 mb-6">

              <span className="h-[2px] w-10 bg-green-400" />

              <span
                className="
            text-green-300
            text-sm
            font-semibold
            tracking-[0.22em]
            uppercase
          "
              >
                Global Fruit Import
              </span>

            </div>


            {/* ================= HEADING ================= */}

            <h1
              className="
          text-5xl
          sm:text-6xl
          lg:text-7xl
          xl:text-8xl
          font-bold
          leading-[1.05]
          tracking-tight
          text-white
        "
            >
              Bringing The World's

              <span className="block text-green-400">
                Finest Fruits
              </span>

              <span className="block">
                To You
              </span>

            </h1>


            {/* ================= DESCRIPTION ================= */}

            <p
              className="
          mt-7
          max-w-2xl
          text-base
          sm:text-lg
          lg:text-xl
          leading-relaxed
          text-gray-200
        "
            >
              We import premium quality fruits from trusted farms
              across the globe with advanced logistics and
              temperature-controlled supply chains.
            </p>


            {/* ================= BUTTONS ================= */}

            <div className="flex flex-wrap gap-4 mt-9">

              <button
                className="
            group
            flex
            items-center
            gap-3
            rounded-full
            bg-green-500
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-lg
            shadow-green-900/30
            transition-all
            duration-300
            hover:bg-green-400
            hover:scale-105
          "
              >
                Explore Imports

                <ArrowRight
                  size={18}
                  className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                />

              </button>


              <button
                className="
            rounded-full
            border
            border-white/60
            bg-white/5
            px-7
            py-3.5
            font-semibold
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#002955]
          "
              >
                Contact Us
              </button>

            </div>


            {/* ================= TRUST POINTS ================= */}

            <div
              className="
          mt-12
          flex
          flex-wrap
          gap-x-10
          gap-y-6
        "
            >

              {/* GLOBAL SOURCING */}

              <div className="flex items-center gap-3">

                <div
                  className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-green-400/30
              bg-green-400/10
              backdrop-blur-sm
            "
                >
                  <Globe2
                    size={21}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Global Sourcing
                  </p>

                  <p className="text-xs text-gray-300">
                    Trusted farms worldwide
                  </p>
                </div>

              </div>


              {/* SHIPPING */}

              <div className="flex items-center gap-3">

                <div
                  className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-green-400/30
              bg-green-400/10
              backdrop-blur-sm
            "
                >
                  <Ship
                    size={21}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Worldwide Shipping
                  </p>

                  <p className="text-xs text-gray-300">
                    Reliable global logistics
                  </p>
                </div>

              </div>


              {/* QUALITY */}

              <div className="flex items-center gap-3">

                <div
                  className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-green-400/30
              bg-green-400/10
              backdrop-blur-sm
            "
                >
                  <Leaf
                    size={21}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Fresh Quality
                  </p>

                  <p className="text-xs text-gray-300">
                    Carefully selected produce
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* ================= BOTTOM SCROLL INDICATOR ================= */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      bottom-7
      left-1/2
      -translate-x-1/2
      z-10
      hidden
      md:flex
      flex-col
      items-center
      gap-2
      text-white/70
    "
        >

          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-8 w-px bg-white/40" />

        </motion.div>

      </section>




      {/* ================= GLOBAL FRUIT IMPORT PORTFOLIO ================= */}

      <section
        id="imports"
        className="
    relative
    overflow-hidden
    bg-[#F7FAFC]
    py-20
    lg:py-28
  "
      >
        {/* ===================================================== */}
        {/* BACKGROUND ELEMENTS */}
        {/* ===================================================== */}

        <div
          className="
      pointer-events-none
      absolute
      -right-40
      -top-40
      h-[600px]
      w-[600px]
      rounded-full
      bg-green-400/10
      blur-3xl
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      -bottom-40
      -left-40
      h-[600px]
      w-[600px]
      rounded-full
      bg-[#002955]/5
      blur-3xl
    "
        />


        {/* ===================================================== */}
        {/* MAIN CONTAINER */}
        {/* ===================================================== */}

        <div
          className="
      relative
      z-10
      mx-auto
      w-full
      max-w-[1700px]
      px-6
      lg:px-10
      xl:px-12
    "
        >


          {/* ===================================================== */}
          {/* HEADER */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center lg:mb-16"
          >

            {/* Small Label */}

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-px w-12 bg-green-500" />

              <span
                className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-green-600
          "
              >
                Global Import Collection
              </span>

              <span className="h-px w-12 bg-green-500" />

            </div>


            {/* Heading */}

            <h2
              className="
          text-4xl
          font-bold
          leading-tight
          text-[#002955]
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
            >
              Premium Fruits

              <span className="block text-green-500">
                Imported Worldwide
              </span>
            </h2>


            {/* Description */}

            <p
              className="
          mx-auto
          mt-5
          max-w-3xl
          text-sm
          leading-7
          text-gray-500
          sm:text-base
          lg:text-lg
        "
            >
              A curated portfolio of premium fruits sourced from trusted
              international growers and brought to India through our
              global import network.
            </p>


            {/* Import Pill */}

            <div
              className="
          mx-auto
          mt-7
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-gray-200
          bg-white
          px-5
          py-2.5
          shadow-sm
        "
            >

              <span
                className="
            flex
            h-2.5
            w-2.5
            rounded-full
            bg-green-500
            shadow-[0_0_0_5px_rgba(34,197,94,0.12)]
          "
              />

              <span
                className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#002955]
          "
              >
                20 Premium Import Categories
              </span>

            </div>

          </motion.div>


          {/* ===================================================== */}
          {/* FRUIT COLLECTION */}
          {/* ===================================================== */}

          <div
            className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        xl:gap-7
      "
          >

            {[
              {
                name: "Apples",
                image: appleImage,
                description:
                  "Premium apples sourced from selected international orchards.",
                category: "Fresh Import",
              },
              {
                name: "Avocado",
                image: avocadoImage,
                description:
                  "Creamy premium avocados selected for freshness and consistency.",
                category: "Fresh Import",
              },
              {
                name: "Blueberry",
                image: blueberryImage,
                description:
                  "Premium blueberries with excellent flavour and texture.",
                category: "Fresh Import",
              },
              {
                name: "Cherry",
                image: cherryImage,
                description:
                  "Premium cherries carefully sourced for global markets.",
                category: "Fresh Import",
              },
              {
                name: "Dates",
                image: datesImage,
                description:
                  "Naturally sweet premium dates from trusted suppliers.",
                category: "Fresh Import",
              },
              {
                name: "Dragon Fruit",
                image: dragonFruitImage,
                description:
                  "Vibrant dragon fruit selected for premium markets.",
                category: "Fresh Import",
              },
              {
                name: "Grapefruit",
                image: grapefruitImage,
                description:
                  "Fresh citrus grapefruit with balanced flavour.",
                category: "Fresh Import",
              },
              {
                name: "Grapes",
                image: grapesImage,
                description:
                  "Premium table grapes sourced from leading growing regions.",
                category: "Fresh Import",
              },
              {
                name: "Kiwi",
                image: kiwiImage,
                description:
                  "Premium kiwi selected for freshness and consistency.",
                category: "Fresh Import",
              },
              {
                name: "Lemon",
                image: lemonImage,
                description:
                  "Fresh citrus lemons selected for international markets.",
                category: "Fresh Import",
              },
              {
                name: "Longan",
                image: longanImage,
                description:
                  "Delicate and naturally sweet premium longan.",
                category: "Fresh Import",
              },
              {
                name: "Mandarin",
                image: mandarinImage,
                description:
                  "Vibrant mandarins with refreshing citrus flavour.",
                category: "Fresh Import",
              },
              {
                name: "Mangosteen",
                image: mangosteenImage,
                description:
                  "Exotic premium mangosteen sourced through trusted partners.",
                category: "Fresh Import",
              },
              {
                name: "Orange",
                image: orangeImage,
                description:
                  "Juicy premium oranges selected for consistent quality.",
                category: "Fresh Import",
              },
              {
                name: "Pears",
                image: pearsImage,
                description:
                  "Premium pears sourced from selected international orchards.",
                category: "Fresh Import",
              },
              {
                name: "Plum",
                image: plumImage,
                description:
                  "Fresh premium plums with excellent colour and flavour.",
                category: "Fresh Import",
              },
              {
                name: "Rambutan",
                image: rambutanImage,
                description:
                  "Exotic rambutan carefully handled for global markets.",
                category: "Fresh Import",
              },
              {
                name: "Semi Husk Coconut",
                image: coconutImage,
                description:
                  "Premium semi-husk coconuts prepared for international trade.",
                category: "Fresh Import",
              },
              {
                name: "Soft Citrus",
                image: softCitrusImage,
                description:
                  "Premium soft citrus varieties selected for freshness.",
                category: "Fresh Import",
              },
              {
                name: "Tamarind",
                image: tamarindImage,
                description:
                  "Quality tamarind sourced from trusted agricultural partners.",
                category: "Fresh Import",
              },
            ].map((fruit, index) => (

              <motion.article
                key={fruit.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.06,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative"
              >

                {/* ================================================= */}
                {/* CARD */}
                {/* ================================================= */}

                <div
                  className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_10px_35px_rgba(0,41,85,0.09)]
              transition-all
              duration-500
              group-hover:shadow-[0_24px_60px_rgba(0,41,85,0.18)]
            "
                >

                  {/* ================================================= */}
                  {/* IMAGE */}
                  {/* ================================================= */}

                  <div
                    className="
                relative
                aspect-[4/5]
                overflow-hidden
              "
                  >

                    <img
                      src={fruit.image}
                      alt={`Premium Imported ${fruit.name}`}
                      className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
                    />


                    {/* Dark Gradient */}

                    <div
                      className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#001B38]
                  via-[#001B38]/20
                  to-transparent
                  opacity-90
                "
                    />


                    {/* ================================================= */}
                    {/* IMPORTED BADGE */}
                    {/* ================================================= */}

                    <div className="absolute left-5 top-5">

                      <span
                        className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/25
                    px-4
                    py-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    backdrop-blur-md
                  "
                      >

                        <span
                          className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-green-400
                    "
                        />

                        Imported

                      </span>

                    </div>


                    {/* ================================================= */}
                    {/* NUMBER */}
                    {/* ================================================= */}

                    <div
                      className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  text-[10px]
                  font-bold
                  text-white
                  backdrop-blur-md
                "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* ================================================= */}
                    {/* BOTTOM CONTENT */}
                    {/* ================================================= */}

                    <div
                      className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                  lg:p-7
                "
                    >

                      {/* Category */}

                      <p
                        className="
                    mb-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-green-300
                  "
                      >
                        {fruit.category}
                      </p>


                      {/* Fruit Name */}

                      <h3
                        className="
                    text-2xl
                    font-bold
                    capitalize
                    leading-tight
                    text-white
                    lg:text-3xl
                  "
                      >
                        {fruit.name}
                      </h3>


                      {/* Description */}

                      <div
                        className="
                    mt-3
                    max-h-0
                    overflow-hidden
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:max-h-24
                    group-hover:opacity-100
                  "
                      >

                        <p
                          className="
                      max-w-[320px]
                      text-xs
                      leading-5
                      text-white/75
                    "
                        >
                          {fruit.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>


          {/* ===================================================== */}
          {/* IMPORT BOTTOM BAR */}
          {/* ===================================================== */}

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
            }}
            className="
        mt-14
        flex
        flex-col
        items-center
        justify-between
        gap-6
        rounded-[28px]
        bg-[#002955]
        px-7
        py-7
        text-center
        sm:flex-row
        sm:text-left
        lg:px-10
        lg:py-8
      "
          >

            <div>

              <p
                className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-green-400
          "
              >
                Falcon International
              </p>


              <h3 className="mt-1 text-xl font-bold text-white lg:text-2xl">
                Bringing Global Fruits to India
              </h3>


              <p className="mt-1 text-xs text-white/55 lg:text-sm">
                Trusted sourcing • Premium quality • Reliable import supply
              </p>

            </div>


            <a
              href="/contact"
              className="
          inline-flex
          shrink-0
          items-center
          rounded-full
          bg-green-500
          px-7
          py-3.5
          text-xs
          font-bold
          text-white
          transition
          duration-300
          hover:bg-green-400
          hover:shadow-lg
          hover:shadow-green-500/20
        "
            >
              Import With Us
            </a>

          </motion.div>

        </div>

      </section>



      {/* CTA */}

      <section className="bg-[#002955] py-20">

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto text-center px-6"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready To Import Premium Fruits?
          </h2>


          <p className="text-gray-200 mt-5">
            Partner with us for reliable sourcing,
            quality products and global fruit solutions.
          </p>


          <button className="mt-8 bg-green-500 px-10 py-4 rounded-full text-white font-semibold hover:scale-105 transition">

            Start Partnership

          </button>


        </motion.div>


      </section>


    </div>
  );
};


export default Import;






