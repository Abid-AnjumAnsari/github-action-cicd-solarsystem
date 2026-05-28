let mongoose = require("mongoose");
let server = require("./app");
let chai = require("chai");
let chaiHttp = require("chai-http");


// Assertion 
chai.should();
chai.use(chaiHttp); 

describe('Planets API Suite', () => {

    describe('Fetching Planet Details', () => {
        it('it should fetch a planet named Mercury', async () => {
            let payload = {
                id: 1
            }
        
        return chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(1);
                    res.body.should.have.property('name').eql('Mercury');
                
              });
        });

        it('it should fetch a planet named Venus', async () => {
            let payload = {
                id: 2
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(2);
                    res.body.should.have.property('name').eql('Venus');
                
              });
        });

        it('it should fetch a planet named Earth', async () => {
            let payload = {
                id: 3
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(3);
                    res.body.should.have.property('name').eql('Earth');
                
              });
        });
        it('it should fetch a planet named Mars', async () => {
            let payload = {
                id: 4
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(4);
                    res.body.should.have.property('name').eql('Mars');
                
              });
        });

        it('it should fetch a planet named Jupiter', async () => {
            let payload = {
                id: 5
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(5);
                    res.body.should.have.property('name').eql('Jupiter');
                
              });
        });

        it('it should fetch a planet named Satrun', async () => {
            let payload = {
                id: 6
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(6);
                    res.body.should.have.property('name').eql('Saturn');
                
              });
        });

        it('it should fetch a planet named Uranus', async () => {
            let payload = {
                id: 7
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(7);
                    res.body.should.have.property('name').eql('Uranus');
                
              });
        });

        it('it should fetch a planet named Neptune', async () => {
            let payload = {
                id: 8
            }
          chai.request(server)
              .post('/planet')
              .send(payload)
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(8);
                    res.body.should.have.property('name').eql('Neptune');
                
              });
        });

        // it('it should fetch a planet named Pluto', async () => {
        //     let payload = {
        //         id: 9
        //     }
        //   chai.request(server)
        //       .post('/planet')
        //       .send(payload)
        //       .then((res) => {
        //             res.should.have.status(200);
        //             res.body.should.have.property('id').eql(9);
        //             res.body.should.have.property('name').eql('Sun');
        //         
        //       });
        // });


    });        
});

//Use below test case to achieve coverage
describe('Testing Other Endpoints', () => {

    describe('it should fetch OS Details', () => {
        it('it should fetch OS details', async () => {
          chai.request(server)
              .get('/os')
              .then((res) => {
                    res.should.have.status(200);
                
              });
        });
    });

    describe('it should fetch Live Status', () => {
        it('it checks Liveness endpoint', async () => {
          chai.request(server)
              .get('/live')
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql('live');
                
              });
        });
    });

    describe('it should fetch Ready Status', () => {
        it('it checks Readiness endpoint', async () => {
          chai.request(server)
              .get('/ready')
              .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql('ready');
                
              });
        });
    });

});