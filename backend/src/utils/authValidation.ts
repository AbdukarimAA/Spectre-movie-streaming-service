import {check} from 'express-validator';

export const authValidation = [
    check('email').exists().withMessage('email is required').isEmail().normalizeEmail(),
    check('username').exists().withMessage('username is required').isLength({min: 5, max: 20}),
    check('password').exists().withMessage('password is required').isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }).withMessage("Password must be greater than 6 and contain at least one uppercase letter, one lowercase letter, one number and one symbol"),
    check('phone').isLength({min: 11, max: 11}).matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
];