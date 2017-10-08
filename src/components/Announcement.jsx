import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Announcement = (props) => {
  let message = '';
  if (props.turn) {
    message = `Player ${props.turn.toUpperCase()} is next.`;
  }
  if (props.won) {
    message = `Player ${props.won.toUpperCase()} won!`;
  } else if (props.draw) {
    message = 'DRAW!';
  }
  return (
    <div>
      <p className="announcement">
        {message}
      </p>
    </div>
  );
};

Announcement.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired,
};

Announcement.defaultProps = {
  won: false,
};

export default connect(({ won, turn, draw }) => ({
  won, turn, draw,
}))(Announcement);

