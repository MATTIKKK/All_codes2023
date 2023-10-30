import React from 'react'
import './navbar.css'
import {faBell, faEnvelope, faHashtag, faHouse, faList, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import ProfileInfo from '../profile_info/ProfileInfo'


const Navbar = () => {
  return (
    <div className='navbar'>
        <section className='navigation'>
            <div className='navItems'>
                <CustomLink href="/">
                    <span>
                        <FontAwesomeIcon icon={faHouse} />
                        &nbsp;&nbsp;Home
                    </span>
                </CustomLink>
                <CustomLink href="/a">
                    <span>
                    <FontAwesomeIcon icon={faHashtag} />
                        &nbsp;&nbsp;Explore
                    </span>
                </CustomLink>
                <CustomLink href="/b">
                    <span>
                        <FontAwesomeIcon icon={faBell} />
                        &nbsp;&nbsp;Notifications
                    </span>
                </CustomLink>
                <CustomLink href="/c">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp;&nbsp;Messages
                    </span>
                </CustomLink>
                <CustomLink href="/d">
                    <span>
                        <FontAwesomeIcon icon={faList} />
                        &nbsp;&nbsp;Lists
                    </span>
                </CustomLink>
                <CustomLink href="/profile">
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;&nbsp;Profile
                    </span>
                </CustomLink>
            </div>
        </section>
        <section className='posts'>
            {window.location.pathname === "/profile" ? <ProfileInfo /> : ""} 
        </section>
        <section className='search'>
            
        </section>
    </div>
  )
}

function CustomLink({href, children}) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "navItem active" : "navItem"}>
            <a href={href}>{children}</a>
        </li>
    );
}

export default Navbar