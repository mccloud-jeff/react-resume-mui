import React from 'react';

const Photo = ({ src }) => {
  return (
    <img alt="" src={src} style={{ width: '100%' }} />
  );
};

export default Photo;