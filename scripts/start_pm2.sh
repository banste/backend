#!/bin/bash
cd /var/www/html  # Ajusta la ruta a la de tu proyecto
pm2 start dist/main.js --name "backend"  # Iniciar el backend con PM2
pm2 save  # Guardar el proceso para que PM2 lo administre automáticamente
