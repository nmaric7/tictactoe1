import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {username: "", password: ""};
    }

    handleUsernameChanged(val) {
        this.setState({username: val})
    }

    handlePasswordChanged(val) {
        this.setState({password: val})
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const {onSubmit} = this.props;
        const {username, password} = this.state;
        onSubmit({username: username, password: password});
    }

    render() {
        const {username, password} = this.state;
        return (
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <TextField
                    floatingLabelText={'Username'} value={username}
                    onChange={(e) => this.handleUsernameChanged(e.target.value)}
                />
                <TextField
                    floatingLabelText={'Password'} value={password} type={'password'}
                    onChange={(e) => this.handlePasswordChanged(e.target.value)}
                />
                <RaisedButton type={'submit'} label={'Login'} />
            </form>
        );
    }
}