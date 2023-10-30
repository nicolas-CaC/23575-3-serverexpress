import express from 'express';
import api from './routes/api.js'
import usuarios from './routes/usuarios.js'


const app = express()
const PORT = 8080

app.use(express.static('public'))

app.use('/api', api)
app.use('/usuarios', usuarios)

app.listen(PORT, () => {
    console.log(`Listening at ${PORT} - http://localhost:${PORT}`)
})