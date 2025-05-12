const request = import("supertest");
const app = import("../../src/server");

describe("API Users", () => {
  test("GET /api/users devrait retourner un tableau d'utilisateurs", async () => {
    const response = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(3);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
  });
});

describe("API Users", () => {
  test("POST /api/users devrait créer un nouvel utilisateur", async () => {
    const response = await request(app)
      .post("/api/users")
      //send permet d'envoyer du json au corps de la requete
      .send({ name: "John Doe" })
      .expect("Content-Type", /json/)
      .expect(201);

    // doit avoir la propriete ID dans la reponse de la requete
    expect(response.body).toHaveProperty("id");
    // doit avoir la propriete name dans la reponse de la requete
    expect(response.body).toHaveProperty("name");
  });
});

describe("API Users", () => {
  test("DELETE /api/users devrait supprimer un utilisateur existant", async () => {
    const response = await request(app).delete("/api/users/1").expect(204);
  });
});
