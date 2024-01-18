/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily: {
                mullish: ["Mulish", "sans-serif"],
            },
            colors: {
                deepBlue: "#02042a",
                lightBlue: "#2b84ea",
                lightBlue300: "#4b94ed",
                lightBlue500: "#0b72e7",
                greenLight: "#61cea6",
                grayText: "#818597",
                lightGray: "#e2e2e2",
                grayBlue: "#344a6c",
                deepBlueHead: "#162f56",
                gray2: "#525a76",
                gray3: "#f5f8fe",
            },
            backgroundImage: {
                "feature-section": "url('/images/feature-section-2BG.svg')",
                "gradient-Shade": "linear-gradient(180deg, #f4f8ff, #fff0)",
                "gradient-Shade-reverse":
                    "linear-gradient(0deg, #f4f8ff, #fff0)",
            },
            backgroundSize: {
                100: "100% 100%",
            },
            animation: {
                "scroll-md": "10s linear infinite scroll",
            },
            keyframes: {
                scroll: {
                    "0%": { top: "0" },
                    "100%": { top: "-50%" },
                },
            },
        },
    },
    plugins: [],
};
