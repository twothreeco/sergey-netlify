module.exports = {
  content: [
    "./*.{js,jsx,html}",
    "./_imports/*.{js,jsx,html}",
    "./template/*.{js,jsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}