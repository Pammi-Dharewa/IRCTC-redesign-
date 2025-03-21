
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
				heading: ['Syne', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				irctc: {
					red: '#FF6B6B',
					"red-light": '#FFEEEE',
					"red-dark": '#FF5252',
					yellow: '#FFD166',
					teal: '#4ECDC4',
					purple: '#6C63FF',
					dark: '#1A1A2E',
					"dark-medium": '#2A2A42',
					"dark-light": '#30305A',
					"gray-text": '#9999AA',
					"gray-text-light": '#B5B5C5',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'train-move': {
					'0%': {
						left: '0%'
					},
					'100%': {
						left: '100%'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'blob-morphing': {
					'0%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
					},
					'50%': {
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
					},
					'100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
					}
				},
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
				'gradual-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'smooth-scale': {
					'0%': {
						transform: 'scale(0.94)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'shimmer-effect': {
					'0%': {
						backgroundPosition: '-468px 0'
					},
					'100%': {
						backgroundPosition: '468px 0'
					}
				},
				'pulse-ring': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1.2)',
						opacity: '0'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'train-move': 'train-move 15s linear infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'blob-morphing': 'blob-morphing 25s ease-in-out infinite',
				blob: "blob 7s infinite",
				'gradual-fade-in': 'gradual-fade-in 0.8s ease-out forwards',
				'smooth-scale': 'smooth-scale 0.5s ease-out',
				'shimmer-effect': 'shimmer-effect 2s infinite linear',
				'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			boxShadow: {
				'soft': '0 2px 15px rgba(0, 0, 0, 0.03)',
				'medium': '0 4px 20px rgba(0, 0, 0, 0.05)',
				'card': '0 2px 15px rgba(0, 0, 0, 0.03), 0 0 1px rgba(0, 0, 0, 0.05)',
				'inner-glow': 'inset 0 0 10px rgba(0, 87, 255, 0.1)',
				'glow-blue': '0 0 15px rgba(0, 87, 255, 0.5)'
			},
			backdropBlur: {
				'xs': '2px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-dots': 'radial-gradient(rgba(0, 87, 255, 0.1) 2px, transparent 2px)',
				'shimmer': 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
				'text-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
			},
			backgroundSize: {
				'dots-sm': '20px 20px',
				'dots-md': '30px 30px',
				'grid-sm': '20px 20px',
				'shimmer': '200% 100%',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
