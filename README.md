# laravel-vue-spa

## ■ このアプリについて

Laravel(API) + Vue(SPA)の練習用。
[参考サイト](https://reffect.co.jp/laravel/laravel-vue-router-single-page-application#i-7)で作成するアプリの改良版。

## ■ 実行環境構築

[lamp_env_docker](https://github.com/hal-tech-club/lamp_env_docker) から docker-compose 環境構築。  
docker-compose.yml の DB 名を laravel-vue-spa に修正。  
Nginx のルートディレクトリパスをこのアプリの public に合わせる。

## ■ 使用コマンド

1. `composer create-project --prefer-dist laravel/laravel laravel-vue-spa`
2. `composer require laravel/ui`
3. `cp .env.example .env`の後、.env の DB 周りを以下のように修正

   ```
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=laravel-vue-spa
   DB_USERNAME=root
   DB_PASSWORD=root
   ```

4. `chmod 777 storage & chmod 777 bootstrap/cache`
5. `php artisan ui vue --auth`
6. `npm install && npm run dev`
7. `npm install vue-router`
8. `php artisan migrate`
9. `php artisan make:seeder UsersTableSeeder`
10. `php artisan db:seed`

## ■ 利用技術

- PHP 7.2, Laravel 6.x
- Laravel Mix (Webpack)
- Vue.js 2.5.x, Vue-Router 3.1.x
- JWT 1.0
- Git
- Prettier
- MySQL
