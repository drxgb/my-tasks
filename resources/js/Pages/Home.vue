<template>
	<Layout>
		<Search :tasks="$props.tasks" />
		<TaskList :tasks="tasks" />
		<button class="btn btn-add absolute right-0 bottom-0">
			<font-awesome-icon :icon="['fas', 'plus']" />
		</button>
	</Layout>
</template>

<script>
import Layout from '../Layout.vue';
import Search from '../components/app/Search.vue';
import TaskList from '../components/app/TaskList.vue';

export default {
	name: 'Home',
	components: {
		Layout,
		TaskList,
		Search,
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
