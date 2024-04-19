describe("Form elemanları çalışıyor mu", () => {
  it("passes", () => {
    describe("Siparis Formu testi", () => {
      cy.visit("/order-page");
    });
    //1.Boyut Seç çalışıyor mu?
    cy.contains("Büyük", "Küçük", "Orta").click();

    cy.get('input[value="small"]').check().should("be.checked");

    //2. Hamur kalınlığı seçiliyor mu?
    cy.contains("Orta", "İnce", "Kalın", "Hamur Kalınlığı").click();
    cy.get('input[value="medium"').check().should("be.checked");

    //3. Birden fazla malzeme seçilebiliyor mu?
    cy.contains("Domates", "Peynir", "Malzeme").click();
    cy.get('input[value="peynir"').check().should("be.checked");
    cy.get('input[value="zeytin"').check().should("be.checked");
    cy.get('input[type="checkbox"').check().should("have.length", 2);
    cy.get('input[type="checkbox"')
      .check()
      .should("have.length.not.greaterThan", 10);

    cy.visit("https://example.cypress.io");
  });
});
