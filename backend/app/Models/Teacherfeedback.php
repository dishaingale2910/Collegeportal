<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacherfeedback extends Model
{
    public $timestamps = false;
    protected $fillable = ['first_name','last_name','email','class','message'];
}
