/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#080808',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
        },
        neon: {
          blue: '#d4af37',
          purple: '#b8860b',
          pink: '#ffd700',
          cyan: '#f0c040',
          violet: '#daa520',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.04)',
          medium: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.10)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #d4af37, #b8860b, #ffd700)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(212, 175, 55, 0.25), 0 0 30px rgba(184, 134, 11, 0.1)',
        'neon-strong': '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(184, 134, 11, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'glass-hover': '0 12px 40px rgba(212, 175, 55, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.25)' },
          '100%': { boxShadow: '0 0 25px rgba(184, 134, 11, 0.4), 0 0 50px rgba(212, 175, 55, 0.15)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
