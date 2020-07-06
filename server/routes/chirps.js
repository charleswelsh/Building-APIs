const express = require('express');
const chirpsStore = require ('../chirpstore');
const { DeleteChirp } = require('../chirpstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else{
        res.send(chirpsStore.GetChirps());
    }
    res.send('chirps');
});

router.post('/', (req,res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req,res) =>{
    chirpsStore.UpdateChirp(req.body)
    res.sendStatus(200);
})

router.delete('/:id', (req,res) =>{
    let id= req.params.id;
    chirpsStore.DeleteChirp(id);
    res.send(`Chirp #${id} has been deleted`);
})

module.exports = router;