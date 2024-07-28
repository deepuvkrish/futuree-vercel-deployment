import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignOutButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const Navigation = (props) => {
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
        <div className="navContainer">
            <div className="navSection">
                <div className="navLinks">
                    <Link to='/' className="navSectionLinks">Home</Link>
                    <Link to='/shop' className="navSectionLinks">Shop</Link>
                    <Link to='/wed' className="navSectionLinks">Wedding</Link>
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
                                <FontAwesomeIcon icon={faCircleUser} /> <Link to='/profile'>My Profile</Link>
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


        </div>
    )
}

export default Navigation;