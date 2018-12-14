import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Comp extends Component {
    render() {
        let { num } = this.props.match.params
        return (
            <div>
                You are the best mentor ever
                <Link to='/comp/1'><button>Link 1</button></Link>
                <Link to='/comp/2'><button>Link 2</button></Link>
                <Link to='/comp/3'><button>Link 3</button></Link>
                {`This is link number ${num}`}
                {num == 1 ? 
                <div>
                    <p>When you can't find the sunshine, be the sunshine</p>
                </div> : 
                num == 2 ? 
                <div>
                    <p>Always be positive</p>
                    <p>*Trips down stairs*</p>
                    <p>Me: Woo, I got down those stairs fast!</p>
                </div> 
                : 
                <div>
                    <p>A champion is defined not by their wins but by how they can recover when they fall ~ Serana Williams</p>
                </div>
                    }
            </div>
        );
    }
}

export default Comp;