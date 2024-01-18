/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*"],
  safelist: [
    {
      pattern: /./, // the "." means "everything"
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

