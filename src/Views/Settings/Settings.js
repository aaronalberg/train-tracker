import React from 'react';
import {connect} from "react-redux";

class Settings extends React.Component {

    render() {
        return (
            <div className="container">
                {this.props.theme} {this.props.favoriteStations}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    favoriteStations: state.favoriteStations,
    theme: state.theme
});

export default connect(mapStateToProps)(Settings);