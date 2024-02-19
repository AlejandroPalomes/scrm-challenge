/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./stories/*",
		'../../packages/ui/src/**/*.tsx'
	],
  theme: {
		colors: {
			error: '#F03D3E',
			success: '#007B40',
			notification: '#D84910',
			pink: '#E85B81',
			pinkDark: '#C12F5D',
			purple: '#5E48E8',
			purpleDark: '#5028C6',
			blue: '#8CE0F3',
			white: '#ffffff',
			black: '#252525',
			gray4: '#505050',
			gray3: '#B5B5B5',
			gray2: '#E1E1E1',
			gray1: '#F9F9F9'
		}
  },
}

