<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\WelcomeController;

Route::get('/', [WelcomeController::class, 'index']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/bookmarks', [BookmarkController::class, 'index'])->name('bookmarks.index');
    Route::get('/bookmark/view/{bookmark}', [BookmarkController::class, 'view'])->name('bookmark.view');
    Route::get('/bookmark/add', [BookmarkController::class, 'add'])->name('bookmark.add');
    Route::post('/bookmarks/preview', [BookmarkController::class, 'getPreviewData'])->name('bookmark.preview');
    Route::post('/bookmark/make-active', [BookmarkController::class, 'makeActive'])->name('bookmark.active');
});
