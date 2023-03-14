/// <reference types="cypress" />
import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

describe("Search for test products", () => {
  beforeEach(() => {
    cy.visit("https://loja.inventa.shop/");
  });

  it("Will search for batom and we expect to get more than one product and validate if for the first product a price is visible and after that I want to do the login", () => {
    cy.get('[data-testid="search-bar"]').type("batom");
    cy.get('[data-testid="search-icon"]').click();

    // cy.wait(6000);
    cy.get('[name="product-card"]').then((elements) => {
      expect(elements.length).to.be.greaterThan(1);
    });
    cy.get('[name="product-card"]').eq(0).should("be.visible");

    cy.get(".next-18zsgw9 > :nth-child(1) > .chakra-button")
      .eq(0)
      .click()
      .should("contain", "Entre para comprar");

    cy.url().should("contain", "login");
  });

  it("Search for batom, click in the first produt and check if description is greater than 0", () => {
    cy.visit("https://loja.inventa.shop/");
    const page = new HomePage();
    page.getSearchBarInput().type("batom");

    cy.url().should("contain", "q=batom");
    const page2 = new SearchPage();
    cy.get('[name="product-card"]').first().children().first().click();
    cy.get('[data-testid="description"]')
      .children()
      .children()
      .eq(1)
      .invoke("description")
      .then((description) => {
        expect(desciption.length).to.be.bigThan(0);
      });
  });
});
