const GetToken = () => {
    if (typeof window !== "undefined") {
        let token = localStorage.getItem('token')
        if (token) {
            let parse = JSON.parse(token)
            return parse
        }
        return null
    }
}
const GetUser = () => {
    if (typeof window !== "undefined") {
        let user = localStorage.getItem('user')
        if (user) {
            let parse = JSON.parse(user)
            return parse
        }
        return null
    }
}
const GetUser_id = () => {
    if (typeof window !== "undefined") {
        let user_id = localStorage.getItem('OTP_id')
        if (user_id) {
            let parse = JSON.parse(user_id)
            return parse
        }
        return null
    }
}
export { GetUser, GetToken, GetUser_id }