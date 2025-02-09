import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "script",
    globals: globals.browser, // Define o ambiente do navegador
  },
  env: {
    browser: true,
    es6: true, // Ativa recursos do ES6+
  },
  extends: [
    "eslint:recommended", // Conjunto de regras básicas
  ],
  rules: {
    //"no-var": "warn", // Sugere usar let/const em vez de var
    "prefer-const": "warn", // Sugere const se a variável não for reatribuída
    "eqeqeq": "warn", // Exige uso de === e !==
    "no-unused-vars": "warn", // Alerta sobre variáveis não utilizadas
    "semi": ["warn", "always"], // Garante ponto e vírgula no final
    "quotes": ["warn", "double"], // Usa aspas duplas por padrão
  },
};
