/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'turquoise-blue': 'hsl(177, 68%, 64%)',
				'soft-red': 'hsl(12, 94%, 65%)',
				'light-orange': 'hsl(33, 100%, 70%)',
				'very-light-gray': 'hsl(20, 33%, 98%)',
				'very-dark-blue': 'hsl(244, 23%, 12%)'
			},
			backgroundImage: {
				'main-mobile': 'url(/images/bg-main-mobile.png)',
				'main-tablet': 'url(/images/bg-main-tablet.png)',
				'main-desktop': 'url(/images/bg-main-desktop.png)'
			}
		}
	},
	plugins: []
};
