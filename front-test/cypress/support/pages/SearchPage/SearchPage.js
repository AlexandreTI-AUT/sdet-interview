export class SearchPage {
    getSeePriceLabel = () => cy.contains("Login para comprar");
  
    verifyIfProductDoesNotExists = (product) =>
      cy.contains(product).should("have.length", 0);
  }
  