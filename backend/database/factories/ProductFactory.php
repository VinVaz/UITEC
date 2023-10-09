<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Domains\Product\Models\Product;
use App\Domains\Category\Models\Category;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $categoriesIds = Category::pluck('id')->toArray();
        return [
            'product_name' => $this->faker->word,
            'category_id' => $this->faker->randomElement($categoriesIds),
            'product_value' => $this->faker->randomFloat(2, 1, 100),
            'expiration_date' => $this->faker->dateTimeBetween('+1 week', '+1 year'),
            'stock_quantity' => $this->faker->numberBetween(1, 100),
            'perishable' => $this->faker->boolean,
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => now(),
        ];
    }
}
