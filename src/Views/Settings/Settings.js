import React from 'react';
import {connect} from "react-redux";
import './Settings.css';

class Settings extends React.Component {
    state = {
        selectedTheme: -1
    };

    componentDidMount() {
        this.setState(
            {
                ...this.state,
                selectedTheme: this.props.theme
            }
        )
    }

    // onClick={(e) => {e.preventDefault(); this.setTheme(0)}}

    handleThemeChange = changeEvent => {
        this.setState({
            selectedTheme: changeEvent.target.value
        });
        this.props.dispatch({ type: "UPDATE_THEME", theme: changeEvent.target.value });
    };


    render() {
        return (
            <div className="container">
                <h4>Theme:</h4>
                <div id="theme-picker-wrapper">
                    <label
                        htmlFor="0"
                        className="theme-picker"
                        style={{backgroundColor: "#2A6FE1"}}
                    />
                    <input
                        type="radio"
                        name="theme-1"
                        value={0}
                        id="0"
                        onChange={this.handleThemeChange}
                        checked={this.state.selectedTheme === 0}
                    />
                    <label
                        htmlFor="1"
                        className="theme-picker"
                        style={{backgroundColor: "#4caf50"}}
                    />
                    <input
                        type="radio"
                        name="theme-2"
                        value={1}
                        className="theme-picker"
                        id="1"
                        onChange={this.handleThemeChange}
                        checked={this.state.selectedTheme === 1}
                    />
                    <label
                        htmlFor="2"
                        className="theme-picker"
                        style={{backgroundColor: "#ff6f00"}}
                    />
                    <input
                        type="radio"
                        name="theme-3"
                        value={2}
                        className="theme-picker"
                        id="2"
                        onChange={this.handleThemeChange}
                        checked={this.state.selectedTheme === 2}
                    />
                    <label
                        htmlFor="3"
                        className="theme-picker"
                        style={{backgroundColor: "#795548"}}
                    />
                    <input
                        type="radio"
                        name="theme-4"
                        value={3}
                        className="theme-picker"
                        id="3"
                        onChange={this.handleThemeChange}
                        checked={this.state.selectedTheme === 3}
                    />
                    <label
                        htmlFor="4"
                        className="theme-picker"
                        style={{backgroundColor: "#673ab7"}}
                    />
                    <input
                        type="radio"
                        name="theme-5"
                        value={4}
                        className="theme-picker"
                        id="4"
                        onChange={this.handleThemeChange}
                        checked={this.state.selectedTheme === 4}
                    />
                    <label
                        htmlFor="5"
                        className="theme-picker"
                        style={{backgroundColor: "#4ecca3"}}
                    />
                    <input
                        type="radio"
                        name="theme-6"
                        value={5}
                        className="theme-picker"
                        id="5"
                        onChange={this.handleThemeChange}
                        checked={this.state.selectedTheme === 5}
                    />
                </div>
                <h4>About</h4>
                <p>Copyright &copy; 2020 Craftdog Studios</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    favoriteStations: state.favoriteStations,
    theme: state.theme
});

export default connect(mapStateToProps)(Settings);