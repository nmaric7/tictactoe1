import React from 'react'
import {connect} from 'react-redux'
import * as Actions from '../redux/tictactoe/tictactoe.actions.v1'
import Game from "../components/tictactoe/Game";

const TicTacToePageV1 = ({
                           loading, board, next, active, scoreboard, accuracy, moves,
                           playerMove, predictMove, startGame, stopGame, getAccuracy, trainNN
                       }) => {

    return (
        <div>
            <h1>v1</h1>
            <Game loading={loading} board={board} next={next} active={active} scoreboard={scoreboard}
                  accuracy={accuracy} moves={moves}
                  onPlayerMove={playerMove} onPredictMove={predictMove} onStartGame={startGame} onStopGame={stopGame}
                  onGetAccuracy={getAccuracy} onTrainNN={trainNN}
            />

        </div>
    );
};

const mapStateToProps = state => {
    const {tictactoe: {v1 : {loading, board, next, active, scoreboard, accuracy, moves}}} = state;
    return {
        loading: loading,
        board: board,
        next: next,
        active: active,
        scoreboard: scoreboard,
        accuracy: accuracy,
        moves: moves
    }
};

const mapDispatchToProps = dispatch => {
    return {
        predictMove: (board) => dispatch(Actions.predictMove(board)),
        playerMove: (move) => dispatch(Actions.playerMove(move)),
        startGame: () => dispatch(Actions.startGame()),
        stopGame: (winner, moves) => dispatch(Actions.stopGame(winner, moves)),
        getAccuracy: () => dispatch(Actions.getAccuracy()),
        trainNN: () => dispatch(Actions.trainNN())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(TicTacToePageV1);
