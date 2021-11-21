<template>
	<div class="p-2 rounded-md" :class="{ 'bg-yellow-100 text-gray-900': task.important }">
		<div class="flex items-baseline justify-between">
			<input type="checkbox" class="w-4 h-4" v-model="task.done" />
			<h3
				class="flex-grow mx-2 cursor-pointer select-none"
				:class="{ 'line-through': task.done }"
				@click="task.done = !task.done"
				:title="task.description"
			>
				{{ task.title }}
			</h3>
			<div>
				<button class="btn btn-edit mr-2">
					<font-awesome-icon :icon="['fas', 'edit']" />
				</button>
				<button class="btn btn-delete">
					<font-awesome-icon :icon="['fas', 'trash']" />
				</button>
			</div>
		</div>
		<div class="flex items-middle">
			<div class="w-4 mr-4">
				<font-awesome-icon v-show="task.important" class="text-red-500 text-xl" :icon="['fas', 'exclamation-circle']" />
			</div>
			<p class="text-xs" :class="{ 'line-through': task.done }">
				{{ writeDate(task.date) }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Task',

	methods: {
		writeDate(date)
		{
			const d = new Date(date);
			const now = new Date();
			const diff = Math.round((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

			let day = '';
			if (d.getDay() == now.getDay()) day = 'Hoje às';
			else if (diff == 1) day = 'Amanhã às';
			else if (diff == -1) day = 'Ontem às';
			else day = d.toLocaleDateString();

			return `${day} ${d.toLocaleTimeString().substring(0, 5)}`;
		},
	},

	data() {
		return {
			task: {
				id: Number,
				title: String,
				description: String,
				date: String,
				important: Boolean,
				done: Boolean,
			},
		}
	},

	mounted() {
		this.task = this.$attrs.task;
	}
}
</script>
