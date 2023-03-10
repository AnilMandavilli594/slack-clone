import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import { actionTypes } from './reducer';


function Header() {

    const [{user},dispatch] = useStateValue();

    const logout = () => {
        console.log("logoutButton");
        auth.signOut().then( dispatch({
            type:actionTypes.LOGOUT_USER
        }))
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Here" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Header;
