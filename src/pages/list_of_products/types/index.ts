import { WebDriver } from 'selenium-webdriver';
import {
  CategoryList,
  ClickElementCategoryByPosition,
  DetailsOfProductByPosition,
  ProductList,
} from '../interfaces';

export type TGetListOfProductsFunction = (
  driver: WebDriver
) => Promise<ProductList>;

export type TGetDetailsOfProductByPositionFunction = (
  driver: WebDriver,
  position: number
) => Promise<DetailsOfProductByPosition>;

export type TGetListOfCategoriesFunction = (
  driver: WebDriver
) => Promise<CategoryList>;

export type TClickElementOfCategoriesByPositionFunction = (
  driver: WebDriver,
  position: number
) => Promise<ClickElementCategoryByPosition>;
