import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/stickers/stickers.actions'
import {Link}  from 'react-router-dom'
import LoginForm from '../login/LoginForm'

class Stickers extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick (sign) {
        const {iterate} = this.props.actions;
        iterate(sign === '+');
    }

    handleLogin(data) {
        const {auth} = this.props.actions;
        auth(data);
    }

    render() {
        const {counter} = this.props;
        const url = '/stickers/' + counter;

        return(
            <div>
                <span className={'btn btn-primary btn-sm'} onClick={() => this.handleClick('-')}>-</span>
                <span style={{padding: '20px'}}>{counter}</span>
                <span className={'btn btn-secondary btn-sm'} onClick={() => this.handleClick('+')}>+</span>
                <p style={{padding: '20px'}}>
                    <Link className={'alert alert-warning'} to={url}>Go to number page</Link>
                </p>

                <LoginForm onSubmit={(data) => this.handleLogin(data)}/>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        counter: state.stickers.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickers)