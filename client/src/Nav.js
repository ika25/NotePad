import React from 'react';
import { Link } from 'react-router-dom';// Link is representation of ancer tag difference is link will render diffrent component pased on the link, 
//that we are trying to visit,so there will be no page reload when using link.
const Nav = () => (
    <nav>
        <ul className="nav nav-tabs">
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/create">Create</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
