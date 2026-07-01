import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { baseUrl } from "../utils/baseUrl";

const StudentExperience = () => {
  const [index, setIndex] = useState(0);

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${baseUrl}/testimonial/public`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        // console.log("Response: ", response);

        if (response.ok) {
          const data = await response.json();
          // console.log("Response DATA: ", data.data);
          setTestimonials(data.data);
        } else {
          console.error("Couldn't fetch testimonies.");
        }
      } catch {
        console.error("Error while fetching testimonials.");
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return;

  return (
    <section
      className="w-full py-20 px-6 bg-primary relative overflow-hidden sm:min-h-120 flex items-center"
      id="testimony"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full -ml-20 -mb-20" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            Student Experience
          </motion.div>
          <h2 className="font-bold tracking-tighter  text-3xl capitalize md:text-5xl leading-tight bg-linear-to-r from-[#fddfbf] to-[#f7f7ee] text-transparent bg-clip-text">
            Voices of confidence
          </h2>
          {/* <h2 className="text-light text-3xl md:text-5xl font-bold tracking-tight">
            Voices of{" "}
            <span className=" text-accent">Confidence</span>
          </h2> */}
        </div>

        <div className="relative h-80 md:h-75">
          {/* Huge Background Quote Mark */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Quote className="w-40 h-40 md:w-64 md:h-64 text-accent fill-accent" />
          </div>

          <AnimatePresence mode="wait">
            {/* ✅ FIXED: Only render the active testimonial based on current index */}
            {testimonials.length > 0 && (
              <motion.div
                key={index} // Key changes per index to trigger AnimatePresence
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-20"
              >
                <p className="text-light text-md md:text-xl font-medium leading-relaxed mb-8">
                  "{testimonials[index].description.replace(/<\/?p>/g, "")}"
                </p>

                <div className="flex flex-col items-center">
                  <span className="text-accent font-bold tracking-widest uppercase text-sm mb-1">
                    — {testimonials[index].name}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Progress/Auto-Change Indicators */}
        <div className="flex justify-center items-center gap-4 mt-18">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="relative h-1 transition-all duration-500 rounded-full overflow-hidden"
              style={{ width: i === index ? "48px" : "16px" }}
            >
              {/* Background of the dot/bar */}
              <div className="absolute inset-0 bg-light" />

              {/* Active Fill with animation */}
              {i === index && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-secondary"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentExperience;
