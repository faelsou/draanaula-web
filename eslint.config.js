import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser'; // Usando a importação correta
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default {
  parser: tsParser, // Configurando o parser para o TypeScript
  extends: [
    js.configs.recommended, // Configurações recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Configurações recomendadas do @typescript-eslint
  ],
  files: ['**/*.{ts,tsx}'],
  ignorePatterns: ['dist'], // Ignora a pasta dist
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
