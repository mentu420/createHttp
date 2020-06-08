import { fetchHttp } from '@/utils/newWork/createHttp'
import { CD_URL } from '@/constants/urlConfig'
import { USER_PATH } from '@/constants/urls'

export const fetchUserinfo = params => {
    return fetchHttp({
        url: CD_URL + USER_PATH.USER_INFO,
        method: 'get',
        params
    })
}
