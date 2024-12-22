import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: "."
		}
	},
	plugins: {
		"@typescript-eslint": tseslint.plugin,
	},
	extends: [
		eslint.configs.recommended,
		...tseslint.configs.recommended,
	],
	rules: {
		"@typescript-eslint/no-namespace": [
			"error",
			{
				"allowDeclarations": true,
				"allowDefinitionFiles": true
			}
		],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				"accessibility": "explicit",
				"overrides": {
					"constructors": "no-public"
				}
			}
		],
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{
				"assertionStyle": "as"
			}
		],
		"@typescript-eslint/no-explicit-any": [
			"error",
			{
				"ignoreRestArgs": true,
				"fixToUnknown": true
			}
		],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				"disallowTypeAnnotations": false
			}
		],
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/no-unused-vars": ["error", {"args": "none", "ignoreRestSiblings": true}],
		"@typescript-eslint/no-unnecessary-type-assertion": "error",

		// These rules are for people
		// who don't know JavaScript well.
		"no-var": "off",
		"require-yield": "off",
		"@typescript-eslint/no-require-imports": "off",
		"@typescript-eslint/no-empty-object-type": "off",
	},
	ignores: ["*.js", "node_modules", "**/.next/**"],
	files: ["**/*.ts"]
});