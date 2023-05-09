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
    check('phone').matches(/^(\+7|8)?[\-\s]?\(?(\d{3})\)?[\-\s]?(\d{3})[\-\s]?(\d{2})[\-\s]?(\d{2})$/),
    check('age').isLength({min: 2, max: 2}).matches(/^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/)
];