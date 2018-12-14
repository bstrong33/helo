import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUsername, updateId } from './../../ducks/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
        }
    }

    async login() {
        let { username, password } = this.state;
        let res = await axios.post('/auth/login', { username, password });
        this.setState({ email: '', password: '' })
        if (res.data.loggedIn) {
            this.props.history.push('/dashboard')
        }
        console.log(res.data)
        this.props.updateUsername(res.data.username)
        this.props.updateId(res.data.id)
    }

    async signup() {
        let { username, password } = this.state
        let res = await axios.post('/auth/register', { username, password })
        this.setState({ username: '', password: '' })
        if (res.data.loggedIn) {
            this.props.history.push('/dashboard')
        }
        this.props.updateUsername(res.data.username)
        this.props.updateId(res.data.id)
    }
    

    render() {
        // console.log(this.state.username, this.state.password)
        return (
            <div>
                <p>Username:
                    <input
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })} />
                </p>
                <p>Password:
                    <input
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password" />
                </p>
                <button type='button' onClick={() => this.login()}>Login</button>
                <button type='button' onClick={() => this.signup()}>Signup</button>
            </div>
        );
    }
}


export default connect(null, {updateUsername, updateId})(Auth);