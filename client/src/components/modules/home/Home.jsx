import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'
import LandingIn from './LandingIn'
import Landing from './Landing'
const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    // Use the useUser hook to get the details about the logged in user
    const { user } = useUser()

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem('user')
            props.setLoggedIn(false)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="mainContainer">
            <SignedOut>
                <Landing />
            </SignedOut>

            <SignedIn>
                <LandingIn />
            </SignedIn>
        </div>
    )
}

export default Home