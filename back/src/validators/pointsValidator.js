const { body, param } = require('express-validator');
const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}


const validator = [
    param('user_id').exists().isString(),
    param('activity_timeuuid').exists().isUUID(),
    body('latitude').isFloat().optional(),
    body('longitude').isFloat().optional(),
    body('cadence').isFloat().optional(),
    body('calories').isFloat().optional(),
    body('speed').isFloat().optional(),
]
  
module.exports = {
    validator,
    validateResult
}