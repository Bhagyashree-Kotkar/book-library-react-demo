import * as yup from 'yup';

export function signInValidations () {
    const userSchema = yup.object({
        email: yup.string().required('email is mandadtry').email('its only accept email format'),
        password: yup.string().required("password is important").min(5, "excepting min 10 chartcerts"),
        userRole: yup.string().required('Please select role')
    });
    return userSchema;
}

export function signUpValidations () {
    const userSchema = yup.object({
        firstName: yup.string().required('firstName is mandatory'),
        lastName: yup.string.required('lastName is mandatory'),
        email: yup.string().required('email is mandadtry').email('its only accept email format'),
        password: yup.string().required("password is important").min(5, "excepting min 5 chartcerts"),
        userRole: yup.string().required('Please select role')
    });
    return userSchema;
}


