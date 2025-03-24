<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ShopController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';




Route::get('/shop', [ShopController::class, 'index'])->name('shop');

Route::get('create-shop', [ShopController::class, 'create'])->name('create-shop');
Route::post('shop-store', [ShopController::class, 'store'])->name('shop-store');
