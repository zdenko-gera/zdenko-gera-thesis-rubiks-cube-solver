@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    @if(session('error'))
        <div>
            <span>{{ session('error') }}</span>
        </div>
    @endif

    @if ($errors->any())
            @foreach ($errors->all() as $error)
                    <div>{{ $error }}</div>
            @endforeach
    @endif
    <h2 class="subpage-title">{{ __('messages.createEvent') }}</h2>
    <form action="{{ route('rubikEvents.store') }}" method="post" class="upload-form">
        @csrf

        <label for="title" class="form-label">{{ __('messages.eventName') }}</label>
        <input type="text" name="title" class="form-control" placeholder="{{ __('messages.eventNamePlaceholder') }}">

        <label for="description" class="form-label">{{ __('messages.details') }}</label>
        <textarea name="description" class="form-control" placeholder="{{ __('messages.detailsPlaceholder') }}"></textarea>

        <label for="price" class="form-label">{{ __('messages.entryFee') }}</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">EUR</span>
            </div>
            <input type="number" name="price" placeholder="{{ __('messages.entryFeePlaceholder') }}" class="form-control">
        </div>

        <label for="award" class="form-label">{{ __('messages.award') }}</label>
        <input type="text" name="award" placeholder="{{ __('messages.awardPlaceholder') }}" class="form-control">

        <label for="email" class="form-label">{{ __('messages.contactEmail') }}</label>
        <input type="email" name="email" placeholder="{{ __('messages.contactEmailPlaceholder') }}" class="form-control">

        <label for="country" class="form-label">{{ __('messages.country') }}</label>
        <input type="text" name="country" placeholder="{{ __('messages.countryPlaceholder') }}" class="form-control">

        <label for="postalCode" class="form-label">{{ __('messages.postalCode') }}</label>
        <input type="number" name="postalCode" placeholder="{{ __('messages.postalCodePlaceholder') }}" class="form-control">

        <label for="city" class="form-label">{{ __('messages.city') }}</label>
        <input type="text" name="city" placeholder="{{ __('messages.cityPlaceholder') }}" class="form-control">

        <label for="street" class="form-label">{{ __('messages.street') }}</label>
        <input type="text" name="street" placeholder="{{ __('messages.streetPlaceholder') }}" class="form-control">

        <label for="houseNumber" class="form-label">{{ __('messages.houseNumber') }}</label>
        <input type="text" name="houseNumber" placeholder="{{ __('messages.houseNumberPlaceholder') }}" class="form-control">

        <label for="fromDate" class="form-label">{{ __('messages.startDate') }}</label>
        <input type="date" name="fromDate" class="form-control">

        <label for="untilDate" aria-describedby="untilDateHelp" class="form-label">{{ __('messages.endDate') }}</label>
        <input type="date" name="untilDate" class="form-control">
        <div id="untilDateHelp" class="form-text text-secondary">{{ __('messages.oneDayEvent') }}</div>

        <label for="url" class="form-label">{{ __('messages.eventWebsiteUrl') }}</label>
        <input type="text" name="url" placeholder="{{ __('messages.eventWebsiteUrlPlaceholder') }}" class="form-control">

        <button type="submit" class="btn btn-info mt-5">{{ __('messages.upload') }}</button>
    </form>


@endsection
