import React, { useEffect, useState } from "react";

const SavoriaIcon = () => (
    <svg
        className="w-6 h-7"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_391_248)">
            <path
                d="M19.5 0C18.75 0 13.5 1.5 13.5 8.25V13.5C13.5 15.1547 14.8453 16.5 16.5 16.5H18V22.5C18 23.3297 18.6703 24 19.5 24C20.3297 24 21 23.3297 21 22.5V16.5V11.25V1.5C21 0.670312 20.3297 0 19.5 0ZM3 0.75C3 0.365625 2.71406 0.046875 2.32969 0.0046875C1.94531 -0.0375 1.60313 0.215625 1.51875 0.585938L0.0984375 6.975C0.0328125 7.27031 0 7.57031 0 7.87031C0 10.0219 1.64531 11.7891 3.75 11.9813V22.5C3.75 23.3297 4.42031 24 5.25 24C6.07969 24 6.75 23.3297 6.75 22.5V11.9813C8.85469 11.7891 10.5 10.0219 10.5 7.87031C10.5 7.57031 10.4672 7.27031 10.4016 6.975L8.98125 0.585938C8.89688 0.210938 8.54531 -0.0375 8.16562 0.0046875C7.78594 0.046875 7.5 0.365625 7.5 0.75V7.04062C7.5 7.29375 7.29375 7.5 7.04062 7.5C6.80156 7.5 6.60469 7.31719 6.58125 7.07812L5.99531 0.684375C5.9625 0.295313 5.63906 0 5.25 0C4.86094 0 4.5375 0.295313 4.50469 0.684375L3.92344 7.07812C3.9 7.31719 3.70312 7.5 3.46406 7.5C3.21094 7.5 3.00469 7.29375 3.00469 7.04062V0.75H3ZM5.26406 7.875H5.25H5.23594L5.25 7.84219L5.26406 7.875Z"
                fill="#D97706"
            />
        </g>
        <defs>
            <clipPath id="clip0_391_248">
                <path d="M0 0H21V24H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const PhoneIcon = () => (
    <svg
        className="w-4 h-4"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_391_267)">
            <g clipPath="url(#clip1_391_267)">
                <path
                    d="M4.50898 1.42327C4.29844 0.914679 3.74336 0.643976 3.21289 0.788898L0.806641 1.44515C0.330859 1.5764 0 2.00843 0 2.50062C0 9.26546 5.48516 14.7506 12.25 14.7506C12.7422 14.7506 13.1742 14.4198 13.3055 13.944L13.9617 11.5377C14.1066 11.0073 13.8359 10.4522 13.3273 10.2416L10.7023 9.14788C10.2566 8.96194 9.73984 9.09046 9.43633 9.46507L8.33164 10.8131C6.40664 9.90257 4.84805 8.34398 3.9375 6.41898L5.28555 5.31702C5.66016 5.01077 5.78867 4.49671 5.60273 4.05101L4.50898 1.42601V1.42327Z"
                    fill="currentColor"
                    className="text-gray-300 dark:text-gray-600"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_391_267">
                <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0 0.75)"
                />
            </clipPath>
            <clipPath id="clip1_391_267">
                <path d="M0 0.75H14V14.75H0V0.75Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const EmailIcon = () => (
    <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.3125 0.5C0.587891 0.5 0 1.08789 0 1.8125C0 2.22539 0.194141 2.61367 0.525 2.8625L6.475 7.325C6.78672 7.55742 7.21328 7.55742 7.525 7.325L13.475 2.8625C13.8059 2.61367 14 2.22539 14 1.8125C14 1.08789 13.4121 0.5 12.6875 0.5H1.3125ZM0 3.5625V9.25C0 10.2152 0.784766 11 1.75 11H12.25C13.2152 11 14 10.2152 14 9.25V3.5625L8.05 8.025C7.42656 8.49258 6.57344 8.49258 5.95 8.025L0 3.5625Z"
            fill="currentColor"
            className="text-gray-300 dark:text-gray-600"
        />
    </svg>
);

const LocationIcon = () => (
    <svg
        className="w-3 h-4"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_391_277)">
            <g clipPath="url(#clip1_391_277)">
                <path
                    d="M5.89805 14.4C7.30078 12.6445 10.5 8.38984 10.5 6C10.5 3.10156 8.14844 0.75 5.25 0.75C2.35156 0.75 0 3.10156 0 6C0 8.38984 3.19922 12.6445 4.60195 14.4C4.93828 14.8184 5.56172 14.8184 5.89805 14.4ZM5.25 4.25C5.71413 4.25 6.15925 4.43437 6.48744 4.76256C6.81563 5.09075 7 5.53587 7 6C7 6.46413 6.81563 6.90925 6.48744 7.23744C6.15925 7.56563 5.71413 7.75 5.25 7.75C4.78587 7.75 4.34075 7.56563 4.01256 7.23744C3.68437 6.90925 3.5 6.46413 3.5 6C3.5 5.53587 3.68437 5.09075 4.01256 4.76256C4.34075 4.43437 4.78587 4.25 5.25 4.25Z"
                    fill="currentColor"
                    className="text-gray-300 dark:text-gray-600"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_391_277">
                <rect
                    width="10.5"
                    height="14"
                    fill="white"
                    transform="translate(0 0.75)"
                />
            </clipPath>
            <clipPath id="clip1_391_277">
                <path d="M0 0.75H10.5V14.75H0V0.75Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const FacebookIcon = () => (
    <svg
        className="w-5 h-5"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_391_293)">
            <g clipPath="url(#clip1_391_293)">
                <path
                    d="M17.9688 9.25C17.9688 4.43359 14.0664 0.53125 9.25 0.53125C4.43359 0.53125 0.53125 4.43359 0.53125 9.25C0.53125 13.6016 3.71957 17.2087 7.8877 17.8633V11.7704H5.67285V9.25H7.8877V7.32906C7.8877 5.1441 9.18848 3.93719 11.1808 3.93719C12.1349 3.93719 13.1327 4.10734 13.1327 4.10734V6.25187H12.033C10.9502 6.25187 10.6123 6.92406 10.6123 7.61348V9.25H13.0304L12.6436 11.7704H10.6123V17.8633C14.7804 17.2087 17.9688 13.6016 17.9688 9.25Z"
                    fill="currentColor"
                    className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-800 transition-colors"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_391_293">
                <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.25 0.25)"
                />
            </clipPath>
            <clipPath id="clip1_391_293">
                <path d="M0.25 0.25H18.25V18.25H0.25V0.25Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const InstagramIcon = () => (
    <svg
        className="w-4 h-5"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_391_297)">
            <path
                d="M8.12853 5.20732C5.89259 5.20732 4.08907 7.01084 4.08907 9.24678C4.08907 11.4827 5.89259 13.2862 8.12853 13.2862C10.3645 13.2862 12.168 11.4827 12.168 9.24678C12.168 7.01084 10.3645 5.20732 8.12853 5.20732ZM8.12853 11.8729C6.68361 11.8729 5.50236 10.6952 5.50236 9.24678C5.50236 7.79834 6.68009 6.62061 8.12853 6.62061C9.57697 6.62061 10.7547 7.79834 10.7547 9.24678C10.7547 10.6952 9.57345 11.8729 8.12853 11.8729ZM13.2754 5.04209C13.2754 5.56592 12.8535 5.98428 12.3332 5.98428C11.8094 5.98428 11.391 5.5624 11.391 5.04209C11.391 4.52178 11.8129 4.0999 12.3332 4.0999C12.8535 4.0999 13.2754 4.52178 13.2754 5.04209ZM15.9508 5.99834C15.891 4.73623 15.6027 3.61826 14.6781 2.69717C13.757 1.77607 12.6391 1.48779 11.377 1.42451C10.0762 1.35068 6.17736 1.35068 4.87657 1.42451C3.61798 1.48428 2.50001 1.77256 1.5754 2.69365C0.650794 3.61475 0.366028 4.73271 0.302747 5.99482C0.228918 7.29561 0.228918 11.1944 0.302747 12.4952C0.362512 13.7573 0.650794 14.8753 1.5754 15.7964C2.50001 16.7175 3.61447 17.0058 4.87657 17.069C6.17736 17.1429 10.0762 17.1429 11.377 17.069C12.6391 17.0093 13.757 16.721 14.6781 15.7964C15.5992 14.8753 15.8875 13.7573 15.9508 12.4952C16.0246 11.1944 16.0246 7.29912 15.9508 5.99834ZM14.2703 13.8909C13.9961 14.58 13.4652 15.1108 12.7727 15.3886C11.7356 15.7999 9.27462 15.705 8.12853 15.705C6.98243 15.705 4.51798 15.7964 3.48439 15.3886C2.79532 15.1144 2.26447 14.5835 1.98673 13.8909C1.5754 12.8538 1.67032 10.3929 1.67032 9.24678C1.67032 8.10068 1.57892 5.63623 1.98673 4.60264C2.26095 3.91357 2.79181 3.38271 3.48439 3.10498C4.5215 2.69365 6.98243 2.78857 8.12853 2.78857C9.27462 2.78857 11.7391 2.69717 12.7727 3.10498C13.4617 3.3792 13.9926 3.91006 14.2703 4.60264C14.6817 5.63975 14.5867 8.10068 14.5867 9.24678C14.5867 10.3929 14.6817 12.8573 14.2703 13.8909Z"
                fill="currentColor"
                className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-800 transition-colors"
            />
        </g>
        <defs>
            <clipPath id="clip0_391_297">
                <path d="M0.25 0.25H16V18.25H0.25V0.25Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const TwitterIcon = () => (
    <svg
        className="w-5 h-4"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.1497 4.58284C16.1612 4.74273 16.1612 4.90265 16.1612 5.06254C16.1612 9.93942 12.4493 15.5587 5.66497 15.5587C3.57486 15.5587 1.63325 14.9534 0 13.9027C0.296965 13.9369 0.582469 13.9483 0.890859 13.9483C2.61545 13.9483 4.20303 13.3659 5.4708 12.3722C3.84898 12.3379 2.48984 11.2757 2.02155 9.8138C2.25 9.84805 2.47841 9.8709 2.71828 9.8709C3.04949 9.8709 3.38073 9.8252 3.68909 9.74529C1.99874 9.40262 0.730934 7.91786 0.730934 6.12472V6.07905C1.22203 6.35316 1.79314 6.52448 2.39843 6.5473C1.40477 5.88485 0.753785 4.75415 0.753785 3.47496C0.753785 2.78969 0.936492 2.16152 1.25631 1.61329C3.0723 3.85187 5.80201 5.31377 8.86289 5.4737C8.8058 5.19958 8.77152 4.91408 8.77152 4.62854C8.77152 2.59552 10.4162 0.939453 12.4606 0.939453C13.5228 0.939453 14.4822 1.38488 15.156 2.10443C15.9898 1.94454 16.7893 1.63614 17.4974 1.21357C17.2233 2.07018 16.6408 2.78973 15.8756 3.24655C16.618 3.16664 17.3375 2.96101 17.9999 2.6755C17.4975 3.40644 16.8693 4.05743 16.1497 4.58284Z"
            fill="currentColor"
            className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-800 transition-colors"
        />
    </svg>
);

function getOpenStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    let open = false;

    if (day >= 1 && day <= 4) {
        open = hour >= 5 && hour < 22;
    } else if (day === 5 || day === 6) {
        open = hour >= 17 && hour < 23;
    } else if (day === 0) {
        open = hour >= 16 && hour < 21;
    }
    return open;
}

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(getOpenStatus());
        const interval = setInterval(() => setIsOpen(getOpenStatus()), 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-neutral-800 dark:bg-gray-900 border border-gray-200 dark:border-gray-950 text-white dark:text-gray-300 font-inter w-full mx-auto flex flex-col justify-between min-h-[365px] transition-colors duration-300">
            <div className="flex flex-1 px-16 pt-12 gap-16 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-3">
                        <SavoriaIcon />
                        <span className="font-bold text-2xl leading-8 tracking-normal text-white dark:text-gray-300">
                            Savoria
                        </span>
                    </div>
                    <p className="font-normal text-base leading-5 text-gray-300 dark:text-gray-200 mt-2">
                        Crafting exceptional dining experiences with passion and
                        artistry.
                    </p>
                    <div className="mt-6 font-semibold text-lg leading-6 tracking-normal text-white dark:text-gray-300">
                        {isOpen ? (
                            <span className="text-[#d97706] dark:text-[#B45309]">
                                We are Open
                            </span>
                        ) : (
                            <span className="text-[#d97706] dark:text-[#B45309]">
                                We are Closed
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 min-w-[160px]">
                    <div className="font-semibold text-lg leading-6 tracking-normal mb-4 text-white dark:text-gray-300">
                        Navigation
                    </div>
                    <ul className="list-none p-0 m-0">
                        {[
                            { name: "Home", to: "/", href: "#hero" },
                            { name: "Menu", to: "/", href: "#menu" },
                            { name: "Our Story", to: "/", href: "#story" },
                            {
                                name: "Reservation",
                                to: "/",
                                href: "#reservation",
                            },
                        ].map((item) => (
                            <li
                                key={item.name}
                                className="font-normal text-base leading-5 tracking-normal mb-2 text-gray-300 dark:text-gray-200"
                            >
                                <a
                                    href={`${item.to}${item.href}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // If not on home page, navigate first
                                        if (
                                            window.location.pathname !== item.to
                                        ) {
                                            // Store scroll target before navigating
                                            sessionStorage.setItem(
                                                "scrollTo",
                                                item.href
                                            );
                                            window.location.href = `${item.to}${item.href}`;
                                        } else {
                                            // If on home page, scroll immediately
                                            const target =
                                                document.querySelector(
                                                    item.href
                                                );
                                            if (target) {
                                                target.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                });
                                            }
                                        }
                                    }}
                                    className="hover:underline hover:text-white dark:hover:text-gray-400 transition-colors cursor-pointer"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <div className="font-semibold text-lg leading-6 tracking-normal mb-4 text-white dark:text-gray-300">
                        Contact
                    </div>
                    <div className="flex items-center gap-2 font-normal text-base leading-5 mb-2 text-gray-300 dark:text-gray-200">
                        <PhoneIcon />
                        (555) 123-4567
                    </div>
                    <div className="flex items-center gap-2 font-normal text-base leading-5 mb-2 text-gray-300 dark:text-gray-200">
                        <EmailIcon />
                        info@Savoria.com
                    </div>
                    <div className="flex items-center gap-2 font-normal text-base leading-5 mb-2 text-gray-300 dark:text-gray-200">
                        <LocationIcon />
                        123 Gourmet Street
                    </div>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=123+Gourmet+Street"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal text-base leading-5 text-gray-300 dark:text-gray-200 underline ml-7 inline-block hover:text-white dark:hover:text-gray-400 transition-colors"
                    >
                        View on Google Maps
                    </a>
                </div>

                {/* Hours */}
                <div className="flex-1 min-w-[200px]">
                    <div className="font-semibold text-lg leading-6 tracking-normal mb-4 text-white dark:text-gray-300">
                        Hours
                    </div>
                    <div className="font-normal text-base leading-5 text-gray-300 dark:text-gray-200 mb-2">
                        Mon-Thur: 5:00AM - 10:00PM
                    </div>
                    <div className="font-normal text-base leading-5 text-gray-300 dark:text-gray-200 mb-2">
                        Fri-Sat: 5:00PM - 11:00PM
                    </div>
                    <div className="font-normal text-base leading-5 text-gray-300 dark:text-gray-200">
                        Sunday: 4:00PM - 9:00PM
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <hr className="border-t border-gray-600 dark:border-gray-800 w-full mx-auto my-6" />

            {/* Bottom section with copyright, social icons, and map */}
            <div className="px-16 pb-6 w-full">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-6">
                    <span className="font-normal text-base leading-5 text-gray-300 dark:text-gray-200">
                        &copy; 2024 Savoria. All rights reserved.
                    </span>

                    {/* Google Map and Directions */}
                    <div className="flex items-center gap-4">
                        <div className="w-64 h-32 rounded-lg overflow-hidden border border-gray-600 dark:border-gray-400">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.137434620817!2d36.82194395!3d-1.28333315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22c68b7f3%3A0x4c23b8d5ba0ce0c5!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Savoria Restaurant Location"
                            ></iframe>
                        </div>
                        <div className="flex flex-col justify-center">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=123+Gourmet+Street,Nairobi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#d97706] dark:text-gray-200 hover:text-[#f59e0b] dark:hover:text-gray-400 transition-colors font-medium text-sm"
                            >
                                <LocationIcon />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block dark:text-gray-200"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block dark:text-gray-200"
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block dark:text-gray-200"
                        >
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
