import { Phone, MapPin, Globe } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";
import { openWhatsApp } from "../utils/openWhatsapp";

const Footer = ({ appConfig }) => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Facebook",
      link: appConfig.facebookLink,
      path: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
      hover: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      link: appConfig.instagramLink,
      path: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ),
      hover: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      link: appConfig.youtubeLink,
      path: (
        <>
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </>
      ),
      hover: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      link: appConfig.linkedinLink,
      path: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
      hover: "hover:text-blue-700",
    },
    {
      name: "Twitter",
      link: appConfig.twitterLink,
      path: (
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      ),
      hover: "hover:text-sky-500",
    },
    {
      name: "WhatsApp",
      link: appConfig.whatsAppLink,
      path: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
      hover: "hover:text-green-600",
    },
    {
      name: "Gmail",
      link: appConfig.email ? `mailto:${appConfig.email}` : "",
      path: (
        <>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </>
      ),
      hover: "hover:text-red-500",
    },
  ].filter((s) => typeof s.link === "string" && s.link.trim() !== "");

  return (
    <footer className="w-full bg-primary text-light pt-16 pb-8 sm:px-20 px-6">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter">
                Belleza <span className="text-accent">Beauty School</span>
              </h3>
              <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
                Dehradun Branch
              </p>
            </div>
            <p className="text-light text-sm leading-relaxed max-w-xs">
              Professional Makeup, Hair, Nail, Beauty, Skin & Cosmetology
              Courses. Empowering the next generation of beauty professionals.
            </p>
            <div className="flex gap-5 items-center">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target={social.name === "Gmail" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`text-primary bg-light rounded-full p-1.5 transition-all duration-300 transform hover:scale-125 ${social.hover}`}
                  aria-label={`Contact us via ${social.name}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
                Academy
              </h4>
              <ul className="space-y-2 text-sm text-light/60">
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("about")}
                >
                  About Us
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("courses")}
                >
                  Courses
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("training")}
                >
                  Training Timeline
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
                Student Life
              </h4>
              <ul className="space-y-2 text-sm text-light/60">
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("career")}
                >
                  Career Opportunities
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("testimony")}
                >
                  Testimonials
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("faqs")}
                >
                  FAQs
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
              Visit Us
            </h4>
            <div className="space-y-4">
              {appConfig?.companyAddress && appConfig.companyAddress[0] && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-light/70 leading-relaxed">
                    {appConfig?.companyAddress[0].address}
                  </p>
                </div>
              )}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => openWhatsApp(appConfig.phoneNumber)}
              >
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-light/70">
                  +91{" "}
                  {appConfig.phoneNumber?.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`mailto:${appConfig?.email}`}
                  className="text-sm text-light/70 underline underline-offset-4 decoration-accent/30 hover:text-accent cursor-pointer"
                >
                  {appConfig?.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-light/40 font-bold">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Belleza Beauty School. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://vipprow.com"
              className="hover:text-accent cursor-pointer"
            >
              Developed by <span className="text-accent"> Vipprow</span>
            </a>
            <a href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
