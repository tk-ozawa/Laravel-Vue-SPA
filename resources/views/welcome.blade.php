<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/user">user</router-link>
        </div>
        <router-view/>
    </div>

<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
