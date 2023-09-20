import { WebDriver } from 'selenium-webdriver';
import { IOpenWeb } from '../interfaces';

export type TStartDriverFunction = (
  defineBrowser: string
) => Promise<WebDriver>;

export type TOpenWebFunction = (
  driver: WebDriver,
  website: string
) => Promise<IOpenWeb>;

export type TCloseWebFunction = (driver: WebDriver) => Promise<void>;
