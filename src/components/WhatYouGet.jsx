import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const benefits = [
  "Practical classroom training",
  "Live model practice",
  "Professional certification",
  "Expert trainer guidance",
  "Product knowledge",
  "Portfolio support",
  "Career counselling",
  "Placement assistance",
  "Freelancing guidance",
  "Client handling skills",
  "Beginner-friendly learning",
  "Premium academy environment",
];

const WhatYouGet = () => {
  return (
    <section className="py-10 sm:py-24 px-6 relative overflow-hidden h-full">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-primary blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-6xl font-bold text-primary tracking-tighter leading-[0.9] sm:mb-7 mb-3">
                What You Get at <br />
                <span className="text-secondary">Belleza</span>
              </h2>

              <p className="text-secondary text-md sm:text-lg font-medium leading-tight mb-7 max-w-lg">
                We provide everything you need to transform from a passionate
                beginner into a certified industry professional.
              </p>

              {/* Benefits Staggered Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2 group"
                  >
                    <div className="mt-1 shrink-0 w-5 h-5 rounded-md bg-accent flex items-center justify-center transition-all duration-300">
                      <Check className="w-3 h-3 text-primary" strokeWidth={4} />
                    </div>
                    <span className="text-primary font-bold text-sm tracking-tight transition-colors group-hover:text-primary">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-7 bg-primary text-light px-6 sm:px-12 sm:py-5 py-3 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/20 hover:bg-secondary transition-all flex items-center gap-3"
                onClick={() => scrollTo("contact")}
              >
                Start Your Journey
                <Sparkles size={16} className="text-accent" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Visual Composition */}
          <div className="order-1 lg:order-2 relative sm:min-h-100 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-[4rem] rounded-tr-none overflow-hidden aspect-4/5 shadow-3xl border-8 border-accent h-96 sm:h-140">
                <img
                  src="/assets/images/belleza-5.jpeg"
                  alt="Academy Environment"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-[#791535] opacity-40 to-transparent" /> */}
              </div>

              {/* Floating "Experience" Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="sm:block hidden absolute -bottom-10 -right-4 md:right-0 bg-white px-5 py-5 rounded-2xl shadow-2xl border border-primary max-w-60 z-20"
              >
                <div className="flex flex-col gap-2">
                  <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-primary shadow-lg">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-primary font-black text-lg leading-tight">
                      Premium Facility
                    </h4>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">
                      Dehradun, Uttarakhand
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Geometric Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-secondary opacity-30 rounded-tl-[5rem]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

// import { motion } from "framer-motion";
// import { Check } from "lucide-react";
// import { scrollTo } from "../utils/scrollTo";

// const benefits = [
//   "Practical classroom training",
//   "Live model practice",
//   "Professional certification",
//   "Expert trainer guidance",
//   "Product knowledge",
//   "Portfolio support",
//   "Career counselling",
//   "Placement assistance",
//   "Freelancing guidance",
//   "Client handling skills",
//   "Beginner-friendly learning",
//   "Premium academy environment",
// ];

// const WhatYouGet = () => {
//   return (
//     <section className="py-24 sm:px-6 bg-light overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="px-6 sm:px-6"
//           >
//             <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">
//               Your Career Journey
//             </h4>
//             <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 tracking-tight">
//               What You Get at{" "}
//               <span className="text-secondary">Belleza</span>
//             </h2>

//             <p className="text-secondary font-semibold mb-10 text-lg leading-tight tracking-tight">
//               We provide everything you need to transform from a passionate
//               beginner into a certified industry professional.
//             </p>

//             {/* Benefits Grid (Inside the Left Col) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="flex items-center gap-3 group"
//                 >
//                   <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
//                     <Check className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" />
//                   </div>
//                   <span className="text-secondary font-medium text-sm md:text-base tracking-tight">
//                     {benefit}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-12 bg-primary text-light px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent hover:text-primary transition-all duration-300"
//               onClick={() => scrollTo("contact")}
//             >
//               Start Your Journey
//             </motion.button>
//           </motion.div>

//           {/* Right Side: Image with Decorative Elements */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             {/* Decorative background accent */}
//             <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
//             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />

//             <div className="relative sm:rounded-[3rem] overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop"
//                 alt="Academy Environment"
//                 className="w-full sm:h-150 object-cover hover:scale-110 transition-transform duration-700"
//                 loading="lazy"
//               />

//               {/* Overlay Badge */}
//               <div className="absolute top-8 left-8 bg-light/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl border border-light">
//                 <div className="text-primary font-bold text-md">
//                   Premium Facility
//                 </div>
//                 <div className="text-secondary text-xs font-bold uppercase tracking-tighter">
//                   Dehradun, Uttarakhand
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatYouGet;
