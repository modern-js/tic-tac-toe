import React from 'react';
import PropTypes from 'prop-types';

const OChar = (props) => {
  return (
    <div className={`char char--o column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <circle cx={28} cy={28} r={25} stroke="black" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
};

OChar.propTypes = {
  position: PropTypes.number.isRequired,
};

export default OChar;
