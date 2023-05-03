import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = () => { return <NavLink className="navigation-link" activeClassName="active" {...props} />; };

export default CustomNavLink;
