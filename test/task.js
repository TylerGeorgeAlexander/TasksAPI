let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Tasks API", () => {
  // Test the GET route
  describe("GET /api/tasks", () => {
    it("It should GET all the tasks", (done) => {
      chai
        .request(server)
        .get("/api/tasks")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(3);
          done();
        });
    });
    
    it("It should NOT GET all the tasks", (done) => {
      chai
        .request(server)
        .get("/api/task")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  // Test the GET (by id) route

  // Test the POST route

  // Test the PUT route

  // Test the PATCH route

  // Test the DELETE route
});
