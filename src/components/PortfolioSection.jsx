import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const PortfolioSection = () => {
  // Animation variants for staggering the text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-24 px-6 bg-light overflow-hidden flex flex-col items-center justify-center text-center"
      id="portfolio"
    >
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/10 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl"
      >
        {/* Floating Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-secondary rounded-full scale-150"
            />
            <div className="bg-primary p-4 rounded-full shadow-2xl relative z-10">
              <Camera className="text-accent w-6 h-6" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-primary text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          Build Your <br />
          <span className="text-secondary italic font-serif">
            Professional Portfolio
          </span>
        </motion.h2>

        {/* Description Paragraph 1 */}
        <motion.p
          variants={itemVariants}
          className="text-primary text-md md:text-xl font-medium leading-tight mb-3 tracking-tighter"
        >
          A strong portfolio helps every beauty professional show their work
          confidently. At Belleza Beauty School Dehradun, students get
          opportunities to create professional looks during their training.
        </motion.p>

        {/* Description Paragraph 2 */}
        <motion.p
          variants={itemVariants}
          className="text-secondary font-semibold text-md max-w-2xl mx-auto leading-tight tracking-tight"
        >
          From bridal looks to party makeup, hairstyling, nails, and skin
          services, students build practical work experience that helps them
          start freelancing, apply for salon jobs, and promote their services
          online.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
