# SCMP - Ivan Oung's Technical Test

## Tech stack

Tech stack applied to the application.

-   Frontend: React, Typescript & Redux
-   Backend: Node.js
-   Storage: PostgreSQL
-   Charting : Rechart

## Running the programm

To run the application, visit the live demo at: [scmpivan.surge.sh](http://scmpivan.surge.sh/)

---OR---

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

Things that's yet to be completed are:

-   Dynamic pathings and routing
-   Test cases
-   Rest API
-   Database storage
