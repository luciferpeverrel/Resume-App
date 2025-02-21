const request = require('supertest');
const { app, server } = require('../index'); // Import app & server

describe('Resume App Endpoints', () => {
    afterAll(() => {
        if (server) {
            server.close(); // Ensure the server closes after tests
        }
    });

    it('should return index.html on GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });

    it('should return resume.html on GET /resume', async () => {
        const res = await request(app).get('/resume');
        expect(res.statusCode).toEqual(200);
    });

    it('should allow downloading the resume PDF', async () => {
        const res = await request(app).get('/download-resume');
        expect(res.statusCode).toEqual(200);
    });
});
