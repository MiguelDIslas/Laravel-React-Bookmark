<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Routing\Controller;

class WelcomeController extends Controller
{
    public function index(){
        return Inertia::render('Welcome/index');
    }
}
