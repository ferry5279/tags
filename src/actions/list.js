import api from '@/services/api'
import { post } from '@/utils/request'
export function getList(option) {
    return {
        type: 'LIST_DATA',
        payload: post(api.listPage, option)
    }
}