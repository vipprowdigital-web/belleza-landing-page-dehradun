import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const faqs = [
  {
    question: "Do I need previous experience to join Belleza Beauty School?",
    answer: "No. Our courses are beginner-friendly and start from basic level.",
  },
  {
    question: "Will I get practical training?",
    answer:
      "Yes. Belleza focuses on hands-on practical training and live model practice.",
  },
  {
    question: "Do you provide certification?",
    answer:
      "Yes. Students receive professional certification after completing the course.",
  },
  {
    question: "Can I start freelancing after the course?",
    answer:
      "Yes. After completing your training, you can start freelancing, work in salons, or build your own beauty business.",
  },
  {
    question: "Do you provide career guidance?",
    answer:
      "Yes. We provide portfolio support, career counselling, freelancing guidance, client handling guidance, and placement assistance.",
  },
  {
    question: "Which courses are available at Belleza Dehradun?",
    answer:
      "Makeup, Hair, Nail, Beauty, Skin and Cosmetology courses are available.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border-b border-secondary transition-colors duration-300 ${isOpen ? "bg-light" : ""}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left gap-4"
      >
        <span
          className={`text-md md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-secondary" : "text-primary"}`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border border-secondary flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180 border-accent bg-accent text-primary" : "text-secondary"}`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-secondary leading-relaxed max-w-3xl font-semibold">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pt-24 px-6 bg-light" id="faqs">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-2xl md:text-4xl font-bold mt-2 tracking-tight"
          >
            Frequently Asked{" "}
            <span className="text-secondary italic font-serif">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-secondary"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Support Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="sm:mt-12 p-8 bg-light rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-primary text-center font-medium tracking-tight">
            Still have more questions about our Dehradun branch?
          </p>
          <button
            className="px-8 py-3 bg-primary text-light rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all duration-300"
            onClick={() => scrollTo("contact")}
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
