export const required = (value) => 
    value ? undefined : "Field is required";

export const maxLength = (maxLength) => (value) => 
    (value && value.length > maxLength) ? `Max length is ${maxLength} characters`: undefined;

export const minLength = (minLength) => (value) =>
    (value && value.length < minLength) ? `Min length is ${minLength} characters`: undefined;

export const number = value => 
    value && isNaN(Number(value)) ? 'Must be a number': undefined;

export const login = value => 
    value && !/^[a-zA-Z0-9]+$/.test(value) ?
    'Only numbers and letters allowed' : undefined;

export const phone = value =>
    value && !/^[0-9\-+]{9,15}$/.test(value) ? 
    'Invalid phone number' : undefined;

export const password = value => 
    value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value) ?
    'Password is not safe' : undefined;

export const compareNewPassword = (value, all) => value === all.password2 ? undefined : "Passwords are not equal";

export const compareRepeatPassword = (value, all) => value === all.password ? undefined : "Passwords are not equal";

const minLength5 = minLength(5);
const maxLength19 = maxLength(19);

const validate = (callbacks, value) =>
    callbacks.reduce((result, next) => {
        let error = next(value);
        return !result ? error ? error : result : result;
    }, undefined)

export const validateLogin = (value) => validate([required, minLength5, maxLength19, login], value);

export const validatePassword = (value) => validate([required, maxLength19, password], value);