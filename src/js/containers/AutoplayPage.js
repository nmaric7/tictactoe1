import React from 'react'
import {connect} from 'react-redux'
import * as Actions from '../redux/tictactoe/tictactoe.actions.v3'
import AutoplayGame from "../components/tictactoe/AutoplayGame";

const AutoplayPage = ({
                          loading, board, next, active, scoreboard, accuracy, moves,
                          predictMove, startGame, unbeatMove, stopGame, getAccuracy, trainNN
                      }) => {

    return (
        <div>
            <h1>Autoplay</h1>
            <AutoplayGame loading={loading} board={board} next={next} active={active} scoreboard={scoreboard}
                  accuracy={accuracy} moves={moves} onPredictMove={predictMove} onStartGame={startGame}
                  onUnbeatMove={unbeatMove} onStopGame={stopGame}
                  // onPlayerMove={playerMove}
                  onGetAccuracy={getAccuracy} onTrainNN={trainNN}
            />

        </div>
    );
};

const mapStateToProps = state => {
    const {tictactoe: {v3: {loading, board, next, active, scoreboard, accuracy, moves}}} = state;
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
        unbeatMove: (board, mark) => dispatch(Actions.unbeatMove(board, mark)),
        startGame: () => dispatch(Actions.startGame()),
        stopGame: (winner, moves) => dispatch(Actions.stopGame(winner, moves)),
        getAccuracy: () => dispatch(Actions.getAccuracy()),
        trainNN: () => dispatch(Actions.trainNN())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(AutoplayPage);
