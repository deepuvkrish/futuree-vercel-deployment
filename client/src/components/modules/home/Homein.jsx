import React from 'react'
import DisplayLottie from "../../blocks/DisplayLottie";
import { love, love2 } from "../../constants/assets";
import Land from './Land';

const Homein = () => {
    return (
        <div className="home-container">
            <div className="home-main-intro d-flex w-100">
                <Land />
                {/* <div className="d-flex w-50">
                </div> */}
                {/* <div className="w-50 intro">
                    <h1>Futuraa</h1>
                    <DisplayLottie lottiename={love} />
                   
                </div> */}
            </div>
        </div>
    )
}
export default Homein;