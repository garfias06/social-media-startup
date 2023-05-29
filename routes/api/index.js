const router = require('express').Router();

const userRoute=require('./userRoutes')
const thoughtRoute=require('./thoughtRoutes');
// const reactionRoute=require('./reactionsRoutes');

router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);
// router.use('/reactions', reactionRoute);

module.exports=router;