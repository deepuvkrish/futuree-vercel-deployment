import React from 'react'
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
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
            <div className="profile-title">
                <h1 className='kanit-medium'> My Profile</h1>
            </div>
            <div className="profile-container">
                <div className="profile-photo">
                    <img src={user.imageUrl} className="userProfile" />

                </div>
                <div className='profile-details'>
                    <MDBListGroup style={{ minWidth: '22rem' }}>
                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>
                                <div className='fw-bold'>Username</div>
                                <div className='text-muted'>{user.username}</div>
                            </div>
                            <MDBBadge pill light color='success'>
                                Online
                            </MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem className='d-flex justify-content-center align-items-center'>
                            <div className="w-50">
                                <div className='fw-bold'>First Name</div>
                                <div className='text-muted'>{user.firstName}</div>
                            </div>
                            <div className="w-50">
                                <div className='fw-bold'>Last Name</div>
                                <div className='text-muted'>{user.lastName}</div>
                            </div>
                        </MDBListGroupItem>
                        <MDBListGroupItem className='d-flex justify-content-center align-items-center'>
                            <div className='w-50'>
                                <div className='fw-bold'>Email</div>
                                <div className='text-muted'>{user.primaryEmailAddress.emailAddress}</div>
                            </div>
                            <div className='w-50'>
                                <div className='fw-bold'>Phone</div>
                                <div className='text-muted'>{user.primaryPhoneNumber.phoneNumber}</div>
                            </div>

                        </MDBListGroupItem>

                    </MDBListGroup>
                </div>
            </div>

        </div>
    )
}

export default Profile;