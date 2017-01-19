import * as colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const Palette = {
  primary1Color: '#354b6f',
  primary2Color: '#0087cd',
  primary3Color: '#b0e2f8',
  accent1Color: '#2196F3',
  accent2Color: '#00aef8',
  accent3Color: '#0090e4',
  textColor: colors.darkBlack,
  alternateTextColor: colors.white,
  canvasColor: colors.white,
  borderColor: colors.grey300,
  disabledColor: fade(colors.darkBlack, 0.3),
  pickerHeaderColor: colors.cyan500,
  clockCircleColor: fade(colors.darkBlack, 0.07),
  shadowColor: colors.fullBlack
};

export const Theme = {
  fontFamily: 'Roboto, sans-serif',
  palette: Palette,
};
