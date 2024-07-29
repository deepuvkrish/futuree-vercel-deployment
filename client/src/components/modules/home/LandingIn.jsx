import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignOutButton, useUser } from '@clerk/clerk-react'
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import Profiles from "../profile/Profiles";

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
    const menuHide = () => {
        if (profile == 'menu active') setProfile('menu')
    }

    return (
        <div className="bodyContent" >
            <div className="navSection">

                <div className="navLinks">
                    <NavLink to='/homein' className="navSectionLinks">Home</NavLink>
                    <NavLink to='/shop' className="navSectionLinks">Shop</NavLink>
                    <NavLink to='/wed' className="navSectionLinks">Wedding</NavLink>
                </div>
                <div className="profileCard">
                    <Profiles/>
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
                                <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
                                <SignOutButton>
                                    <input className='signout' type="button" value={'Log out'} />
                                </SignOutButton>
                            </li>

                        </ul>
                    </div> */}
                </div>


            </div>


            <Outlet />
        </div>
    )
}

export default LandingIn