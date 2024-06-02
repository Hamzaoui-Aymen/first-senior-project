const InRole=
(roles)=>{
(req,res,next)=>{
    const role =roles.find((role)=> req.User.role.indexOf(role) !=-1)
    if(!role){
        return res.status(401).json({message:"roles not authorized"})
    } next()
}


}

module.exports ={
    
    InRole
}