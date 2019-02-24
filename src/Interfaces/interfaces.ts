import * as History from "history";

// Poll listing
export interface IPollListingStates {
    totalPollResult: IPollResult[];
}

// Poll Listing Cards
export interface IPollListingCardProps {
    // handling routes
    history: History.History;

    //Input props
    id: number;
    title: string;
    publishedDate: number;
    answer: IPollResultAnswer;
}

export interface IPollListingCardStates {
    currentDate: Date;
}

// Poll Voting Card (Big voting banner with button and chart)
export interface IPollVotingCardProps {
    pollResult: IPollResult;
    voteYes: any;
    voteNo: any;
}

// Raw data json shape
export interface IPollResult {
    //Input props
    id: number;
    title: string;
    publishedDate: number;
    answer: IPollResultAnswer;
}
export interface IPollResultAnswer {
    type: string;
    options: IPollResultOptions[];
}
export interface IPollResultOptions {
    id: number;
    label: string;
    value: number;
}
