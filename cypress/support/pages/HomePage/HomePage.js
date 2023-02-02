import { SEARCH_BAR_INPUT_CLASS } from "./HomePageSelectors";

export class HomePage {
  visit = () => cy.visit("/");

  getSearchBarInput = () => cy.get(SEARCH_BAR_INPUT_CLASS).first();
}
