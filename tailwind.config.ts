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
					...require("daisyui/src/theming/themes")["lemonade"],
					primary: "#60b45a",
					secondary: "#ffee8c",
					accent: "#60b45a",
				},
			},
		],
	},
} satisfies Config;
