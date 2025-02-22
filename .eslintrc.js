module.exports = {
  extends: [
    "next/core-web-vitals", // Configuração recomendada do Next.js
    "eslint:recommended", // Padrões recomendados do ESLint
    "plugin:prettier/recommended", // Integra Prettier ao ESLint
    "plugin:tailwindcss/recommended", // Ajuda com classes do TailwindCSS
  ],
  plugins: ["prettier", "tailwindcss"],
  rules: {
    "prettier/prettier": ["error"], // Erro para códigos fora do padrão do Prettier
    "tailwindcss/no-custom-classname": "off", // Permite classes personalizadas no Tailwind
  },
  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx"], // Suporte para bibliotecas de composição de classes
    },
  },
};
