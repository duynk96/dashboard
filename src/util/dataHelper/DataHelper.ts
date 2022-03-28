
export const dataUploadImage = function (
    logo?: any,
) {
    return {
        file: logo,
    };
}

export const dataLogin = function (userName?: string, passWord?: string) {
    return {
        userName: userName,
        passWord: passWord
    }
}





