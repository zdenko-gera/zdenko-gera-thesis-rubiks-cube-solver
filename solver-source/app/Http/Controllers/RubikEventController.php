<?php

namespace App\Http\Controllers;

use App\Models\RubikEvent;
use Illuminate\Http\Request;

class RubikEventController extends Controller
{
    public function create()
    {
        return view('rubikEvents.create');
    }

    public function index(Request $request)
    {
        $rubikEvents = RubikEvent::orderBy('fromDate')->get();

        return view('rubikEvents.index')->with(['rubikEvents' => $rubikEvents]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'min:3', 'max: 255'],
            'description' => ['required', 'min:5'],
            'price' => ['required', 'numeric'],
            'award' => ['required'],
            'email' => ['required', 'string'],
            'country' => ['required'],
            'postalCode' => ['required', 'numeric'],
            'city' => ['required', 'string'],
            'street' => ['required', 'string'],
            'houseNumber' => ['required', 'string'],
            'fromDate' => ['required'],
            'url' => ['string'],
        ]);

        $rubikEvent = new RubikEvent();

        $rubikEvent->title = $request->input('title');
        $rubikEvent->description = $request->input('description');
        $rubikEvent->price = $request->input('price');
        $rubikEvent->award = $request->input('award');
        $rubikEvent->email = $request->input('email');
        $rubikEvent->country = $request->input('country');
        $rubikEvent->postalCode = $request->input('postalCode');
        $rubikEvent->city = $request->input('city');
        $rubikEvent->street = $request->input('street');
        $rubikEvent->houseNumber = $request->input('houseNumber');
        $rubikEvent->fromDate = $request->input('fromDate');
        $rubikEvent->untilDate = $request->input('untilDate');
        $rubikEvent->url = $request->input('url');

        $rubikEvent->save();

        return view('index')->with(['success' => __('messages.eventSaved')]);
    }

    public function view(string $id)
    {
        $rubikEvent = RubikEvent::find($id);

        return view('rubikEvents.show', ['rubikEvent' => $rubikEvent]);
    }
}
