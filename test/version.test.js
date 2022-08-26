const supertest = require("supertest")
const expect = require('chai').expect;
const tranglevalues = require('../testdata/trianglevalues.json');

const request = supertest('http://ew1eppqaassignment-env.eba-rqr3rd8p.eu-west-1.elasticbeanstalk.com/');

describe('Triangle Calculator GET/version endpoint test',() => {
    it('Validate status code of the GET/version endpoint', async () => {
        const res = await request.get('version');
        expect(res.statusCode).to.be.equal(200);
    });

    it('Validate response message of the GET/version endpoint', async () => {
        const res = await request.get('version');
        expect(res.text).to.be.equal('0.0.2');
    });

    it('Validate data type of the GET/version response', async () => {
        const res = await request.get('version');
        expect(res.text).to.be.string;
    });

    it('Validate response type of the GET/version endpoint', async () => {
        const res = await request.get('version');
        expect(res.type).to.be.equal('text/html');
    });

    it('Validate version endpoint response using POST method', async () => {
        const res = await request.post('version');
        expect(res.statusCode).to.be.equal(418);
    });

    it('Validate version endpoint response without defining the URN', async () => {
        const res = await request.get('');
        expect(res.statusCode).to.be.equal(418);
    });

})
