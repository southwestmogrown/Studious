const router = require('express').Router();
const sessionRouter = require('./auth/session.js');
const usersRouter = require('./auth/users.js');
const notesRouter = require('./notes');
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/notes', notesRouter)

module.exports = router;