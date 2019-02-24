import * as History from "history";

// Poll listing
export interface IPollListingStates {
    totalPollResult: IPollResult[];
    testdata: any;
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
