import { motion } from "framer-motion";
import { Phone, MapPin, ChevronRight, Award } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const DehradunHero = ({ address, phone }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/images/belleza-3.jpeg"
          alt="Belleza Dehradun Academy"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-black/80 to-transparent" />
        {/* <div className="absolute inset-0 bg-linear-to-r from-red-900/40 via-red-800/10 to-transparent" /> */}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[0.9]"
            >
              Become a <br />
              <span className="text-light">Certified</span> <br />
              Beauty Professional
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="sm:block hidden text-accent text-lg md:text-xl font-medium max-w-2xl leading-tight"
            >
              Learn professional{" "}
              <span className="text-light ">
                Makeup, Hair, Nail, Skin & Cosmetology
              </span>{" "}
              with practical training, live model practice, and expert guidance
              at Belleza Beauty School Dehradun.
            </motion.p>

            {/* Secondary Tagline */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 text-accent font-bold"
            >
              <div className="h-px w-12 bg-accent" />
              <p className="text-sm uppercase tracking-widest">
                International-Standard Training & Certification
              </p>
            </motion.div> */}

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <button
                className="bg-accent text-primary px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center gap-3 group"
                onClick={() => scrollTo("contact")}
              >
                Book Free Counselling
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                href={`tel:${phone}`}
                className="bg-secondary backdrop-blur-md border border-white/20 text-light px-10 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3"
              >
                <Phone size={18} className="text-accent" />
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Floating Address Card (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] space-y-6">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                <MapPin size={28} className="text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-accent font-black uppercase text-xs tracking-widest">
                  Visit Dehradun Campus
                </p>
                {address?.[0] && (
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    {address?.[0].address}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <Award size={16} className="text-accent" />
                <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">
                  Recognized Center
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-linear-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default DehradunHero;

// import { motion } from "framer-motion";
// import { openWhatsApp } from "../utils/openWhatsapp";
// import { scrollTo } from "../utils/scrollTo";

// export default function HeroSection() {
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="w-full flex flex-col justify-between items-start h-screen bg-light p-7 overflow-hidden"
//       style={{
//         backgroundImage: "url('/assets/images/bg-img.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-3/4 bg-linear-to-l from-black/30 to-transparent  backdrop-blur-sm"></div>
//       </div>
//       {/* Logo */}
//       {/* <motion.div>
//         <img
//           src="/assets/images/logos/belleza_logo.svg"
//           alt="Belleza Logo"
//           className="w-25  object-contain"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//         />
//       </motion.div> */}

//       {/* Content */}
//       <motion.div
//         className="w-full h-full flex z-10 flex-col justify-center items-end gap-2 sm:mt-10"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         <motion.h1
//           variants={fadeUp}
//           className="w-full md:w-1/2 font-extrabold text-4xl md:text-6xl text-right text-accent leading-tight tracking-tighter"
//         >
//           Become a Certified <br /> Beauty Professional <br /> in Dehradun
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           className="text-right text-md max-w-lg sm:max-w-xl leading-tight tracking-tight text-accent font-semibold"
//         >
//           Learn professional{" "}
//           <span className="font-bold">
//             Makeup, Hair, Nail, Skin & Cosmetology
//           </span>{" "}
//           with practical training, live model practice, expert guidance, and
//           career support at Belleza Beauty School Dehradun.
//         </motion.p>

//         <motion.p
//           variants={fadeUp}
//           className="text-right text-sm max-w-xl text-accent font-semibold"
//         >
//           Start your beauty career with international-standard training and
//           professional certification.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={fadeUp}
//           className="flex flex-row items-center justify-center gap-2 mt-4"
//         >
//           <motion.button
//             className="px-5 sm:px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => scrollTo("contact")}
//           >
//             Book Free Counselling
//           </motion.button>
//           <motion.button
//             className="px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={openWhatsApp}
//           >
//             Call Now
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Footer Info */}
//     </section>
//   );
// }
