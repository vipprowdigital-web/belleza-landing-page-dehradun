import { motion } from "framer-motion";

const LeadForm = () => {
  return (
    <section className="w-full bg-light py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-primary p-8 md:p-12 md:w-2/5 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-accent tracking-tighter"
          >
            Get Course Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-light/80 text-md leading-relaxed text-accent font-semibold tracking-tight"
          >
            Fill out the form and our counsellor will contact you with complete
            course details, batch information, fee details, and admission
            guidance.
          </motion.p>

          <div className="mt-8 space-y-2">
            <div className="flex items-center gap-3 text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Expert Guidance
            </div>
            <div className="flex items-center gap-3 text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Flexible Batches
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 md:w-3/5 bg-accent">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-primary text-sm font-semibold ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary text-sm font-semibold ml-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-primary text-sm font-semibold ml-1">
                Course Interested In
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light appearance-none">
                <option>Select a Course</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-primary text-xs font-semibold ml-1">
                Select Location
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light appearance-none">
                <option value="" disabled hidden>
                  Select a course
                </option>
                <option value="haldwani">Haldwani</option>
                <option value="dehradun">Dehradun</option>
                <option value="bajpur">Bajpur</option>
                <option value="rudrapur">Rudrapur</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-primary text-xs font-semibold ml-1">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Any specific queries?"
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent  outline-none transition-all text-primary bg-light resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-light font-bold py-4 rounded-xl shadow-lg shadow-accent/20 mt-2 transition-colors hover:bg-secondary hover:text-light"
            >
              Get Free Counselling
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
