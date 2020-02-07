import React from 'react';
import './Nav.css';
import {Link, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {

    changeTitle = () => {
        switch(window.location.pathname){
            case '/station/1':
                return {
                    leftButtonIcon: faChevronLeft,
                    leftButtonLink: "/",
                    title: 'Train'
                };
            case '/settings':
                return {
                    leftButtonIcon: faChevronLeft,
                    leftButtonLink: "/",
                    title: 'Settings'
                };
            default:
                return {
                    leftButtonIcon: faCog,
                    leftButtonLink: "/settings",
                    title: "Train Tracker"
                }
        }
    };


  render() {
        let navInfo = this.changeTitle();
        return (
          <nav>
            <Link className="button" to={navInfo.leftButtonLink}>
                <FontAwesomeIcon icon={navInfo.leftButtonIcon} />
            </Link>
            <h1>{navInfo.title}</h1>
            <a className="button search">
                <FontAwesomeIcon icon={faSearch} />
            </a>
          </nav>
        );
    }
}

export default withRouter(Nav);