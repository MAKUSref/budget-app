import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <NavLink className="header__link" activeClassName="header__link--active" to="/" exact><FontAwesomeIcon icon={faCoins} /></NavLink>
                <NavLink className="header__link" activeClassName="header__link--active" to="/charts"><FontAwesomeIcon icon={faChartLine} /></NavLink>
                <NavLink className="header__link" activeClassName="header__link--active" to="/settings"><FontAwesomeIcon icon={faCog} /></NavLink>
            </header>
        );
    }
}

export default Header;