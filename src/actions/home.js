import { createActions } from 'redux-actions'
import api from '@/services/api'
import { post, get } from '@/utils/request'
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
export default createActions({
    [DEFAULT_DATA]: option => get(api.list),
    [DELL_DATA]: option => post(api.dell, option),
    [SEAR_DATA]: option => post(api.search, option),
    [ADD_DATA]: option => post(api.add, option),
    [EDIT_DATA]: option => post(api.update, option),
    [ADD_TAGS]: option => option,
    [DELETE_TAGS]: option => option,
    [ADD_TAG_KEYS]: option => option,

})