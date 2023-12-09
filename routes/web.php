<?php

use App\Http\Controllers\Admin\DaftarhargaController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GarasiController;
use App\Http\Controllers\Admin\JadwalKapalController;
use App\Http\Controllers\Admin\JenisKapalController;
use App\Http\Controllers\Admin\JenisPenumpangController;
use App\Http\Controllers\Admin\KapalController;
use App\Http\Controllers\Admin\KelasController;
use App\Http\Controllers\Admin\RuteController;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Models\DaftarHarga;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('', [HomeController::class, 'index'])->name('index');

// Route::middleware(['auth', ''])->group(function () {
Route::get('dashboard', [DashboardController::class, 'index'])->name('admin.dashboard')->middleware(['verified']);

Route::get('rute', [RuteController::class, 'index'])->name('admin.rute');
Route::post('rute-add', [RuteController::class, 'store'])->name('admin.rute-add');
Route::post('rute-update', [RuteController::class, 'update'])->name('admin.rute-update');
Route::delete('rute-delete', [RuteController::class, 'delete'])->name('admin.rute-delete');

Route::get('kelas', [KelasController::class, 'index'])->name('admin.kelas');
Route::post('kelas-add', [KelasController::class, 'store'])->name('admin.kelas-add');
Route::post('kelas-update', [KelasController::class, 'update'])->name('admin.kelas-update');
Route::delete('kelas-delete', [KelasController::class, 'delete'])->name('admin.kelas-delete');

Route::get('jenis-penumpang', [JenisPenumpangController::class, 'index'])->name('admin.jenis-penumpang');
Route::post('jenis-penumpang-add', [JenisPenumpangController::class, 'store'])->name('admin.jenis-penumpang-add');
Route::post('jenis-penumpang-update', [JenisPenumpangController::class, 'update'])->name('admin.jenis-penumpang-update');
Route::delete('jenis-penumpang-delete', [JenisPenumpangController::class, 'delete'])->name('admin.jenis-penumpang-delete');

Route::get('jenis-kapal', [JenisKapalController::class, 'index'])->name('admin.jenis-kapal');
Route::post('jenis-kapal-add', [JenisKapalController::class, 'store'])->name('admin.jenis-kapal-add');
Route::post('jenis-kapal-update', [JenisKapalController::class, 'update'])->name('admin.jenis-kapal-update');
Route::delete('jenis-kapal-delete', [JenisKapalController::class, 'delete'])->name('admin.jenis-kapal-delete');

Route::get('kapal', [KapalController::class, 'index'])->name('admin.kapal');
Route::post('kapal-add', [KapalController::class, 'store'])->name('admin.kapal-add');
Route::post('kapal-update', [KapalController::class, 'update'])->name('admin.kapal-update');
Route::delete('kapal-delete', [KapalController::class, 'delete'])->name('admin.kapal-delete');

Route::get('garasi', [GarasiController::class, 'index'])->name('admin.garasi');
Route::post('garasi-add', [GarasiController::class, 'store'])->name('admin.garasi-add');
Route::post('garasi-update', [GarasiController::class, 'update'])->name('admin.garasi-update');
Route::delete('garasi-delete', [GarasiController::class, 'delete'])->name('admin.garasi-delete');

Route::get('jadwal-kapal', [JadwalKapalController::class, 'index'])->name('admin.jadwal-kapal');
Route::post('jadwal-kapal-add', [JadwalKapalController::class, 'store'])->name('admin.jadwal-kapal-add');
Route::post('jadwal-kapal-update', [JadwalKapalController::class, 'update'])->name('admin.jadwal-kapal-update');
Route::delete('jadwal-kapal-delete', [JadwalKapalController::class, 'delete'])->name('admin.jadwal-kapal-delete');

Route::get('daftar-harga', [DaftarhargaController::class, 'index'])->name('admin.daftar-harga');
Route::post('daftar-harga-add', [DaftarhargaController::class, 'store'])->name('admin.daftar-harga-add');
Route::post('daftar-harga-update', [DaftarhargaController::class, 'update'])->name('admin.daftar-harga-update');
Route::delete('daftar-harga-delete', [DaftarhargaController::class, 'delete'])->name('admin.daftar-harga-delete');
// });








Route::middleware('guest')->group(function () {
    Route::get('register', [RegisterController::class, 'index'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);
    Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login', [LoginController::class, 'store']);
});

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::get('/email/verify', function () {
    $auth = Auth::user();

    return inertia('Global/Auth/NoticeVerification/Notice', ['user' => $auth]);
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');



Route::get('logout', function () {
    Auth::logout();
});
