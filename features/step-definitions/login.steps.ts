import 'dotenv/config';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';

import { createLogger } from '../../src/config/logger';
import { CustomWorld } from '../support/world';

const log = createLogger({ component: 'LoginSteps' });

Given('el usuario navega a la página de login', async function (this: CustomWorld) {
  const url = process.env.URL ?? '';
  log.info('Step: Navegando a la página de login', { url });
  await this.loginPage.navigate(url);
});

When('ingresa usuario y contraseña', async function (this: CustomWorld) {
  const username = process.env.USERNAME_TEST ?? '';
  const password = process.env.PASSWORD_TEST ?? '';
  log.info('Step: Ingresando credenciales', { username });
  await this.loginPage.login(username, password);
});

Then('debería ver el dashboard', async function (this: CustomWorld) {
  log.info('Step: Verificando dashboard');
  const result = await this.loginPage.isLoginSuccessful();
  expect(result).to.be.true;
  log.info('Step: Dashboard verificado correctamente');
});