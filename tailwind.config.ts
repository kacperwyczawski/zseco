import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
				mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"lemonade",
			{
				lime: {
					primary: "#60b45a",
					secondary: "#ffee8c",
					accent: "#60b45a",
					neutral: "#ffee8c",
					"base-100": "#0d0d0d",
					"base-200": "#1c1c1e",
					"base-300": "#2a2a2c",
				},
			},
		],
	},
} satisfies Config;
