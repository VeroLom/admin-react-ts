import React, {FC} from 'react';
import {RoutesArray} from "../../types/routes";
import {Link} from "react-router-dom";
import cl from "./Navbar.module.css";

interface NavbarProps {
    links: RoutesArray;
}

// TODO: Replace the logo with a link
const Navbar: FC<NavbarProps> = ({links}) => {
    return (
        <div className={cl.navbar}>
            <span className={cl.logo}>A</span>
            <div className={cl.links}>
                {links.map(link =>
                    <Link key={link.path} to={link.path}>{link.name}</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;