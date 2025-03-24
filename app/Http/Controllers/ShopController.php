<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Models\Shop;
use Inertia\Inertia;


use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index()
    {


        $products = Shop::all();

        return Inertia::render('shop/shop', [
            'products' => $products
        ]);
    }
    public function create()
    {


        return Inertia::render('shop/create-shop');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // 📸 บันทึกไฟล์ภาพไว้ใน public/storage/shops
        $imagePath = $request->file('image')->store('shops', 'public');

        $validated['image'] = $imagePath;

        // 🛒 บันทึกข้อมูลร้าน
        \App\Models\Shop::create($validated);

        //return redirect()->route('create-shop')->with('success', 'Shop created successfully!');
        return redirect()->route('dashboard')->with('success', 'Shop created successfully!');
    }
}
