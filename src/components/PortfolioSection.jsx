import { motion } from "framer-motion";

const PortfolioSection = () => {
  return (
    <section
      className="w-full py-24 px-6 bg-accent overflow-hidden relative"
      id="portfolio"
    >
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="font-bold tracking-tighter text-3xl md:text-6xl capitalize leading-tighter bg-linear-to-r from-[#791535] via-[#826955] to-[#826955] text-transparent bg-clip-text">
              Build Your Professional Portfolio
            </h2>
            {/* <h2 className="text-3xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.9]">
              Build Your <br />
              <span className="text-secondary">Professional</span> <br />
              Portfolio
            </h2> */}

            <div className="space-y-6 max-w-md">
              <p className="text-secondary text-lg font-medium leading-tight">
                A strong portfolio helps every beauty professional show their
                work confidently. At Belleza Beauty School Dehradun, students
                get opportunities to create professional looks during their
                training.
              </p>

              <div className="h-0.5 w-50 bg-primary" />

              <p className="text-secondary text-sm leading-relaxed">
                From bridal looks to party makeup, hairstyling, nails, and skin
                services, students build practical work experience that helps
                them start freelancing, apply for salon jobs, and promote their
                services online.
              </p>
            </div>
          </motion.div>

          {/* Right: The Mosaic Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:h-150">
            {/* Large Feature Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-4xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/SFX_Makeup_Look_djmou2.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Portfolio Image 1"
                loading="lazy"
              />
            </motion.div>

            {/* Two Stacked Smaller Images */}
            <div className="grid grid-rows-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-4xl overflow-hidden group sm:h-70"
              >
                <img
                  src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/hair_lfkqsp.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Portfolio Image 2"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative rounded-4xl overflow-hidden group sm:h-75"
              >
                <img
                  src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/eye_makeup_mfwkif.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Portfolio Image 3"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
    </section>
  );
};

export default PortfolioSection;

// import { motion } from "framer-motion";
// import { Camera } from "lucide-react";

// const PortfolioSection = () => {
//   // Animation variants for staggering the text
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="relative w-full py-24 px-6 bg-light overflow-hidden flex flex-col items-center justify-center text-center"
//       id="portfolio"
//     >
//       {/* Decorative Background Elements */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/10 rounded-full blur-[100px] -z-10"
//       />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="max-w-4xl"
//       >
//         {/* Floating Icon */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center mb-6"
//         >
//           <div className="relative">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 border-2 border-dashed border-secondary rounded-full scale-150"
//             />
//             <div className="bg-primary p-4 rounded-full shadow-2xl relative z-10">
//               <Camera className="text-accent w-6 h-6" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Title */}
//         <motion.h2
//           variants={itemVariants}
//           className="text-primary text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
//         >
//           Build Your <br />
//           <span className="text-secondary ">
//             Professional Portfolio
//           </span>
//         </motion.h2>

//         {/* Description Paragraph 1 */}
//         <motion.p
//           variants={itemVariants}
//           className="text-primary text-md md:text-xl font-medium leading-tight mb-3 tracking-tighter"
//         >
//           A strong portfolio helps every beauty professional show their work
//           confidently. At Belleza Beauty School Dehradun, students get
//           opportunities to create professional looks during their training.
//         </motion.p>

//         {/* Description Paragraph 2 */}
//         <motion.p
//           variants={itemVariants}
//           className="text-secondary font-semibold text-md max-w-2xl mx-auto leading-tight tracking-tight"
//         >
//           From bridal looks to party makeup, hairstyling, nails, and skin
//           services, students build practical work experience that helps them
//           start freelancing, apply for salon jobs, and promote their services
//           online.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default PortfolioSection;
