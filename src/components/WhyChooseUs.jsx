import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Sparkles,
  Briefcase,
  Camera,
} from "lucide-react";

const features = [
  {
    title: "100% Practical Training",
    description:
      "Learn through real hands-on practice instead of only theory. Every class is designed to help students gain confidence and professional working skills.",
    icon: Sparkles,
    number: "01",
  },
  {
    title: "Live Model Practice",
    description:
      "Practice on real models and understand different skin types, face shapes, hair textures, client needs, and professional beauty service methods.",
    icon: Users,
    number: "02",
  },
  {
    title: "Expert Trainers",
    description:
      "Learn from experienced trainers who guide you step by step and help you improve your techniques with personal attention.",
    icon: BookOpen,
    number: "03",
  },
  {
    title: "International-Standard Education",
    description:
      "Our training approach follows modern beauty trends and professional industry standards to prepare students for salons, studios, freelancing, and bridal work.",
    icon: Award,
    number: "04",
  },
  {
    title: "Professional Certification",
    description:
      "Get certified after course completion and build credibility for jobs, freelancing, salon work, or your own beauty business.",
    icon: Briefcase,
    number: "05",
  },
  {
    title: "Career Guidance & Support",
    description:
      "Get guidance for portfolio creation, client handling, freelancing, pricing, interview preparation, and career opportunities.",
    icon: Camera,
    number: "06",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 px-6 bg-light overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-primary text-4xl md:text-5xl font-bold mt-4 tracking-tight"
          >
            Why Choose Belleza{" "}
            <span className="text-secondary">Beauty School?</span>
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50" />
        </div>

        {/* Feature Rows */}
        <div className="divide-y divide-[#826955]">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_2fr] gap-x-6 md:gap-x-10 gap-y-2 py-8 md:py-10 items-start hover:bg-secondary transition-colors duration-300 rounded-2xl px-4 -mx-4"
              >
                {/* Number + Icon (stacked on mobile, side-by-side on md) */}
                <div className="flex flex-col items-center gap-3 pt-1">
                  <span className="sm:block hidden text-md font-bold tracking-widest text-secondary group-hover:text-secondary transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-secondary group-hover:bg-secondary group-hover:text-light text-light flex items-center justify-center transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center h-full sm:items-start pt-1 md:pt-2">
                  <h3 className="text-primary text-lg md:text-xl font-bold group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description — full width on mobile, 3rd col on md */}
                <p className="hidden sm:block col-span-2 md:col-span-1 md:col-start-3 text-secondary font-medium leading-relaxed text-sm md:text-base md:pt-2 pl-16 md:pl-0">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

// import { motion } from "framer-motion";
// import {
//   Award,
//   Users,
//   BookOpen,
//   Sparkles,
//   Briefcase,
//   Camera,
// } from "lucide-react";

// const features = [
//   {
//     title: "100% Practical Training",
//     description:
//       "Learn through real hands-on practice instead of only theory. Every class is designed to help students gain confidence and professional working skills.",
//     icon: <Sparkles className="w-6 h-6" />,
//   },
//   {
//     title: "Live Model Practice",
//     description:
//       "Practice on real models and understand different skin types, face shapes, hair textures, client needs, and professional beauty service methods.",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     title: "Expert Trainers",
//     description:
//       "Learn from experienced trainers who guide you step by step and help you improve your techniques with personal attention.",
//     icon: <BookOpen className="w-6 h-6" />,
//   },
//   {
//     title: "Global Standards",
//     description:
//       "Our training approach follows modern beauty trends and professional industry standards to prepare students for salons, studios, freelancing, and bridal work.",
//     icon: <Award className="w-6 h-6" />,
//   },
//   {
//     title: "Professional Certification",
//     description:
//       "Get certified after course completion and build credibility for jobs, freelancing, salon work, or your own beauty business.",
//     icon: <Briefcase className="w-6 h-6" />,
//   },
//   {
//     title: "Career & Portfolio Support",
//     description:
//       "Get guidance for portfolio creation, client handling, freelancing, pricing, interview preparation, and career opportunities.",
//     icon: <Camera className="w-6 h-6" />,
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="py-20 sm:py-24 px-6 bg-light overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
//           >
//             Why Choose Us
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="text-primary text-4xl md:text-5xl font-bold mt-4 tracking-tight"
//           >
//             The Belleza <span className="text-secondary">Advantage</span>
//           </motion.h2>
//           <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50" />
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.8 }}
//               whileHover={{ y: -10 }}
//               className="group bg-light p-8 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-secondary"
//             >
//               <div className="w-8 h-8 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary text-secondary transition-colors duration-300 bg-secondary-30">
//                 {item.icon}
//               </div>

//               <h3 className="text-primary text-xl font-bold  mb-2 group-hover:text-accent transition-colors">
//                 {item.title}
//               </h3>

//               <p className="text-secondary font-semibold leading-relaxed text-sm">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
