import React from "react";
import { orange, lavender, yellow, pink, green, blue } from "../../constants/assets";

const Land = () => {
    return (
        <>
            <section className="home">
                <div className="description">
                    <h1 className="title">
                        <span className="gradient-text">Live Life Happy</span> with Your Love
                    </h1>
                    <p className="paragraph">
                        In a world filled with meaned, having a partner who loves, cares, respects, adores you... can make all the
                        difference.
                    </p>

                </div>

                <div className="users-color-container">
                    <span className="item"></span>
                    <img
                        className="item"
                        src={orange}
                        alt="subhi" />
                    <span className="item"></span>
                    <img
                        className="item"
                        src={lavender}
                        alt="deepz" />

                    <img
                        className="item"
                        src={yellow}
                        alt="deepsubhi" />
                    <span className="item" ></span>
                    <img className="item" src={pink} alt="subhi" />
                    <span className="item" ></span>

                    <span className="item" ></span>
                    <img className="item" src={green} alt="" />
                    <span className="item" ></span>
                    <img className="item" src={blue} alt="" />
                </div>
            </section>
        </>

    )
};


export default Land;