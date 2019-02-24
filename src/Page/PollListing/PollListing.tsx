// Importing modules from library
import * as React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// Importing styling and static assets
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./PollListing.css";
import Card from "reactstrap/lib/Card";
import pieIcon from "./pieIcon.png";

// Importing presentation components

// Importing assisting utility functions
// Importing interfaces from module

// States and Props
// interface ITemplateProps {}
// interface ITemplateState {}

// Test data
const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 }
];

const EXAMPLE_DATA = [
    {
        name: "example1",
        value: 23.4
    },
    {
        name: "example2",
        value: 76.6
    }
];

// // Component
export default class PollListing extends React.Component {
    //   constructor() {
    //     // super();
    //   }

    public render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Today's Poll</h1>
                        <h3 className="">In bitcoin worth the time</h3>
                        <h3 className="dates">17 Jan 2018</h3>
                    </Container>

                    <Container className="poll">
                        <Row>
                            <Col
                                className="d-flex align-items-center"
                                xs="12"
                                sm="8"
                                md="8"
                                lg="8"
                                xl="8"
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
                                md="4"
                                lg="4"
                                xl="4"
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
                    </Container>
                    <Container>
                        <span>Total number of votes recorded: 182</span>
                    </Container>
                </Jumbotron>

                {/* Start of bottom list */}
                <Container>
                    <Row>
                        <Col xs="12" sm="6">
                            <Card>
                                <Row>
                                    <Col xs="3">
                                        <img src={pieIcon} alt="" />
                                    </Col>
                                    <Col xs="9">
                                        <h3>15 Jan,2018</h3>
                                        <p>
                                            Should chatbots replace bumans in
                                            customer service jobs?
                                        </p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6">
                            <Card>
                                <Row>
                                    <Col xs="3">
                                        <img src={pieIcon} alt="" />
                                    </Col>
                                    <Col xs="9">
                                        <h3>15 Jan,2018</h3>
                                        <p>
                                            Should chatbots replace bumans in
                                            customer service jobs?
                                        </p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
