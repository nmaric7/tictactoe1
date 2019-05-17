import React from 'react'
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import TrainNN from "./TrainNN";

export default class AutoplayGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {winningCombination: [], noOfGames: 0};
    }

    componentDidUpdate(prevProps) {
        const {next, board, active, moves, onPredictMove, onUnbeatMove, onStopGame, onStartGame, scoreboard} = this.props;
        let {noOfGames} = this.state;

        if (next != prevProps.next || (active != prevProps.active && active)) {
            // check for winner
            const winner = this.checkForWinner(board);
            const noEmptySpaces = this.getNumberOfEmptySpaces(board);

            if (winner) {
                const winningCombination = this.getWinningCombination(board);
                this.setState({winningCombination: winningCombination});
            }

            if (winner || noEmptySpaces === 0) {
                // stop the game, update results
                setTimeout(() => onStopGame(winner, moves), 100);
            }
            // check who is on move
            else if (next === 'X') {
                setTimeout(() => onPredictMove(board.join('')), 100);
            }
            else if (next === 'O') {
                setTimeout(() => onUnbeatMove(board.join(''), next), 100);
            }

        } else if (scoreboard != prevProps.scoreboard) {
            if (noOfGames < 20) {
                setTimeout(() => this.handleStartGame(), 200);
            } else {
                this.setState({noOfGames: 0});
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
            if (board[a] && board[a] !== '-' && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    getWinningCombination = (board) => {
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
            if (board[a] && board[a] !== '-' && board[a] === board[b] && board[a] === board[c]) {
                return [a, b, c];
            }
        }
        return [];
    };

    getNumberOfEmptySpaces(board) {
        let emptySpaces = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '-') emptySpaces = emptySpaces + 1;
        }
        return emptySpaces;
    }

    handleStartGame = () => {
        const {onStartGame} = this.props;
        this.setState({winningCombination: [], noOfGames: this.state.noOfGames + 1});
        onStartGame();
    };

    render() {
        const {board, active, next, scoreboard, accuracy, loading, onGetAccuracy, onTrainNN} = this.props;
        const {winningCombination} = this.state;
        return (
            <div>
                <Board board={board} active={active} next={next}
                       winningCombination={winningCombination}
                       onStartGame={this.handleStartGame}/>
                <ScoreBoard scoreboard={scoreboard}/>
                <TrainNN accuracy={accuracy} loading={loading}
                         onGetAccuracy={onGetAccuracy} onTrainNN={onTrainNN} />

            </div>
        );
    }

}
