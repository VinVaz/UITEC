<?php

namespace App\Http\Controllers;

use App\Domains\Product\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    
    public function index()
    {
        $products = Product::all();
        return response()->json(['products' => $products], Response::HTTP_OK);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json(['product' => $product], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'product_value' => 'required|numeric',
            'expiration_date' => 'required|date',
            'stock_quantity' => 'required|integer',
        ]);

        $product = Product::create($validatedData);

        return response()->json(['product' => $product], Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        var_dump($request);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        $validatedData = $request->validate([
            'product_name' => 'string|max:255',
            'category_id' => 'exists:categories,id',
            'product_value' => 'numeric',
            'expiration_date' => 'date',
            'stock_quantity' => 'boolean',
            'perishable' => 'integer',
        ]);

        var_dump($validatedData);

        $product->update($validatedData);

        return response()->json(['message' => 'Product updated successfully', 'product' => $product], Response::HTTP_OK);
    }

    public function delete($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], Response::HTTP_OK);
    }
}
