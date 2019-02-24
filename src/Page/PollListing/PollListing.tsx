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

// States and Props
// interface ITemplateProps {}
// interface ITemplateState {}

// Test data
const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 }
];

const testdata = [
    {
        id: 1,
        title: "Is bitcoin worth the time and money that mining requires?",
        publishedDate: 1516605447,
        answer: {
            type: "Single",
            options: [
                {
                    id: 1,
                    label: "Yes"
                },
                {
                    id: 2,
                    label: "No"
                }
            ]
        }
    },
    {
        id: 2,
        title: "Should chatbots replace humans in customer service jobs?",
        publishedDate: 1516000647,
        answer: {
            type: "Single",
            options: [
                {
                    id: 3,
                    label: "Yes"
                },
                {
                    id: 4,
                    label: "No"
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
                    label: "Hopeful"
                },
                {
                    id: 6,
                    label: "Doubtful"
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
                    label: "Hong Kong"
                },
                {
                    id: 8,
                    label: "China"
                },
                {
                    id: 9,
                    label: "Australia"
                },
                {
                    id: 10,
                    label: "Thailand"
                },
                {
                    id: 11,
                    label: "Korea"
                },
                {
                    id: 12,
                    label: "Japan"
                }
            ]
        }
    },
    {
        id: 5,
        title: "Will new benefits encourage you to study or work in mainland?",
        publishedDate: 1515309447,
        answer: {
            type: "Single",
            options: [
                {
                    id: 13,
                    label: "Yes"
                },
                {
                    id: 14,
                    label: "No"
                }
            ]
        }
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
                <Container className="">
                    <Row>
                        {testdata.map((poll, i) => (
                            <PollListingCard {...poll} />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
