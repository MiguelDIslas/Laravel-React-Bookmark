<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function bookmarks()
    {
        return $this->morphedBy(Bookmark::class, 'taggable');
    }
}
