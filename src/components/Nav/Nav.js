import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
   render() {
    //    console.log(this.props.location)
    let { username } = this.props
       return (
           <div>
               {this.props.location.pathname === '/' ? null:
                <div>
                    <Link to='/dashboard'><button>Home</button></Link>
                    <Link to='/comp'><button>Positive Messages</button></Link>
                    <Link to='/form'><button>Form</button></Link>
                    <Link to='/post/:postid'><button>New Post</button></Link>
                    <Link to='/'><button>Logout</button></Link>
                    {username}
                </div>}
           </div>
       );
   }
}

function mapStateToProps(state) {
    return {...state}
}

const NavWithLocation = withRouter(Nav)
export default withRouter(connect(mapStateToProps)(NavWithLocation));