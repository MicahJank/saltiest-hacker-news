const router = require('express').Router();

// import routers
const loginRouter = require('../routes/auth/login-router.js');
const registerRouter = require('../routes/auth/register-router.js');

router.use('/register', registerRouter);
router.use('/login', loginRouter);


module.exports = router;