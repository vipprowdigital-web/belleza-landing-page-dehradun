import { motion } from "framer-motion";
import { Phone, MapPin, Calendar } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const FinalCTA = ({ address, phone }) => {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-4 sm:px-8"
          >
            <div>
              <h2 className="text-primary text-2xl md:text-5xl font-bold tracking-tighter leading-tight mb-3">
                Ready to Start Your <br />
                <span className="text-secondary">Beauty Career?</span>
              </h2>
              <p className="text-secondary text-md md:text-lg leading-tight max-w-xl">
                Join Belleza Beauty School Dehradun and learn professional
                beauty skills with practical training, expert guidance, live
                model practice, certification, and career support.
              </p>
              <p className="text-primary tracking-tight font-bold mt-4 text-xl">
                Your passion can become your profession. Start today.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-primary text-light rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary transition-all hover:bg-secondary"
                onClick={() => scrollTo("contact")}
              >
                <Calendar className="w-5 h-5 text-accent" />
                Book Free Counselling
              </motion.button>

              <motion.a
                href={`tel:${phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-light text-primary border-2 border-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-light transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-secondary/10 space-y-4">
              <div className="flex items-start sm:gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Phone
                  </p>
                  <p className="text-primary font-bold text-lg leading-none">
                    +91 {phone?.replace(/(\d{5})(\d{5})/, "$1 $2")}
                  </p>
                </div>
              </div>

              {address?.[0] && (
                <div className="flex items-start sm:gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                      Address
                    </p>
                    <p className="text-secondary font-semibold text-sm leading-relaxed max-w-sm">
                      {address[0]?.address}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Geometric Background Element */}
            <div className="absolute -inset-4 translate-x-4 translate-y-4 -z-10" />

            <div className="aspect-3/3 overflow-hidden relative group">
              <img
                src="/assets/images/belleza-4.jpeg"
                alt="Professional Beauty Training"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="sm:block hidden absolute bottom-8 left-8  backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                <p className="text-primary font-bold text-sm">
                  Enrollment Open
                </p>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-tighter">
                  Dehradun Academy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
