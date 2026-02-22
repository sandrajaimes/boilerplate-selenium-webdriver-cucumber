# Selenium WebDriver con Cucumber (TypeScript)

Boilerplate para pruebas de interfaz de usuario (UI) usando **Selenium WebDriver**, **Cucumber** y **TypeScript**. Utiliza [SauceDemo](https://www.saucedemo.com/) como aplicación de referencia para automatización.

## Requisitos previos

- Node.js >= 20
- npm

## Instalación

```bash
git clone <repo-url>
cd boilerplate-selenium-webdriver-cucumber
npm install
```

## Configuración

### Variables de entorno

Copia el archivo de ejemplo y configura las variables según tu entorno:

```bash
cp .env.Example .env
```

| Variable | Descripción |
|----------|-------------|
| `URL` | URL de la aplicación (ej: https://www.saucedemo.com/) |
| `USERNAME` | Usuario para el login |
| `PASSWORD` | Contraseña para el login |
| `BROWSER_CLOSE_DELAY` | Segundos de espera antes de cerrar el navegador al finalizar (default: 30) |
| `LOG_LEVEL` | Nivel de logs: `info`, `debug`, etc. |
| `LOG_DIR` | Directorio para archivos de log (default: `logs`) |

## Estructura del proyecto

```
├── features/
│   ├── login.feature          # Escenarios BDD
│   ├── step-definitions/      # Definición de pasos
│   └── support/               # Hooks, World, configuración Cucumber
├── src/
│   ├── config/
│   │   └── logger.ts          # Configuración Winston (logs)
│   ├── driver/
│   │   └── driver.factory.ts  # Creación de WebDriver (Chrome)
│   └── pages/
│       └── login.page.ts      # Page Object del login
├── cucumber.js                # Configuración Cucumber
├── .env.Example               # Ejemplo de variables de entorno
└── package.json
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run start:bdd` | Ejecuta las pruebas BDD con Cucumber |
| `npm run build` | Ejecuta el script principal (tsx) |
| `npm run lint` | Ejecuta ESLint |
| `npm run format` | Formatea el código con Prettier |

## Ejecución de pruebas

```bash
npm run start:bdd
```

Las pruebas se ejecutan en Chrome. Al finalizar cada escenario, el navegador permanece abierto durante el tiempo configurado en `BROWSER_CLOSE_DELAY` (por defecto 30 segundos) antes de cerrarse.

### Ejemplo de escenario

```gherkin
Feature: Login

  Scenario: Login exitoso
    Given el usuario navega a la página de login
    When ingresa usuario y contraseña
    Then debería ver el dashboard
```

Las credenciales se obtienen de las variables de entorno (`USERNAME`, `PASSWORD`).

## Tecnologías

- **Selenium WebDriver** - Automatización del navegador
- **Cucumber** - BDD (Behavior Driven Development)
- **TypeScript** - Tipado estático
- **Winston** - Logging estructurado
- **Zod** - Validación de esquemas
- **Chai** - Aserciones

## Autor

- [@sandrajaimes](https://github.com/sandrajaimes)
