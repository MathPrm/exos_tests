const request = import('supertest');
const app = import('../../src/server');

describe('API Users', () => {
    test('GET /api/users devrait retourner un tableau d\'utilisateurs', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(3);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
    });
});