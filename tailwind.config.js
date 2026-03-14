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
          950: '#020c1b',
          900: '#0a192f',
          800: '#112240',
          700: '#1d3461',
          600: '#233554',
          500: '#2a3f5f',
        },
        neon: {
          blue: '#00d4ff',
          purple: '#7b2ff7',
          pink: '#ff2d75',
          cyan: '#00f5d4',
          violet: '#9945ff',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.12)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #00d4ff, #7b2ff7, #ff2d75)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 212, 255, 0.3), 0 0 30px rgba(123, 47, 247, 0.15)',
        'neon-strong': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(123, 47, 247, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 12px 40px rgba(0, 212, 255, 0.2)',
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
          '0%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(123, 47, 247, 0.5), 0 0 50px rgba(0, 212, 255, 0.2)' },
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
