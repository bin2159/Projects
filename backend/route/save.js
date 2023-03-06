const express=require('express')
const router=express.Router()
const save=require('../controller/save')
router.get('/get',save.get)
router.post('/post',save.post)
router.delete('/del/:Id',save.del)
router.get('/find/:Id',save.find)
module.exports=router