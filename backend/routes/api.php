<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ProductController;

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

// Create a new product
Route::post('/products', [ProductController::class, 'store']);

// Get all products
Route::get('/products', [ProductController::class, 'index']);

// Get a specific product by ID
Route::get('/products/{id}', [ProductController::class, 'show']);

// Update a specific product by ID
Route::put('/products/{id}', [ProductController::class, 'update']);

// Delete a specific product by ID
Route::delete('/products/{id}', [ProductController::class, 'delete']);

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
