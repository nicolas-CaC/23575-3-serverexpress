import express from 'express'
import path from 'path'

const router = express.Router();

router.get('/', (_, res) => {
    res.send('holis')
})

router.get('/contacto', (_, res) => {
    const contactPath = path.resolve() + '/public/contacto.html'
    res.sendFile(contactPath)
    // res.sendFile(path.resolve() + '/public/a.json')
    // res.sendFile(path.resolve() + '/app.js')
})

export default router;