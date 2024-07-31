import React from 'react'
import Gal from '../../blocks/Gal';
import DisplayLottie from "../../blocks/DisplayLottie";
import { love, love2 } from "../../constants/assets";

const Homein = () => {
    return (
        <div className="home-container">
            <h1>Welcome to </h1>
            <div className="home-main-intro d-flex w-100 p-5">
                <div className="d-flex w-50">
                    <Gal />
                </div>
                <div className="w-50 intro">
                    <h1>Futuraa</h1>
                    <DisplayLottie lottiename={love2} />

                </div>
            </div>
        </div>
    )
}
export default Homein;