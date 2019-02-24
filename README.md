# SCMP - Ivan Oung's Technical Test

## Tech stack selection

Tech stack applied to the application.

-   Frontend: React, Typescript & Redux
-   Charting : Rechart
-   Backend: Node.js
-   Storage: PostgreSQL

## Running the programm

To build the examples locally, run:

```bash
yarn install
yarn start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

## Code infrastructure

The infrastructure of the codes adhere to the principle of OOP. Pages (views) and reusable components are organized into seperate folders and directories.

Although there was not enough time to implement Sass for a cleaner format for styling sheets, BEM was still choosen to be the naming convention for the styling sheets.

For best maintainability and refactorability, routes and states are isolated under their own folders, just as how I do with other projects. This implementation is best when it comes to scalibility.

## Challenges, progress and completion

### Challenges

Due to the conflict and updates of both chart.js and rechart packages, it took more time to solve the problem. Since the charting is one of the most important features of the application. There is no other way around to sped up the process.

Also, React routing and unit testing with jest are fields where I'm not yet comfortable with, where dynamic pathing with parameters and component unit testing will require a bit more time for full implementation.

### Progress and completion

Within the 4-hour mark, I've completed the following tasks:

-   Webpage
-   Charting
-   Styling
-   Responsive (Mobile/Desktop)

Things that's yet to be completed, and I could've done better, are:

#### Voting

The voting is better handle with Redux, a global centralized state management hub. With redux implementation, pages and components can be reduced into simple presentational component and let the dispatch handle all the state changes and tracking.

#### Chart rendering on state change

The state does update when the user votes, however, futher investigation is required to understand the reason why the chart does not re-render after state change.

#### Dynamic vote options, pathings and routing

The data structure of poll.json suggests that there can me more than 2 options in a poll, and the poll list can grow or shrink upon staffs' request. Improvement based on the current codes is to apply dynamic routing by allowing component accepts different props with the help of React Routes and Redux. The result is easily achieveable by iterating the list of polls with the help of **Array.map.reduce**, same goes with voting options.

#### Test cases, Rest API, Database storage

Regretfully, the test was not fully completed before the time limit. However, Rest API and database storage were being implemented in other projects. Please find this [Github page](https://github.com/cheungdzinyung/DealingRoom) of a previous project on the related request.

[https://github.com/cheungdzinyung/DealingRoom](https://github.com/cheungdzinyung/DealingRoom)
