<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Miguel',
            'email' => 'miguelangelde15@gmail.com',
            'password' => \bcrypt('12345678'),
        ]);

        \App\Models\Bookmark::factory(10)->create([
            'is_active' => 1,
        ]);
    }
}
