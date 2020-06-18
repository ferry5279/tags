const initialState = {
    list: [],
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LIST_DATA':
            return {...state, list: payload.result.list }

        default:
            return state
    }
}