// @ts-check
import * as eslintConfig from '@tanstack/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [...eslintConfig.tanstackConfig, eslintConfigPrettier];
