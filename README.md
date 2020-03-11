# laravel-vue-router

## ■このアプリについて

Laravel(API) + Vue(SPA)の練習用。
[参考サイト](https://reffect.co.jp/laravel/laravel-vue-router-single-page-application#i-7)で作成するアプリの改良版。

## ■実行環境構築

[lamp_env_docker](https://github.com/hal-tech-club/lamp_env_docker) からdocker-compose環境構築。  
Nginxのルートディレクトリをこのアプリのpublicに合わせる。

## ■使用コマンド

1. `composer create-project --prefer-dist laravel/laravel laravel_vue_router`
2. `composer require laravel/ui`
3. `php artisan ui vue --auth`
4. `npm install && npm run dev`
5. `npm install vue-router`
6. `php artisan migrate`
7. `php artisan make:seeder UsersTableSeeder`
8. `php artisan db:seed`
