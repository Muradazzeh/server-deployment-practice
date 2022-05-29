
`use strict`

module.exports =(req,res,next)=>{
    res.status(404).send({
        code: 404,
        route: req.path,
        message: "THE PAGE YOU LOOKING FOR NOT FOUND",
    })
}