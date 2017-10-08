/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Announcement extends Component {
  render () {
    let message = '';
    if (this.props.turn) {
      message = `Player ${this.props.turn.toUpperCase()} is next.`;
    }
    if (this.props.won) {
      message = `Player ${this.props.won.toUpperCase()} won!`
    } else if (this.props.draw) {
      message = 'DRAW!';
    }
    return (
      <div>
        <p className="announcement">
          {message}
        </p>
      </div>
    );
  }
}

Announcement.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired,
};

export { Announcement };

export default connect(
  ({ won, turn, draw }) => ({
    won, turn, draw,
  })
)(Announcement);

