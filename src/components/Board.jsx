import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmptyBox from './EmptyBox';
import XChar from './XChar';
import OChar from './OChar';
import { X, O } from '../characters/characters';
import { makeMove, restart } from '../actions/actions';

class Board extends Component {
  makeMove(rowIndex, position, char) {
    !this.props.won && this.props.makeMove(rowIndex, position, char);
  }

  getChar(rowIndex, position, char) {
    if (char === X) {
      return <XChar key={position} position={position} />;
    }
    if (char === O) {
      return <OChar key={position} position={position} />;
    }
    return <EmptyBox key={position} makeMove={this.makeMove.bind(this, rowIndex, position)} turn={this.props.turn} />;
  }

  render() {
    const wonClass = this.props.won ? ` won-${this.props.wonLine}` : '';
    const drawClass = this.props.draw ? ' draw' : '';
    const boardClass = 'board' + wonClass + drawClass;
    return (
      <div className={boardClass}>
        {
          Object.keys(this.props.board)
            .map(rowIndex => {
              return (
                <div className={`row row${rowIndex}`} key={rowIndex}>
                  {
                    this.props.board[rowIndex].map((char, positon) => {
                      return this.getChar(rowIndex, positon, char);
                    })
                  }
                </div>
              );
            })
        }
        {
          this.props.won || this.props.draw ?
            <button className="restart" onClick={this.props.restart}>
              <span>Restart</span>
          </button> : false
        }
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
  turn: PropTypes.string.isRequired,
  won: PropTypes.string,
  draw: PropTypes.bool.isRequired,
  wonLine: PropTypes.string,
  makeMove: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
};

export default connect(
  ({ board, turn, won, draw, wonLine }) => ({
    board, turn, won, draw, wonLine,
  }),
  (dispatch) => {
    return {
      makeMove(rowIndex, position, char) {
        dispatch(makeMove(rowIndex, position, char));
      },
      restart() {
        dispatch(restart());
      },
    };
  }
)(Board);

export { Board } ;
