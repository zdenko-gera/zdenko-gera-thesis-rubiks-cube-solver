<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RubikEvent extends Model
{
    protected $table = 'rubik_events';
    use HasFactory;

    protected $fillable = [
      'title',
      'description',
      'price',
      'award',
      'email',
      'country',
      'postalCode',
      'city',
      'street',
      'houseNumber',
      'fromDate',
      'untilDate',
      // 'numberOfFavs',
      'url',
    ];
}
