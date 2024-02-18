/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
	purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
			pink: '#E85B81',
			purple: '#5E48E8',
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

