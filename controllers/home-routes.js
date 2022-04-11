const router = require('express').Router();
const { Gallery, Painting } = require('../models'); //replace Gallery, Painting with whatever models you use.


router.get('/', async (req, res) => {
    //look at unit 14 act 15 for examples
    try{
        //data for homepage ^ lines 7-18
        //session.save
        req.session.save(() => {
            //whatever goes into this session
        })
        //render the homepage
        res.render('homepage', {

        })
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});