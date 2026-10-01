import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import {
  MapPin,
  Mail,
  Phone,
  Clock3,
  Menu,
  X,
  Leaf,
  Globe2,
  Snowflake,
  Download,
  MessageCircle,
  Home as HomeIcon,
  Info,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/falcon-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/", icon: <HomeIcon size={17} /> },
    { name: "About", link: "/about", icon: <Info size={17} /> },
    { name: "Import", link: "/import", icon: <Leaf size={17} /> },
    {
      name: "Export / Trading",
      link: "/export-trading",
      icon: <Globe2 size={17} />,
    },
    {
      name: "Frozen Meat",
      link: "/frozen-meat",
      icon: <Snowflake size={17} />,
    },
    {
      name: "Download Brochure",
      link: "/download-brochure",
      icon: <Download size={17} />,
    },
    {
      name: "Contact Us",
      link: "/contact",
      icon: <MessageCircle size={17} />,
    },
  ];

  return (
    <header className="relative z-50 bg-white text-[#172B4D]">

      {/* ================================================= */}
      {/* TOP INFORMATION BAR */}
      {/* ================================================= */}

      <div className="border-b bg-[#f7f9fc]">

        <div className="mx-auto flex h-[45px] max-w-[1500px] items-center justify-between px-5 lg:px-8">

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-600">

            <MapPin
              size={16}
              className="shrink-0 text-[#087fe5]"
            />

            <span>
              GRD/2 Vijaya Bhavan, CTS-61, Prabhat Colony,
              Santacruz East Mumbai
            </span>

          </div>

          {/* Contact */}
          <div className="hidden items-center gap-6 md:flex">

            <a
              href="mailto:info@falconinternationalco.com"
              className="flex items-center gap-2 text-[#087fe5]"
            >
              <Mail size={15} />

              info@falconinternationalco.com
            </a>

            <a
              href="tel:+919320005152"
              className="flex items-center gap-2"
            >
              <Phone size={15} />

              +91 93200 05152
            </a>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* MAIN BRAND HEADER */}
      {/* ================================================= */}

      <div className="mx-auto max-w-[1500px] px-4 sm:px-5 lg:px-8">

        <div className="flex min-h-[170px] items-center justify-between">

          {/* ================= LEFT BRAND ================= */}

          <div className="flex items-center gap-6">

            {/* LOGO */}

            <Link
              to="/"
              className="flex shrink-0 items-center"
            >
              <img
                src={logo}
                alt="Falcon International"
                className="
                  h-[140px]
                  w-[140px]
                  object-contain
                  lg:h-[155px]
                  lg:w-[155px]
                "
              />
            </Link>


            {/* COMPANY NAME */}

            <div>

              <h1
                className="
                  text-xl
                  font-semibold
                  tracking-wide
                  text-[#145487]
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                FALCON INTERNATIONAL CO.
              </h1>

              <div className="mt-2 flex items-center gap-3">

                <span className="h-[1px] w-8 bg-[#145487] lg:w-10" />

                <p className="text-sm text-gray-600 lg:text-base">
                  Sharing Fruits Of Success
                </p>

                <span className="h-[1px] w-8 bg-[#145487] lg:w-10" />

              </div>

            </div>

          </div>


          {/* ================= RIGHT INFORMATION ================= */}

          <div className="hidden items-center gap-7 lg:flex">

            {/* LOCATION */}

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">

                <MapPin className="text-[#087fe5]" />

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  LOCATION
                </p>

                <p className="font-medium">
                  Mumbai - India
                </p>

              </div>

            </div>


            {/* WORKING HOURS */}

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50">

                <Clock3 className="text-green-600" />

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  WORKING HOURS
                </p>

                <p>
                  9AM - 8PM
                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50">

                <Phone className="text-red-500" />

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  CALL US
                </p>

                <p>
                  +91 93200 05152
                </p>

              </div>

            </div>

          </div>


          {/* MOBILE MENU */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              rounded-xl
              border
              p-3
              lg:hidden
            "
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* NAVIGATION */}
      {/* ================================================= */}

      <nav className="mx-auto max-w-[1500px] px-4 lg:px-8">

        <div
          className="
            flex
            items-center
            justify-between
            rounded-t-2xl
            border
            bg-white
            px-3
            shadow-lg
          "
        >

          {/* DESKTOP MENU */}

          <div className="hidden items-center lg:flex">

            {menuItems.map((item, index) => (

              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-16
                  items-center
                  gap-2
                  px-5
                  text-sm
                  font-medium
                  transition
                  ${
                    isActive
                      ? "text-[#087fe5]"
                      : "text-[#273b57] hover:text-[#087fe5]"
                  }
                `}
              >

                {item.icon}

                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[3px]
                    w-0
                    -translate-x-1/2
                    bg-[#087fe5]
                    transition-all
                    group-hover:w-8
                  "
                />

              </NavLink>

            ))}

          </div>


          {/* TRADE INQUIRY */}

          <Link
            to="/trade-inquiry"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              bg-[#087fe5]
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#066fc9]
              lg:flex
            "
          >

            Trade Inquiry

            <ArrowRight size={17} />

          </Link>

        </div>

      </nav>


      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      {mobileOpen && (

        <div className="border-t bg-white px-5 py-5 shadow-lg lg:hidden">

          {menuItems.map((item, index) => (

            <Link
              key={index}
              to={item.link}
              onClick={() => setMobileOpen(false)}
              className="
                flex
                items-center
                justify-between
                border-b
                py-4
                text-gray-700
              "
            >

              <div className="flex items-center gap-3">

                {item.icon}

                {item.name}

              </div>

              <ArrowRight size={15} />

            </Link>

          ))}


          {/* MOBILE TRADE INQUIRY */}

          <Link
            to="/trade-inquiry"
            onClick={() => setMobileOpen(false)}
            className="
              mt-5
              block
              rounded-xl
              bg-[#087fe5]
              py-4
              text-center
              font-bold
              text-white
            "
          >
            TRADE INQUIRY
          </Link>

        </div>

      )}

    </header>
  );
};

export default Navbar;