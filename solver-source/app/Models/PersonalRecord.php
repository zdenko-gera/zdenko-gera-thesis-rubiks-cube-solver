<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalRecord extends Model
{
    use HasFactory;

    protected $table = 'personal_records';

    protected $primaryKey = 'id';

    protected $fillable = [
        'hour',
        'min',
        'sec',
        'msec',
        'cubeType'
    ];
}
