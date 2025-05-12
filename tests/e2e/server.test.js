describe('Server API Tests', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/users',
            failOnStatusCode: false
        });
    });

    it('should get all users', () => {
        cy.request('GET', 'http://localhost:3000/api/users')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.at.least(3);
                expect(response.body[0]).to.have.property('name');
                expect(response.body[0]).to.have.property('id');
            });
    });

    it('should create a new user', () => {
        const newUser = {
            id: 4,
            name: 'David'
        };

        cy.request('POST', 'http://localhost:3000/api/users', newUser)
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.deep.equal(newUser);
            });
    });

    it('should delete an existing user', () => {
        cy.request('DELETE', 'http://localhost:3000/api/users/1')
            .then((response) => {
                expect(response.status).to.eq(204);
            });

        // Verify user is deleted
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/users',
        }).then((response) => {
            expect(response.body.find(user => user.id === 1)).to.be.undefined;
        });
    });

    it('should return 404 when deleting non-existing user', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/api/users/999',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.deep.equal({ message: 'Utilisateur non trouvé' });
        });
    });
});