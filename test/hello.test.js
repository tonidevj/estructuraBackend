const supertest = require('supertest');
const app = require('../app');
const { describe, test, expect } = require('@jest/globals');
const api = supertest(app); //api se refiere al backend
//leguaje jest
describe('ruta home', () =>{ //que debeir pasar al traer este codigo
    test('delve respuesta en json evucon un hola mundo', async () => {
        const response = await api.get('/').expect(200).expect('content-type', /json/);
        expect(response.body).toStrictEqual({ hola: 'mundo' });
})
});


// test inyecta las variables
// simepre debe tener .test los archivos que yo quiera testear