const debug = require('debug')('google-books-demo:actions')

export const Actions = {
    QUERY_PENDING: 'query pending',
    PROCESS_QUERY_RESPONSE: 'process response',
    PROCESS_QUERY_ERROR: 'process server error',
    LIST_BOOKS: 'list books',
    SELECT_BOOK: 'select book detail',
};

export function queryPending(query) {
    return { type: Actions.QUERY_PENDING, queryPending: true, errorOccurred: false }
}

export function processQueryError(errMsg) {
    return { type: Actions.PROCESS_QUERY_ERROR, queryPending: false, errorOccurred: errMsg }
}

export function processQueryResponse(books) {
    return { type: Actions.PROCESS_QUERY_RESPONSE, books, queryPending: false, errorOccurred: false }
}

export function selectBook(selectedBook) {
    return { type: Actions.SELECT_BOOK, selectedBook }
}

export function reduce(state={}, action) {
    const { type, ...payload } = action

    switch(type) {
    case Actions.QUERY_PENDING:
    case Actions.PROCESS_QUERY_ERROR:
    case Actions.PROCESS_QUERY_RESPONSE:
    case Actions.LIST_BOOKS:
    case Actions.SELECT_BOOK:
        return {...state, ...payload, }
    default:
        return state
    }
}
