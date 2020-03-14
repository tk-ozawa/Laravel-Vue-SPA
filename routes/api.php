<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('user')->group(function () {
    Route::get('/', function (Request $request) {
        $users = App\User::all();
        return response()->json(['users' => $users]);
    });

    Route::get('{user}', function(App\User $user){
        return response()->json(['user' => $user]);
    });

    Route::put('{user}', function(Request $request, App\User $user) {
        $user->update($request->user);
        return response()->json(['user' => $user]);
    });

    Route::delete('{user}', function(App\User $user){
        $user->delete();
        return response()->json(['message' => 'delete successfully']);
    });

    Route::post('/', function(Request $request){
        $user = App\User::create($request->user);
        return response()->json(['user' => $user]);
    });
});

Route::post('/login', 'AuthController@login');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/me', 'AuthController@me');
    Route::post('/logout', 'AuthController@logout');
});
