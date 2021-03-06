import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
// const date = new Date();
const now = moment();
export class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount." }));
            //setError state to "Please provide description or amount."
        } else
            this.setState(() => ({ error: "" }));

        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 10,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Desription"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder=" Add a note for your expense (optional)"
                        cols="30" rows="10"
                        value={this.state.note}
                        onChange={this.onNoteChange} >
                    </textarea>
                    <button> Add Expense</button>
                </form>


            </div>
        )
    };
};

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)
