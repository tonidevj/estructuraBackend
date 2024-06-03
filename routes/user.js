const userRouter = require('express').Router(); //primero creo un router


//request lo que se envia del frontedn, y reponse lo que me regresa
//estoy envianod una respuesta con el status 200 y eso me va a regresar un hola mundo
userRouter.get('/', async (request, response) => { //cuando en elfonrte hagan un get
    return response.status(200).json({ hola: 'mundo' })
});

module.exports = userRouter;