const router = require('express').Router()

router.get('/product',(req,res)=>{
    res.render('products')
});

router.get('/product/:id',(req,res)=>{
    res.end('product with id:'+ req.params.id)
})

module.exports = router