const Actions = {
	SELECT_BOOK: 'select book detail',
}

export function selectBook(selectedBook) {
	return { type: Actions.SELECT_BOOK, selectedBook }
}

export function reduce(state={}, action) {
	const { type, ...payload } = action

	switch(action.type) {
		case Actions.SELECT_BOOK:
			return {...state, ...payload, }
		default:
			return state
	}
}
