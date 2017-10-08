import React from 'react';
import PropTypes from 'prop-types';

const EmptyBox = (props) => {
  const result = <div className="char char--empty" onClick={() => props.makeMove(props.turn)}></div>
  return result;
};

EmptyBox.propTypes = {
  makeMove: PropTypes.func.isRequired,
};

export default EmptyBox;
