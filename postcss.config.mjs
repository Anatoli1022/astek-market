/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Обязательно добавляем autoprefixer
  },
};

export default config;
