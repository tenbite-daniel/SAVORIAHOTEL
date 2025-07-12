import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";

// Example slide images (replace with your own)
const slides = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

const headline = "Savoria";
const subheadline = "Where culinary artistry meets exceptional dining";

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [typed, setTyped] = useState("");
    const [typing, setTyping] = useState(true);
    const intervalRef = useRef(null);
    const typewriterTimeoutRef = useRef(null); // Add ref for typewriter cleanup

    // Fixed typewriter effect for headline
    useEffect(() => {
        // Clear any existing typewriter timeout
        if (typewriterTimeoutRef.current) {
            clearTimeout(typewriterTimeoutRef.current);
        }

        setTyped("");
        setTyping(true);
        let i = 0;

        const type = () => {
            if (i < headline.length) {
                setTyped(headline.substring(0, i + 1)); // Use substring instead of prev state
                i++;
                typewriterTimeoutRef.current = setTimeout(type, 100);
            } else {
                setTyping(false);
            }
        };

        type();

        // Cleanup function
        return () => {
            if (typewriterTimeoutRef.current) {
                clearTimeout(typewriterTimeoutRef.current);
            }
        };
    }, [current]);

    // Autoplay carousel
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(intervalRef.current);
    }, []);

    // Manual controls reset autoplay timer
    const goTo = (idx) => {
        setCurrent(idx);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const nextSlide = () => goTo((current + 1) % slides.length);
    const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);

    // Button click: go to next slide
    const handleExplore = () => {
        nextSlide();
    };

    return (
        <section
            id="hero"
            className="w-full min-h-[70vh] relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="relative w-full h-[70vh] min-h-[320px]">
                {slides.map((slide, idx) => (
                    <img
                        key={idx}
                        src={slide.img}
                        alt={`slide-${idx + 1}`}
                        className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ease-in-out ${
                            idx === current
                                ? "opacity-100 z-20"
                                : "opacity-0 z-10"
                        }`}
                    />
                ))}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/30">
                    <h1 className="font-playfair font-bold text-white text-center mb-4 select-none text-5xl md:text-4xl sm:text-2xl leading-tight">
                        <span>{typed}</span>
                        <span
                            className="inline-block w-[1ch] animate-blink"
                            style={{ opacity: typing ? 1 : 0 }}
                        >
                            |
                        </span>
                    </h1>
                    <p className="font-montserrat font-normal text-white text-center mb-8 text-xl md:text-lg sm:text-base leading-snug">
                        {subheadline}
                    </p>
                    <button
                        className="font-montserrat font-semibold text-white bg-[#8b5a3c] dark:bg-[#D97706] rounded px-9 py-3 text-base md:px-6 md:py-2 md:text-sm hover:bg-[#a06a47] dark:hover:bg-[#B45309] transition-colors"
                        onClick={handleExplore}
                    >
                        Explore Our Brand
                    </button>
                </div>
                <div className="absolute top-1/2 left-0 right-0 flex justify-between w-full pointer-events-none z-30">
                    <button
                        className="pointer-events-auto bg-black/30 text-white border-none text-2xl rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-[#8b5a3c]/70 dark:hover:bg-[#D97706]/70 transition-colors"
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                    >
                        &#8592;
                    </button>
                    <button
                        className="pointer-events-auto bg-black/30 text-white border-none text-2xl rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-[#8b5a3c]/70 dark:hover:bg-[#D97706]/70 transition-colors"
                        onClick={nextSlide}
                        aria-label="Next Slide"
                    >
                        &#8594;
                    </button>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-3 h-3 rounded-full cursor-pointer inline-block transition-all duration-300 ${
                                idx === current
                                    ? "bg-white shadow-[0_0_0_4px_rgba(139,90,60,0.3)] dark:shadow-[0_0_0_4px_rgba(217,119,6,0.3)]"
                                    : "bg-white/50"
                            }`}
                            onClick={() => goTo(idx)}
                        />
                    ))}
                </div>
            </div>
            {/* Tailwind custom animation */}
            <style>
                {`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s steps(1) infinite;
                }
                `}
            </style>
        </section>
    );
};

export default Hero;
