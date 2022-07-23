const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
};

const generateJwtToken = ({ id, displayName, email, image }) => 
    jwt.sign({ id, displayName, email, image }, TOKEN_SECRET, jwtConfig);

const authenticateToken = (token) => {
    if (!token) {
        const e = new Error('Token not found');
        e.status = 401;
        throw e;
    }

    try {
        const validate = jwt.verify(token, TOKEN_SECRET, jwtConfig);
        return validate;
    } catch (error) {
        const err = new Error('Expired or invalid token');
        err.status = 401;
        throw err;
    }
};

module.exports = {
    generateJwtToken,
    authenticateToken,
};