import React, { useEffect, useState } from 'react';
import {HiChevronDoubleLeft} from 'react-icons/hi'
import {HiChevronDoubleDown} from 'react-icons/hi'
import { capitalizeFirstLetter } from '../../utlis/helpers';
import {FaConnectdevelop} from 'react-icons/fa'
import "./nav.css"

function Nav(props) {
    const {
        screens = [],
        setCurrentScreen,
        currentScreen
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentScreen.name)
    }, [currentScreen])
    const [click, setClick]= useState(false)
    const handleClick =() => setClick(!click)
    return (
        <div className="navbar">
            <div className='nav-container'>
                <div className='logo'>
                <h1><span>Y</span><FaConnectdevelop  className='icon'/>H</h1>
                </div>
                <div className='menu'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {screens.map(Screen => (
                        <li className={`nav-element ${currentScreen.name === Screen.name && 'navActive' }`}
                            key={Screen.name}
                        >
                            <span onClick={() =>{
                            setCurrentScreen(Screen);
                            setClick(!click)
                            
                            }
                        }
                            >
                                {capitalizeFirstLetter(Screen.name)}

                            </span>
                        </li>
                        

                    ))}
                </ul>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<HiChevronDoubleLeft className="icon"/>) :(<HiChevronDoubleDown className='icon'/>)}
                </div>
            </div>
        </div>
    )
}
export default Nav
