import { message } from 'antd'
const initialState = {
    login_data: {},
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_LOGIN':
            message.info(payload.message)
            return {...state, login_data: payload.data }
        case 'FETCH_REG':
            message.info(payload.info)
            return {...state }
        default:
            return state
    }
}