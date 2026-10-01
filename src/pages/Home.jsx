import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


  import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe2,
  ShieldCheck,
  Truck,
  Snowflake,
  PackageCheck,
  CheckCircle2,
  Ship,
  Boxes,
  Leaf,
  MapPin,
  Sparkles,
  Handshake,
} from "lucide-react";

import {
  GoogleMap,
  LoadScript,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";

import heroFruits from "../assets/hero-fruits.jpg";
import heroFruitsAlternative from "../assets/hero-fruits1.png";
import aboutfruits from "../assets/about-fruits.jpg";
import aboutdates from "../assets/Dates.png";
import apples from "../assets/apples.png";
import banana from "../assets/banana.png";
import dates from "../assets/date2.png";
import grapes from "../assets/grapes.png";
import kiwi from "../assets/kiwi.png";
import pear from "../assets/pear.png";
import plum from "../assets/plum.png";
import pomegranate from "../assets/pomogrante.png";
import frozenmeat from "../assets/frozen meat .png";
import falconLogo from "../assets/falcon-logo.png";
import exportBanana from "../assets/export/banana.png";
import exportChillies from "../assets/export/chillies.png";
import exportFruits from "../assets/export/fruits.png";
import exportCoffee from "../assets/export/coffee.png";
import exportGinger from "../assets/export/ginger.png";
import exportGrapes from "../assets/export/grapes.png";
import exportPomegranate from "../assets/export/pomegranate.png";
import exportRice from "../assets/export/rice.png";
import exportCoconut from "../assets/export/fruits.png";
import importFeatureImage from "../import/export .png";

const heroSlides = [
  {
    image: heroFruits,
    eyebrow: "IMPORTER • EXPORTER • TRADER",
    title: "From Global Sources",
    highlight: "To Growing Markets.",
    description:
      "Falcon International Co. connects agricultural products and commodities with business markets through import, export and trading services.",
  },
  {
    image: heroFruitsAlternative,
    eyebrow: "AGRICULTURAL TRADE & SOURCING",
    title: "Quality Products.",
    highlight: "International Trade.",
    description:
      "Fresh, dry and processed agricultural products, packaging materials and selected trade categories handled with a business-focused supply approach.",
  },
];

const importedProducts = [
  { name: "Pear", image: pear },
  { name: "Plum", image: plum },
  { name: "Dates", image: dates },
  { name: "Apples", image: apples },
  { name: "Kiwi", image: kiwi },
  { name: "Grapes", image: grapes },
  { name: "Pomegranate", image: pomegranate },
  { name: "Cavendish Banana", image: banana },
];

const exportProducts = [
  { name: "Cavendish Banana", image: exportBanana },
  { name: "Chilli", image: exportChillies },
  { name: "Coffee Bean", image: exportCoffee },
  { name: "Ginger", image: exportGinger },
  { name: "Grapes", image: exportGrapes },
  { name: "Pomegranate", image: exportPomegranate },
  { name: "Rice", image: exportRice },
  { name: "Semi Husk Coconut", image: exportCoconut },
  { name: "Tea", image: heroFruits },
  { name: "Tomato", image: heroFruitsAlternative },
  { name: "Turmeric", image: dates },
];

const tradeMarkets = [
  { name: "India", detail: "Sourcing & trade base", x: 54, y: 57 },
  { name: "Oman", detail: "Export market", x: 61, y: 65 },
  { name: "Saudi Arabia", detail: "Export market", x: 57, y: 54 },
  { name: "Gulf Region", detail: "Regional market", x: 65, y: 49 },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === heroSlides.length - 1 ? 0 : previous + 1
      );
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((previous) =>
      previous === heroSlides.length - 1 ? 0 : previous + 1
    );

  const previousSlide = () =>
    setCurrentSlide((previous) =>
      previous === 0 ? heroSlides.length - 1 : previous - 1
    );

  return (
    <main className="w-full overflow-hidden bg-white text-[#172B3A]">
      {/* =========================================================
          HERO — CLEAR IMPORT / EXPORT / TRADING POSITIONING
      ========================================================== */}
   <section className="relative min-h-[760px] overflow-hidden bg-[#041E31] lg:min-h-[850px]">

  {/* HERO SLIDES */}
  {heroSlides.map((slide, index) => (
    <div
      key={slide.image}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        currentSlide === index
          ? "z-10 opacity-100"
          : "z-0 opacity-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
          currentSlide === index
            ? "scale-110"
            : "scale-100"
        }`}
      />
    </div>
  ))}


  {/* DARK OVERLAY */}
  <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#041E31]/95 via-[#041E31]/65 to-[#041E31]/10" />

  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#041E31]/55 via-transparent to-transparent" />


  {/* ============================================================
      HERO CONTENT
  ============================================================ */}

  <div className="relative z-30 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[850px] lg:px-10">

    <div className="max-w-3xl">


      {/* SMALL LABEL */}

      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

        <span className="h-2 w-2 rounded-full bg-[#45A9E8] shadow-[0_0_12px_#45A9E8]" />

        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
          Global Importer & Trader
        </span>

      </div>


      {/* MAIN HEADING */}

      <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

        Connecting Global Markets

        <span className="block text-[#45A9E8]">
          With Quality Products
        </span>

      </h1>


      {/* DESCRIPTION */}

      <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">

        A trusted importer and trader connecting international suppliers
        with markets across India and beyond through reliable sourcing,
        efficient trade and strong global partnerships.

      </p>


      {/* KEY POINTS */}

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/85">

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#45A9E8]" />
          Global Sourcing
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#45A9E8]" />
          Import & Distribution
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#45A9E8]" />
          International Trade
        </div>

      </div>


      {/* CTA BUTTONS */}

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          to="/products"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#173B57] shadow-xl transition-all duration-300 hover:bg-[#45A9E8] hover:text-white"
        >
          Explore Products

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Link>


        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#173B57]"
        >
          Become a Partner

          <ArrowRight size={17} />

        </Link>

      </div>


      {/* TRUST LINE */}

      <div className="mt-10 flex items-center gap-4">

        <div className="h-px w-12 bg-white/30" />

        <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
          Global sourcing • Reliable trade • Long-term partnerships
        </span>

      </div>

    </div>

  </div>


  {/* ============================================================
      AMBIENT LINES
  ============================================================ */}

  <div className="pointer-events-none absolute inset-0 z-20 opacity-30">

    <div className="absolute left-[52%] top-[22%] h-px w-[42%] origin-left rotate-[18deg] animate-pulse bg-white/40" />

    <div className="absolute left-[58%] top-[48%] h-px w-[32%] origin-left rotate-[-13deg] animate-pulse bg-[#45A9E8]" />

    <div className="absolute right-[8%] top-[20%] h-40 w-40 rounded-full border border-white/10" />

    <div className="absolute bottom-[-140px] right-[-90px] h-[500px] w-[500px] rounded-full border border-white/10" />

  </div>


  {/* ============================================================
      SLIDE CONTROLS
  ============================================================ */}

  <div className="absolute bottom-8 right-5 z-40 flex gap-2 sm:right-10">

    <button
      type="button"
      onClick={previousSlide}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#173B57]"
    >
      <ChevronLeft size={21} />
    </button>


    <button
      type="button"
      onClick={nextSlide}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#173B57]"
    >
      <ChevronRight size={21} />
    </button>

  </div>


  {/* ============================================================
      SLIDE INDICATORS
  ============================================================ */}

  <div className="absolute bottom-10 left-5 z-40 flex items-center gap-2 sm:left-10">

    {heroSlides.map((_, index) => (

      <button
        key={index}
        type="button"
        onClick={() => setCurrentSlide(index)}

        aria-label={`Go to slide ${index + 1}`}

        className={`h-1.5 rounded-full transition-all duration-500 ${
          currentSlide === index
            ? "w-12 bg-white"
            : "w-5 bg-white/40 hover:bg-white/70"
        }`}
      />

    ))}

  </div>

</section>

      {/* =========================================================
          TRADE SNAPSHOT — FIRST THING AFTER HERO
      ========================================================== */}
      <section className="relative z-40 -mt-8 px-5">
        <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_25px_80px_rgba(4,30,49,0.14)] md:grid-cols-4">
          {[
            { icon: Globe2, title: "Import", text: "Agricultural products & commodities" },
            { icon: Ship, title: "Export", text: "Indian fresh, dry & processed products" },
            { icon: Boxes, title: "Trading", text: "Product and commodity supply" },
            { icon: MapPin, title: "Markets", text: "Oman • Saudi Arabia • Gulf region" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group border-b border-gray-100 p-6 last:border-0 md:border-b-0 md:border-r">
              <Icon size={24} className="text-[#1689D7] transition group-hover:scale-110" />
              <h3 className="mt-4 font-bold text-[#173B57]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          ABOUT / COMPANY POSITIONING
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] items-center gap-16 px-5 lg:grid-cols-2">
                    <div className="flex min-h-[520px] items-center justify-center">
            <img src={falconLogo} alt="Falcon International" className="max-h-[300px] max-w-[80%] object-contain" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1689D7]">Who We Are</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#173B57] sm:text-5xl">
              An International Trading Company
              <span className="block text-[#1689D7]">Built Around Agricultural Products.</span>
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#1689D7]" />

            <p className="mt-7 text-base leading-8 text-gray-600">
              Falcon International Co. has been working since 2020 to connect Indian markets with fresh, wholesome and high-quality fruits sourced from different parts of the world.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              The company operates across import, export and trading of agricultural products and commodities, including fresh, dry and processed categories. It also deals in agricultural packaging materials and health & hygiene products.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Import & sourcing", "Export & trading", "Agricultural commodities", "Packaging material"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-[#F5F9FC] px-4 py-3 text-sm font-semibold text-[#173B57]">
                  <CheckCircle2 size={17} className="text-[#1689D7]" />
                  {item}
                </div>
              ))}
            </div>

            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 font-bold text-[#1689D7]">
              DISCOVER FALCON
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPORT
      ========================================================== */}
      <section className="overflow-hidden bg-[#F5F8FA] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] items-center gap-16 px-5 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1689D7]">Import</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#173B57] sm:text-5xl">
              Global Sourcing.
              <span className="block text-[#1689D7]">Fresh Market Supply.</span>
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#1689D7]" />
            <p className="mt-7 max-w-[580px] text-base leading-8 text-gray-600">
              We source and trade fresh fruits and agricultural products for business requirements, with focus on product quality, handling and dependable supply coordination.
            </p>
            <p className="mt-4 max-w-[580px] text-base leading-8 text-gray-600">
              Our displayed import range includes apples, kiwi, dates, pears, grapes, plums, and other fresh produce categories.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Apples", "Kiwi", "Dates", "Grapes", "Pears", "Plums"].map((item) => (
                <span key={item} className="rounded-full border border-[#DCEAF3] bg-white px-4 py-2 text-xs font-bold text-[#173B57]">
                  {item}
                </span>
              ))}
            </div>

            <Link to="/import" className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#1689D7] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0D73B8]">
              EXPLORE IMPORT
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

                    <div className="overflow-hidden rounded-[28px] shadow-lg">
            <img src={importFeatureImage} alt="Falcon International agricultural exports" className="h-full min-h-[380px] w-full object-cover lg:min-h-[500px]" />
          </div>
        </div>
      </section>
{/* =========================================================
    GLOBAL PRESENCE — GOOGLE MAPS
========================================================= */}

<section className="relative overflow-hidden bg-[#FAFAFC] py-20 lg:py-28">

  <div className="mx-auto max-w-[1300px] px-5">

    {/* =========================
        SECTION HEADER
    ========================== */}

    <div className="mx-auto max-w-[760px] text-center">

      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1689D7]">
        Global Presence
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-[#173B57] sm:text-5xl lg:text-6xl">
        Delivering Excellence
        <span className="block text-[#1689D7]">
          Across the World
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-[680px] text-sm leading-7 text-gray-500 sm:text-base">
        From India to international markets, Falcon International Co.
        connects agricultural products through reliable global trade
        and trusted business partnerships.
      </p>

    </div>


    {/* =========================
        GOOGLE MAP CARD
    ========================== */}

    <div className="relative mt-12 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(23,59,87,0.10)]">

      <div className="relative h-[500px] w-full sm:h-[580px] lg:h-[650px]">

        <LoadScript
          googleMapsApiKey={
            process.env.REACT_APP_GOOGLE_MAPS_API_KEY
          }
        >

          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}

            center={{
              lat: 28,
              lng: 65,
            }}

            zoom={3}

            options={{
              mapTypeId: "roadmap",

              streetViewControl: false,

              fullscreenControl: false,

              mapTypeControl: false,

              scaleControl: false,

              rotateControl: false,

              panControl: false,

              zoomControl: true,

              clickableIcons: false,

              gestureHandling: "cooperative",

              styles: [
                {
                  featureType: "poi",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },

                {
                  featureType: "transit",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },

                {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#F4F6F8",
                    },
                  ],
                },

                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#D4EDF6",
                    },
                  ],
                },

                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#FFFFFF",
                    },
                  ],
                },

                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#697782",
                    },
                  ],
                },

                {
                  featureType: "administrative.country",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#405461",
                    },
                  ],
                },
              ],
            }}
          >

            {/* =================================================
                INDIA — MAIN LOCATION
            ================================================== */}

            <MarkerF
              position={{
                lat: 20.5937,
                lng: 78.9629,
              }}

              title="India"

              label={{
                text: "INDIA",
                color: "#173B57",
                fontSize: "11px",
                fontWeight: "700",
              }}

              icon={{
                path: window.google?.maps?.SymbolPath?.CIRCLE,

                scale: 7,

                fillColor: "#1689D7",

                fillOpacity: 1,

                strokeColor: "#FFFFFF",

                strokeWeight: 3,
              }}
            />


            {/* =================================================
                INTERNATIONAL MARKETS
            ================================================== */}

            {[
              {
                name: "Saudi Arabia",
                lat: 23.8859,
                lng: 45.0792,
              },

              {
                name: "Oman",
                lat: 21.4735,
                lng: 55.9754,
              },

              {
                name: "United Arab Emirates",
                lat: 24.4539,
                lng: 54.3773,
              },

              {
                name: "Qatar",
                lat: 25.3548,
                lng: 51.1839,
              },

              {
                name: "Bahrain",
                lat: 26.0667,
                lng: 50.5577,
              },

              {
                name: "Iraq",
                lat: 33.2232,
                lng: 43.6793,
              },

              {
                name: "Afghanistan",
                lat: 33.9391,
                lng: 67.7100,
              },

              {
                name: "China",
                lat: 35.8617,
                lng: 104.1954,
              },

              {
                name: "Malaysia",
                lat: 4.2105,
                lng: 101.9758,
              },

              {
                name: "Singapore",
                lat: 1.3521,
                lng: 103.8198,
              },

              {
                name: "Spain",
                lat: 40.4637,
                lng: -3.7492,
              },

              {
                name: "Netherlands",
                lat: 52.1326,
                lng: 5.2913,
              },

              {
                name: "Russia",
                lat: 61.5240,
                lng: 105.3188,
              },
            ].map((country) => (

              <MarkerF
                key={country.name}

                position={{
                  lat: country.lat,
                  lng: country.lng,
                }}

                title={country.name}

                label={{
                  text: country.name,
                  color: "#4D5961",
                  fontSize: "9px",
                  fontWeight: "600",
                }}

                icon={{
                  path:
                    window.google?.maps?.SymbolPath?.CIRCLE,

                  scale: 4.5,

                  fillColor: "#173B57",

                  fillOpacity: 1,

                  strokeColor: "#FFFFFF",

                  strokeWeight: 2,
                }}
              />

            ))}

          </GoogleMap>

        </LoadScript>


        {/* =========================
            MAP INFO
        ========================== */}

        <div className="pointer-events-none absolute left-5 top-5 z-20">

          <div className="rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md">

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1689D7]">
              Global Trade Network
            </p>

            <p className="mt-1 text-sm font-bold text-[#173B57]">
              India & International Markets
            </p>

            <p className="mt-1 text-[10px] text-gray-500">
              Import • Export • Trading
            </p>

          </div>

        </div>


        {/* =========================
            MAP LEGEND
        ========================== */}

        <div className="absolute bottom-5 left-5 z-20">

          <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">

            <span className="h-2.5 w-2.5 rounded-full bg-[#1689D7]" />

            <span className="text-[10px] font-semibold text-[#173B57]">
              India
            </span>

            <span className="mx-1 h-3 w-px bg-gray-200" />

            <span className="h-2.5 w-2.5 rounded-full bg-[#173B57]" />

            <span className="text-[10px] font-semibold text-[#173B57]">
              International Markets
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* =========================
        BUSINESS STATS
    ========================== */}

    <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">

      {[
        {
          icon: Globe2,
          value: "25+",
          label: "Countries Served",
        },

        {
          icon: Boxes,
          value: "49,994 MT",
          label: "Annual Volume",
        },

        {
          icon: Leaf,
          value: "7K+",
          label: "Farmers",
        },

        {
          icon: MapPin,
          value: "8+",
          label: "States",
        },
      ].map(({ icon: Icon, value, label }) => (

        <div
          key={label}
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF7FC]">

            <Icon
              size={19}
              className="text-[#1689D7] transition duration-300 group-hover:scale-110"
            />

          </div>

          <div>

            <p className="text-xl font-bold text-[#173B57]">
              {value}
            </p>

            <p className="mt-1 text-[10px] font-medium text-gray-500">
              {label}
            </p>

          </div>

        </div>

      ))}

    </div>


    {/* =========================
        COUNTRY LIST
    ========================== */}

    <div className="mt-7 flex flex-wrap justify-center gap-3">

      {[
        "Saudi Arabia",
        "Oman",
        "UAE",
        "Qatar",
        "Bahrain",
        "Iraq",
        "Afghanistan",
        "China",
        "Malaysia",
        "Singapore",
        "Spain",
        "Netherlands",
        "Russia",
      ].map((country) => (

        <div
          key={country}
          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[10px] font-semibold text-[#173B57] shadow-sm transition duration-300 hover:border-[#1689D7] hover:text-[#1689D7]"
        >
          {country}
        </div>

      ))}

    </div>

  </div>

</section>



      {/* =========================================================
          EXPORT / TRADING — STRONGER BUSINESS SECTION
      ========================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1250px] px-5">
          <div className="mb-14 max-w-[820px]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1689D7]">Export / Trading</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#173B57] sm:text-6xl">
              Indian Agricultural Products.
              <span className="block text-[#1689D7]">Prepared For International Markets.</span>
            </h2>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-gray-600">
              Our export and trading range includes fresh fruits and vegetables, dry and processed agricultural products, agricultural packaging materials and health & hygiene products. Product selection and supply are coordinated around business requirements and destination-market needs.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.7fr]">
            <div className="rounded-[30px] bg-[#062D4A] p-8 text-white shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Ship size={28} className="text-[#45A9E8]" />
              </div>
              <h3 className="mt-7 text-2xl font-bold">Export & Trading Categories</h3>
              <p className="mt-4 leading-7 text-white/60">
                A broader agricultural trading portfolio designed for wholesale, distribution and business supply requirements.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Fresh fruits & vegetables",
                  "Rice, tea, coffee & turmeric",
                  "Coco peat & coir pith products",
                  "Kraft liner board & core board",
                  "Health & hygiene products",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#45A9E8]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/export-trading" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#173B57]">
                VIEW EXPORT RANGE
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {exportProducts.slice(0, 9).map((product) => (
                <Link
                  to="/export-trading"
                  key={product.name}
                  className="group relative h-[210px] overflow-hidden rounded-[22px] bg-gray-200"
                >
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white">{product.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-white/75 opacity-0 transition group-hover:opacity-100">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================== */}
      <section className="bg-[#F5F8FA] py-24 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-5">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1689D7]">Trade Process</p>
            <h2 className="mt-3 text-4xl font-bold text-[#173B57] sm:text-5xl">
              From Requirement
              <span className="text-[#1689D7]"> To Supply.</span>
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              A clear business journey that helps buyers understand how Falcon approaches sourcing, product coordination and trade requirements.
            </p>
          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Requirement", "Understand product, quantity, destination and business requirement.", Globe2],
              ["02", "Sourcing", "Coordinate suitable agricultural products and supply options.", Leaf],
              ["03", "Trade Coordination", "Manage product, packaging and movement requirements.", PackageCheck],
              ["04", "Supply", "Support dependable movement toward the required market.", Truck],
            ].map(([num, title, text, Icon], index) => (
              <div key={num} className="group relative rounded-[24px] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FD]">
                    <Icon size={27} className="text-[#1689D7]" />
                  </div>
                  <span className="text-4xl font-black text-[#E8F0F5]">{num}</span>
                </div>
                <h3 className="mt-7 font-bold text-[#173B57]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
                {index < 3 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-[#BBD7E8] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY FALCON
      ========================================================== */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-5">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1689D7]">Why Falcon</p>
              <h2 className="mt-3 text-4xl font-bold text-[#173B57] sm:text-5xl">
                Built For
                <span className="block text-[#1689D7]">Business Trade.</span>
              </h2>
            </div>
            <p className="max-w-[650px] leading-8 text-gray-600">
              The website should communicate a trading company first: clear product categories, clear markets, clear trade process and a direct route for buyers to make an enquiry.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [ShieldCheck, "Quality Focus", "Focus on product quality across sourcing, handling and supply coordination."],
              [Globe2, "International Trade", "Import, export and trading services connecting products with international markets."],
              [Truck, "Supply Coordination", "Professional coordination designed around product movement and business requirements."],
              [PackageCheck, "Product Range", "Fresh, dry and processed agricultural products plus selected packaging categories."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="group rounded-[24px] bg-[#F6F9FB] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon size={30} className="text-[#1689D7]" />
                </div>
                <h3 className="mt-6 font-bold text-[#173B57]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FROZEN MEAT
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#EEF8FC] py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#1689D7]/10" />
        <div className="mx-auto grid max-w-[1250px] items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
            <img src={frozenmeat} alt="Frozen Meat" className="h-[400px] w-full object-cover transition duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-4 shadow-xl">
              <Snowflake size={27} className="text-[#1689D7]" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1689D7]">Frozen Meat</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#173B57] sm:text-5xl">
              Quality Products.
              <span className="block text-[#1689D7]">Reliable Supply.</span>
            </h2>
            <p className="mt-6 max-w-[560px] leading-8 text-gray-600">
              Explore our frozen meat category and connect with Falcon International Co. for product requirements and trade enquiries.
            </p>
            <Link to="/frozen-meat" className="group mt-7 inline-flex items-center gap-2 font-bold text-[#1689D7]">
              EXPLORE FROZEN MEAT
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
<section className="relative w-full overflow-hidden bg-[#073553] py-20 sm:py-24">
  {/* Decorative circles */}
  <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
  <div className="pointer-events-none absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full border border-white/10" />

  <div className="relative mx-auto grid w-full max-w-[1200px] min-w-0 grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">

    {/* LEFT CONTENT */}
    <div className="min-w-0 w-full">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#45A9E8]">
        Let's Work Together
      </p>

      <h2 className="mt-3 text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
        Looking for a Trade Partner?
      </h2>

      <p className="mt-5 max-w-[560px] text-[15px] leading-8 text-white/65">
        Share your product requirement, destination market and business need
        with Falcon International Co. for import, export, frozen meat or
        agricultural trading enquiries.
      </p>

      {/* CONTACT CARDS */}
      <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">

        {/* EMAIL */}
        <div className="min-w-0 w-full rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md">
          <p className="text-xs text-white/45">
            Email
          </p>

          <p className="mt-2 break-all text-sm font-semibold leading-6 text-white sm:text-base">
            info@falconinternationalco.com
          </p>
        </div>

        {/* PHONE */}
        <div className="min-w-0 w-full rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md">
          <p className="text-xs text-white/45">
            Call Us
          </p>

          <p className="mt-2 text-sm font-semibold leading-6 text-white sm:text-base">
            +91 9320005152
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT FORM */}
    <div className="min-w-0 w-full max-w-full rounded-3xl bg-white p-6 shadow-2xl sm:p-8">

      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="text-2xl font-bold text-[#173B57]">
            Send Your Query
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Tell us what you need to source, import or export.
          </p>
        </div>

        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF6FD] sm:flex">
          <Sparkles size={21} className="text-[#1689D7]" />
        </div>
      </div>

      <form className="mt-6 w-full space-y-4">

        {/* NAME + PHONE */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="min-w-0 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1689D7]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="min-w-0 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1689D7]"
          />
        </div>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          className="min-w-0 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1689D7]"
        />

        {/* REQUIREMENT */}
        <select
          className="min-w-0 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#1689D7]"
        >
          <option>Select Requirement</option>
          <option>Import Fruits</option>
          <option>Export Trading</option>
          <option>Frozen Meat</option>
          <option>Agricultural Products</option>
          <option>Packaging Materials</option>
          <option>Health & Hygiene Products</option>
        </select>

        {/* MESSAGE */}
        <textarea
          rows="4"
          placeholder="Product, quantity, destination market or your message"
          className="min-w-0 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#1689D7]"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#1689D7] px-8 py-4 font-bold text-white transition hover:bg-[#0D73B8]"
        >
          SEND TRADE QUERY

          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

      </form>
    </div>

  </div>
</section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </main>
  );
};

export default Home;
