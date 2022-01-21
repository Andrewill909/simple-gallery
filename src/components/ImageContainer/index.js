import React from 'react';

const ImageContainer = ({ children }) => {
  return <div className="pt-16 wrapper grid grid-cols-1 md:grid-cols-3 text-yellow-1 gap-10">{children}</div>;
};

export default ImageContainer;
