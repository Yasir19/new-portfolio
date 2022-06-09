import React, {useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utlis/helpers';
import "./SubNav.css";
function SubNav(props ) {
    const {
        pages=[],
        setCurrentPage,
        currentPage
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name)
    },[currentPage])
    const [click, setClick]= useState(false)
    const handleClick =() => setClick(!click)

    return(
             <div className='sub-container'>
                 <div className='sub-menu'>
                 <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                {pages.map(page =>(
                    <li className={`nav ${currentPage.name === page.name && 'navActive'}`}
                    key={page.name}
                    >
                        <span onClick={() =>setCurrentPage(page)}
                        >
                            {capitalizeFirstLetter(page.name)}
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
export default SubNav