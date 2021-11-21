<template>
	<div class="card max-w-3xl mx-auto space-y-2">
		<div class="flex gap-4 items-baseline">
			<input class="flex-grow" v-model="filter.title" type="text" placeholder="Pesquisar..." />
			<span class="text-xs">De:</span>
			<input type="date" v-model="filter.from" />
			<span class="text-xs">Para:</span>
			<input type="date" v-model="filter.to" />
		</div>
		<div class="flex gap-4 items-baseline">
			<input type="radio" v-model="filter.type" id="todos" value="all" />
			<label for="todos">Todos</label>
			<input type="radio" v-model="filter.type" id="importantes" value="only-important" />
			<label for="importantes">Somente importantes</label>
			<input type="radio" v-model="filter.type" id="comuns" value="only-common" />
			<label for="comuns">Somente comuns</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Search',

	data() {
		return {
			filter: {
				title: '',
				from: '',
				to: '',
				type: 'all',
			}
		}
	}
}
</script>
