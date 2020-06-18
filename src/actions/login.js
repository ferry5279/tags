import api from '@/services/api'
import { post } from '@/utils/request'
export function getLogin(option) {
    return {
        type: 'FETCH_LOGIN',
        payload: post(api.login, option)
    }
}
export function getReg(option) {
    return {
        type: 'FETCH_REG',
        payload: post(api.reg, option)
    }
}