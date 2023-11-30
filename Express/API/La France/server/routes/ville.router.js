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

router.put('/:id', (req, res) =>  {
    res.json({
        messageId: req.body.message
    })
})

router.delete('/:id', (req, res) =>  {
    res.json({
        message: "Ville supprimée :  " + req.params.id
    })
})

module.exports = router
