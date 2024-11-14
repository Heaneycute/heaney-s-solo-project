const jwtConfig = require('./jwtConfigs');

const cookieConfig = {
  httpOnly: true,
  maxAge: jwtConfig.refresh.expiresIn,
};

module.exports = cookieConfig;
