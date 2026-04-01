describe("Page d'accueil", () => {
  it("affiche le bon message", () => {
    cy.visit("/");
    cy.contains("Bienvenue sur mon application CI/CD").should("be.visible");
  });
});
