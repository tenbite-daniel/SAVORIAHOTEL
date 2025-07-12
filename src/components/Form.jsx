import React, { useState, useEffect } from "react";

// SVG Icons - Updated for dark mode
const CalendarIcon = () => (
    <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18 18V4C18 2.897 17.103 2 16 2H14V0H12V2H6V0H4V2H2C0.897 2 0 2.897 0 4V18C0 19.103 0.897 20 2 20H16C17.103 20 18 19.103 18 18ZM6 16H4V14H6V16ZM6 12H4V10H6V12ZM10 16H8V14H10V16ZM10 12H8V10H10V12ZM14 16H12V14H14V16ZM14 12H12V10H14V12ZM16 7H2V5H16V7Z"
            fill="currentColor"
            className="text-gray-700 dark:text-gray-300"
        />
    </svg>
);

const ClockIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-700 dark:text-gray-300"
        />
        <path
            d="M5.96499 3.13672C5.28659 3.31841 4.66799 3.67551 4.17138 4.17212C3.67478 4.66872 3.31768 5.28732 3.13599 5.96572M18.035 3.13672C18.7134 3.31841 19.332 3.67551 19.8286 4.17212C20.3252 4.66872 20.6823 5.28732 20.864 5.96572M12 8.00072V11.7507C12 11.8887 12.112 12.0007 12.25 12.0007H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-gray-700 dark:text-gray-300"
        />
    </svg>
);

const DropdownIcon = () => (
    <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 0L5 5L10 0H0Z"
            fill="currentColor"
            className="text-gray-700 dark:text-gray-300"
        />
    </svg>
);

const initialState = {
    fullName: "",
    date: "",
    time: "",
    email: "",
    guests: "",
    requests: "",
};

// Fixed email regex that works with your email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Form() {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [charCount, setCharCount] = useState(0);
    const [success, setSuccess] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [savedReservations, setSavedReservations] = useState([]);

    // Load saved reservations on component mount
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("reservations") || "[]");
        setSavedReservations(saved);
    }, []);

    // Generate time options (30-minute intervals)
    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const timeString = `${hour.toString().padStart(2, "0")}:${minute
                    .toString()
                    .padStart(2, "0")}`;
                const displayTime = formatTime(timeString);
                times.push({ value: timeString, display: displayTime });
            }
        }
        return times;
    };

    const formatTime = (time24) => {
        if (!time24) return "";
        const [hours, minutes] = time24.split(":");
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    };

    const timeOptions = generateTimeOptions();

    // Complete validation function
    const validate = (field, value) => {
        let err = {};

        // Required field validation
        if (field === "fullName" && (!value || value.trim().length === 0)) {
            err.fullName = "Full name is required";
        } else if (field === "fullName" && value.length > 50) {
            err.fullName = "Max 50 characters";
        }

        if (field === "email" && (!value || value.trim().length === 0)) {
            err.email = "Email is required";
        } else if (
            field === "email" &&
            value &&
            !emailRegex.test(value.trim())
        ) {
            err.email = "Invalid email address";
        }

        if (field === "date" && (!value || value.trim().length === 0)) {
            err.date = "Date is required";
        }

        if (field === "time" && (!value || value.trim().length === 0)) {
            err.time = "Time is required";
        }

        if (field === "guests" && (!value || value === "")) {
            err.guests = "Number of guests is required";
        }

        if (field === "requests" && value.length > 200) {
            err.requests = "Max 200 characters";
        }

        return err;
    };

    // Validate all fields for form submission
    const validateAllFields = () => {
        let allErrors = {};
        Object.keys(form).forEach((field) => {
            const fieldErrors = validate(field, form[field]);
            allErrors = { ...allErrors, ...fieldErrors };
        });
        return allErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form state
        setForm((prev) => ({ ...prev, [name]: value }));

        // Real-time validation - clear error if field becomes valid
        const fieldErrors = validate(name, value);
        setErrors((prev) => {
            const newErrors = { ...prev };
            if (Object.keys(fieldErrors).length === 0) {
                delete newErrors[name]; // Remove error if field is now valid
            } else {
                Object.assign(newErrors, fieldErrors); // Add error if field is invalid
            }
            return newErrors;
        });

        // Update character count for requests field
        if (name === "requests") setCharCount(value.length);
    };

    const handleTimeSelect = (time) => {
        setForm((prev) => ({
            ...prev,
            time: time,
        }));

        // Clear time error when time is selected
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.time;
            return newErrors;
        });

        setShowTimePicker(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = validateAllFields();
        setErrors(newErrors);

        // Only submit if no errors
        if (Object.keys(newErrors).length === 0) {
            // Save to localStorage with timestamp
            const reservation = {
                ...form,
                id: Date.now(),
                timestamp: new Date().toLocaleString(),
            };

            const existingReservations = JSON.parse(
                localStorage.getItem("reservations") || "[]"
            );
            const updatedReservations = [...existingReservations, reservation];
            localStorage.setItem(
                "reservations",
                JSON.stringify(updatedReservations)
            );

            // Update state
            setSavedReservations(updatedReservations);

            // Show success message
            setSuccess(true);
            setForm(initialState);
            setCharCount(0);
            setErrors({});
            setTimeout(() => setSuccess(false), 3000);
        }
    };

    const clearReservations = () => {
        localStorage.removeItem("reservations");
        setSavedReservations([]);
    };

    return (
        <div
            id="reservation"
            className="font-montserrat bg-white dark:bg-gray-800 min-h-screen transition-colors duration-300 mb-10"
        >
            {/* Title */}
            <h1 className="font-playfair text-[#8b5a3c] dark:text-[#D97706] font-bold text-[36px] leading-[40px] text-center pt-10 mb-3">
                Make a Reservation now
            </h1>
            {/* Subtitle */}
            <div className="font-montserrat font-normal text-base leading-6 text-gray-600 dark:text-gray-300 text-center mb-3">
                Reserve your table quickly. Fill in your details below.
            </div>
            <div className="bg-white dark:bg-gray-800 text-center pt-8 rounded-2xl">
                <div className="bg-[#8b5a3c] dark:bg-[#6b4423] rounded-t-md py-2 px-4 text-white font-montserrat font-semibold text-[20px] leading-7 inline-block mb-0 w-full md:max-w-[700px]">
                    Please fill in the form below
                </div>
            </div>

            <div className="max-w-[700px] mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-2xl shadow-lg p-8 relative transition-colors duration-300">
                {/* Book a Table Box */}
                <div className="bg-white dark:bg-gray-900 rounded-xl py-4 mb-2 mt-0 max-w-[350px] mx-auto text-center">
                    <div className="font-inter font-bold text-[28px] leading-7 text-[#B24A35] dark:text-[#D97706] mb-1">
                        BOOK A TABLE
                    </div>
                    <div className="font-inter font-normal text-base leading-7 text-black dark:text-gray-100 text-center">
                        Reserve your table in seconds.
                    </div>
                </div>

                {/* Form */}
                <div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors duration-300">
                        {/* Row 1 */}
                        <div className="flex gap-4 mb-4 flex-col md:flex-row">
                            {/* Full Name */}
                            <div className="flex-1">
                                <div className="font-inter font-medium text-sm leading-7 text-gray-800 dark:text-gray-200 text-center">
                                    Full Name *
                                </div>
                                <input
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full Name"
                                    maxLength={50}
                                    className={`w-full mt-1 px-3 py-2 rounded-md border ${
                                        errors.fullName
                                            ? "border-red-500 dark:border-red-400"
                                            : "border-gray-200 dark:border-gray-600"
                                    } font-inter font-medium text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-600 outline-none text-center box-border placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300`}
                                />
                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 text-center">
                                    {form.fullName.length}/50
                                </div>
                                {errors.fullName && (
                                    <div className="text-[#B24A35] dark:text-red-400 text-xs text-center">
                                        {errors.fullName}
                                    </div>
                                )}
                            </div>

                            {/* Date */}
                            <div className="flex-1">
                                <div className="font-inter font-medium text-sm leading-7 text-gray-800 dark:text-gray-200 text-center">
                                    Date *
                                </div>
                                <div className="relative mt-1">
                                    <input
                                        name="date"
                                        type="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 pr-9 rounded-md border ${
                                            errors.date
                                                ? "border-red-500 dark:border-red-400"
                                                : "border-gray-200 dark:border-gray-600"
                                        } font-inter font-medium text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-600 outline-none text-center box-border transition-colors duration-300`}
                                        style={{
                                            WebkitAppearance: "none",
                                            MozAppearance: "textfield",
                                            position: "relative",
                                        }}
                                    />
                                    <div className="absolute right-0 top-0 w-10 h-full bg-white dark:bg-gray-600 pointer-events-none z-5"></div>
                                    <div
                                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 bg-white dark:bg-gray-600"
                                        onClick={() => {
                                            const dateInput =
                                                document.querySelector(
                                                    'input[name="date"]'
                                                );
                                            if (dateInput) {
                                                dateInput.focus();
                                                dateInput.showPicker &&
                                                    dateInput.showPicker();
                                            }
                                        }}
                                    >
                                        <CalendarIcon />
                                    </div>
                                </div>
                                {errors.date && (
                                    <div className="text-[#B24A35] dark:text-red-400 text-xs text-center mt-1">
                                        {errors.date}
                                    </div>
                                )}
                            </div>

                            {/* Time */}
                            <div className="flex-1">
                                <div className="font-inter font-medium text-sm leading-7 text-gray-800 dark:text-gray-200 text-center">
                                    Time *
                                </div>
                                <div className="relative mt-1">
                                    <div
                                        className={`w-full px-3 py-2 pr-9 rounded-md border ${
                                            errors.time
                                                ? "border-red-500 dark:border-red-400"
                                                : "border-gray-200 dark:border-gray-600"
                                        } font-inter font-medium text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-600 outline-none text-center box-border cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-300`}
                                        onClick={() =>
                                            setShowTimePicker(!showTimePicker)
                                        }
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "Enter" ||
                                                e.key === " "
                                            ) {
                                                setShowTimePicker(
                                                    !showTimePicker
                                                );
                                            }
                                        }}
                                    >
                                        {form.time
                                            ? formatTime(form.time)
                                            : "Select time"}
                                    </div>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ClockIcon />
                                    </span>

                                    {/* Time Picker Dropdown */}
                                    {showTimePicker && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                                            {timeOptions.map((time) => (
                                                <div
                                                    key={time.value}
                                                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-sm text-gray-800 dark:text-gray-100 text-center font-inter font-medium transition-colors duration-200"
                                                    onClick={() =>
                                                        handleTimeSelect(
                                                            time.value
                                                        )
                                                    }
                                                >
                                                    {time.display}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {errors.time && (
                                    <div className="text-[#B24A35] dark:text-red-400 text-xs text-center mt-1">
                                        {errors.time}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex gap-4 flex-col md:flex-row">
                            {/* Email */}
                            <div className="flex-1">
                                <div className="font-inter font-medium text-sm leading-7 text-gray-800 dark:text-gray-200 text-center">
                                    Email *
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className={`w-full mt-1 px-3 py-2 rounded-md border ${
                                        errors.email
                                            ? "border-red-500 dark:border-red-400"
                                            : "border-gray-200 dark:border-gray-600"
                                    } font-inter font-medium text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-600 outline-none text-center box-border placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300`}
                                />
                                {errors.email && (
                                    <div className="text-[#B24A35] dark:text-red-400 text-xs text-center mt-1">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            {/* No of Guests */}
                            <div className="flex-1">
                                <div className="font-inter font-medium text-sm leading-7 text-gray-800 dark:text-gray-200 text-center">
                                    No of guests *
                                </div>
                                <div className="relative mt-1">
                                    <select
                                        name="guests"
                                        value={form.guests}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 pr-9 rounded-md border ${
                                            errors.guests
                                                ? "border-red-500 dark:border-red-400"
                                                : "border-gray-200 dark:border-gray-600"
                                        } font-inter font-medium text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-600 outline-none text-center box-border appearance-none transition-colors duration-300`}
                                    >
                                        <option value="" disabled>
                                            Select guests
                                        </option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                            (n) => (
                                                <option key={n} value={n}>
                                                    {n}{" "}
                                                    {n === 1
                                                        ? "guest"
                                                        : "guests"}
                                                </option>
                                            )
                                        )}
                                    </select>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <DropdownIcon />
                                    </span>
                                </div>
                                {errors.guests && (
                                    <div className="text-[#B24A35] dark:text-red-400 text-xs text-center mt-1">
                                        {errors.guests}
                                    </div>
                                )}
                            </div>

                            {/* Special Requests */}
                            <div className="flex-1">
                                <div className="font-inter font-medium text-sm leading-7 text-gray-800 dark:text-gray-200 text-center">
                                    Special Requests
                                </div>
                                <input
                                    name="requests"
                                    value={form.requests}
                                    onChange={handleChange}
                                    placeholder="Any requests"
                                    maxLength={200}
                                    className={`w-full mt-1 px-3 py-2 rounded-md border ${
                                        errors.requests
                                            ? "border-red-500 dark:border-red-400"
                                            : "border-gray-200 dark:border-gray-600"
                                    } font-inter font-medium text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-600 outline-none text-center box-border placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300`}
                                />
                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 text-center">
                                    {charCount}/200
                                </div>
                                {errors.requests && (
                                    <div className="text-[#B24A35] dark:text-red-400 text-xs text-center mt-1">
                                        {errors.requests}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Reserve Now Button */}
                    <div className="text-center my-6">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-[#8b5a3c] hover:bg-[#a06a47] dark:bg-[#D97706] dark:hover:bg-[#B45309] text-white font-inter font-normal text-md leading-7 rounded-lg px-8 py-2.5 cursor-pointer shadow-md transition-colors duration-200"
                        >
                            Reserve now
                        </button>
                    </div>

                    {/* Success Popup */}
                    {success && (
                        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-[#8b5a3c] dark:bg-[#D97706] text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg z-[1000] shadow-xl">
                            Reservation successful!
                        </div>
                    )}
                </div>
            </div>

            {/* Saved Reservations Display */}
            {savedReservations.length > 0 && (
                <div className="max-w-[700px] mx-auto mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-colors duration-300">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-inter font-bold text-xl text-[#B24A35] dark:text-[#D97706]">
                            Saved Reservations ({savedReservations.length})
                        </h2>
                        <button
                            onClick={clearReservations}
                            className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                            Clear All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {savedReservations.map((reservation) => (
                            <div
                                key={reservation.id}
                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-900 dark:text-gray-100">
                                    <div>
                                        <strong>Name:</strong>{" "}
                                        {reservation.fullName}
                                    </div>
                                    <div>
                                        <strong>Date:</strong>{" "}
                                        {reservation.date}
                                    </div>
                                    <div>
                                        <strong>Time:</strong>{" "}
                                        {formatTime(reservation.time)}
                                    </div>
                                    <div>
                                        <strong>Email:</strong>{" "}
                                        {reservation.email}
                                    </div>
                                    <div>
                                        <strong>Guests:</strong>{" "}
                                        {reservation.guests}
                                    </div>
                                    <div>
                                        <strong>Requests:</strong>{" "}
                                        {reservation.requests || "None"}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    Submitted: {reservation.timestamp}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Click outside to close time picker */}
            {showTimePicker && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowTimePicker(false)}
                />
            )}
        </div>
    );
}
