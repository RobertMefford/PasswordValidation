
export const validatePassword = (password) => {

    if (password.length < 6) return 'Password has a min length of 6 characters';
    if (password.toLowerCase() === password) return 'Password has at least 1 uppercase character';
    if (password.toUpperCase() === password) return 'Password has at least 1 lowercase character';
    if (/\d/.test(password) === false) return 'Password has at least 1 number';

    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (format.test(password) === false) return `Password has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`;
    return "";
}