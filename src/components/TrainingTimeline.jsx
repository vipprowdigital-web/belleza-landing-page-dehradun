import { motion } from "framer-motion";
import { BookOpen, PenTool, Zap, Users, Trophy } from "lucide-react";

const steps = [
  {
    title: "Strong Foundation",
    description:
      "Start with beauty basics, hygiene, tools, products, skin & hair knowledge, and professional ethics.",
    icon: BookOpen,
  },
  {
    title: "Trainer Demonstration",
    description:
      "Techniques are demonstrated by trainers for clear understanding of correct processes.",
    icon: PenTool,
  },
  {
    title: "Hands-On Practice",
    description:
      "Practice under trainer supervision to improve skill, speed, finishing, and confidence.",
    icon: Zap,
  },
  {
    title: "Live Model Sessions",
    description:
      "Work on real models to learn client handling and real-time service experience.",
    icon: Users,
  },
  {
    title: "Portfolio & Career Guidance",
    description:
      "Get guidance for portfolio building, freelancing, communication, pricing, and career growth.",
    icon: Trophy,
  },
];

const TrainingTimeline = () => {
  return (
    <section className="py-24 bg-light px-6" id="training">
      <div className="max-w-7xl mx-auto relative">
        {" "}
        {/* Added relative here */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl md:text-5xl font-bold tracking-tight">
            How We <span className="text-secondary">Train</span> Our Students
          </h2>
          <p className="mt-4 text-secondary font-medium">
            A step-by-step journey designed to build confidence and mastery.
          </p>
        </div>
        {/* Step Container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 relative z-10">
          {/* THE PROGRESS LINE */}
          {/* Desktop: Horizontal line | Mobile: Vertical line */}
          <div
            className="absolute 
            md:top-8 md:left-0 md:w-full md:h-0.5 
            top-0 left-8 w-0.5 h-full 
            bg-linear-to-r from-[#791535]  to-[#791535] 
            opacity-20 -z-10 hidden md:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1 flex flex-col items-center text-center md:text-left md:items-start group"
              >
                {/* Icon with gradient circle */}
                <div className="relative z-20 w-16 h-16 rounded-2xl bg-linear-to-tr from-[#791535] to-[#fddfbf] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-light" />
                </div>

                {/* Step content */}
                <div className="relative z-20">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-bold leading-tight text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary leading-tight max-w-62.5">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingTimeline;

// import { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { BookOpen, PenTool, Zap, Users, Trophy } from "lucide-react";

// const steps = [
//   {
//     title: "Strong Foundation",
//     description:
//       "Students begin with beauty basics, hygiene, tools, products, skin knowledge, hair knowledge, and professional ethics.",
//     icon: <BookOpen className="w-6 h-6" />,
//   },
//   {
//     title: "Trainer Demonstration",
//     description:
//       "Each technique is first demonstrated by the trainer so students can clearly understand the correct process.",
//     icon: <PenTool className="w-6 h-6" />,
//   },
//   {
//     title: "Hands-On Practice",
//     description:
//       "Students practice regularly under trainer supervision to improve skill, speed, finishing, and confidence.",
//     icon: <Zap className="w-6 h-6" />,
//   },
//   {
//     title: "Live Model Sessions",
//     description:
//       "Students work on real models to understand client handling and real-time beauty service experience.",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     title: "Portfolio & Career Guidance",
//     description:
//       "Students get guidance for portfolio building, freelancing, client communication, pricing, and career growth.",
//     icon: <Trophy className="w-6 h-6" />,
//   },
// ];

// const TrainingTimeline = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <section className="py-24 bg-light" ref={containerRef} id="training">
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <h2 className="text-primary text-4xl md:text-5xl font-bold tracking-tight">
//             How We <span className="text-secondary">Train</span> Our
//             Students
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Central Line (Desktop) / Side Line (Mobile) */}
//           <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-light rounded-full" />

//           {/* Animating Progress Line */}
//           <motion.div
//             className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top rounded-full z-10"
//             style={{ scaleY }}
//           />

//           <div className="space-y-20">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className={`relative flex flex-col md:flex-row items-center gap-8 ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Step Content */}
//                 <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
//                   <div
//                     className={`px-7 py-6 rounded-4xl bg-accent border border-secondary hover:bg-white hover:shadow-xl transition-all duration-300 group`}
//                   >
//                     <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
//                       Step {index + 1}
//                     </span>
//                     <h3 className="text-primary text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
//                       {step.title}
//                     </h3>
//                     <p className="text-secondary font-semibold leading-tight text-sm">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Center Icon/Node */}
//                 <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 bg-primary border-4 border-white rounded-full z-20 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-125">
//                   <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
//                 </div>

//                 {/* Spacer for layout balance */}
//                 <div className="flex-1 hidden md:block" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingTimeline;
