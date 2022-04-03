import { service } from '../ApiBase'

export const getLs = () =>
    service({
        url: "/games/genres",
        method: 'get',
    })