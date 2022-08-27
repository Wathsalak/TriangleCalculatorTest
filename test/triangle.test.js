const supertest = require("supertest")
const expect = require('chai').expect;
const trianglevalues = require('../testdata/trianglevalues.json');
const expectedmessages = require('../expectedvalues/responsemessages.json');

const request = supertest('http://ew1eppqaassignment-env.eba-rqr3rd8p.eu-west-1.elasticbeanstalk.com/');

describe('Triangle Calculator POST endpoint test',() => {
    it('Validate equilateral triangle status', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.equilateral);
        expect(res.statusCode).to.be.equal(200); 
    });

    it('Validate isosceles triangle status', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.isosceles);
        expect(res.statusCode).to.be.equal(200);
    });

    it('Validate versatile triangle status', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.versatile);
        expect(res.statusCode).to.be.equal(200);
    });

    it('Validate equilateral triangle type identification result', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.equilateral);
        expect(res._body.result).to.be.equal(expectedmessages.equilateralMsg);
     });

    it('Validate isosceles triangle type identification result', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.isosceles);
        expect(res._body.result).to.be.equal(expectedmessages.isoscelesMsg);
    });

    it('Validate versatile triangle type identification result', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.versatile);
        expect(res._body.result).to.be.equal(expectedmessages.versatileMsg);
    });

    it('Validate response when sum of any 2 sides less than the 3rd', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.incrementalvalues);
        expect(res.statusCode).to.be.equal(418);
         expect(res._body.error).to.be.equal(expectedmessages.twosidesgreaterthanthirdside);
    });

    it('Validate POST method by passing special charactors as parameters', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.specialchar);
        expect(res.statusCode).to.be.equal(422);
        expect(res._body.error).to.be.equal(expectedmessages.numericsidesonly);
    });

    it('Validate POST method by passing string values as parameters', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.stringvalue);
        expect(res.statusCode).to.be.equal(422);
        expect(res._body.error).to.be.equal(expectedmessages.numericsidesonly);
    });

    it('Validate POST method by passing negative values as parameters', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.negativevalues);
        expect(res.statusCode).to.be.equal(422);
        expect(res._body.error).to.be.equal(expectedmessages.positivevaluesonly);
    });

    it('Validate POST method by passing only two sides', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.twosides);
        expect(res.statusCode).to.be.equal(422);
        expect(res._body.error).to.be.equal(expectedmessages.threesidesrequired);
    });

    it('Validate POST method by passing empty payload', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.nosides);
        expect(res.statusCode).to.be.equal(422);
        expect(res._body.error).to.be.equal(expectedmessages.threesidesrequired);
    });

    it('Validate POST method by passing different attributes', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.diffattributes);
        expect(res.statusCode).to.be.equal(422);
        expect(res._body.error).to.be.equal(expectedmessages.threesidesrequired);
    });
    it('Validate triangle type identification using GET method', async () => {
        const res = await request
            .get('')
            .send(trianglevalues.equilateral);
        expect(res.statusCode).to.be.equal(418);
    });

    it('Validate triangle type by passing large value', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.largevalues);
        expect(res.statusCode).to.be.equal(418);
    });

    it('Validate triangle type by passing float value', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.floatvalues);
        expect(res.statusCode).to.be.equal(200);
    });

    it('Validate triangle type by passing side value as zero', async () => {
        const res = await request
            .post('')
            .send(trianglevalues.zeroside);
        expect(res.statusCode).to.be.equal(422);
    });

    it('Validate triangle type without sending the payload', async () => {
        const res = await request
            .post('');
        expect(res.statusCode).to.be.equal(422);
    });
})
