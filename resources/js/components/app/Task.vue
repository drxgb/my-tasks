<template>
	<div>
		{{ task.title }}
	</div>
</template>

<script>
export default {
	name: 'Task',

	data() {
		return {
			task: {},
		}
	},

	mounted() {
		this.task = this.$attrs.task;
	}
}
</script>
