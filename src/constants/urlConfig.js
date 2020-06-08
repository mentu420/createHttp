const host = {
    dev: {
        API_URL: 'http://10.12.0.117:9880',
        CD_URL: 'http://10.12.0.117:9880/cdapi',
        CM_URL: 'http://10.12.0.117:9880/consumer-admin',
        COMMON_URL: 'http://10.12.0.117:9880/cd-sys-web',
    },
    pre: {
        API_URL: 'https://mobiletest.derucci.net',
        CD_URL: 'https://agencytest.derucci.net/api',
        CM_URL: 'https://mobiletest.derucci.net',
        COMMON_URL: 'https://agencytest.derucci.net',
    },
    prd: {
        API_URL: 'https://agency.derucci.com',
        CD_URL: 'https://agency.derucci.com/api',
        CM_URL: 'https://derucci.net',
        COMMON_URL: 'https://agency.derucci.com',
    }
}

let ENV = 'prd'
let currentHost = host[ENV]

const setHost = (env = 'dev') => {
    ENV = env
    currentHost = host[ENV]
}


const API_URL = currentHost.API_URL
const CD_URL = currentHost.CD_URL
const CM_URL = currentHost.CM_URL
const COMMON_URL = currentHost.COMMON_URL

export { ENV, API_URL, CD_URL, CM_URL, COMMON_URL, setHost }