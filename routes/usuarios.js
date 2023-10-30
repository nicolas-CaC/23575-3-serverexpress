import express from 'express'
const router = express.Router();

router.get('/', (_, res) => {
    res.send('USUARIOS')
})

router.get('/perfil', (_, res) => {
    // console.log(__dirname)
    res.send('PERFIL')
})

export default router;