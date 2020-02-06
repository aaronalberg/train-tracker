import React from 'react';
import './Station.css';
import TrainCard from "../../Components/Cards/TrainCard/TrainCard";

class Station extends React.Component {
    state = {

    };

    componentDidMount() {
        /* TODO! call request here and setState to station object */
    }

    render() {
        return(
            <div className="container">
                <h1>{this.state.name}</h1>
                <>
                    <TrainCard
                        name="Red Line"
                        dest="Ashmont/Braintree"
                        eta={0}
                        id={1}
                    />
                    <TrainCard
                        name="Red Line"
                        dest="Ashmont/Braintree"
                        eta={8}
                        id={2}
                    />
                    <TrainCard
                        name="Red Line"
                        dest="Ashmont/Braintree"
                        eta={11}
                        id={3}
                    />
                    <TrainCard
                        name="Red Line"
                        dest="Ashmont/Braintree"
                        eta={11}
                        id={3}
                    />
                    <TrainCard
                        name="Red Line"
                        dest="Ashmont/Braintree"
                        eta={11}
                        id={3}
                    />
                    <TrainCard
                        name="Red Line"
                        dest="Ashmont/Braintree"
                        eta={11}
                        id={3}
                    />
                </>
            </div>
        );
    }
}

export default Station;