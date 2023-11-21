# Project Repository

## Description of the Project

We propose to build a secondhand goods trading platform targeting college students specifically. College students, who often possess a limited amount of disposable income, are always circumscribed by a humble budget when they are adding school supplies, buying furniture, or making purchases in general. Therefore, we will establish a platform for college students to buy and sell reliable second-hand products with a budget-friendly price tag.

## Product Vision Statement
Empowering college students to buy, sell, and connect effortlessly, ensuring affordability and sustainability at the heart of every exchange.

## Core Team Members

- Anita Ye: [GitHub - Anita Ye](https://github.com/anitayyc)
- Siqi Wang: [GitHub - Siqi Wang](https://github.com/SiqiiW)
- Anthony Li: [GitHub - Anthony Li](https://github.com/anthonyLi3317)
- Steven Li: [GitHub - Steven Li](https://github.com/ZiliangLi2002)

## Assigned Roles

The roles of product owner and scrum master will be rotated throughout the semester:

### Sprint 1

- **Product Owner:** Anthony Li
- **Scrum Master:** Steven Li

### Sprint 2

- **Product Owner:** Anita Ye
- **Scrum Master:** Siqi Wang

### Sprint 3

- **Product Owner:** Siqi Wang
- **Scrum Master:** Anita Ye

## History of the project

The concept for this project emerged from personal experiences and observations of college life. We recognized the financial constraints faced by many college students and identified a gap in the market for a dedicated second-hand trading platform. Our team united with the shared vision of making college life more affordable and sustainable, leading to the inception of this project.

## Contribution

We welcome all forms of contributions from code to design or even ideas! To get started, please read our [CONTRIBUTING.md](CONTRIBUTING.md).

## Instructions for building and testing (updating)

### Clone the source code from Github

1. Run ``git clone https://github.com/agiledev-students-fall2023/4-final-project-secondhand-goods-trading-platform`` in the source control bar to create a local repository in your desired folder.
1. Install [Node.js](https://nodejs.org/en) on its offical website if you don’t have it installed on your computer.
1. Open your cloned folder in VS Code.

### Run the database

First of all, please create a `.env` file in both `front-end` and `back-end` folders.

Copy the `.env.example` into your `.env`.

To quickly set up a MongoDB database for use with this app, we use [Docker](https://www.docker.com), which must be

- install and run [docker desktop](https://www.docker.com/get-started)
- create a [dockerhub](https://hub.docker.com/signup) account

Start up a MongoDB database:

- run command, `docker run --name mongodb_dockerhub -p 27018:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret -d mongo:latest`

You now have a MongoDB database running on `localhost` port `27018`, with an `admin` user account with password, `password`.

### Running and Testing the Front End

1. Open a new terminal (Git Bash).
1. Navigate into the front-end directory (use ``cd ../`` to back to main folder and use ``cd front-end``).
1. Run ``npm install`` and ``npm start`` to develop, navigate, and test the front end.

### Running and Testing the Backend Server

1. Open a new terminal (Git Bash).
1. Navigate into the back-end directory (use ``cd ../`` to back to main folder and use ``cd back-end``).
1. Run ``npm install``.
1. Run ``npm start`` to set the backend server running. Or, run ``npm test`` to see the results of all unit/integration tests.

## Links to any additional Markdown documents or web pages that may be relevant reading about the project

[Link to our UX Design Prototype](UX-DESIGN.md)

