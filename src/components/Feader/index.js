import React from 'react'
import Projects from '../Projects';
import Resume from '../Resume';
import ContactMe from '../ContactMe';
import AboutMe from '../AboutMe'
import CurrentComponent from '../CurrentComponent';

import { capitalizeFirstLetter } from '../../utlis/helpers'
import "./style.css"

function Feader({currentScreen}) {
    //check wich screen is been render
    const renderScreen =()=>{
        switch(currentScreen.name) {
            case 'about me':
                return <AboutMe/>;
                case 'project':
                    return <Projects/>;
                    case "resume":
                        return<Resume/>
                        case "contact me":
                        return <ContactMe/>
                        default:
                            return<AboutMe/>;

        }
    };
    return(
        <div className='feader'>
            <h2>{capitalizeFirstLetter(currentScreen.name)}
            </h2>
            <CurrentComponent>{renderScreen()}</CurrentComponent>

        </div>
    )
}
export default Feader;