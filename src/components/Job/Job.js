import React from 'react';
import Block from '../Block';

const Job = ({ url, employer, position, icon, dates, text, keywords, style, children }) => {
  let link

  if (icon) {
    link = (
      <a href={url} target="_blank">
        {
          React.cloneElement(icon, {
            style: {
              width: '100%',
              height: '100%',
              marginTop: 12,
              ...icon.props.style
            }
          })
        }
      </a>
    );
  }
  return (
    <Block
      style={style}
      icon={link}
      title={employer}
      text={
        <div>
          <div>{position}</div>
          <div>{<div style={{ fontWeight: 'bold', fontSize: 'small', color: '#5da4d9' }}>{dates}</div>}</div>
          <div>{text}</div>
          <div>{<div style={{ fontWeight: 'bold', fontSize: 'small', color: '#5da4d9' }}>{keywords}</div>}</div>
        </div>
      }
    />
  );
};

export default Job;
