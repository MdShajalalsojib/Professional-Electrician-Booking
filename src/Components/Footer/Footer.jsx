import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaHome,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About Us", "/about"],
  ["Booking", "/booking"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  "Electrical Installation",
  "Electrical Repair",
  "House Wiring",
  "Lighting Solutions",
  "Safety Inspection",
  "More Services...",
];

const buildings = [
  [0, 48, 48],
  [42, 28, 55],
  [86, 58, 43],
  [130, 18, 70],
  [185, 42, 53],
  [236, 10, 78],
  [292, 47, 47],
  [338, 28, 63],
  [392, 54, 50],
  [444, 8, 82],
  [504, 38, 58],
  [555, 16, 75],
  [615, 52, 47],
  [662, 28, 66],
  [716, 46, 56],
  [770, 6, 84],
  [830, 35, 62],
  [888, 51, 49],
  [938, 21, 72],
  [996, 42, 58],
];

function Cityscape() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-x-0 bottom-[74px] z-0 h-36 w-full opacity-80"
      preserveAspectRatio="none"
      viewBox="0 0 1600 150"
    >
      <defs>
        <linearGradient id="footerCityGlow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#07519a" stopOpacity="0.15" />
          <stop offset="1" stopColor="#020b1c" stopOpacity="0.96" />
        </linearGradient>
      </defs>
      <path d="M0 145V96h1600v49Z" fill="#020b1c" />
      <g fill="url(#footerCityGlow)" stroke="#0a3568" strokeWidth="1">
        {buildings.map(([x, y, h]) => (
          <rect height={h} key={`${x}-${y}`} width="42" x={x} y={y} />
        ))}
        <path d="M0 150V119l15-10 17 12 15-8 19 16 19-12 19 16v17Zm945 0v-23l17-12 16 6 18-20 19 16 17-9 21 19 20-8 15 10v21Z" />
      </g>
      <g fill="#ffc400" opacity="0.9">
        {buildings.flatMap(([x, y, h]) =>
          Array.from({ length: Math.max(1, Math.floor(h / 20)) }, (_, row) => (
            <g key={`${x}-w-${row}`}>
              <rect height="4" width="3" x={x + 9} y={y + 9 + row * 12} />
              <rect height="4" width="3" x={x + 25} y={y + 9 + row * 12} />
            </g>
          )),
        )}
      </g>
      <g
        fill="none"
        stroke="#071329"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="m1120 145 37-113 37 113m-60-69h46m-58 34h70m-54-51 38 54m-37 0 38-54m-73 86 51-65 50 65m-135 0h162" />
        <path d="m1300 145 28-87 28 87m-46-55h36m-43 27h51m-37-42 30 42m-29 0 30-42m-59 70h80" />
        <path
          d="M1080 50c80 24 130-8 205 14 79 22 130-5 205 18"
          stroke="#0a2850"
          strokeWidth="2"
        />
      </g>
      <g>
        <path
          d="M1516 145v-57c0-10 7-18 17-18s17 8 17 18v57m-42-51h50l-8-12h-34Z"
          fill="#020b1c"
          stroke="#ffc400"
          strokeWidth="2"
        />
        <path
          d="M1490 145v-32c0-12 10-22 22-22h37c13 0 23 10 23 22v32Z"
          fill="#020b1c"
          stroke="#ffc400"
          strokeWidth="2"
        />
        <path
          d="M1497 111c0-14 11-26 25-26s25 12 25 26c0 11-5 18-13 24h-24c-8-6-13-13-13-24Zm-2-1 25-22 26 22m-43 28-14 7m59-7 13 7"
          fill="none"
          stroke="#ffc400"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}

function FooterHeading({ icon: Icon, children }) {
  return (
    <h2 className="mb-5 inline-flex -skew-x-6 items-center gap-2 rounded-sm bg-yellow-400 px-4 py-2 text-sm font-black text-slate-950 shadow-[0_8px_20px_rgba(250,204,21,0.2)]">
      <Icon className="skew-x-6 text-lg" />
      <span className="skew-x-6 whitespace-nowrap">{children}</span>
    </h2>
  );
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <footer className="relative isolate overflow-hidden bg-[#03132d] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_100%,rgba(0,87,175,0.45),transparent_55%),linear-gradient(115deg,#03132d,#061b40_65%,#03132d)]" />
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-12 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1600 48"
      >
        <path
          d="M0 45C120-12 214 5 320 24c110 20 180-11 283-9"
          fill="none"
          stroke="#ffc400"
          strokeWidth="5"
        />
        <path
          d="M940 0c190 34 435 40 660-22v70H940Z"
          fill="#0a2d65"
          opacity=".43"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <Cityscape />
        <div className="relative z-10 grid gap-9 pb-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_0.72fr_1.05fr_1.12fr_1.12fr] xl:gap-0 xl:pb-24">
          <section className="xl:border-r xl:border-white/25 xl:pr-7">
            <Link className="inline-flex items-center gap-3" to="/">
              <span className="relative grid size-16 place-items-center text-yellow-400">
                <FaHome className="absolute size-16" />
                <FaBolt className="relative mt-2 text-3xl text-[#03132d]" />
              </span>
              <span>
                <span className="block text-3xl font-black tracking-tight">
                  Electro<span className="text-yellow-400">Fix</span>
                </span>
                <span className="block pl-2 text-sm italic text-slate-200">
                  Your Trusted Partner
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-200">
              We provide professional electrical services for homes, businesses,
              and industries. Your safety and satisfaction are our top priority.
            </p>
            <div className="mt-6 grid grid-cols-3 divide-x divide-yellow-400/70 text-center">
              {[
                [FaShieldAlt, "Trusted", "Service"],
                [FaUsers, "Skilled", "Professionals"],
                [FaHeadset, "24/7", "Support"],
              ].map(([Icon, lineOne, lineTwo]) => (
                <div className="px-2" key={lineOne}>
                  <Icon className="mx-auto text-2xl text-yellow-400" />
                  <p className="mt-2 text-xs font-semibold leading-4 text-slate-100">
                    {lineOne}
                    <br />
                    {lineTwo}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="sm:pl-2 xl:border-r xl:border-white/25 xl:px-5">
            <FooterHeading icon={FaBolt}>Quick Links</FooterHeading>
            <ul className="space-y-3">
              {quickLinks.map(([label, to]) => (
                <li key={to}>
                  <Link
                    className="group flex items-center gap-2 text-sm text-slate-100 transition hover:text-yellow-300"
                    to={to}
                  >
                    <FaChevronRight className="text-xs text-yellow-400 transition group-hover:translate-x-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="xl:border-r xl:border-white/25 xl:px-5">
            <FooterHeading icon={FaTools}>Our Services</FooterHeading>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    className="group flex items-center gap-2 text-sm text-slate-100 transition hover:text-yellow-300"
                    to="/services"
                  >
                    <FaChevronRight className="shrink-0 text-xs text-yellow-400 transition group-hover:translate-x-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="xl:border-r xl:border-white/25 xl:px-5">
            <FooterHeading icon={FaPhoneAlt}>Contact Us</FooterHeading>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>
                <a
                  className="flex items-center gap-3 hover:text-yellow-300"
                  href="tel:+8801732077391"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-yellow-400 text-slate-950">
                    <FaPhoneAlt />
                  </span>
                  +880 1732 077391
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 hover:text-yellow-300"
                  href="mailto:info@electrofix.com"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-yellow-400 text-slate-950">
                    <FaEnvelope />
                  </span>
                  info@electrofix.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-yellow-400 text-slate-950">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    123 Electric Plaza,
                    <br />
                    Dhaka-1205, Bangladesh
                  </span>
                </span>
              </li>
            </ul>
            <div aria-label="Social media" className="mt-5 flex gap-2.5">
              {[
                [FaFacebookF, "Facebook"],
                [FaYoutube, "YouTube"],
                [FaLinkedinIn, "LinkedIn"],
                [FaTwitter, "Twitter"],
              ].map(([Icon, label]) => (
                <span
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border-2 border-yellow-400 text-lg text-white"
                  key={label}
                  title={label}
                >
                  <Icon />
                </span>
              ))}
            </div>
          </section>

          <section className="sm:col-span-2 lg:col-span-1 xl:pl-5">
            <FooterHeading icon={FaEnvelope}>Newsletter</FooterHeading>
            <p className="max-w-xs text-sm leading-6 text-slate-200">
              Subscribe to get the latest updates and offers.
            </p>
            <form
              className="mt-4 flex max-w-sm items-center rounded-full bg-white p-1"
              onSubmit={handleSubscribe}
            >
              <label className="sr-only" htmlFor="footer-email">
                Your email address
              </label>
              <input
                autoComplete="email"
                className="h-11 min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                id="footer-email"
                name="email"
                placeholder="Your Email Address"
                required
                type="email"
              />
              <button
                aria-label="Subscribe to the newsletter"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-yellow-400 text-lg text-slate-950 transition hover:bg-yellow-300"
                type="submit"
              >
                <FaPaperPlane />
              </button>
            </form>
            {subscribed && (
              <p
                className="mt-3 flex items-center gap-2 text-xs font-semibold text-yellow-300"
                role="status"
              >
                <FaCheck /> Thanks for subscribing!
              </p>
            )}
          </section>
        </div>

        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[72px] z-0 h-10 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1600 40"
        >
          <path
            d="M0 19C180 45 345 15 510 25c180 12 315-23 488-14 185 10 373 20 602-14v43H0Z"
            fill="#ffc400"
          />
        </svg>
        <div className="relative z-10 flex flex-col gap-3 border-t border-yellow-400/30 pt-5 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-extrabold text-yellow-400">ElectroFix.</span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Privacy Policy</span>
            <span aria-hidden="true" className="text-yellow-400">
              |
            </span>
            <span>Terms of Service</span>
            <span aria-hidden="true" className="text-yellow-400">
              |
            </span>
            <Link className="hover:text-yellow-300" to="/contact">
              Help
            </Link>
          </div>
          <p className="font-semibold italic">
            Powered by <span className="text-yellow-400">ElectroFix</span>{" "}
            <FaBolt className="inline text-yellow-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
