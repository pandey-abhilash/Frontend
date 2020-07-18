/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import '../../../styles/header.css';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import userReducer from '../../../redux/actions/auth'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null
        }
        this.logout=this.logout.bind(this)
    }
    componentDidMount() {
        const humburger = document.querySelector(".humburger");
        const navLinks = document.querySelector(".nav-links")
        const links = document.querySelectorAll(".nav-links li")
        humburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade")
            });
        })
    }
    logout(){
        window.localStorage.setItem("myproject",null)
        window.location.reload()    
    }
    render() {
        const {user}=this.props
        return (
            <header style={{position:'fixed' , width:'100%'}}>
                <nav>
                    <div className='humburger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/app">Home</Link>
                        </li>
                        <li>
                            <Link to="/app/post">My Post</Link>
                        </li>
                        <li>
                            <div className="profile-image" onClick={(e) => this.setState({ anchorEl: e.currentTarget })}>
                                <img
                                    src="https://cdna.artstation.com/p/assets/images/images/018/719/176/large/imge-celepci-wo4.jpg?1560441453"
                                    alt="image"
                                    style={{
                                        height: '40px',
                                        width: '40px',
                                        borderRadius: "50%",
                                        border: '2px solid #0000'
                                    }}
                                />
                                <span >{user.displayName}</span>
                            </div>
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={() => this.setState({ anchorEl: null })}
                            >
                                <Link to='/app/profile' style={{ textDecoration: 'none' }}>
                                    <MenuItem onClick={() => this.setState({ anchorEl: null })}> Profile</MenuItem>
                                </Link>
                                    <MenuItem onClick={()=>this.logout()}>Logout</MenuItem>
                            </Menu>
                            {/* <div className="profile-lable">
                                <Link to='/app/profile'>
                                    <span >Profile</span>
                                </Link>
                            </div> */}
                        </li>
                        {/* <li className="profile-lable">
                            <div className="profile-lable">
                                <Link to='/'>
                                    <span >Log Out</span>
                                </Link>
                            </div>
                        </li> */}
                    </ul>
                </nav>
            </header>
        )
    }
}
//export default Header;
export default connect(
    state=>({
        user:state.get('auth').user
    }),
    dispatch=>({
        userReducer:userReducer.getActions(dispatch)
    })
)(Header)
