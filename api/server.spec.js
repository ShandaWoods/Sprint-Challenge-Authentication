const request = require('supertest');

const server = require('./server.js');

const token = "123456yayididit" 
// trying to create token on the headers, but simply ran out of time

describe('/register', function() {
    it('should fail without credentials', function(){
        return request(server).get('/register')
        .then(res => {
            expect(res.status).toBe(404);
        })
    });
    it('It responds with JSON', function(){
        return request(server)
          .get('/register')
          .set(token)
          .then((response) => {
              console.log('response is: ', response)
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe('application/json');
          });
      });
    });

describe('/login', function() {
    it('should fail without credentials', function(){
        return request(server).get('/login')
        .then(res => {
            expect(res.status).toBe(404);
        })
    });
    it('It responds with JSON', function(){
        return request(server)
          .get('/login')
          .set(token)
          .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe('application/json');
          });
      });
})

