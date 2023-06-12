export const loginValidator = function (value: string): boolean {
    if (value.length >= 3 && value.length <= 15) {
        return true;
    }
    return false;
}

export const passwordValidator = function (value: string): boolean {
    if (value.length >= 6 && value.length <= 30) {
        return true;
    }
    return false;
}