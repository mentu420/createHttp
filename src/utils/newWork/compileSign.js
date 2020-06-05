
import CryptoJS from 'crypto-js'

const sortObj = (obj) => {
    let [temp, arr] = [{}, []]
    for (let key in obj) {
        arr.push(key)
    }
    arr = arr.sort()
    for (let i in arr) {
        temp[arr[i]] = obj[arr[i]]
    }
    return temp
}
const compileSign = (obj, token) => {
    // 对象排序
    obj = sortObj(obj)
    let str = ''
    for (let key in obj) {
        if (obj[key] || (obj[key] === 0 || obj[key] === '0')) {
            str = str === '' ? `${key}=${obj[key]}` : `${str}&${key}=${obj[key]}`
        }
    }
    return CryptoJS.SHA1(str + token).toString(CryptoJS.enc.Hex)
}

export { compileSign }