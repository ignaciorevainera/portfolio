/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				xs: "436px",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					primary: "#FF006D",
					secondary: "#00C6C2",
					accent: "#005DFF",
					neutral: "#18181b",
					"neutral-content": "#ffffff",
					"base-100": "#0a0a0a",
					"base-200": "#0f0f0f",
					"base-300": "#171717",
					info: "#009FFF",
					success: "#00AB44",
					warning: "#eab308",
					error: "#b91c1c",
				},
			},
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					primary: "#FF006D",
					secondary: "#9333ea",
					accent: "#FFA200",
					neutral: "#dadace",
					"neutral-content": "#000000",
					"base-100": "#F6F6F4",
					"base-200": "#ecece8",
					"base-300": "#d8d8d0",
					info: "#009FFF",
					success: "#00AB44",
					warning: "#eab308",
					error: "#b91c1c",
				},
			},
		],
	},
};
