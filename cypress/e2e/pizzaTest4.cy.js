describe("Counter ve buton çalışıyor", () => {
  it("passes", () => {
    describe("Siparis Formu testi", () => {
      cy.visit("/order-page");
    });

    //4. Counter çalışıyor mu?
    // + butonu
    cy.contains("+").click();
    cy.get("counter-value").should("have.text", 2);
    // - butonu
    cy.contains("-").click();
    cy.get("counter-value").should("have.text", 1);

  ///// Sipariş kartta doğru hesaplama yapılıyor mu?

describe('SiparisCard component', () => {
  it('calculates total price correctly', () => {
    const count = 2;
    const secilenMalzemelerLength = 5;

    // Hesaplamayapmak için fonksiyon
    const pizzaFiyat = count * 85;
    const ekMalzemeFiyat = secilenMalzemelerLength * 5;
    const toplamFiyat = pizzaFiyat + ekMalzemeFiyat;

    cy.visit('/siparis-card'); 

    // SiparisCard toplam fiyat
    cy.get('.siparis-card .toplam p').should('contain.text', `${toplamFiyat} TL`);
  });
});


    //5. Sipariş ver butonu yeni sayfaya açılıyor mu?
    cy.contains("SİPARİŞ VER").click();
    cy.url().should("include", "/success-page");

    cy.visit("https://example.cypress.io");
  });
});
