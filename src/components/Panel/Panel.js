import React from 'react';
import Paper from 'material-ui/Paper';

const Panel = ({ children, style }) => {
  return (
    <Paper style={{ width: '100%', height: '100%', backgroundColor: 'transparent', ...style }} zDepth={0}>
      {children}
    </Paper>
  );
};

export default Panel;
