import React from 'react';
import './Nav.css';
import {Link, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faChevronLeft, faStar as Starred } from '@fortawesome/free-solid-svg-icons';
import { faStar as unStarred } from '@fortawesome/free-regular-svg-icons';

class Nav extends React.Component {

    changeTitle = () => {
        if (window.location.pathname.includes('/station/')) {
            return {
                leftButtonIcon: faChevronLeft,
                leftButtonLink: "/",
                rightButtonLink: "favorite",
                rightButtonIcon: unStarred,
                title: 'Station'
            };
        } else if (window.location.pathname.includes('/train/')) {
            return {
                leftButtonIcon: faChevronLeft,
                leftButtonLink: "/station/1",
                rightButtonLink: "",
                rightButtonIcon: null,
                title: 'Train'
            };
        } else if (window.location.pathname === '/settings') {
            return {
                rightButtonLink: "/search",
                rightButtonIcon: null,
                leftButtonIcon: faChevronLeft,
                leftButtonLink: "/",
                title: 'Settings'
            };
        } else {
            return {
                rightButtonLink: "/search",
                rightButtonIcon: faSearch,
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
            <a className="button search" to={navInfo.rightButtonLink}>
                <FontAwesomeIcon icon={navInfo.rightButtonIcon} />
            </a>
          </nav>
        );
    }
}

export default withRouter(Nav);