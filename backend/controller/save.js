const User=require('../model/user')
exports.get=(req,res,next)=>{
    //console.log('.get')
    User.findAll().then(user=>{
        res.json(user)
    })
}
exports.post=(req,res,next)=>{
    console.log('hey')
    console.log(req.body)
    const name=req.body.name
    const phone=req.body.phone
    const email=req.body.email
    User.create({
        name:name,
        phone:phone,
        email:email
    }).then(()=>{
        console.log(req.params)
        console.log('successfull')
        res.status(200).json('success')
    }).catch((err)=>{
        console.log(err)
    })
}
exports.del=(req,res,next)=>{
    const userId=req.params.Id
    User.findByPk(userId)
    .then(user=>{
       user.destroy()
       res.status(200).json(user)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.find=(req,res,next)=>{
    const userId=req.params.Id
    User.findByPk(userId)
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
}