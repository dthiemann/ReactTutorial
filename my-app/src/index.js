import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: "X" })}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />, document.getElementById("root"));

function playingWithArrays() {
    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2003 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
    ]

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    /* 
    forEach 
    */

    // Standard for loop
    // for (let i = 0; i < companies.length; i++) {
    //     console.log(companies[i])
    // }
    companies.forEach(function (company, index, companies) {
        // console.log(company);
    });


    /* 
    filter 
    */

    // Get 21 and older

    // let canDrink = []; // ages 21 and over
    // for (let i = 0; i < ages.length; i++) {
    //     if (ages[i] >= 21) {
    //         canDrink.push(ages[i]);
    //     }
    // }

    // const canDrink = ages.filter(function (age) {
    //     return age >= 21;
    // })
    const canDrink = ages.filter(age => age >= 21);
    // console.log(canDrink);

    // Filter retail companies
    const retailCompanies = companies.filter(company => company.category === "Retail");
    // console.log(retailCompanies);

    // Filter all companies from the 80's
    const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
    // console.log(eightiesCompanies);

    // Filter all companies that lasted at least 10 years
    const decadeLongCompanies = companies.filter(company => (company.end - company.start) >= 10);
    // console.log(decadeLongCompanies);


    /* map */
    // Create array of company names
    const companyNames = companies.map(company => company.name);
    // console.log(companyNames);

    const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
    // console.log(testMap);

    const agesSquare = ages.map(age => Math.sqrt(age));
    const agesTimesTwo = ages.map(age => age * 2);
    // console.log(agesSquare);
    // console.log(agesTimesTwo);

    /* sort */

    // Sort companies by start year

    // const sortedCompanies = companies.sort(function (company1, company2) {
    //     if (company1.start > company2.start) {
    //         return 1;
    //     }
    //     else {
    //         return -1;
    //     }
    // });

    const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
    // console.log(sortedCompanies);

    // sort ages
    // const sortAges = ages.sort();
    // console.log(sortAges); // "5" is out of place - just looks at first number

    const sortAges = ages.sort((a, b) => a - b);

    /* reduce */

    // Add all ages together
    // let ageSum = 0;
    // for (let i = 0; i < ages.length; i++) {
    //     ageSum += ages[i];
    // }

    // const ageSum = ages.reduce(function (total, age) {
    //     return total + age;
    // }, 0);

    const ageSum = ages.reduce((total, age) => total + age, 0);
    // console.log(ageSum);

    // Get total years for all companies
    const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
    console.log(totalYears);

}

playingWithArrays();