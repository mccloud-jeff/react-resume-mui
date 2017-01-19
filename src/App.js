import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import { Themes } from './themes';

// HACK: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export default ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(Themes.default)}>
    {children}
  </MuiThemeProvider>
);
