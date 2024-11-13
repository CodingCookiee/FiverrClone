import express from 'express'

const router = express.Router();

router.get('/test', (req, res)=>{
    res.send('User Route Works')
})


export default  router