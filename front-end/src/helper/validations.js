const validateEmail = (email) => {
    const emailRegex = /^[a-z][.a-z\d_-]+[^-]@[a-z-]{2,12}\.[a-z]{2,3}(\.[a-z]{2})?$/i;
    return emailRegex.test(email);
};

const validatePassworld = (password) => {
    const minLength = 6;
    return password.length >= minLength;
}

const validateName = (name) => {
    const minLength = 12;
    return name.length >= minLength;
}


export { validateEmail, validatePassworld, validateName }