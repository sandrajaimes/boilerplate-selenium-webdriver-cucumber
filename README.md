# Selenium WebDriver con Cucumber (Typescript)
Este repositorio realiza la ejecucion de pruebas de interfaz usando como recurso la pagina web demoblaze. Puede ser de utilidad como recurso de referencia base para la creacion de pruebas con: selenium webdriver y cucumber.

## Configuración del entorno
Antes de comenzar a utilizar este boilerplate, es necesario asegurarse de tener configurado el entorno adecuadamente. A continuación, se detallan los pasos necesarios:
1. **Configurar las variables de entorno:** En el archivo env.Example se encuentra un ejemplo de las variables requeridas.


## Estructura del proyecto
1. **Carpeta - /src/config:** Contiene los archivos de configuración para la ejecución de Cucumber y la generación de un informe en formato HTML.
2. **Carpeta - /src/drivers:** Contiene la configuración para los distintos navegadores disponibles.
3. **Carpeta - /src/features:** Contiene la ejecución y definición de los distintos pasos (steps) que componen las pruebas.
4. **Carpeta - /src/pages:** Contiene los recursos disponibles para interactuar con cada página. Estos recursos son utilizados en los pasos definidos en Cucumber.

## Instalación
Para la instalacion de las dependencias

```bash
  cd boilerplate-selenium-webdriver-cucumber
  npm install
```

## Ejecución de los Tests
1. **start:test:** Realiza la ejecución de las pruebas, mostrando un informe en la terminal y generando un informe en formato JSON.
```bash
  npm run start:test
```

2. **start:test:report:** Realiza la ejecución de las pruebas, generando y abriendo un informe con los resultados.
```bash
  npm run start:test:report
```

## Authors
- [@sandrajaimes](https://github.com/sandrajaimes)

