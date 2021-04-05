const { Router } = require('express')
const router = Router()

router.get('/', (req, res)=>
   {
   res.redirect('index')
   })

router.get('/:id', (req, res)=>
   {
   res.render('base',
      {
      body:req.params.id !='favicon.ico' ? req.params.id : 'index',
      title: req.params.id,
      data: new Date()
      })
   })

module.exports = router