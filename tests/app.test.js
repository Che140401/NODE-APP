const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, Github Actions! Welcome back to sudden');
    expect(res.statusCode).toBe(200);
  });
});
