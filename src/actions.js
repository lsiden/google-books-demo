const Actions = {
    LIST_BOOKS: 'list books',
    SELECT_BOOK: 'select book detail',
}

export function listBooks(books) {
    return { type: Actions.SELECT_BOOK, books }
}

export function selectBook(selectedBook) {
    return { type: Actions.SELECT_BOOK, selectedBook }
}

export function reduce(state={}, action) {
    const { type, ...payload } = action

    switch(type) {
    case Actions.LIST_BOOKS:
    case Actions.SELECT_BOOK:
        return {...state, ...payload, }
    default:
        return state
    }
}
