import { handleActions } from 'redux-actions'
import {
    DEFAULT_DATA,
    SEAR_DATA,
    DELL_DATA,
    ADD_DATA,
    EDIT_DATA,
    ADD_TAGS,
    DELETE_TAGS,
    ADD_TAG_KEYS
} from '@/constants/actionTypes'
const initialState = {
    data: [],
    tags: [],
    tagKeys: []
}
export default handleActions({
    [DEFAULT_DATA]:
        (state, { type, payload }) => ({...state, data: payload.users }),
    [DELL_DATA]:
        (state, { type, payload }) => ({...state }),
    [EDIT_DATA]:
        (state, { type, payload }) => ({...state }),
    [SEAR_DATA]:
        (state, { type, payload }) => ({...state, data: payload.users }),
    [ADD_DATA]:
        (state, { type, payload }) => ({...state }),
    [ADD_TAGS]: (state, { type, payload }) => {
        return {...state, tags: payload }
    },
    [DELETE_TAGS]: (state, { type, payload }) => {
        let { data, tags, tagKeys } = state;
        const deldata = data.filter(v => {
            if (v.name === payload) return v;
        })
        tags = tags.filter(v => { return v !== payload })
        tagKeys = tagKeys.filter(v => { return v !== deldata[0].id })
        return {...state, tags, tagKeys }
    },
    [ADD_TAG_KEYS]: (state, { type, payload }) => {
        return {...state, tagKeys: payload }
    },
}, initialState)