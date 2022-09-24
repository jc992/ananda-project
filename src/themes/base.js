import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import commonSettings from './global.js';

export const base = responsiveFontSizes(
  createTheme(
    {},
    commonSettings,
  ),
);