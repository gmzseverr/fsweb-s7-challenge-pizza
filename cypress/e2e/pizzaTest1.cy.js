describe("Butona tıklayıp yeni sayfaya yönlendirmli", () => {
  it("passes", () => {
    describe("ACIKTIM butonu testi", () => {
      cy.visit("/");
    });
    cy.get("#aciktim-button").click();

    cy.url().should("include", "/order-pagee");

    cy.visit("https://example.cypress.io");
  });
});
