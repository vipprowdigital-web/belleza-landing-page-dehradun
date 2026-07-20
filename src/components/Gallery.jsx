import { motion, AnimatePresence } from "framer-motion";
import { X, ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const getCardsPerPage = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 3;
  return 4;
};

const Gallery = ({ gallery = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);

  useEffect(() => {
    const updateCardsPerPage = () => setCardsPerPage(getCardsPerPage());

    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  if (!gallery || gallery.length === 0) return null;

  const isCarousel = gallery.length >= 4;

  const safePage =
    currentPage >= Math.ceil(gallery.length / cardsPerPage) ? 0 : currentPage;

  const visibleImages = isCarousel
    ? gallery.slice(
        safePage * cardsPerPage,
        safePage * cardsPerPage + cardsPerPage,
      )
    : gallery;

  const totalPages = Math.ceil(gallery.length / cardsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section
      className="pt-20 sm:py-24 px-6 bg-white w-[95%] sm:max-w-7xl"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">
              A Glimpse Inside
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter">
              Our <span className="text-secondary">Gallery</span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-4" />
          </motion.div>

          {isCarousel && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevPage}
                className="p-2 border border-primary rounded-full"
                aria-label="Previous images"
              >
                <ChevronLeft size={18} className="text-primary" />
              </button>
              <button
                type="button"
                onClick={nextPage}
                className="p-2 border border-primary rounded-full"
                aria-label="Next images"
              >
                <ChevronRight size={18} className="text-primary" />
              </button>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          drag={cardsPerPage === 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) nextPage();
            else if (info.offset.x > 50) prevPage();
          }}
          className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`}
        >
          <AnimatePresence mode="wait">
            {visibleImages.map((item, index) => (
              <motion.button
                key={item._id || `${safePage}-${index}`}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="relative group h-full md:h-64 lg:h-72 rounded-2xl overflow-hidden border border-primary/10 bg-white text-left cursor-pointer"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title || "Gallery image"}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/30">
                    <ImageOff size={28} />
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {item.title && (
                  <p className="absolute bottom-3 left-3 right-3 text-light text-xs md:text-sm font-bold uppercase tracking-wide opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {item.title}
                  </p>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {isCarousel && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safePage ? "w-6 bg-primary" : "w-2 bg-primary/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-md p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-light" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title || "Gallery image"}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              {selectedImage.title && (
                <p className="text-light text-center mt-4 font-bold uppercase tracking-widest text-sm">
                  {selectedImage.title}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
