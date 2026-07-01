import { useState, useEffect } from "react";
import { baseUrl } from "../utils/baseUrl";

export default function MasonryGallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  // Maps the tailwind layout grid classes depending on how many images returned
  const balanceGridStructure = (processedList) => {
    const totalCount = processedList.length;

    return processedList.map((img, idx) => {
      let gridClass;

      if (totalCount === 5) {
        const portraitCount = processedList.filter((i) => i.isPortrait).length;

        // If we have exactly 3 portraits and 2 landscapes, let them map organically
        if (portraitCount === 3) {
          if (idx === 0 || idx === 2 || idx === 3) {
            gridClass = "md:col-span-1 md:row-span-2 h-[520px]";
          } else {
            gridClass = "md:col-span-1 md:row-span-1 h-[248px]";
          }
        } else {
          // Fallback forced layout matching strategy if API doesn't return 3 portraits
          if (idx === 0 || idx === 1 || idx === 2) {
            gridClass = "md:col-span-1 md:row-span-2 h-[520px]";
          } else {
            gridClass = "md:col-span-1 md:row-span-1 h-[248px]";
          }
        }
      } else if (totalCount === 3) {
        // Keeps a clean, symmetrical row if only 3 elements are returned by the API
        gridClass = img.isPortrait
          ? "md:col-span-1 h-[480px]"
          : "md:col-span-1 h-[320px]";
      } else {
        // General uniform styling fallback rule
        gridClass = img.isPortrait
          ? "md:col-span-1 md:row-span-2 h-[450px]"
          : "md:col-span-1 md:row-span-1 h-[220px]";
      }

      return { ...img, gridClass };
    });
  };
  // Pre-calculates width/height aspect ratios to build a puzzle grid with no gaps
  const processImageAspectRatios = async (rawItems) => {
    // Slice exactly the first 5 images from your API array
    const targetItems = (rawItems || []).slice(0, 5);

    const promises = targetItems.map((item) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = item.image;

        img.onload = () => {
          const isPortrait = img.naturalHeight > img.naturalWidth;
          resolve({ ...item, isPortrait });
        };

        img.onerror = () => {
          // If any Cloudinary link fails, safely default to landscape layout
          resolve({ ...item, isPortrait: false });
        };
      });
    });

    const loadedImages = await Promise.all(promises);
    return balanceGridStructure(loadedImages);
  };
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/gallery/active`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Response DATA: ", data.data);
          const processedImages = await processImageAspectRatios(data.data);
          setGallery(processedImages);
        } else {
          console.error("Couldn't fetch gallery images.");
        }
      } catch (error) {
        console.error("Error while fetching gallery images.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center font-sans">
        <div className="text-primary text-sm font-bold tracking-widest uppercase animate-pulse">
          Loading Collection Matrix...
        </div>
      </div>
    );
  }

  // Uses the dynamic title configuration returned from the backend data
  const pageTitle = gallery[0]?.title || "Student Work Gallery";

  return (
    <div className="min-h-screen bg-light p-6 md:p-12 font-sans selection:bg-accent selection:text-primary">
      {/* ── Title Layout Section ── */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest text-primary uppercase">
          {pageTitle}
        </h1>
        <div className="h-0.5 w-16 bg-primary mx-auto mt-4 rounded-full" />
      </header>

      {/* ── Left-to-Right Perfect Alignment Grid ── */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-max">
        {gallery.map((item, index) => (
          <div
            key={item._id}
            onClick={() => setActiveImage(item)}
            className={`${item.gridClass} group relative overflow-hidden rounded-2xl border border-accent/20 shadow-md cursor-zoom-in transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-secondary`}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Thematic Hover Mask Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                Work Item {index + 1}
              </span>
              {item.category && (
                <p className="text-light/80 text-xs font-medium uppercase mt-1 tracking-wider">
                  Tags: {item.category.replace("-", " ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* ── Modal Lightbox ── */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md cursor-zoom-out animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-accent/40 shadow-2xl">
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 text-light backdrop-blur-xs p-5 text-center text-sm tracking-wide border-t border-accent/20">
              {activeImage.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
