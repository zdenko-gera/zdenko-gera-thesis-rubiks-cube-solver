<form action="{{ route('language.switch') }}" method="POST" class="inline-block">
    @csrf
    <select name="language" id="language-select" class="form-select bg-dark text-white" onchange="this.form.submit()">
        <option value="hu" {{ app()->getLocale() === 'hu' ? 'selected' : '' }}>HU</option>
        <option value="en" {{ app()->getLocale() === 'en' ? 'selected' : '' }}>EN</option>
    </select>
</form>
