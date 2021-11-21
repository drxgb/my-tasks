<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
			'title' => 'Passear com o cachorro',
			'description' => 'Aquele passeio esperto com o seu dogão pelas manhãs.',
			'date' => Date::create(2021, 11, 21, 8),
			'done' => true,
		]);

		DB::table('tasks')->insert([
			'title' => 'Comer hamburger',
			'description' => 'Mandar aquele lanchinho com um pão quentinho... Hmmm! Chega manteiga derrete.',
			'date' => Date::create(2021, 11, 22, 11, 30),
		]);

		DB::table('tasks')->insert([
			'title' => 'Estudar Inertia',
			'description' => 'Desbravar as aventuras do desenvolvimento utilizando Intertia.',
			'date' => Date::create(2021, 11, 30, 9),
			'important' => true,
		]);
    }
}
