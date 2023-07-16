import { createTheme, theme } from '@nextui-org/react';
import { darkBackground, darkCode, darkCodeLight, darkPrimary, darkSelection } from '../../constants';
import { getColor } from './getColor';

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      //primary: getColor(darkPrimary, theme.colors.primary.value),
      primary: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',      
      selection: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      code: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      codeLight: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      primaryShadow: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      //primaryShadow: getColor(darkPrimary, theme.colors.primary.value),
      background: getColor(darkBackground, theme.colors.background.value),
      //background: 'linear-gradient(112deg, $blue100 -25%, $pink800 -10%, $purple500 80%)',
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    },
  },
});
