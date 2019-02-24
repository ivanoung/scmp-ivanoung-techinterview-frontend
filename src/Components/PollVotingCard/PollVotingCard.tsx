// Importing modules from library
import * as React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// Importing styling and static assets
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./PollVotingCard.css";

// Importing presentation components

// Importing assisting utility functions
// Importing interfaces from module
import { IPollVotingCardProps } from "../../Interfaces/interfaces";

// States and Props
// interface ITemplateProps {}
// interface ITemplateState {}

// Test data

// // Component
export default class PollVotingCard extends React.Component<
    IPollVotingCardProps
> {
    constructor(props: IPollVotingCardProps) {
        super(props);
    }

    public render() {
        return (
            <Jumbotron>
                <Container>
                    <h3 className="">{this.props.pollResult.title}</h3>
                    <h3 className="dates">
                        {new Date(
                            1000 * this.props.pollResult.publishedDate
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
                                onClick={this.props.voteYes}
                                className="pollbutton yesbutton"
                            >
                                Yes
                            </button>
                            <button
                                onClick={this.props.voteNo}
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
                                        data={
                                            this.props.pollResult.answer.options
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
                        {this.props.pollResult.answer.options
                            .map(item => item.value)
                            .reduce((a, b) => a + b)}
                    </span>
                </Container>
            </Jumbotron>
        );
    }
}
