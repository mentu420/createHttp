import axios from 'axios'
import { refreshToken } from '@/api/user/fetchToken'

import { compileSign } from './compileSign'


axios.defaults.timeout = 2500;
axios.defaults.headers.post['Content-Type'] = 'application/json';


// const REFRESH_STATUS = {
//     START: 0,
//     REFRESHING: 1,
//     END: 2,
//     COUNT: 0,
// }


// class CreateHttp {
//     constructor(props) {
//         // 初始状态
//         this._status = status.pending;
//         this._value = null;  // 记录resolve函数传入的参数
//         this._error = null;  // 记录reject函数传入的参数

//         // 收集成功状态要执行的函数
//         this.resolvedArr = [];
//         // 收集失败状态要执行的函数
//         this.rejectedArr = [];

//         this._handler(func)
//     }

// }

// const createHttp = (requestType, tokenName = 'token') => ({ url, params, config }) => {
    

//     refreshToken(tokenName).then(token => {
//         let haeader = {
//             Authorization: `Bearer ${token}`,
//             sign: compileSign(params, token)
//         };

//         // let promise = requestType === 'GET' ? axios.get(url, { params, ...config, haeader }) : axios.post(url, data = params, { ...config, haeader })
        
//         // return promise()

//     }).catch(err => {
//         //这里进行刷新token的异常处理

//     })

// }

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