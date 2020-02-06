import React from 'react';
import './LineIndicator.css';
import {lines} from '../../../static/constants'

class Station extends React.Component {
    state = {

    };

    mapLineToColor = (lineID) => {
        for (var i in lines) {
            if (lines[i].id === lineID) return lines[i].color
        }
        return "#000000";
    };

    componentDidMount() {
        /* TODO! call request here and setState to station object */
    }

    render() {
        return(
            <span className="line-indicator" style={{backgroundColor: this.mapLineToColor(this.props.line)}}>
                <span className="line-indicator-val">{this.props.branch}</span>
            </span>
        );
    }
}

export default Station;