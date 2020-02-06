import React from 'react';
import StationCard from "../../Components/Cards/StationCard/StationCard";
import MapFrame from "../../Components/Core/MapFrame/MapFrame";
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
                <MapFrame />
                <div className="container">
                    <h2>Near Me</h2>
                    <StationCard
                        name="Alewife"
                        lines={["red","g","g"]}
                        dist={0.7}
                        id={1}
                    />
                </div>
            </>
        );
    }
}

export default Station;