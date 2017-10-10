const Actions = {
	SELECT_BOOK_DETAIL: 'select book detail',
}

export function selectBookDetail(bookDetail) {
	return { type: Actions.SELECT_BOOK_DETAIL, bookDetail }
}

export function reduce(state={}, action) {
	const { type, ...payload } = action

	switch(action.type) {
		case Actions.SELECT_BOOK_DETAIL:
			return {...state, ...payload, }
		default:
			return state
	}
}
