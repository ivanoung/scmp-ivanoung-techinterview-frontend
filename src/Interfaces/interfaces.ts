import * as History from "history";

export interface IPollListingCardProps {
    // handling routes
    history: History.History;

    //Input props
    id: number;
    title: string;
    publishedDate: number;
    answer: IPollListingCardPropsAnswer;
}

export interface IPollListingCardStates {
    currentDate: Date;
}

export interface IPollListingCardPropsAnswer {
    type: string;
    options: IPollListingCardPropsAnswerOptions[];
}
export interface IPollListingCardPropsAnswerOptions {
    id: number;
    label: string;
}
