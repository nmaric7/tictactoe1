import React from 'react'

export default class Square extends React.Component {

    render() {
        const {value, disabled, onClick} = this.props;
        return (
            <button
                className="square"
                onClick={onClick}
                disabled={disabled}>
                {value}
            </button>
        );
    }
}