<template>
	<Layout>
		<TaskList :tasks="tasks" />
	</Layout>
</template>

<script>
import Layout from '../Layout';
import TaskList from '../components/app/TaskList.vue';

export default {
	name: 'Home',
	components: {
		Layout,
		TaskList,
	},

	props: {
		tasks: Array
	},

	data() {
		return {
			tasks: this.$props.tasks,
		}
	}
};
</script>
