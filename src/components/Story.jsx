import React from "react";
import chef from "../assets/images/chef.png";

// Example SVG icons (replace with your own or use an icon library)
const FreshnessIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB" />
        <path
            d="M8.5 3.0004C6.04375 3.0004 3.96563 4.60977 3.25938 6.82852C4.30937 6.29727 5.49375 6.0004 6.75 6.0004H9.5C9.775 6.0004 10 6.2254 10 6.5004C10 6.7754 9.775 7.0004 9.5 7.0004H9H6.75C6.23125 7.0004 5.72813 7.05977 5.24375 7.16915C4.43438 7.35352 3.68125 7.68165 3.0125 8.12852C1.19688 9.3379 0 11.4035 0 13.7504V14.2504C0 14.666 0.334375 15.0004 0.75 15.0004C1.16562 15.0004 1.5 14.666 1.5 14.2504V13.7504C1.5 12.2285 2.14688 10.8598 3.18125 9.9004C3.8 12.2598 5.94688 14.0004 8.5 14.0004H8.53125C12.6594 13.9785 16 9.90977 16 4.89415C16 3.5629 15.7656 2.29727 15.3406 1.15665C15.2594 0.941024 14.9438 0.950399 14.8344 1.15352C14.2469 2.25352 13.0844 3.0004 11.75 3.0004H8.5Z"
            fill="#8B5A3C"
        />
    </svg>
);

const CultureIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB" />
        <path
            d="M1.4875 9.38669L7.13438 14.6586C7.36875 14.8773 7.67812 14.9992 8 14.9992C8.32187 14.9992 8.63125 14.8773 8.86563 14.6586L14.5125 9.38669C15.4625 8.50232 16 7.26169 16 5.96482V5.78357C16 3.59919 14.4219 1.73669 12.2688 1.37732C10.8438 1.13982 9.39375 1.60544 8.375 2.62419L8 2.99919L7.625 2.62419C6.60625 1.60544 5.15625 1.13982 3.73125 1.37732C1.57812 1.73669 0 3.59919 0 5.78357V5.96482C0 7.26169 0.5375 8.50232 1.4875 9.38669Z"
            fill="#8B5A3C"
        />
    </svg>
);

const CommunityIcon = () => (
    <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_29_1965)">
            <g clip-path="url(#clip1_29_1965)">
                <path
                    d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8344C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83437C4.375 16 4 15.6281 4 15.1656Z"
                    fill="#8B5A3C"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_29_1965">
                <rect width="20" height="16" fill="white" />
            </clipPath>
            <clipPath id="clip1_29_1965">
                <path d="M0 0H20V16H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const Story = () => {
    return (
        <section
            id="story"
            className="w-full flex flex-col bg-gray-50 dark:bg-gray-900 items-center gap-12 p-10 md:flex-row justify-center"
        >
            {/* Left Side */}
            <div className="flex-1">
                {/* Title */}
                <h2 className="font-playfair font-bold text-5xl leading-[40px] text-amber-500 mb-6">
                    Our Story
                </h2>
                {/* Description */}
                <p className="font-montserrat text-sm text-base leading-[26px] text-[1.1rem] text-gray-600 mb-8 dark:text-white">
                    Founded in 1985 by Chef Marco Antonelli, Savoria began as a
                    small family trattoria in the heart of Tuscany. What started
                    as a dream to share authentic Italian flavors has evolved
                    into a culinary destination that honors tradition while
                    embracing innovation.
                </p>
                {/* Freshness */}
                <div className="flex items-start mb-6">
                    <div className="mr-4">
                        <FreshnessIcon />
                    </div>
                    <div>
                        <div className="font-montserrat text-base leading-6 text-[1.2rem] text-gray-900 mb-1 dark:text-white">
                            Freshness
                        </div>
                        <div className="font-montserrat text-sm leading-5 text-[1rem] text-gray-600 dark:text-gray-300">
                            Locally sourced ingredients, delivered daily
                        </div>
                    </div>
                </div>
                {/* Culture */}
                <div className="flex items-start mb-6">
                    <div className="mr-4">
                        <CultureIcon />
                    </div>
                    <div>
                        <div className="font-montserrat text-base leading-6 text-[1.2rem] text-gray-900 mb-1 dark:text-white">
                            Culture
                        </div>
                        <div className="font-montserrat text-sm leading-5 text-[1rem] text-gray-600 dark:text-gray-300">
                            Preserving authentic Italian culinary traditions
                        </div>
                    </div>
                </div>
                {/* Community */}
                <div className="flex items-start">
                    <div className="mr-4">
                        <CommunityIcon />
                    </div>
                    <div>
                        <div className="font-montserrat text-base leading-6 text-[1.2rem] text-gray-900 mb-1 dark:text-white">
                            Community
                        </div>
                        <div className="font-montserrat text-sm leading-5 text-[1rem] text-gray-600 dark:text-gray-300">
                            Preserving authentic Italian culinary traditions
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1">
                <img
                    src={chef}
                    alt="Chef"
                    className="w-full max-w-md rounded-xl object-cover shadow-lg"
                />
            </div>
        </section>
    );
};

export default Story;
