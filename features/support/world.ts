import { setWorldConstructor, World } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';

import { createLogger } from '../../src/config/logger';
import { DriverFactory } from '../../src/driver/driver.factory';
import { LoginPage } from '../../src/pages/login.page';

const log = createLogger({ component: 'World' });

export class CustomWorld extends World {
  driver!: WebDriver;
  loginPage!: LoginPage;

  async init() {
    log.info('Inicializando contexto de prueba');
    this.driver = await DriverFactory.create();
    this.loginPage = new LoginPage(this.driver);
    log.info('Contexto de prueba inicializado');
  }

  async close() {
    if (this.driver) {
      const delaySeconds = Number(process.env.BROWSER_CLOSE_DELAY ?? 30);
      log.info(`Cerrando sesión de WebDriver en ${delaySeconds} segundos`);
      await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));
      await this.driver.quit();
      log.info('Sesión de WebDriver cerrada');
    }
  }
}

setWorldConstructor(CustomWorld);