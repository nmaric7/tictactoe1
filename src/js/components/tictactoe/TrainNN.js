import React from 'react'

export default class TrainNN extends React.Component {

    componentDidMount() {
        const {onGetAccuracy} = this.props;
        onGetAccuracy();
    }

    render() {
        const {accuracy, loading, onTrainNN} = this.props;
        return (
            <div>
                <div>Accuracy: {accuracy}</div>
                <button onClick={onTrainNN}>
                    {loading ? 'Training...' : 'Train the Network'}
                </button>
            </div>
        );
    }
}
