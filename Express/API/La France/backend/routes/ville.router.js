const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>  {
    res.json({message: "Ici, la liste des villes"})
})

router.post('/', (req, res) =>  {
    res.json({ 
            test: "Bonjour",    
            message: req.body.message
        })
})

router.put('/:id', (req, res) => {
    res.json({
    'test' : 'ok',
    'number' : req.params.id ?? 0
        }) 
    })

router.delete('/:id', (req, res) =>  {
    res.json({
        message: "Ville supprimée :  " + req.params.id
    })
})

router.patch('/like-city/:id', (req, res) =>  {
    res.json({
        message: "Ville likée :" + req.params.id
    })
})

router.patch('/dislike-city/:id', (req, res) =>  {
    res.json({
        message: "Ville délikée :" + req.params.id
    })
})

module.exports = router