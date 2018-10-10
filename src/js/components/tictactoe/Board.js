import React from 'react'
import Square from "./Square";

export default class Board extends React.Component {

    handleClick = (i) => {
        const {onPlayerMove} = this.props;
        onPlayerMove(i);
    };

    renderSquare(i) {
        const {board, active} = this.props;
        const value = board[i];
        const disabled = (value && value !== ' ') || !active;
        return <Square
            value={value}
            disabled={disabled}
            onClick={() => this.handleClick(i)}/>;
    }

    handleStartGame = () => {
        const {onStartGame} = this.props;
        onStartGame();
    };

    render() {
        const {next, active} = this.props;
        return (
            <div>

                <div className="status">
                    <button
                        onClick={this.handleStartGame}
                        disabled={active}>
                        {!active ? 'Započni novu igru' : 'Igra u tijeku...'}
                    </button>
                </div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="status">Next player: {next}</div>
            </div>
        );
    }
}