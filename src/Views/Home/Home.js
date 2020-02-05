import React from 'react';
import StationCard from "../../Components/Cards/StationCard/StationCard";
// import './Home.css';

class Station extends React.Component {
    state = {
        stations: []
    };

    componentDidMount() {
        /* TODO! call request here and setState to station object */
    }

    render() {
        return(
            <>
                <img src="http://via.placeholder.com/1400x400" style={{width: "100%"}} alt=""/>
                <div className="container">
                    <h2>Near Me</h2>
                    <StationCard
                        name="Alewife"
                        lines={["red","green","green"]}
                        dist={0.7}
                        id={1}
                    />
                </div>
            </>
        );
    }
}

export default Station;