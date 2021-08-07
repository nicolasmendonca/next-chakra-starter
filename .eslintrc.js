module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'after-used',
				argsIgnorePattern: '^_.*?$',
				ignoreRestSiblings: false,
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				pathGroups: [
					{
						group: 'external',
						pattern: '~/**',
						position: 'after',
					},
				],
			},
		],
		'no-console': 'error',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', next: 'return', prev: '*' },
			{ blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
			{
				blankLine: 'any',
				next: ['const', 'let', 'var'],
				prev: ['const', 'let', 'var'],
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 100,
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'es5',
				useTabs: true,
			},
		],
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				noSortAlphabetically: false,
				reservedFirst: true,
				shorthandFirst: true,
			},
		],
		'react/prop-types': 'off',
		'react/self-closing-comp': 'error',
		'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
	},
};
