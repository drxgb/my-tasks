<template>
	<div class="card max-w-3xl mx-auto">
		<ul v-if="tasks.length > 0">
			<li v-for="task in tasks" :key="task.id">
				<Task :task="task" />
			</li>
		</ul>
		<h1 v-else class="text-xl font-semibold">Não há tarefas neste momento...</h1>
	</div>
</template>

<script>
import Task from './Task.vue';

export default {
	name: 'TaskList',
	components: {
		Task,
	},

	data() {
		return {
			tasks: [],
		}
	},

	mounted() {
		this.tasks = this.$attrs.tasks;
	}
}
</script>

<style>

</style>
