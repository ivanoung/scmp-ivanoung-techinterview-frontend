import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import PollRoutes from "./Routes/poll";

class App extends Component {
    render() {
        return (
            <div>
                <PollRoutes />
            </div>
        );
    }
}

export default App;
