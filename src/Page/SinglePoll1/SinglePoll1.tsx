// Importing modules from library
import * as React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// Importing styling and static assets
import { Jumbotron, Container, Row, Col, Card } from "reactstrap";
import "./SinglePoll.css";

// Importing presentation components

// Importing assisting utility functions
// Importing interfaces from module
import { IPollVotingCardProps } from "../../Interfaces/interfaces";

// States and Props

// Test data

// // Component
export default class SinglePoll1 extends React.Component<
    {},
    IPollVotingCardProps
> {
    constructor(props: {}) {
        super(props);

        this.state = {
            pollResult: {
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
            voteYes: {},
            voteNo: {}
        };
    }

    public render() {
        return (
            <div className="poll">
                <Container className="poll__header">
                    <h1 className="poll__header__title">
                        {this.state.pollResult.title}
                    </h1>
                    <hr />
                    <div className="poll__header__date">
                        <span className="poll__header__date__text">
                            PUBLISHED:{" "}
                            {new Date(
                                1000 * this.state.pollResult.publishedDate
                            ).toDateString()}
                        </span>
                    </div>
                </Container>

                <Container className="poll__body">
                    <Card className="poll__body__card bg-light">
                        <Row>
                            <Col className="poll__buttons" xs="12" sm="8">
                                <button
                                    onClick={this.state.voteYes}
                                    className="pollbutton yesbutton"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={this.state.voteNo}
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
                                                this.state.pollResult.answer
                                                    .options
                                            }
                                            outerRadius={80}
                                            fill="#001246"
                                            label
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Col>
                        </Row>
                        <span>
                            Total number of values recorded:{" "}
                            {this.state.pollResult.answer.options
                                .map(item => item.value)
                                .reduce((a, b) => a + b)}
                        </span>
                    </Card>
                </Container>
            </div>
        );
    }
}
