import React from 'react'
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import TrainNN from "./TrainNN";

export default class Game extends React.Component {

    componentDidUpdate(prevProps) {
        const {next, board, active, onPredictMove, onStopGame} = this.props;
        if (next != prevProps.next || (active != prevProps.active && active)) {
            // check for winner
            const winner = this.checkForWinner(board);
            const noEmptySpaces = this.getNumberOfEmptySpaces(board);

            if (winner || noEmptySpaces === 0)  {
                // stop the game, update results
                onStopGame(winner);
            }
            // check who is on move
            else if (next === 'X') {
                onPredictMove(board.join(''));
            }

        }
    }

    checkForWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] !== ' ' && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    getNumberOfEmptySpaces(board) {
        let emptySpaces = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === ' ') emptySpaces = emptySpaces + 1;
        }
        return emptySpaces;
    }
    render() {
        return (
            <div>
                <Board {...this.props} />
                <ScoreBoard {...this.props} />
                <TrainNN {...this.props} />
            </div>
        );
    }
}