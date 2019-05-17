import React from 'react'

export default class ScoreBoard extends React.Component {

    render() {
        const {scoreboard: {xWon, oWon, draw}} = this.props;
        return (
            <div style={{width: '200px'}}>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Player</th>
                            <th scope="col">Machine</th>
                            <th scope="col">Draw</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{oWon}</td>
                            <td>{xWon}</td>
                            <td>{draw}</td>
                        </tr>
                    </tbody>
                </table>
            </div>);
}
}
