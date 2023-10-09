<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Domains\Category\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 12 categories using the Category model factory
        Category::factory()->count(12)->create();
    }
}