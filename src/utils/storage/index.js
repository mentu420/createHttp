/***
 * localStorage api 封装
 * **/

const storage = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    fetch(key) {
        let result = JSON.parse(localStorage.getItem(key))
        if (typeof result == 'object') {
            return result
        } else {
            return localStorage.getItem(key)
        }
    },
    clear() {
        localStorage.clear()
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}

export default storage

