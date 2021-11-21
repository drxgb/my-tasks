module.exports = {
	purge: [
		"./storage/framework/views/*.php",
		"./resources/**/*.blade.php",
		"./resources/**/*.js",
		"./resources/**/*.vue",
	],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
