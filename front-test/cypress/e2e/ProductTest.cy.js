/// <reference types="cypress" />

import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

describe("Search for test products", () => {

  it("Will search for shampoo transparente product and we expect to get just one product with this name", () => {
    cy.visit("https://inventa.shop");

    click(get(.search-bar-button));
    cy.get(".search-bar__input")
      .eq(1)
      .type("Shampoo transparente{enter}");
    cy.contains("Login para comprar");
    cy.contains("Shampoo transparente").expect("have.size", 2);
  
    visit("https://inventa.shop/collections/novidades")
    cy.wait(5000)
    cy.get(".price-container").should('exist')
  });

  it("", () => {
    cy.vsit("https://inventa.shop");
    page = new HomePage();
    page.getSearchBarButton().click();
    page.getSearchBarInput().type("Shampoo transparente{enter}");

    cy.url().should('contain', 'q=Shampoo+transparente')
    page = new SearchPage();
    page.getSeePriceLabel()
    page.verifyIfProductDoesNotExists("Shampoo claro e transparente");
    cy.get(".price-container").should('exist')
  });
});
