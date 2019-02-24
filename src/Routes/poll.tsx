import * as React from "react";
import { Switch, Route } from "react-router-dom";

// Poll homepage
import PollListing from "../Page/PollListing/PollListing";

// Static poll listed pages
import SinglePoll1 from "../Page/SinglePoll1/SinglePoll1";
import SinglePoll2 from "../Page/SinglePoll2/SinglePoll2";
import SinglePoll3 from "../Page/SinglePoll3/SinglePoll3";
import SinglePoll4 from "../Page/SinglePoll4/SinglePoll4";
import SinglePoll5 from "../Page/SinglePoll5/SinglePoll5";

export default class PollRoutes extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/polls/1"
                        exact={true}
                        component={SinglePoll1}
                    />
                    <Route
                        path="/polls/2"
                        exact={true}
                        component={SinglePoll2}
                    />
                    <Route
                        path="/polls/3"
                        exact={true}
                        component={SinglePoll3}
                    />
                    <Route
                        path="/polls/4"
                        exact={true}
                        component={SinglePoll4}
                    />
                    <Route
                        path="/polls/5"
                        exact={true}
                        component={SinglePoll5}
                    />
                    <Route path="/" exact={true} component={PollListing} />
                </Switch>
            </div>
        );
    }
}
