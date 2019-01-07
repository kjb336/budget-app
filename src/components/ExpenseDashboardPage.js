import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = (props) => (
    <div>
        This is from my dashboard component

        <ExpenseListFilters />
        <ExpenseList />
    </div>
);



export default ExpenseDashboardPage;  