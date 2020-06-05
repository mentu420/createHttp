import axios from 'axios'
import { refreshToken } from '@/api/user/fetchToken'
import Storage from '@/utils/storage/'
import { compileSign } from './compileSign'
import { API_URL, CD_URL, CM_URL, COMMON_URL, } from '@/constants/urlConfig'

axios.defaults.timeout = 2500;
axios.defaults.headers.post['Content-Type'] = 'application/json';




const createHttp = (requestType, tokenName = 'token') => ({ url, params, config }) => {

    refreshToken(tokenName).then(token => {
        let haeader = {
            Authorization: `Bearer ${token}`,
            sign: compileSign(options.params, token)
        };

        let promise = requestType === 'GET' ? axios.get(url, { params, ...config, haeader }) : axios.post(url, data = params, { ...config, header })

        return promise()

    }).catch(err => {
        //这里进行刷新token的异常处理

    })

}

//默认cdtoken
/**
 * GET 请求
 * @param url
 * @param params
 * @param config
 * @returns {{promise: Promise}}
 */
export const fetchHttp = createHttp('GET')


/**
 * POST 请求
 * @param url
 * @param params
 * @param config
 * @returns {{promise: Promise}}
 */
export const getHttp = createHttp('POST')


/**
 * GET 请求
 * @param url
 * @param params
 * @param config
 * @returns {{promise: Promise}}
 */
export const fetchHttpFromCM = createHttp('GET', 'cmToken')


/**
 * POST 请求
 * @param url
 * @param params
 * @param config
 * @returns {{promise: Promise}}
 */
export const postHttpFromCM = createHttp('POST', 'cmToken')