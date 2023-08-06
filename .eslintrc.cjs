module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	ignorePatterns: ["**/*.json", "**/*.less"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react"],
	rules: {
		indent: ["warn", "tab"],
		quotes: ["warn", "double"],
		semi: ["warn", "always"],
		"no-unused-vars": 1,
		"react/prop-types": 0,
	},
};
