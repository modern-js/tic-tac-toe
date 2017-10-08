import React from 'react';
import PropTypes from 'prop-types';

const EmptyBox = (props) => {
  return (
    <div className="char char--empty" onClick={() => props.makeMove(props.turn)}>
    </div>
  );
};

EmptyBox.propTypes = {
  makeMove: PropTypes.func.isRequired,
};

export default EmptyBox;
