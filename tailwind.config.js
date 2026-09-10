/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Blade Runner 2049 dust-storm palette
        void: '#07060a',
        ash: '#12100e',
        ember: '#ff6a1a',
        rust: '#c4491a',
        sand: '#e8a15b',
        dust: '#f2d4a6',
        fog: '#c9b79a',
        neon: '#5df1ff',
        magenta: '#ff1f6d',
        blood: '#a10a2c',
        acid: '#c8ff2a',
        bone: '#efe8d8',
      },
      fontFamily: {
        display:  ['"Bebas Neue"', 'Impact', 'sans-serif'],
        brutal:   ['"Unica One"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        body:     ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono:     ['"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
        jp:       ['"Noto Sans JP"', '"Space Grotesk"', 'sans-serif'],
        // sci-fi / avionics / EVM
        avio:     ['"Michroma"', '"Chakra Petch"', 'sans-serif'],       // Latin only — wide retro-futurist
        tech:     ['"Chakra Petch"', '"Play"', 'sans-serif'],           // Latin only — angular sci-fi
        cockpit:  ['"B612 Mono"', '"IBM Plex Mono"', 'monospace'],      // Latin — Airbus cockpit
        heavy:    ['"Krona One"', '"Unica One"', 'sans-serif'],         // Cyrillic-safe retro-geometric heavy
        play:     ['"Play"', '"Space Grotesk"', 'sans-serif'],          // Cyrillic-safe futuristic
        pixel:    ['"Silkscreen"', '"VT323"', 'monospace'],
        crt:      ['"VT323"', 'monospace'],
        jpPixel:  ['"DotGothic16"', '"Noto Sans JP"', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: 1 },
          '20%,24%,55%': { opacity: 0.35 },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-40px,-30px,0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        neonPulse: {
          '0%,100%': { filter: 'drop-shadow(0 0 6px currentColor) drop-shadow(0 0 22px currentColor)' },
          '50%':     { filter: 'drop-shadow(0 0 2px currentColor) drop-shadow(0 0 8px currentColor)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitchX: {
          '0%,100%':      { transform: 'translate(0,0)' },
          '10%':          { transform: 'translate(-2px,1px)' },
          '20%':          { transform: 'translate(2px,-1px)' },
          '30%':          { transform: 'translate(-1px,-2px)' },
          '40%':          { transform: 'translate(1px,2px)' },
          '50%':          { transform: 'translate(-3px,0)' },
          '60%':          { transform: 'translate(2px,1px)' },
          '70%':          { transform: 'translate(-1px,-1px)' },
          '80%':          { transform: 'translate(1px,-2px)' },
          '90%':          { transform: 'translate(-2px,2px)' },
        },
        rgbSlice: {
          '0%,92%,100%': { clipPath: 'inset(0 0 0 0)' },
          '93%':          { clipPath: 'inset(20% 0 60% 0)' },
          '94%':          { clipPath: 'inset(60% 0 10% 0)' },
          '95%':          { clipPath: 'inset(40% 0 40% 0)' },
          '96%':          { clipPath: 'inset(80% 0 5% 0)' },
          '97%':          { clipPath: 'inset(5% 0 85% 0)' },
        },
        vhsShift: {
          '0%,88%,100%': { transform: 'translate(0,0)', filter: 'hue-rotate(0)' },
          '89%':         { transform: 'translate(4px,-1px)',  filter: 'hue-rotate(-25deg)' },
          '90%':         { transform: 'translate(-6px,2px)',  filter: 'hue-rotate(40deg)' },
          '91%':         { transform: 'translate(3px,0)',     filter: 'hue-rotate(-10deg)' },
        },
        jitter: {
          '0%,100%': { transform: 'translate(0,0) rotate(0)' },
          '25%':     { transform: 'translate(0.5px,-0.5px) rotate(0.05deg)' },
          '50%':     { transform: 'translate(-0.5px,0.5px) rotate(-0.05deg)' },
          '75%':     { transform: 'translate(0.5px,0.5px) rotate(0.02deg)' },
        },
        bleed: {
          '0%,100%': { opacity: .35, transform: 'scale(1)' },
          '50%':     { opacity: .55, transform: 'scale(1.08)' },
        },
        smear: {
          '0%':   { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
      animation: {
        flicker: 'flicker 4s infinite',
        drift: 'drift 12s ease-in-out infinite alternate',
        scan: 'scan 8s linear infinite',
        neonPulse: 'neonPulse 3.6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        glitchX: 'glitchX 2.4s infinite steps(2)',
        rgbSlice: 'rgbSlice 5s infinite',
        vhsShift: 'vhsShift 6s infinite',
        jitter: 'jitter 0.15s infinite',
        bleed: 'bleed 6s ease-in-out infinite',
        smear: 'smear 12s linear infinite',
      },
    },
  },
  plugins: [],
}
