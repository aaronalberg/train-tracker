import React from 'react';
import {Link, Redirect} from "react-router-dom";

class Station extends React.Component {

    componentDidMount() {
        /* TODO! call request here and setState to station object */
    }

    render() {
        return(
            <>
                <Redirect to="/"/>
                <div className="container">
                    <div style={{fontSize: "72px", fontWeight: "700", marginTop: "8vh"}}>404</div>
                    <h2 style={{fontSize: "32px", margin: 0}}>Page Not Found</h2>
                    <p style={{fontSize: "24px"}}>
                        Sorry, this page was probably moved or never existed!
                        <br /><br />
                        If you were not redirected automatically <Link to="/">click here</Link> to return to the home screen
                    </p>
                </div>
            </>
        );
    }
}

export default Station;