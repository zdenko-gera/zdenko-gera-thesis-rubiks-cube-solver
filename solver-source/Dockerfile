FROM php:8.2.0-fpm

# Frissítjük a csomaglistát és telepítjük a szükséges csomagokat
RUN apt-get update -y && apt-get install -y openssl zip unzip git

# Composer telepítés és függőségek letöltése
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && apt-get install -y libpq-dev

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# Laravel munkakönyvtár
WORKDIR /app

# Laravel fájlok átmásolása
COPY . /app

RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000
