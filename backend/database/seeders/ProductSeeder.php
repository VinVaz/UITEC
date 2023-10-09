<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Domains\Product\Models\Product;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(70)->create();
    }
}
