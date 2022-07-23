const { authenticateToken } = require('../utils/jwt');

const authenticateMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    const authUser = authenticateToken(token);
    if (!authUser) {
        const error = new Error('Expired or invalid token');
        error.status = 401;
        throw error;
    }
    res.locals.authUser = authUser;
    next();
};

module.exports = {
    authenticateMiddleware,
};