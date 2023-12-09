<?php

namespace App\Http\Middleware;

use App\Models\JenisKapal;
use App\Models\JenisPenumpang;
use App\Models\JenisPunampang;
use App\Models\Kapal;
use App\Models\Kelas;
use App\Models\Rute;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'jenisKapal' => JenisKapal::latest()->get(),
            'jenisPenumpang' => JenisPenumpang::latest()->get(),
            'kapal' => Kapal::latest()->get(),
            'rute' => Rute::latest()->get(),
            'kelas' => Kelas::latest()->get(),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message')
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
