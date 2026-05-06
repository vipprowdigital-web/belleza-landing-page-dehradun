import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full py-20 px-6 bg-light flex flex-col justify-center items-center">
      <section className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Decorative background element */}
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/"
                  alt="Belleza Beauty School Training"
                  className="w-full h-full object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-primary p-4 rounded-xl shadow-lg">
                  <p className="text-accent text-2xl font-bold">100%</p>
                  <p className="text-light text-[10px] uppercase tracking-widest font-semibold">
                    Practical Training
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <div className="flex flex-col space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2">
                  Empowering Your Passion
                </h4>
                <h2 className="font-bold tracking-tighter text-secondary text-4xl md:text-5xl leading-tight">
                  About Belleza Beauty School Dehradun
                </h2>
              </motion.div>

              <motion.div
                className="space-y-4 text-secondary leading-tight text-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p>
                  Belleza Beauty School Dehradun is a{" "}
                  <span className="text-primary font-semibold italic">
                    premium beauty academy
                  </span>{" "}
                  designed for students who want to build a successful career in
                  the beauty industry.
                </p>
                <p>
                  We provide professional training in makeup, hair, nails, skin,
                  beauty and cosmetology through a practical, career-focused
                  learning approach.
                </p>
              </motion.div>

              {/* Feature Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="flex flex-col border-l-4 border-primary pl-4">
                  <span className="text-primary font-bold tracking-tight">
                    Advanced Level
                  </span>
                  <span className="text-sm text-primary font-semibold tracking-tight">
                    From Basic to Pro
                  </span>
                </div>
                <div className="flex flex-col border-l-4 border-primary pl-4">
                  <span className="text-primary font-bold tracking-tight">
                    Live Models
                  </span>
                  <span className="text-sm text-primary font-semibold tracking-tight">
                    Hands-on Practice
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        className="text-center mt-30 px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Stylized Quote Icon */}
        <div className="font-serif text-8xl leading-none text-secondary">
          &ldquo;
        </div>

        <p className="font-bold text-3xl md:text-4xl leading-tighter text-primary max-w-4xl mx-auto mb-10 tracking-tighter">
          At Belleza, students don’t just learn techniques —
          <br />
          they learn how to work confidently in the{" "}
          <span className="text-secondary font-serif italic">
            {" "}
            real beauty industry.
          </span>
        </p>

        {/* Pulsing Status Indicator */}
        <div className="flex items-center justify-center gap-3">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"
            style={{ boxShadow: "0 0 15px rgba(var(--accent-rgb), 0.6)" }}
          />
          <span className="text-secondary uppercase tracking-[0.2em] text-[10px] font-bold">
            Empowering Professionals
          </span>
        </div>
      </motion.div>
    </section>
  );
}
