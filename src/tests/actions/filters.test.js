import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';
//
//Action genorators
//

//SET_TEXT_FILTER
test('Should set up the text filter with provided text', () => {
    const action = setTextFilter('read');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'read'
    });
});

test('Should set up the text filter with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// //SORT_BY_DATE
test('Should set up the filter to sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});


// //SORT_BY_AMOUNT
test('Should set up the filter to sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

// //SET_START_DATE
test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


// //SET_END_DATE

test('Should generate set start date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});