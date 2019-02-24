// Importing modules from library
import * as React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// Importing styling and static assets
import { Jumbotron, Container, Row, Col, Card } from "reactstrap";
import "./SinglePoll.css";

// Importing presentation components

// Importing assisting utility functions
// Importing interfaces from module

// States and Props
// interface ITemplateProps {}
// interface ITemplateState {}

// Test data
const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
];

// // Component
export default class SinglePoll extends React.Component {
    //   constructor() {
    //     // super();
    //   }

    public render() {
        return (
            <div>
                <Container>
                    <h1 className="">
                        In bitcoin worth the time and money that mining
                        requires?
                    </h1>
                    <hr />
                    <span>PUBLISHED: Wednesday, 17 January, 2018, 2:07pm</span>
                </Container>

                <Container className="poll">
                    <Card className="poll__card bg-light">
                        <Row>
                            <Col
                                className="poll__buttons d-flex align-items-center"
                                xs="12"
                                sm="8"
                            >
                                <button className="pollbutton yesbutton">
                                    Yes
                                </button>
                                <button className="pollbutton nobutton">
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
                                            data={data01}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            label
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Col>
                        </Row>
                        <span>Total number of votes recorded: 182</span>
                    </Card>
                </Container>
            </div>
        );
    }
}
