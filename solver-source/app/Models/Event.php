<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
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
      'email',
      'fromDate',
      'untilDate',
      // 'numberOfFavs',
      'url',
    ];
}
