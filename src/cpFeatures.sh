#!/bin/bash

# Ruta de la carpeta de origen (Carpeta A)
carpeta_origen="src/features"

# Ruta de la carpeta de destino (Carpeta B)
carpeta_destino="dist/features"

# Copiar archivos .feature de la carpeta de origen a la carpeta de destino
cp "$carpeta_origen"/*.feature "$carpeta_destino"/
