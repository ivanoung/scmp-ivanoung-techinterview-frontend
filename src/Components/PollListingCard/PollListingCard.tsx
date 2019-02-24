// Importing modules from library
import * as React from "react";
import * as History from "history";

// Importing styling and static assets
import { Col } from "reactstrap";
import "./PollListingCard.css";
import pieIcon from "./pieIcon.png";

// Importing presentation components

// Importing assisting utility functions
// Importing interfaces from module

// States and Props
interface IPollListingCardProps {
    // handling routes
    history: History.History;

    //Input props
    id: number;
    title: string;
    publishedDate: number;
    answer: IPollListingCardPropsAnswer;
}

interface IPollListingCardStates {
    currentDate: Date;
}

interface IPollListingCardPropsAnswer {
    type: string;
    options: IPollListingCardPropsAnswerOptions[];
}
interface IPollListingCardPropsAnswerOptions {
    id: number;
    label: string;
}

// Component
export default class PollListingCard extends React.Component<
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
                        <h3>{this.state.currentDate.toLocaleString()}</h3>
                        <p>{this.props.title}</p>
                    </div>
                </div>
            </Col>
        );
    }
}
