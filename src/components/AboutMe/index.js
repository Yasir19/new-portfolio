import React from 'react';
import Typical from "react-typical";
import './me-style.css'

function AboutMe() {
    return (
        <div className="profile-container">
            <div className="primary-text">
                {" "}
                <h1>Hello, I'M</h1>
                <span className="highligted-text">Yasir Habboo.</span>
                <p>I'm full-stack web developer</p>
            </div>

            <div className="profile-details-role">
                <span>
                    {" "}
                    <h1>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Full Stack Developer",
                                1000,
                                "Bulding solutions ",
                                1000,
                                "MERN Sack Dev",
                                1000,
                                "Love to Build Internet Staff",
                                1000,
                            ]}
                        />
                    </h1>
                </span>
            </div>
            <div className='profile-role-tagline'>
                I'm a full-stack developer who is passionate about JavaScript,
                deploying state-of-art applications, building great user
                experiences by bringing simplicity to life, and constantly
                learning.
            </div>
            <div className='picture-container'>
                <div className="profile-picture">
                    <div className="profile-picture-background">


                    </div>


                </div>
            </div>

        </div>


    );
}

export default AboutMe;