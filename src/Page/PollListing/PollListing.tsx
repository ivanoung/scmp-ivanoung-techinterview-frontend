// Importing modules from library
import * as React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// Importing styling and static assets
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./PollListing.css";

// Importing presentation components
import PollListingCard from "../../Components/PollListingCard/PollListingCard";

// Importing assisting utility functions
// Importing interfaces from module
import { IPollListingStates } from "../../Interfaces/interfaces";
import PollVotingCard from "../../Components/PollVotingCard/PollVotingCard";

// States and Props
// interface ITemplateProps {}
// interface ITemplateState {}

// Test data

// // Component
export default class PollListing extends React.Component<
    {},
    IPollListingStates
> {
    constructor(props: {}) {
        super(props);

        this.state = {
            totalPollResult: [
                {
                    id: 1,
                    title:
                        "Is bitcoin worth the time and money that mining requires?",
                    publishedDate: 1516605447,
                    answer: {
                        type: "Single",
                        options: [
                            {
                                id: 1,
                                label: "Yes",
                                value: 12
                            },
                            {
                                id: 2,
                                label: "No",
                                value: 2
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    title:
                        "Should chatbots replace humans in customer service jobs?",
                    publishedDate: 1516000647,
                    answer: {
                        type: "Single",
                        options: [
                            {
                                id: 3,
                                label: "Yes",
                                value: 3
                            },
                            {
                                id: 4,
                                label: "No",
                                value: 4
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    title: "How are we feeling about 2018?",
                    publishedDate: 1515568647,
                    answer: {
                        type: "Single",
                        options: [
                            {
                                id: 5,
                                label: "Hopeful",
                                value: 5
                            },
                            {
                                id: 6,
                                label: "Doubtful",
                                value: 6
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    title:
                        "Which country/region have you ever visited? (Select all that applies)",
                    publishedDate: 1515482247,
                    answer: {
                        type: "Multi",
                        options: [
                            {
                                id: 7,
                                label: "Hong Kong",
                                value: 2
                            },
                            {
                                id: 8,
                                label: "China",
                                value: 2
                            },
                            {
                                id: 9,
                                label: "Australia",
                                value: 2
                            },
                            {
                                id: 10,
                                label: "Thailand",
                                value: 2
                            },
                            {
                                id: 11,
                                label: "Korea",
                                value: 2
                            },
                            {
                                id: 12,
                                label: "Japan",
                                value: 2
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    title:
                        "Will new benefits encourage you to study or work in mainland?",
                    publishedDate: 1515309447,
                    answer: {
                        type: "Single",
                        options: [
                            {
                                id: 13,
                                label: "Yes",
                                value: 3
                            },
                            {
                                id: 14,
                                label: "No",
                                value: 9
                            }
                        ]
                    }
                }
            ]
        };
        this.voteYes = this.voteYes.bind(this);
    }

    public voteYes = () => {
        let newState = Object.assign({}, this.state);
        newState.totalPollResult[0].answer.options[0].value =
            newState.totalPollResult[0].answer.options[0].value + 1;
        this.setState(newState);
    };

    public voteNo = () => {
        let newState = Object.assign({}, this.state);
        newState.totalPollResult[0].answer.options[1].value =
            newState.totalPollResult[0].answer.options[1].value + 1;
        this.setState(newState);
    };

    public render() {
        return (
            <div>
                <PollVotingCard
                    pollResult={this.state.totalPollResult[0]}
                    voteNo={this.voteNo}
                    voteYes={this.voteYes}
                />
                {/* Start of bottom list */}
                <Container className="">
                    <Row>
                        {this.state.totalPollResult.map((poll, i) => (
                            <PollListingCard {...poll} />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
