import expenseReducer from '../../reducers/expnses'
//
// Expense Reducer
//


test('should set up default expense', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});


test('should set up add expense', () => {
    const action = { type: 'ADD_EXPENSE' };

});




test('should set up edit expense', () => {

});




test('should set up remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE'
    };
});

// const expensesReducerDefaultState = []
// export default (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [...state, action.expense]
//         case 'REMOVE_EXPENSE':
//             return state.filter(({ id }) => id !== action.id);
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     }
//                 } else {
//                     return expense;
//                 }
//             });

//         default: return state;
//     }
// };