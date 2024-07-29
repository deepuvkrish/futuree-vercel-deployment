import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignOutButton, useUser } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom';

import './profile.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
const Profiles = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { loggedIn, email } = props
    const navigate = useNavigate()
    // Use the useUser hook to get the details about the logged in user
    const { user } = useUser()
    const [profile, setProfile] = useState('menu');


    return (
        <div>
            {/* <div className="profile" onClick={menuToggle}>
                        <img src={user.imageUrl} className="useravatar" />
                    </div>
                    <div className={profile} onClick={menuHide} onBlur={menuHide}>
                        <h3>Welcome<br />
                            <span>{user ? <div> {user.primaryEmailAddress.emailAddress}</div> : null}</span></h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCircleUser} /> <NavLink to='/profile'>My Profile</NavLink>
                            </li>
                            <li>
                               
                                <SignOutButton>
                                    <input className='signout' type="button" value={'Log out'} />
                                </SignOutButton>
                            </li>

                        </ul>
                    </div> */}

            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={user.imageUrl} className="useravatar" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                className="menu-profile"
            >
                <span className="profile-line">{user ? <div> {user.fullName}</div> : null}</span>
                <MenuItem onClick={handleClose}>
                    <FontAwesomeIcon icon={faCircleUser} /> <NavLink to='/profile'>My Profile</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose} type="button" value={'Log out'}>
                    <FontAwesomeIcon icon={faPersonWalkingArrowRight} />                    <SignOutButton>
                        <input className='signout' type="button" value={'Log out'} />
                    </SignOutButton>
                </MenuItem>
            </Menu>
        </div >
    );
}


export default Profiles;