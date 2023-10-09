<?php

namespace App\Domains\Product\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'category_id',
        'product_value',
        'expiration_date',
        'stock_quantity',
        'perishable',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'expiration_date' => 'datetime',
        'perishable' => 'boolean',
    ];

    // Assuming 'category' is a foreign key referencing a Category model
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}