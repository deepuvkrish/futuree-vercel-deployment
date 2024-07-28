import React from "react";
import './home.css'
import { SignInButton } from '@clerk/clerk-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { flogo, travel } from "../../constants/assets";
import DisplayLottie from "../../blocks/DisplayLottie";
const Landing = () => {
    return (
        <div className="landing">
            <img src={flogo} className="futuralogo" alt="futuralogo" />
            <div className="log-lotties">
                <DisplayLottie lottiename={travel} />
            </div>
            <div className="log-box">
                {/* The children of the SignedOut component are rendered only when the user is signed out from the app. In this case, the app will render a SignInButton */}
                <SignInButton>
                    <input className='inputButton' type="button" value={'Log in to Continue'} />
                </SignInButton>
                <FontAwesomeIcon icon={faRightToBracket} className="logicon" style={{ color: "#ffffff", }} />

            </div>
        </div>
    )
}
export default Landing;