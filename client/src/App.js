import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {

        console.log("props", props);
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    // Execute the calls when componnent mounts 
    componentDidMount() {
        this.props.callAPI();
        this.props.callDB();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.props.apiResponse}</p>
                <p className="App-intro">{this.props.dbResponse}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state || { apiResponse: '', dbResponse: '' };
}

const mapDispatchToProps = (dispatch) => {
    return {
        callAPI: () => { dispatch({ type: "GET_API_STATUS" }) },
        callDB: () => { dispatch({ type: "GET_DB_STATUS" }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
