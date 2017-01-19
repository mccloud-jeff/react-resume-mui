import React from 'react';
import FontAwesome from 'react-fontawesome';

const JobAvatar = ({url, icon}) => {
  let image;

  if (icon) {
    image = (
      <span style={{ lineHeight: '48px', display: 'inline-block' }}>
        <img alt="" src={icon} style={{ maxWidth: 64, width: '100%', marginRight: 16 }} />
      </span>
    );
  } else {
    image = (
      <div style={{
        display: 'inline-block',
        width: 56,
        height: 56,
        border: '3px solid #5da4d9',
        borderRadius: '50%',
        lineHeight: '74px',
        textAlign: 'center',
        color: '#5da4d9',
        marginRight: 16
      }}>
        <FontAwesome name="ellipsis-h" size="2x" />
      </div>
    );
  }
  return (
    <a href={url} target="_blank">{image}</a>
  );
};

export default JobAvatar;
