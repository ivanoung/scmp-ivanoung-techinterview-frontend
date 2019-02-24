import * as React from "react";
import { Switch, Route } from "react-router-dom";

import PollListing from "../Page/PollListing/PollListing";
import SinglePoll from "../Page/SinglePoll/SinglePoll";

export default class PollRoutes extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    {/* <Route
                        path="/polls/:id"
                        exact={true}
                        component={SinglePoll}
                    /> */}

                    <Route path="/" exact={true} component={PollListing} />
                </Switch>
            </div>
        );
    }
}
