const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  test("retourne 200 et le bon message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Bienvenue sur mon application CI/CD");
  });
});
