module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

{
  "compilerOptions": {
    "jsx": "react-jsx",         // or "preserve" for older versions
    "module": "esnext",
    "target": "es6",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "isolatedModules": true,
    "esModuleInterop": true,
    "allowJs": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true
  }
}
