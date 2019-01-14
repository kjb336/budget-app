import selectExpenses from '../../selectors/expenses'
import moment from 'moment';
import expenses from '../fixtures/expenses'


//Get visible Expenses

//textMatch
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ]);
});

//startDateMatch
test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[0],

    ]);
})


//endDateMatch
test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[1]

    ]);
})

//SortBy Date
test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[0], expenses[1],

    ]);
})

//SortBy Amount
test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[1], expenses[2], expenses[0]

    ]);
})
