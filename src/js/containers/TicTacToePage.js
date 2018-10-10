import React from 'react'
import {connect} from 'react-redux'
import * as Actions from './../redux/tictactoe/tictactoe.actions'
import Game from "../components/tictactoe/Game";

const TicTacToePage = ({
                           loading, board, next, active, scoreboard, accuracy,
                           playerMove, predictMove, startGame, stopGame, getAccuracy, trainNN
                       }) => {

    return (
        <div>
            <Game loading={loading} board={board} next={next} active={active} scoreboard={scoreboard} accuracy={accuracy}
                  onPlayerMove={playerMove} onPredictMove={predictMove} onStartGame={startGame} onStopGame={stopGame}
                  onGetAccuracy={getAccuracy} onTrainNN={trainNN}
            />
        </div>
    );
};

const mapStateToProps = state => {
    const {tictactoe: {loading, board, next, active, scoreboard, accuracy}} = state;
    return {
        loading: loading,
        board: board,
        next: next,
        active: active,
        scoreboard: scoreboard,
        accuracy: accuracy
    }
};

const mapDispatchToProps = dispatch => {
    return {
        predictMove: (board) => dispatch(Actions.predictMove(board)),
        playerMove: (move) => dispatch(Actions.playerMove(move)),
        startGame: () => dispatch(Actions.startGame()),
        stopGame: (winner) => dispatch(Actions.stopGame(winner)),
        getAccuracy: () => dispatch(Actions.getAccuracy()),
        trainNN: () => dispatch(Actions.trainNN())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(TicTacToePage)