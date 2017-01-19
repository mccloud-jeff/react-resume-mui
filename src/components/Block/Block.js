import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { lightBlack } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const Block = ({ icon, title, text, style, titleStyle, muiTheme }) => (
  <Paper zDepth={0} style={{ display: 'flex', ...style, color: lightBlack, backgroundColor: 'transparent' }}>
    <div style={{ flex: '1 0' }}>
        <div style={{ width: 80, textAlign: 'center' }}>{icon}</div>
    </div>
    <div style={{ flex: '5 0' }}>
        <div style={{ margin: '8px 0', fontSize: 22, ...titleStyle }}>{title}</div>
        <div style={{ textAlign: 'justify', lineHeight: '200%', fontSize: 14, fontWeight: 300, color: muiTheme.cardText }}>{text}</div>
    </div>
  </Paper>
);

export default muiThemeable()(Block);
