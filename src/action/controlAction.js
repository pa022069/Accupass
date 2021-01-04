export const loadingDone = () => {
	return {
		type: 'LOADING_DONE'
	}
}

export const setContent = (_data) => {
	return {
		type: 'SET_CONTENT',
		data: _data
	}
}

export const setList = (_data) => {
	return {
		type: 'SET_LIST',
		data: _data,
	}
}