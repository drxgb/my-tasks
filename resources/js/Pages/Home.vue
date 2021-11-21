<template>
	<Layout>
		<TaskList :tasks="$props.tasks" />
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
	}
};
</script>
