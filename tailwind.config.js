/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
  		animation: {
  			meteor: 'meteor 5s linear infinite'
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'var(--bg-primary)',
  			foreground: 'var(--text-primary)',
  			card: {
  				DEFAULT: 'var(--bg-secondary)',
  				foreground: 'var(--text-primary)'
  			},
  			primary: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--bg-primary)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--text-primary)'
  			},
  			muted: {
  				DEFAULT: 'var(--bg-secondary)',
  				foreground: 'var(--text-secondary)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--bg-primary)'
  			},
  			border: 'var(--border)',
        input: 'var(--border)',
        ring: 'var(--accent-muted)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
