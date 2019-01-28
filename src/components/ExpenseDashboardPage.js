import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';

const ExpenseDashboardPage = (props) => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />

        <ExpenseList />

    </div>
);



export default ExpenseDashboardPage;  