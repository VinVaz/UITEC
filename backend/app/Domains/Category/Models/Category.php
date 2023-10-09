<?php

namespace App\Domains\Category\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['category_name', 'category_slug'];

    /**
     * Boot function to automatically set the slug when creating a category.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($category) {
            $category->category_slug = Str::slug($category->category_name);
        });
    }

    /**
     * Get the products associated with this category.
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}