import axios from 'axios'

export const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL + "/game/online/api/" + process.env.VUE_APP_BASE_VERSION,
    timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const { response } = error
        throw response.data.Data.message
    }
)