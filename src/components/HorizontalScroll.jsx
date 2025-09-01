import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./horizontalscroll.css";

const ImageCarousel = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="horizontalscroll-img image-carousel">
      <img src={images[currentImageIndex]} alt={alt || "carousel image"} />
      {images.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextImage}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const getScrollAmount = (container) => {
  if (window.innerWidth <= 768) {
    // Phone/tablet
    return container.clientWidth * 0.85; // almost full width
  } else if (window.innerWidth <= 1200) {
    // Small laptop
    return container.clientWidth * 0.6;
  } else {
    // Large laptop/desktop
    return container.clientWidth * 0.4;
  }
};

const HorizontalScroll = ({ items }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [items]);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = getScrollAmount(container);
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = getScrollAmount(container);
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="horizontal-scroll-wrapper">
      {canScrollLeft && (
        <button
          className="scroll-arrow scroll-arrow-left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <FiChevronLeft />
        </button>
      )}
      <div className="horizontal-scroll-container" ref={scrollContainerRef}>
        <div className="scroll-content">
          {items.map((item, index) => (
            <div
              key={index}
              className="box"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="horizontalscroll-container-carousel">
                {item.images && item.images.length > 0 ? (
                  <ImageCarousel images={item.images} alt={item.alt} />
                ) : null}
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      {canScrollRight && (
        <button
          className="scroll-arrow scroll-arrow-right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <FiChevronRight />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
