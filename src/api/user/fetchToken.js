
import axios from 'axios'
import Storage from '@/utils/storage/'
import { CD_URL, CM_URL } from '@/constants/urlConfig'
import { USER_PATH } from '@/constants/urls'

axios.defaults.timeout = 2500;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


//1:获取token，两种token，CM/CD

const CMTokenParms = {
    client_id: "20200413195200",
    client_secret: "7b9ba606c9bf48ffaf3389366777e31e",
    grant_type: "client_multiuser",
    device_id: localStorage.device_id || getDeviceId()
}

function getDeviceId() {
    let deviceId = new Date().getTime() + (Math.ceil(Math.random() * 10000)).toString()
    localStorage.device_id = deviceId
    return deviceId
}

//获取token
export const fetchToken = (tokenName = 'token', params) => {
    let url = tokenName == 'token' ? `${CD_URL}${USER_PATH.CD_TOKEN}` : `${CM_URL}${USER_PATH.CM_TOKEN}`
    let data = tokenName == 'token' ? params : CMTokenParms
    return axios({ method: 'post', url, params:data })
}

//刷新token
export const refreshToken = (tokenName = 'token') => {
    return new Promise((resolve, reject) => {
        let data = null;
        let url = null
        let { account, pwd, refresh_token } = Storage.fetch(tokenName)
        if (tokenName == 'token') {
            data = { grant_type: 'refresh_token', refresh_token: refresh_token }
            url = `${CD_URL}${USER_PATH.CD_TOKEN}`
        } else {
            data = CMTokenParms
            url = `${CM_URL}${USER_PATH.CM_TOKEN}`
        }
        axios({ method: 'post', url, data }).then(res => {
            if (!res.refresh_token) {
                reject(res)
                return
            }
            let result = Object.assign(res, {
                account: account,
                pwd: pwd,
                createTime: new Date().getTime()
            })
            Storage.save(tokenName, result)
            resolve(res.access_token)
        }).catch(err => {
            reject(err)
        })
    })
}
// export const refreshToken = (tokenName = 'token') => {
//     return new Promise((resolve, reject) => {
//         let { access_token, terminationTime, refresh_token } = storage.fetch(tokenName)

//         let now = new Date().getTime()

//         if (now - terminationTime >= 0) {
//             let data = null;
//             let url = null
//             if (tokenName == 'token') {
//                 data = { grant_type: 'refresh_token', refresh_token: refresh_token }
//                 url = `${CD_URL}${USER_PATH.CD_TOKEN}`
//             } else {
//                 date = CMTokenParms
//                 url = `${CM_URL}${USER_PATH.CM_TOKEN}`
//             }
//             axios({ method: 'post', url, data }).then(res => {
//                 if (!res.refresh_token) {
//                     reject(res)
//                     return
//                 }
//                 let result = Object.assign(res, {
//                     account: token.account,
//                     pwd: token.pwd,
//                     createTime: new Date().getTime()
//                 })
//                 Storage.save(tokenName, result)
//                 resolve(res.access_token)
//             }).catch(err => {
//                 reject(err)
//             })
//         } else {
//             resolve(access_token)
//         }
//     })
// }
