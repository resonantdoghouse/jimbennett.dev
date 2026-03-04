import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { reviews, Review } from "../../data/reviews";
import { useSound } from "../../hooks/useSound";

const Reviews: React.FC = () => {
  const { playSound } = useSound();
  const [shuffledReviews, setShuffledReviews] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const itemsPerPage = 3;

  useEffect(() => {
    // Randomize the initial list
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    setShuffledReviews(shuffled);
  }, []);

  const totalPages = Math.ceil(shuffledReviews.length / itemsPerPage);

  const currentReviews = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return shuffledReviews.slice(start, start + itemsPerPage);
  }, [shuffledReviews, currentPage, itemsPerPage]);

  const handleNext = useCallback(() => {
    playSound("blip");
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [playSound, totalPages]);

  const handlePrev = useCallback(() => {
    playSound("blip");
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [playSound, totalPages]);

  useEffect(() => {
    if (!isHovered && totalPages > 1) {
      timerRef.current = window.setInterval(() => {
        handleNext();
      }, 60000); // 1 minute
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, totalPages, handleNext]);

  if (shuffledReviews.length === 0) return null;

  return (
    <section
      id="reviews"
      className="py-20 relative overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-5 mb-12 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-1 bg-accent pixel-clip"></div>
          <h2 className="font-pixel text-2xl md:text-3xl text-accent">
            Student Reviews
          </h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <p className="text-text-muted font-mono max-w-2xl text-sm md:text-base">
          [System log: Testimonials verified. Source: Anonymous students.]
        </p>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {currentReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="bg-card border border-border p-6 rounded relative transition-transform hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] cursor-default flex flex-col justify-between h-full"
              onMouseEnter={() => playSound("hover")}
            >
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent opacity-0 hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="text-xl text-accent mb-4 font-pixel">"</div>
                <p className="text-text-main font-main italic leading-relaxed text-sm md:text-base">
                  {review.text}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted uppercase">
                  Student
                </span>
                <div className="w-8 h-1 bg-accent-secondary opacity-50 pixel-clip"></div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="h-10 w-10 border border-accent bg-transparent text-accent flex items-center justify-center hover:bg-accent hover:text-background transition-colors font-pixel focus:outline-none"
              aria-label="Previous reviews"
            >
              {"<"}
            </button>
            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    playSound("blip");
                    setCurrentPage(i);
                  }}
                  className={`w-3 h-3 transition-colors ${
                    i === currentPage
                      ? "bg-accent"
                      : "bg-border hover:bg-accent/50"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="h-10 w-10 border border-accent bg-transparent text-accent flex items-center justify-center hover:bg-accent hover:text-background transition-colors font-pixel focus:outline-none"
              aria-label="Next reviews"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
