import React from 'react';
import './Nav.css';
import {Link, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {

    changeTitle = () => {
        switch(window.location.pathname){
            case '/profile':
                return 'Profile';
            case '/settings':
                return 'Settings';
            default:
                return "Train Tracker"
        }
    };


  render() {
        let title = this.changeTitle();
        return (
          <nav>
            <Link className="button" to="/settings">
                <FontAwesomeIcon icon={faCog} />
            </Link>
            <h1>{title}</h1>
            <a className="button search">
                <FontAwesomeIcon icon={faSearch} />
            </a>
          </nav>
        );
    }
}

export default withRouter(Nav);