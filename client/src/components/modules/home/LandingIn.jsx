import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignOutButton, useUser } from '@clerk/clerk-react'
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const LandingIn = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()
    // Use the useUser hook to get the details about the logged in user
    const { user } = useUser()
    const [profile, setProfile] = useState('menu');
    const menuToggle = () => {
        if (profile == 'menu') setProfile('menu active')
        else setProfile('menu')
    }
    return (
        <div className="bodyContent">
            {/* <Navigation /> */}
            <div className="navSection">
                <div className="navLinks">
                    <NavLink to='/' className="navSectionLinks">Home</NavLink>
                    <NavLink to='/shop' className="navSectionLinks">Shop</NavLink>
                    <navLink to='/wed' className="navSectionLinks">Wedding</navLink>
                </div>
                <div className="profileCard">
                    <div className="profile" onClick={menuToggle}>
                        <img src={user.imageUrl} className="useravatar" />
                    </div>
                    <div class={profile}>
                        <h3>Welcome<br />
                            <span>{user ? <div> {user.primaryEmailAddress.emailAddress}</div> : null}</span></h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCircleUser} /> <NavLink to='/profile'>My Profile</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
                                <SignOutButton>
                                    <input className='signout' type="button" value={'Log out'} />
                                </SignOutButton>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default LandingIn