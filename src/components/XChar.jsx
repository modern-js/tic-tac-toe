import React from 'react';

const XChar = () => {
  return (
    <div className="char char--x">
      <svg viewBox="0 0 56 56">
        <line x1="2" y1="2" x2="54" y2="54" stroke="black" strokeWidth="1" />
        <line x1="2" y1="54" x2="54" y2="2" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default XChar;
