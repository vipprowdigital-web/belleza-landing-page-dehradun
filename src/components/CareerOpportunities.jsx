import { motion } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  Award,
  // Instagram,
  User,
  UserCheck,
} from "lucide-react";

// The roles provided in the prompt
const careerRoles = [
  "Professional Makeup Artist",
  "Bridal Makeup Artist",
  "Hair Stylist",
  "Nail Technician",
  "Beauty Therapist",
  "Cosmetologist",
  "Salon Professional",
  "Freelance Beauty Artist",
  "Beauty Content Creator",
  "Beauty Business Owner",
];

// Map a specific icon to each role to enhance visualization
const getRoleIcon = (role) => {
  switch (role) {
    case "Professional Makeup Artist":
    case "Bridal Makeup Artist":
      return <Sparkles size={22} className="text-primary" />;
    case "Freelance Beauty Artist":
    case "Beauty Business Owner":
      return <Briefcase size={22} className="text-primary" />;
    // case "Beauty Content Creator":
    //   return <Instagram size={22} className="text-primary" />;
    case "Salon Professional":
      return <UserCheck size={22} className="text-primary" />;
    case "Cosmetologist":
      return <Award size={22} className="text-primary" />;
    default:
      return <User size={22} className="text-primary" />;
  }
};

const CareerOpportunities = () => {
  return (
    <section
      className="w-full pt-10 sm:py-24 px-6 relative overflow-hidden"
      id="career"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section - Modern split design */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-20 gap-3 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:max-w-xl"
          >
            {/* <h2 className="text-3xl md:text-6xl font-bold text-primary tracking-tighter leading-none">
              Career <br />
              <span className="text-secondary">Opportunities</span>
            </h2> */}
            <h2 className="font-bold tracking-tighter  text-3xl md:text-5xl capitalize leading-tight bg-linear-to-r from-[#791535] via-[#826955] to-[#fddfbf] text-transparent bg-clip-text">
              Career Opportunities
            </h2>
            <div className="w-16 h-1 bg-primary sm:mt-6 mt-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="sm:p-6 max-w-sm"
          >
            <p className="text-secondary text-sm leading-relaxed font-medium">
              After completing your training from{" "}
              <span className="text-primary">
                Belleza Beauty School Dehradun
              </span>
              , you can start your journey as
            </p>
          </motion.div>
        </div>

        {/* Roles Grid - Asymmetric Mosaic layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {careerRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative h-35 p-5 rounded-3xl bg-white border-primary border flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              {/* Hover Radial Reveal - Soft glow on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              {/* Decorative Number */}
              <span className="sm:block hidden absolute top-6 right-8 text-2xl font-bold text-primary transition-colors duration-500">
                0{index + 1}
              </span>

              {/* Dynamic Icon */}
              <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent/30 shadow-inner">
                {getRoleIcon(role)}
              </div>

              {/* Content */}
              <h3 className="text-sm font-bold text-primary tracking-tight leading-tight transition-colors duration-300 group-hover:text-white">
                {role}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;

// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Camera,
//   Scissors,
//   Sparkles,
//   Store,
//   Globe,
// } from "lucide-react";

// const careerPaths = [
//   {
//     title: "Makeup & Bridal",
//     roles: ["Professional Makeup Artist", "Bridal Specialist"],
//     icon: <Sparkles className="w-5 h-5" />,
//   },
//   {
//     title: "Hair & Styling",
//     roles: ["Hair Stylist", "Salon Professional"],
//     icon: <Scissors className="w-5 h-5" />,
//   },
//   {
//     title: "Skin & Nails",
//     roles: ["Nail Technician", "Beauty Therapist"],
//     icon: <Briefcase className="w-5 h-5" />,
//   },
//   {
//     title: "Digital & Creative",
//     roles: ["Beauty Content Creator", "Freelance Artist"],
//     icon: <Camera className="w-5 h-5" />,
//   },
//   {
//     title: "Entrepreneurship",
//     roles: ["Beauty Business Owner", "Salon Manager"],
//     icon: <Store className="w-5 h-5" />,
//   },
//   {
//     title: "Specialized Roles",
//     roles: ["Cosmetologist", "Fashion Stylist"],
//     icon: <Globe className="w-5 h-5" />,
//   },
// ];

// const CareerOpportunities = () => {
//   return (
//     <section className="py-15 px-6 bg-light" id="career">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-primary text-4xl md:text-5xl font-bold tracking-tight mb-2"
//           >
//             Your Career{" "}
//             <span className="text-secondary">
//               Starts Here
//             </span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-secondary tracking-tighter leading-tight font-semibold max-w-2xl mx-auto text-lg"
//           >
//             After completing your training from Belleza Beauty School Dehradun,
//             the industry is yours to lead.
//           </motion.p>
//         </div>

//         {/* Career Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {careerPaths.map((path, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ y: -5 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-accent p-8 rounded-4xl border border-secondary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
//             >
//               <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/10">
//                 {path.icon}
//               </div>
//               <h3 className="text-primary tracking-tight text-xl font-bold mb-2">
//                 {path.title}
//               </h3>
//               <ul className="space-y-1">
//                 {path.roles.map((role, i) => (
//                   <li
//                     key={i}
//                     className="text-secondary font-semibold tracking-tight text-sm flex items-center gap-2"
//                   >
//                     <div className="w-1.5 h-1.5 bg-primary rounded-full" />
//                     {role}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* Work Environments Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-16 p-8 md:p-12 bg-primary rounded-[3rem] relative overflow-hidden"
//         >
//           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

//           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="text-center md:text-left">
//               <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
//                 Infinite Possibilities
//               </h4>
//               <p className="text-light text-sm sm:text-xl md:text-2xl max-w-xl leading-relaxed tracking-tight">
//                 Work in{" "}
//                 <span className="text-accent font-semibold">
//                   bridal studios
//                 </span>
//                 , fashion shoots, events, or start your own{" "}
//                 <span className="text-accent font-semibold">luxury setup.</span>
//               </p>
//             </div>
//             {/* <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-4 bg-accent text-primary font-bold rounded-full shadow-xl shadow-accent/20"
//             >
//               Download Career Guide
//             </motion.button> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CareerOpportunities;
