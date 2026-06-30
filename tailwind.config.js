/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A45C',
          light: '#D9BC7A',
          dark: '#A68B4B',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        },
        cream: '#FAF7F2',
        'gray-100': '#F5F5F5',
        'gray-200': '#E5E5E5',
        'gray-300': '#D4D4D4',
        'gray-400': '#A3A3A3',
        'gray-500': '#7A7A7A',
        'gray-600': '#4A4A4A',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.625rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h4': ['1.375rem', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'nav': ['0.875rem', { lineHeight: '1', letterSpacing: '0.02em' }],
        'button': ['0.875rem', { lineHeight: '1', letterSpacing: '0.03em' }],
        'fluid-display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'fluid-h1': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(1.75rem, 3.5vw, 2.625rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'fluid-h3': ['clamp(1.375rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        'card': '0 12px 40px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'elevated': '0 25px 80px rgba(0, 0, 0, 0.35)',
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "kenburns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "kenburns": "kenburns 20s ease-in-out infinite alternate",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        "fade-up": "fade-up 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
