import { NavLink } from 'react-router-dom';
import React from 'react';

function CustomNavLink(props) {
    return <NavLink className="navigation-link" activeClassName="active" {...props} />;
}

export default CustomNavLink;
