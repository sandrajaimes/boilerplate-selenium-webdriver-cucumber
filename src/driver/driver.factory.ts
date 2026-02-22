import { Builder, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

import { createLogger } from '../config/logger';

const log = createLogger({ component: 'DriverFactory' });

export class DriverFactory {
  static async create(): Promise<WebDriver> {
    log.info('Creando instancia de WebDriver', { browser: 'chrome' });
    const options = new Options();
    options.addArguments('--start-maximized', '--disable-notifications');
    options.setUserPreferences({
      'profile.default_content_setting_values.notifications': 2,
      'profile.default_content_setting_values.popups': 2,
      credentials_enable_service: false,
      'profile.password_manager_enabled': false,
      'profile.password_manager_leak_detection': false,
    });

    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    log.info('WebDriver creado correctamente');
    return driver;
  }
}