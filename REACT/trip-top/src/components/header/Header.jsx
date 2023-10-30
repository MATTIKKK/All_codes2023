import "./header.css"
import {faBed, faCar,faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useNavigate } from "react-router-dom";

const Header = ({type}) => {

    const navigate = useNavigate()


    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <ul className="headerList">
                    <CustomLink href="/stays" >
                        <span>
                            <FontAwesomeIcon icon={faBed} />
                            &nbsp;&nbsp;Tweets
                        </span>
                    </CustomLink>
                    <CustomLink href="/flights">
                        <span>
                            <FontAwesomeIcon icon={faPlane} />
                            &nbsp;&nbsp;Photos
                        </span>
                    </CustomLink>
                    <CustomLink href="/carrentals">
                        <span>
                            <FontAwesomeIcon icon={faCar} />
                            &nbsp;&nbsp;Following
                        </span>
                    </CustomLink>
                    <CustomLink href="/attractions">
                        <span>
                            <FontAwesomeIcon icon={faBed} />
                            &nbsp;&nbsp;Followers
                        </span>
                    </CustomLink>
                    <CustomLink href="/taxis">
                        <span>
                            <FontAwesomeIcon icon={faTaxi} />
                            &nbsp;&nbsp;Favourites
                        </span>
                    </CustomLink>
                </ul>
                
            </div>
            
        </div>
    )
}


function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "headerListItem active" : "headerListItem"}>
            <a href={href}>{children}</a>
        </li>
    );
}

export default Header;