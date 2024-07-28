import React from 'react'
import Navigation from "../../static/Navigation";
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import './profile.css'
const Profile = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()
    // Use the useUser hook to get the details about the logged in user
    const { user } = useUser()
    return (
        <div className='profile-content'>
            <div className="profile-photo">
                <img src={user.imageUrl} className="userProfile" />

            </div>
            <div className='profile-details'>
                <ul>
                    <li>
                        <span>Username : </span>{user.username}
                    </li>
                    <li>
                        <span>Email :</span>{user.primaryEmailAddress.emailAddress}
                    </li>
                    <li>
                        <span>Phone :</span>{user.primaryPhoneNumber.phoneNumber}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;