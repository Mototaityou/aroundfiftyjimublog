/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
		'airbnb-base-typescript-prettier',
		'airbnb',
		'airbnb-typescript',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	ignorePatterns: ['/node_modules/', '/dist/'],
	plugins: ['@typescript-eslint'],
	settings: {
		'import/resolver': {
			//importするファイルをjsだけではなく、tsを含むファイルを許可する
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
