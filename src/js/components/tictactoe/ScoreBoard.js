import React from 'react'

export default class ScoreBoard extends React.Component {

    render() {
        const {scoreboard: {xWon, oWon}} = this.props;
        return (
            <div style={{width: '200px'}}>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Fran</th>
                            <th scope="col">Računalo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{oWon}</td>
                            <td>{xWon}</td>
                        </tr>
                    </tbody>
                </table>
            </div>);
}
}