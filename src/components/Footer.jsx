import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../assets/falcon-logo.png";
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#F3F9FC] text-[#123B4A]">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#5FAFC8]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#2B7A9B]/5 blur-3xl" />


      {/* ================= MAIN FOOTER ================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">

        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">


          {/* =================================================
              BRAND
          ================================================= */}

          <div>

            <Link
              to="/"
              aria-label="Falcon International home"
              className="inline-block"
            >

              <img
                src={logo}
                alt="Falcon International Co."
                className="
                  h-auto
                  w-[220px]
                  max-w-full
                  object-contain
                  object-left
                "
              />

            </Link>


            <p
              className="
                mt-3
                max-w-md
                text-xs
                leading-6
                text-[#607985]
                sm:text-sm
              "
            >
              Connecting global growers, suppliers and markets through
              trusted agricultural sourcing, international trade and
              dependable supply solutions.
            </p>


            {/* CTA */}

            <Link
              to="/contact"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-2.5
                rounded-full
                bg-[#123B4A]
                px-5
                py-2.5
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1E5367]
              "
            >

              Start a Trade Inquiry

              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                "
              >
                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>

            </Link>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <div className="mb-4 flex items-center gap-2.5">

              <span className="h-px w-6 bg-[#5FAFC8]" />

              <h2
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#123B4A]
                "
              >
                Explore
              </h2>

            </div>


            <nav
              aria-label="Footer navigation"
              className="grid gap-2.5"
            >

              <Link
                to="/"
                className="
                  text-xs
                  text-[#607985]
                  transition-colors
                  hover:text-[#2B7A9B]
                  sm:text-sm
                "
              >
                Home
              </Link>

              <Link
                to="/about"
                className="
                  text-xs
                  text-[#607985]
                  transition-colors
                  hover:text-[#2B7A9B]
                  sm:text-sm
                "
              >
                About Us
              </Link>

              <Link
                to="/import"
                className="
                  text-xs
                  text-[#607985]
                  transition-colors
                  hover:text-[#2B7A9B]
                  sm:text-sm
                "
              >
                Fruit Imports
              </Link>

              <Link
                to="/export-trading"
                className="
                  text-xs
                  text-[#607985]
                  transition-colors
                  hover:text-[#2B7A9B]
                  sm:text-sm
                "
              >
                Export & Trading
              </Link>

              <Link
                to="/frozen-meat"
                className="
                  text-xs
                  text-[#607985]
                  transition-colors
                  hover:text-[#2B7A9B]
                  sm:text-sm
                "
              >
                Frozen Meat
              </Link>

              <Link
                to="/contact"
                className="
                  text-xs
                  text-[#607985]
                  transition-colors
                  hover:text-[#2B7A9B]
                  sm:text-sm
                "
              >
                Contact
              </Link>

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <div className="mb-4 flex items-center gap-2.5">

              <span className="h-px w-6 bg-[#5FAFC8]" />

              <h2
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#123B4A]
                "
              >
                Get in Touch
              </h2>

            </div>


            <div className="grid gap-2.5">


              {/* ADDRESS */}

              <a
                href="https://maps.google.com/?q=GRD%2F2+Vijaya+Bhavan,+Prabhat+Colony,+Santacruz+East,+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#D7E8EF]
                  bg-white/70
                  p-3
                  transition-all
                  duration-300
                  hover:border-[#B8DCE8]
                  hover:bg-white
                "
              >

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#E3F3F8]
                  "
                >
                  <MapPin
                    size={15}
                    className="text-[#2B7A9B]"
                  />
                </span>


                <span className="text-xs leading-5 text-[#607985]">

                  <span className="block font-semibold text-[#123B4A]">
                    Mumbai Office
                  </span>

                  GRD/2 Vijaya Bhavan, CTS-61,
                  Prabhat Colony, Santacruz East, Mumbai

                </span>

              </a>


              {/* PHONE */}

              <a
                href="tel:+919320005152"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#D7E8EF]
                  bg-white/70
                  p-3
                  transition-all
                  duration-300
                  hover:border-[#B8DCE8]
                  hover:bg-white
                "
              >

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#E3F3F8]
                  "
                >
                  <Phone
                    size={15}
                    className="text-[#2B7A9B]"
                  />
                </span>


                <span>

                  <span
                    className="
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-[#8299A3]
                    "
                  >
                    Call Us
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      text-xs
                      font-semibold
                      text-[#123B4A]
                    "
                  >
                    +91 93200 05152
                  </span>

                </span>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:info@falconinternationalco.com"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#D7E8EF]
                  bg-white/70
                  p-3
                  transition-all
                  duration-300
                  hover:border-[#B8DCE8]
                  hover:bg-white
                "
              >

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#E3F3F8]
                  "
                >
                  <Mail
                    size={15}
                    className="text-[#2B7A9B]"
                  />
                </span>


                <span className="min-w-0">

                  <span
                    className="
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-[#8299A3]
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      break-all
                      text-xs
                      font-semibold
                      text-[#123B4A]
                    "
                  >
                    info@falconinternationalco.com
                  </span>

                </span>

              </a>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-[#D7E8EF] bg-white">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-2
            px-6
            py-3.5
            text-[11px]
            text-[#718791]
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:px-8
          "
        >

          <p>
            © {new Date().getFullYear()} Falcon International Co.
            All rights reserved.
          </p>


          <div className="flex items-center gap-2">

            <Globe2
              size={13}
              className="text-[#2B7A9B]"
            />

            <span className="font-medium">
              Global sourcing. Trusted delivery.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;


