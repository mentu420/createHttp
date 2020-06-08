import axios from 'axios'
import { refreshToken } from '@/api/user/fetchToken'
import Storage from '@/utils/storage/'
import { compileSign } from './compileSign'


axios.defaults.timeout = 2500;
axios.defaults.headers.post['Content-Type'] = 'application/json';


const REFRESH_STATUS = {
    START: 0,
    REFRESHING: 1,
    END: 2,
    COUNT: 0,
}


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
//     fetch()
// }   

const createHttp = (requestType, tokenName = 'token') => ({ url, params, config }) => {

    this.status = null

    

    return new Promise((resolve, reject) => {
        let { access_token, terminationTime, refresh_token } = storage.fetch(tokenName)
        let now = new Date().getTime()
        if (now - terminationTime >= 0) {
            this.status = REFRESH_STATUS.START
            refreshToken(tokenName).then(token => {
                this.status = REFRESH_STATUS.END
                let haeader = {
                    Authorization: `Bearer ${token}`,
                    sign: compileSign(params, token)
                };



                // return promise()

            }).catch(err => {
                //这里进行刷新token的异常处理

            })
        } else {
            let haeader = {
                Authorization: `Bearer ${access_token}`,
                sign: compileSign(params, access_token)
            };

        }
    })
}


// //默认cdtoken
// /**
//  * GET 请求
//  * @param url
//  * @param params
//  * @param config
//  * @returns {{promise: Promise}}
//  */
// export const fetchHttp = createHttp('GET')


// /**
//  * POST 请求
//  * @param url
//  * @param params
//  * @param config
//  * @returns {{promise: Promise}}
//  */
// export const getHttp = createHttp('POST')


// /**
//  * GET 请求
//  * @param url
//  * @param params
//  * @param config
//  * @returns {{promise: Promise}}
//  */
// export const fetchHttpFromCM = createHttp('GET', 'cmToken')


// /**
//  * POST 请求
//  * @param url
//  * @param params
//  * @param config
//  * @returns {{promise: Promise}}
//  */
// export const postHttpFromCM = createHttp('POST', 'cmToken')