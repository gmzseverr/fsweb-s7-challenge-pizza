// En az 3 harfli isim girişi yapılıyor mu?

// En az 3 harfli isim girişi yapılıyor mu?

describe("İsim yaz", () => {
  beforeEach(() => {
    cy.visit("/order-page");
  });

  it("isim yazılabiliyor mu?", () => {
    const enteredName = "Ali";

    cy.get("#name", { timeout: 10000 })
      .should("be.visible")
      .type(enteredName)
      .should("have.value", enteredName)
      .check()
      .should("have.length.not.greaterThan", 3);
  });
});
