// Importing modules from library
import * as React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// Importing styling and static assets
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./PollListing.css";

// Importing presentation components
import PollListingCard from "../../Components/PollListingCard/PollListingCard";
import { Doughnut } from "react-chartjs-2";

// Importing assisting utility functions
// Importing interfaces from module
import { IPollListingStates } from "../../Interfaces/interfaces";

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
            testdata: [{ name: "Hi", value: 10 }, { name: "Hi", value: 20 }],
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
                                value: 0
                            },
                            {
                                id: 2,
                                label: "No",
                                value: 0
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
                                value: 0
                            },
                            {
                                id: 4,
                                label: "No",
                                value: 0
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
                                value: 0
                            },
                            {
                                id: 6,
                                label: "Doubtful",
                                value: 0
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
                                value: 0
                            },
                            {
                                id: 8,
                                label: "China",
                                value: 0
                            },
                            {
                                id: 9,
                                label: "Australia",
                                value: 0
                            },
                            {
                                id: 10,
                                label: "Thailand",
                                value: 0
                            },
                            {
                                id: 11,
                                label: "Korea",
                                value: 0
                            },
                            {
                                id: 12,
                                label: "Japan",
                                value: 0
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
                                value: 0
                            },
                            {
                                id: 14,
                                label: "No",
                                value: 0
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
        this.forceUpdate();
    };

    // public voteYes = () => {
    //     let newState = Object.assign({}, this.state.testdata);
    //     newState[0].value = newState[0].value + 1;
    //     this.setState({ testdata: newState });
    //     this.forceUpdate();
    // };

    public voteNo = () => {
        let newState = Object.assign({}, this.state);
        newState.totalPollResult[0].answer.options[1].value =
            newState.totalPollResult[0].answer.options[1].value + 1;
        this.setState(newState);
    };

    public render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Today's Poll</h1>
                        <h3 className="">
                            {this.state.totalPollResult[0].title}
                        </h3>
                        <h3 className="dates">
                            {new Date(
                                1000 *
                                    this.state.totalPollResult[0].publishedDate
                            ).toDateString()}
                        </h3>
                    </Container>

                    <Container className="poll">
                        <Row>
                            <Col
                                className="d-flex align-items-center"
                                xs="12"
                                sm="8"
                            >
                                <button
                                    onClick={this.voteYes}
                                    className="pollbutton yesbutton"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={this.voteNo}
                                    className="pollbutton nobutton"
                                >
                                    No
                                </button>
                            </Col>
                            <Col
                                xs="12"
                                sm="4"
                                className="poll__chart d-flex align-items-center"
                            >
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            // data={this.state.testdata}
                                            data={
                                                this.state.totalPollResult[0]
                                                    .answer.options
                                            }
                                            outerRadius={100}
                                            fill="#001246"
                                            label
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>
                            Total number of values recorded:{" "}
                            {this.state.totalPollResult[0].answer.options
                                .map(item => item.value)
                                .reduce((a, b) => a + b)}
                        </span>
                    </Container>
                </Jumbotron>

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
