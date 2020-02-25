import React from 'react';
import AddExpense from "./AddExpense";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        expenses: [],
        modalIsOpen: false
    }
    handleRemoveExpense = (expense) => {
        this.setState((prev) => ({
            expenses: prev.expenses.filter((item, i) => expense != i)
        }));
    }
    handleToggleModal = () => {
        this.setState((prev) => ({ modalIsOpen: !prev.modalIsOpen }));
    }
    handleAddExpense = (values) => {
        this.setState((prev) => ({ expenses: prev.expenses.concat([values]) }))
    }
    handleSumExpenses = () => {
        let sum = 0;
        this.state.expenses.map((el) => sum += el[0])

        return sum;
    }
    setCurrentData = () => {
        let data = new Date();
        const polishDays = {
            1: "Poniedziałek",
            2: "Wtorek",
            3: "Środa",
            4: "Czwartek",
            5: "Piątek",
            6: "Sobota",
            7: "Niedziela"
        }
        const day = polishDays[data.getDay().toString()];
        let dataString = `${data.getDate()}.${data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth()}.${data.getFullYear()} - ${day}`;

        return dataString;
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("expenses");
            const expenses = JSON.parse(json);

            if (expenses) {
                this.setState(() => ({ expenses }));
            }
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.expenses.length !== this.state.expenses.length) {
            const json = JSON.stringify(this.state.expenses);
            localStorage.setItem("expenses", json);
        }
    }
    render() {
        return (
            <div>
                <div className="home__title">
                    <h2>Dzisiejsze wydatki</h2>
                    <p className="home__data">{this.setCurrentData()}</p>
                </div>


                <ul className="home__list">
                    {
                        this.state.expenses.map((el, index) => (
                            <li className="home__list__item" key={`expense-${index}`}>
                                <span className="c-1 list__number">{index + 1}</span>
                                <span className="c-2">{el[0]} zł </span>
                                <span className="c-8 home__list__item__description">{el[1]} </span>
                                <button className="c-1 list__item--delete" onClick={() => { this.handleRemoveExpense(index) }}>X</button>
                            </li>
                        ))
                    }
                </ul>

                <div className="home__sum">
                    <h3>Suma: {this.handleSumExpenses()} zł</h3>

                    <button
                        className="add-expense"
                        onClick={this.handleToggleModal}
                    >
                        <div>+</div>
                    </button>
                </div>




                <AddExpense
                    handleAddExpense={this.handleAddExpense}
                    handleToggleModal={this.handleToggleModal}
                    modalIsOpen={this.state.modalIsOpen}
                />
            </div>
        )
    }
}

export default Home;