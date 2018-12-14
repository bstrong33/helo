import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchInput: '',
            posts: []
        }
    }
    

    render() {
        return (
            <div>
                <input />
                <button>Search</button>
                <button>Reset</button>
            </div>
        );
    }
}

export default Dashboard;