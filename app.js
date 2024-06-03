const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

//rutas backend

app.get('/', async (request, response) => { //cuando en elfonrte hagan un get
    return response.status(200).json({ hola: 'mundo' })
});

app.use('/api/users', userRouter)

module.exports = app; 
