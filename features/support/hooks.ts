import { After, Before } from '@cucumber/cucumber';

import { createLogger } from '../../src/config/logger';
import { CustomWorld } from './world';

const log = createLogger({ component: 'Hooks' });

Before(async function (this: CustomWorld) {
  log.info('Before: Iniciando escenario');
  await this.init();
});

After(async function (this: CustomWorld) {
  log.info('After: Finalizando escenario');
  await this.close();
});