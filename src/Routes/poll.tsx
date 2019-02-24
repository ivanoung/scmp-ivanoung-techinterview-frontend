import * as React from "react";
import { Switch, Route } from "react-router-dom";

import PollListing from "../Page/PollListing/PollListing";
import SinglePoll1 from "../Page/SinglePoll/SinglePoll";
import SinglePoll2 from "../Page/SinglePoll/SinglePoll";
import SinglePoll3 from "../Page/SinglePoll/SinglePoll";
import SinglePoll4 from "../Page/SinglePoll/SinglePoll";
import SinglePoll5 from "../Page/SinglePoll/SinglePoll";

export default class PollRoutes extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/polls/:id"
                        exact={true}
                        component={SinglePoll1}
                    />
                    <Route
                        path="/polls/:id"
                        exact={true}
                        component={SinglePoll2}
                    />{" "}
                    <Route
                        path="/polls/:id"
                        exact={true}
                        component={SinglePoll3}
                    />{" "}
                    <Route
                        path="/polls/:id"
                        exact={true}
                        component={SinglePoll4}
                    />
                    <Route
                        path="/polls/:id"
                        exact={true}
                        component={SinglePoll5}
                    />
                    <Route path="/" exact={true} component={PollListing} />
                </Switch>
            </div>
        );
    }
}
