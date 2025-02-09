// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: true,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      // NestJS-specific rules
      '@typescript-eslint/explicit-function-return-type': ['error', { 
        allowExpressions: true 
      }], // Require explicit return types on functions
      '@typescript-eslint/explicit-member-accessibility': ['error', { 
        overrides: { constructors: 'no-public' } 
      }], // Require explicit accessibility modifiers on class members
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_' 
      }], // Error on unused variables
      'max-lines-per-function': ['warn', {
        max: 50,
        skipBlankLines: true,
        skipComments: true
      }], // Limit function length to maintain readability
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        },
        {
          selector: 'enum',
          format: ['PascalCase']
        }
      ], // Enforce consistent naming for interfaces and enums
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports'
      }], // Enforce consistent usage of type imports
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }], // Sort import statements for better readability
      '@typescript-eslint/member-ordering': ['error', {
        default: {
          memberTypes: [
            // Index signature
            'signature',
            'call-signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            '#private-static-field',

            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            '#private-instance-field',

            'public-abstract-field',
            'protected-abstract-field',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            '#private-static-method',

            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            '#private-instance-method',

            'public-abstract-method',
            'protected-abstract-method'
          ]
        }
      }] // Define consistent ordering of class members
    },
  },
);