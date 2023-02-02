/// <reference types="cypress" />
import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

describe("Search for test products", () => {
  it("Will search for batom and we expect to get more than one product and validate if for the first product a price is visible and after that I want to do the login", () => {
    cy.vsit("https://loja.inventa.shop/");

    cy.get('[data-testid="search-bar"]').type("batom");

    cy.wait(6000);
    cy.get('[data-testid="product-values"]').then((elements) => {
      should(elements).to.be.majorThan(1);
    });
    cy.get('[data-testid="product-values"]').eq(0).should("exist");

    cy.click(cy.contains("Entre para comprar"));

    cy.url().should("contain", "login");
  });

  it.only("Search for batom, click in the first produt and check if description is greater than 0", () => {
    cy.visit("https://loja.inventa.shop/");
    let page = new HomePage();
    page.getSearchBarInput().type("batom");

    cy.url().should("contain", "q=batom");
    page = new SearchPage();
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
