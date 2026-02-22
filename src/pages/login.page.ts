import { By, WebDriver, until } from 'selenium-webdriver';

import { createLogger } from '../config/logger';

const log = createLogger({ page: 'LoginPage' });

export class LoginPage {
  constructor(private driver: WebDriver) {}

  private usernameInput = By.id("user-name");
  private passwordInput = By.id('password');
  private loginButton = By.id('login-button');
  private dashboardElement = By.id('inventory_sidebar_link');

  async navigate(url: string) {
    log.info('Navegando a la página de login', { url });
    await this.driver.get(url);
  }

  async enterUsername(username: string) {
    log.debug('Ingresando usuario', { username });
    const element = await this.driver.findElement(this.usernameInput);
    await element.sendKeys(username);
  }

  async enterPassword(password: string) {
    log.debug('Ingresando contraseña');
    const element = await this.driver.findElement(this.passwordInput);
    await element.sendKeys(password);
  }

  async clickLogin() {
    log.info('Haciendo clic en botón de login');
    const button = await this.driver.findElement(this.loginButton);
    await button.click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    log.info('Verificando login exitoso');
    try {
      await this.driver.wait(until.elementLocated(this.dashboardElement), 1500);
      log.info('Login exitoso');
      return true;
    } catch (error) {
      log.error('Login fallido: elemento del dashboard no encontrado', { error: String(error) });
      return false;
    }
  }

  async login(username: string, password: string) {
    log.info('Ejecutando login');
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}