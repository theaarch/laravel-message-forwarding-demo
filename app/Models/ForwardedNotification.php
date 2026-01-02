<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForwardedNotification extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'from',
        'content',
    ];
}
