import React from 'react';
import Block from '../Block';

const Section = ({ title, icon, style, children }) => (
  <div style={{ padding: 16, ...style }}>
    <Block icon={icon} title={title} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} /> 
    {children}
  </div>
);

export default Section;
