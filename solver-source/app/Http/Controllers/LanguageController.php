<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function languageSwitch(Request $request)
    {
        $language = $request->input('language');
        session(['language' => $language]);
        Session::save();

        return redirect()->back()->with(['language_switched' => $language]);
    }
}
