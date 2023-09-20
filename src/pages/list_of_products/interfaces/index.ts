import { WebElement } from 'selenium-webdriver';

export interface ProductList {
  listOfProducts: WebElement[];
}

export interface DetailsOfProductByPosition {
  titleOfProduct: string;
  priceOfProduct: string;
  descriptionOfProduct: string;
}

export interface CategoryList {
  listOfCategories: WebElement[];
}

export interface ClickElementCategoryByPosition {
  successful: boolean;
}
