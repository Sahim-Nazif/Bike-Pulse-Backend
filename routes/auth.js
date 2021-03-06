const express=require('express')
const router=express.Router()
const {signup, signin,signout}=require('../controllers/authController')
const userSignupValidator=require('../validator')

router.post('/signup', userSignupValidator.userSignupValidator, signup)
router.post('/signin', signin)
router.get('/signout', signout)


module.exports=router