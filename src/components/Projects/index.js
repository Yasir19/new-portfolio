import React, { useState } from "react";
import Repo from "../Repo";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

import './style.css'

function Projects() {
    const [projects] = useState([
        {
            name: 'deep-thoughts',
            repo: 'https://github.com/Yasir19/deep-thoughts',
            url: 'https://github.com/Yasir19/deep-thoughts',
            desc: 'MERN STACK',
        },
        {
            name: 'action-house',
            repo: 'https://github.com/Yasir19/auction-house',
            url: 'https://github.com/Yasir19/auction-house',
            desc: 'MVC full stack Ecommerce',
        },
        {
            name: 'password-generator',
            repo: 'https://github.com/Yasir19/password-generator',
            url: 'https://github.com/Yasir19/password-generator',
            desc: 'JavaScript',
        },
        {
            name: 'weather-dashboard',
            repo: 'https://github.com/Yasir19/weather-dashboard',
            url: 'https://github.com/Yasir19/weather-dashboard',
            desc: 'JavaScript/CSS',
        },
    ])
    const [current, setCurrent] = useState(0)
    const length = projects.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(projects) || projects.length <= 0) {
        return <div>no project to show</div>
    }


    return (
        <div>
            <div className="project">
                {projects.map((project, index) => (
                        <Repo
                            project={project}
                            key={"project" + index}
                        />
                    ))}
                    </div>

            <div className="carousel">
                <FiChevronLeft className="carousel-btn left" onClick={prevSlide} />
                <FiChevronRight className="carousel-btn right" onClick={nextSlide} />
                <div className="page">
                {projects.map((project, index) => (
                    index === current && (
                        <Repo 
                            project={project}
                            key={"project" + index}
                        />
                        
                    )))}
                    </div>
            </div>
        </div>


    )
}
export default Projects
