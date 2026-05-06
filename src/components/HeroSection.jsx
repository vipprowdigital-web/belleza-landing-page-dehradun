import { motion } from "framer-motion";

export default function HeroSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full flex flex-col justify-between items-start h-screen bg-light p-5 overflow-hidden">
      {/* Logo */}
      <motion.div>
        <img
          src="/assets/images/logos/belleza_logo.svg"
          alt="Belleza Logo"
          className="w-25  object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full h-full flex flex-col justify-center items-center gap-2 mt-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="w-1/2 font-extrabold text-6xl text-center text-secondary leading-tight tracking-tighter"
        >
          Become a Certified Beauty Professional in Dehradun
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-center text-md max-w-xl leading-tight tracking-tight text-secondary font-semibold"
        >
          Learn professional{" "}
          <span className="font-bold italic">
            Makeup, Hair, Nail, Skin & Cosmetology
          </span>{" "}
          with practical training, live model practice, expert guidance, and
          career support at Belleza Beauty School Dehradun.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-center text-sm max-w-xl text-secondary font-semibold"
        >
          Start your beauty career with international-standard training and
          professional certification.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-row items-center justify-center gap-2 mt-4"
        >
          <motion.button
            className="px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free Counselling
          </motion.button>

          <motion.button
            className="px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer Info */}
      
    </section>
  );
}
