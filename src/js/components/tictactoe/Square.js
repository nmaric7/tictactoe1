import React from 'react'

export default class Square extends React.Component {

    render() {
        const {value, disabled, onClick, className} = this.props;
        return (
            <button
                className={'square ' + className}
                onClick={onClick}
                disabled={disabled}>
                {value}
            </button>
        );
    }
}