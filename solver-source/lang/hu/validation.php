<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'A :attribute mezőt el kell fogadni.',
    'accepted_if' => 'A :attribute mezőt el kell fogadni, ha :other :value.',
    'active_url' => 'A :attribute mező érvényes URL-nek kell lennie.',
    'after' => 'A :attribute mezőnek :date utáni dátumnak kell lennie.',
    'after_or_equal' => 'A :attribute mezőnek :date utáni vagy azzal egyenlő dátumnak kell lennie.',
    'alpha' => 'A :attribute mező csak betűket tartalmazhat.',
    'alpha_dash' => 'A :attribute mező csak betűket, számokat, kötőjeleket és aláhúzásokat tartalmazhat.',
    'alpha_num' => 'A :attribute mező csak betűket és számokat tartalmazhat.',
    'array' => 'A :attribute mezőnek tömbnek kell lennie.',
    'ascii' => 'A :attribute mező csak egybájtos alfanumerikus karaktereket és szimbólumokat tartalmazhat.',
    'before' => 'A :attribute mezőnek :date előtti dátumnak kell lennie.',
    'before_or_equal' => 'A :attribute mezőnek :date előtti vagy azzal egyenlő dátumnak kell lennie.',
    'between' => [
        'array' => 'A :attribute mezőnek :min és :max elem között kell lennie.',
        'file' => 'A :attribute mező méretének :min és :max kilobájt között kell lennie.',
        'numeric' => 'A :attribute mező értékének :min és :max között kell lennie.',
        'string' => 'A :attribute mezőnek :min és :max karakter között kell lennie.',
    ],
    'boolean' => 'A :attribute mező értékének igaznak vagy hamisnak kell lennie.',
    'can' => 'A :attribute mező tiltott értéket tartalmaz.',
    'confirmed' => 'A :attribute megerősítése nem egyezik.',
    'contains' => 'A :attribute mezőből hiányzik egy szükséges érték.',
    'current_password' => 'A megadott jelszó helytelen.',
    'date' => 'A :attribute mező érvényes dátumnak kell lennie.',
    'date_equals' => 'A :attribute mezőnek :date dátummal egyenlőnek kell lennie.',
    'date_format' => 'A :attribute mező nem egyezik a :format formátummal.',
    'decimal' => 'A :attribute mezőnek :decimal tizedesjegyet kell tartalmaznia.',
    'declined' => 'A :attribute mezőt el kell utasítani.',
    'declined_if' => 'A :attribute mezőt el kell utasítani, ha :other :value.',
    'different' => 'A :attribute és :other mezőknek különbözőnek kell lenniük.',
    'digits' => 'A :attribute mezőnek :digits számjegyűnek kell lennie.',
    'digits_between' => 'A :attribute mezőnek :min és :max számjegy között kell lennie.',
    'dimensions' => 'A :attribute mező érvénytelen kép méreteket tartalmaz.',
    'distinct' => 'A :attribute mező duplikált értéket tartalmaz.',
    'doesnt_end_with' => 'A :attribute mező nem végződhet a következők egyikével: :values.',
    'doesnt_start_with' => 'A :attribute mező nem kezdődhet a következők egyikével: :values.',
    'email' => 'A :attribute mező érvényes email címnek kell lennie.',
    'ends_with' => 'A :attribute mezőnek a következők egyikével kell végződnie: :values.',
    'enum' => 'A kiválasztott :attribute érvénytelen.',
    'exists' => 'A kiválasztott :attribute érvénytelen.',
    'extensions' => 'A :attribute mezőnek a következő kiterjesztések egyikével kell rendelkeznie: :values.',
    'file' => 'A :attribute mezőnek fájlnak kell lennie.',
    'filled' => 'A :attribute mező nem lehet üres.',
    'gt' => [
        'array' => 'A :attribute mezőnek több mint :value elemet kell tartalmaznia.',
        'file' => 'A :attribute mező méretének nagyobbnak kell lennie, mint :value kilobájt.',
        'numeric' => 'A :attribute mező értékének nagyobbnak kell lennie, mint :value.',
        'string' => 'A :attribute mezőnek több mint :value karaktert kell tartalmaznia.',
    ],
    'gte' => [
        'array' => 'A :attribute mezőnek legalább :value elemet kell tartalmaznia.',
        'file' => 'A :attribute mező méretének legalább :value kilobájtnak kell lennie.',
        'numeric' => 'A :attribute mező értékének legalább :value-nek kell lennie.',
        'string' => 'A :attribute mezőnek legalább :value karaktert kell tartalmaznia.',
    ],
    'hex_color' => 'A :attribute mezőnek érvényes hexadecimális színkódnak kell lennie.',
    'image' => 'A :attribute mezőnek képnek kell lennie.',
    'in' => 'A kiválasztott :attribute érvénytelen.',
    'in_array' => 'A :attribute mezőnek léteznie kell a :other mezőben.',
    'integer' => 'A :attribute mezőnek egész számnak kell lennie.',
    'ip' => 'A :attribute mezőnek érvényes IP címnek kell lennie.',
    'ipv4' => 'A :attribute mezőnek érvényes IPv4 címnek kell lennie.',
    'ipv6' => 'A :attribute mezőnek érvényes IPv6 címnek kell lennie.',
    'json' => 'A :attribute mezőnek érvényes JSON karakterláncnak kell lennie.',
    'list' => 'A :attribute mezőnek listának kell lennie.',
    'lowercase' => 'A :attribute mezőnek kisbetűsnek kell lennie.',
    'lt' => [
        'array' => 'A :attribute mezőnek kevesebb mint :value elemet kell tartalmaznia.',
        'file' => 'A :attribute mező méretének kisebbnek kell lennie, mint :value kilobájt.',
        'numeric' => 'A :attribute mező értékének kisebbnek kell lennie, mint :value.',
        'string' => 'A :attribute mezőnek kevesebb mint :value karaktert kell tartalmaznia.',
    ],
    'lte' => [
        'array' => 'A :attribute mező nem tartalmazhat több mint :value elemet.',
        'file' => 'A :attribute mező méretének kisebbnek vagy egyenlőnek kell lennie, mint :value kilobájt.',
        'numeric' => 'A :attribute mező értékének kisebbnek vagy egyenlőnek kell lennie, mint :value.',
        'string' => 'A :attribute mezőnek legfeljebb :value karaktert kell tartalmaznia.',
    ],
    'mac_address' => 'A :attribute mezőnek érvényes MAC címnek kell lennie.',
    'max' => [
        'array' => 'A :attribute mező nem tartalmazhat több mint :max elemet.',
        'file' => 'A :attribute mező méretének legfeljebb :max kilobájtnak kell lennie.',
        'numeric' => 'A :attribute mező értéke nem lehet nagyobb, mint :max.',
        'string' => 'A :attribute mező nem tartalmazhat több mint :max karaktert.',
    ],
    'max_digits' => 'A :attribute mező nem tartalmazhat több mint :max számjegyet.',
    'mimes' => 'A :attribute mezőnek a következő típusú fájlnak kell lennie: :values.',
    'mimetypes' => 'A :attribute mezőnek a következő típusú fájlnak kell lennie: :values.',
    'min' => [
        'array' => 'A :attribute mezőnek legalább :min elemet kell tartalmaznia.',
        'file' => 'A :attribute mező méretének legalább :min kilobájtnak kell lennie.',
        'numeric' => 'A :attribute mező értékének legalább :min-nek kell lennie.',
        'string' => 'A :attribute mezőnek legalább :min karaktert kell tartalmaznia.',
    ],
    'min_digits' => 'A :attribute mezőnek legalább :min számjegyet kell tartalmaznia.',
    'missing' => 'A :attribute mezőnek hiányoznia kell.',
    'missing_if' => 'A :attribute mezőnek hiányoznia kell, ha :other :value.',
    'missing_unless' => 'A :attribute mezőnek hiányoznia kell, kivéve ha :other :value.',
    'missing_with' => 'A :attribute mezőnek hiányoznia kell, ha :values jelen van.',
    'missing_with_all' => 'A :attribute mezőnek hiányoznia kell, ha :values jelen vannak.',
    'multiple_of' => 'A :attribute mező értékének többszörösének kell lennie :value.',
    'not_in' => 'A kiválasztott :attribute érvénytelen.',
    'not_regex' => 'A :attribute mező formátuma érvénytelen.',
    'numeric' => 'A :attribute mezőnek számnak kell lennie.',
    'password' => [
        'letters' => 'A :attribute mezőnek legalább egy betűt kell tartalmaznia.',
        'mixed' => 'A :attribute mezőnek legalább egy nagybetűt és egy kisbetűt kell tartalmaznia.',
        'numbers' => 'A :attribute mezőnek legalább egy számot kell tartalmaznia.',
        'symbols' => 'A :attribute mezőnek legalább egy szimbólumot kell tartalmaznia.',
        'uncompromised' => 'A megadott :attribute egy adatlopásban már szerepelt. Kérjük, válasszon másik :attribute mezőt.',
    ],
    'present' => 'A :attribute mezőnek jelen kell lennie.',
    'present_if' => 'A :attribute mezőnek jelen kell lennie, ha :other :value.',
    'present_unless' => 'A :attribute mezőnek jelen kell lennie, kivéve ha :other :value.',
    'present_with' => 'A :attribute mezőnek jelen kell lennie, ha :values jelen van.',
    'present_with_all' => 'A :attribute mezőnek jelen kell lennie, ha :values jelen vannak.',
    'prohibited' => 'A :attribute mező tiltott.',
    'prohibited_if' => 'A :attribute mező tiltott, ha :other :value.',
    'prohibited_unless' => 'A :attribute mező tiltott, kivéve ha :other :values tartalmazza.',
    'prohibits' => 'A :attribute mező tiltja, hogy a :other jelen legyen.',
    'regex' => 'A :attribute mező formátuma érvénytelen.',
    'required' => 'A :attribute mező kötelező.',
    'required_array_keys' => 'A :attribute mezőnek a következő bejegyzéseket kell tartalmaznia: :values.',
    'required_if' => 'A :attribute mező kötelező, ha :other :value.',
    'required_if_accepted' => 'A :attribute mező kötelező, ha :other elfogadva.',
    'required_if_declined' => 'A :attribute mező kötelező, ha :other elutasítva.',
    'required_unless' => 'A :attribute mező kötelező, kivéve ha :other :values tartalmazza.',
    'required_with' => 'A :attribute mező kötelező, ha :values jelen van.',
    'required_with_all' => 'A :attribute mező kötelező, ha :values jelen vannak.',
    'required_without' => 'A :attribute mező kötelező, ha :values nincs jelen.',
    'required_without_all' => 'A :attribute mező kötelező, ha egyik :values sincs jelen.',
    'same' => 'A :attribute és :other mezőknek egyezniük kell.',
    'size' => [
        'array' => 'A :attribute mezőnek :size elemet kell tartalmaznia.',
        'file' => 'A :attribute mező méretének :size kilobájtnak kell lennie.',
        'numeric' => 'A :attribute mező értékének :size-nek kell lennie.',
        'string' => 'A :attribute mezőnek :size karakter hosszúnak kell lennie.',
    ],
    'starts_with' => 'A :attribute mezőnek a következők egyikével kell kezdődnie: :values.',
    'string' => 'A :attribute mezőnek szövegnek kell lennie.',
    'timezone' => 'A :attribute mezőnek érvényes időzónának kell lennie.',
    'unique' => 'A :attribute már foglalt.',
    'uploaded' => 'A :attribute feltöltése sikertelen volt.',
    'uppercase' => 'A :attribute mezőnek nagybetűsnek kell lennie.',
    'url' => 'A :attribute mezőnek érvényes URL-nek kell lennie.',
    'ulid' => 'A :attribute mezőnek érvényes ULID-nek kell lennie.',
    'uuid' => 'A :attribute mezőnek érvényes UUID-nek kell lennie.',


    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
