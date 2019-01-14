import moment from 'moment';
import filterReducer from '../../reducers/filters';
//
//Filter Reducer
//

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set up sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
})

test('should set up sort by date', () => {
    const currentState = {
        sortBy: 'amount',
        text: '',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('should set up filter by text', () => {
    const text = 'house';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);

})

test('should set up filter by start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(startDate);

})

test('should set up filter by end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(endDate);

})