import React from 'react';
import './LineIndicator.css';

class Station extends React.Component {
    state = {

    };

    componentDidMount() {
        /* TODO! call request here and setState to station object */
    }

    render() {
        return(
            <span className="line-indicator" style={{backgroundColor: this.props.line}}>
                <span className="line-indicator-val">{this.props.branch}</span>
            </span>
        );
    }
}

export default Station;