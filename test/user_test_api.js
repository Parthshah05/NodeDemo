let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
var token
chai.should()
chai.use(chaiHttp)

describe('User API', () => {
    describe('POST /api/demo/login', () => {
      it('User SignIn Successfully', (done) => {
        const user = {
          Email: 'parth123@gmail.com',
          password: 'parth123',
        }
        chai
          .request(server)
          .post('/api/demo/login')
          .send(user)
          .end((err, response) => {
            response.should.have.status(200)
            response.body.should.have
              .property('message')
              .eql('Login Successfully')
            response.body.should.have.property('data')
            token = response.body.data
            done()
          })
      })
      it('Email And Password are required ', (done) => {
        const user = {
          Email: '',
          password: '',
        }
        chai
          .request(server)
          .post('/api/demo/login')
          .send(user)
          .end((err, response) => {
            response.should.have.status(500)
            response.body.should.have
              .property('message')
              .eq('INVALID EMAIL OR Password')
            done()
          })
      })
      it('Email Does not Exists ', (done) => {
        const user = {
          Email: 'parth@gmail.com',
          password: 'parth123',
        }
        chai
          .request(server)
          .post('/api/demo/login')
          .send(user)
          .end((err, response) => {
            response.should.have.status(500)
            response.body.should.have
              .property('message')
              .eq('INVALID EMAIL OR Password')
            done()
          })
      })
      it('Email and password do not match ', (done) => {
        const user = {
          Email: 'parth123@gmail.com',
          password: 'part23',
        }
        chai
          .request(server)
          .post('/api/demo/login')
          .send(user)
          .end((err, response) => {
            response.should.have.status(500)
            response.body.should.have
              .property('message')
              .eq('INVALID EMAIL OR Password')
            done()
          })
      })
    })
    /**
     * Test the GET route
     */
    describe('GET /api/demo', () => {
      it('It should GET all the Users', (done) => {
        chai
          .request(server)
          .get('/api/demo')
          //  .set('authorization', 'Bearer '+ token)
          .end((err, response) => {
            console.log(response.body)
            response.should.have.status(200)
            response.body.should.have.property('message').eql('Demo List')
            done()
          })
      })

      it('It should Give NOT FOUND', (done) => {
        chai
          .request(server)
          .get('/api/demos')
          .end((err, response) => {
            response.should.have.status(404)
            done()
          })
      })
    })

  //   describe('POST /api/demo', () => {
  //     it('It should Create a new User', (done) => {
  //       const user = {
  //         Name: 'jay',
  //         Address: 'vasna',
  //         Mobile: 7789523122,
  //         Hobby: 'cricket',
  //         Email: 'jay123@gmail.com',
  //         password: 'jay123',
  //       }
  //     chai
  //         .request(server)
  //         .post('/api/demo')
  //         .send(user)
  //         //   .set('authorization', 'Bearer '+ token)
  //         //   .set('content-type', 'multipart/form-data')
  //         //   .field('name', 'keyur')
  //         //   .field('email', 'keyur123@gmail.com')
  //         //   .field('address', 'sola')
  //         //   .field('mobile', 7865454134)
  //         //   .field('password', 'keyur123')
  //         //   .field('role', '602f4af7de40a12a847c2c6a')
  //         .end((err, response) => {
  //           console.log(response.body)
  //           response.should.have.status(200)
  //           response.body.should.have
  //             .property('message')
  //             .eql('Demo created successfully')
  //             done()
  //         })
  //     })

  //     it('It should NOT Create a new User BCZ of Wrong Email ', (done) => {
  //         const user = {
  //             Name: 'jimmy',
  //             Address: 'vasna',
  //             Mobile: 8989523122,
  //             Hobby: 'reading',
  //             Email: 'jimmy123gmail.com',
  //             password: 'jimmy123',
  //           }
  //       chai
  //         .request(server)
  //         .post('/api/demo')
  //         // .set('content-type', 'multipart/form-data')
  //         // .field('name', 'ke')
  //         // .field('email', 'fenil123gmail.com')
  //         // .field('address', 'paldi')
  //         // .field('mobile', 78654534)
  //         // .field('password', 'fenil123')
  //         // .set('authorization', 'Bearer ' + token)
  //         .send(user)
  //         .end((err, response) => {
  //             console.log(response.body)
  //           response.should.have.status(400)
  //           done()
  //         })
  //     })

  //     it('It should NOT Create a new User BCZ of Less Digit Mobile Number ', (done) => {
  //         const user = {
  //             Name: 'jimmy',
  //             Address: 'vasna',
  //             Mobile: 89895231,
  //             Hobby: 'reading',
  //             Email: 'jimmy123@gmail.com',
  //             password: 'jimmy123',
  //           }
  //       chai
  //         .request(server)
  //         .post('/api/demo')
  //         // .set('content-type', 'multipart/form-data')
  //         // .field('name', 'ke')
  //         // .field('email', 'fenil123gmail.com')
  //         // .field('address', 'paldi')
  //         // .field('mobile', 78654534)
  //         // .field('password', 'fenil123')
  //         // .set('authorization', 'Bearer ' + token)
  //         .send(user)
  //         .end((err, response) => {
  //             console.log(response.body)
  //           response.should.have.status(400)
  //           done()
  //         })
  //     })
  //   })

  //   describe('PUT /api/demo', () => {
  //     it('It should Update the user', (done) => {
  //       const userId = '26BEA010-8DE1-4D8D-8A7F-B161D365BFAA'
  //       const user = {
  //         Name: 'jimmy',
  //         Address: 'vasna',
  //         Mobile: 8989523111,
  //         Hobby: 'reading',
  //       }
  //       chai
  //         .request(server)
  //         .put('/api/demo/' + userId)
  //         .send(user)
  //         //  .set('authorization', 'Bearer '+ token)
  //         //  .field('mobile', 7865454130)
  //         .end((err, response) => {
  //           console.log(response.body)
  //           response.should.have.status(200)
  //           response.body.should.have
  //             .property('message')
  //             .eql('Demo updated successfully')
  //           done()
  //         })
  //     })

  //   it("It should Update the user Image", (done) => {
  //       const userId = "609b8439b5b8b317a8c210c6";

  //       chai.request(server)
  //           .put("/api/user/update?id=" + userId)
  //           .set('authorization', 'Bearer '+ token)
  //           .attach('photo', fs.readFileSync(`${__dirname}/code1.png`), 'test/code1.png')
  //           .end((err, response) => {

  //               response.should.have.status(200);
  //               response.body.should.have.property('message').eql("Successfully Updated");
  //               done();
  //           });
  //   });

  //     it('It should NOT Update the User', (done) => {
  //       const userId = '608b9ebc537d1928f276'
  //       const user = {
  //         Name: 'jimmy',
  //         Address: 'vasna',
  //         Mobile: 8989523111,
  //         Hobby: 'reading',
  //       }

  //       chai
  //         .request(server)
  //         .put('/api/demo/' + userId)
  //         .send(user)
  //         //   .set('authorization', 'Bearer '+ token)
  //         //   .field('mobile', 7865454131)
  //         .end((err, response) => {
  //           response.should.have.status(404)
  //           response.body.should.have
  //             .property('message')
  //             .eql('Demo Record not found')
  //           done()
  //         })
  //     })
  //   })

  // describe('DELETE /api/demo', () => {
  //   it('It should DELETE an existing User', (done) => {
  //     const userId = 'BF784177-DD79-4694-9FED-5D9CD45BBD04'
  //     chai
  //       .request(server)
  //       .delete('/api/demo/' + userId)
  //       //  .set('authorization', 'Bearer '+ token)
  //       .end((err, response) => {
  //         response.should.have.status(200)
  //         response.body.should.have
  //           .property('message')
  //           .eql('Demo Record deleted successfully')
  //         done()
  //       })
  //   })

  //   it('It should NOT DELETE a User that is not in the database', (done) => {
  //     const userId = 'sdkvjsd'
  //     chai
  //       .request(server)
  //       .delete('/api/demo/' + userId)
  //       //  .set('authorization', 'Bearer '+ token)
  //       .end((err, response) => {
  //         response.should.have.status(404)
  //         response.body.should.have
  //           .property('message')
  //           .eql('Demo Record not found')
  //         done()
  //       })
  //   })
  // })
})
