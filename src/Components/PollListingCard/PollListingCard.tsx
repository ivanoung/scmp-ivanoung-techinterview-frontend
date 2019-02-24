// Importing modules from library
import * as React from "react";

// Importing styling and static assets
import { Col } from "reactstrap";
import "./PollListingCard.css";
import pieIcon from "./pieIcon.png";

// Importing presentation components

// Importing assisting utility functions
// Importing interfaces from module
import {
    IPollListingCardProps,
    IPollListingCardStates
} from "../../Interfaces/interfaces";
import { withRouter } from "react-router";

// Component
class PollListingCard extends React.Component<
    IPollListingCardProps,
    IPollListingCardStates
> {
    constructor(props: IPollListingCardProps) {
        super(props);

        this.state = {
            currentDate: new Date(this.props.publishedDate * 1000)
        };
    }

    public toPage = () => {
        this.props.history.push(`/polls/${this.props.id}`);
    };

    public render() {
        return (
            <Col xs="12" md="6">
                <div onClick={this.toPage} className="w-100 pollCard">
                    <div className="pollCard__left">
                        <img src={pieIcon} alt="" />
                    </div>
                    <div className="pollCard__right">
                        <h3>{this.state.currentDate.toDateString()}</h3>
                        <p>{this.props.title}</p>
                    </div>
                </div>
            </Col>
        );
    }
}

export default withRouter(PollListingCard as any);
