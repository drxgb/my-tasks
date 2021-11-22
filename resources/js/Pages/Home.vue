<template>
	<Layout>
		<Search :tasks="$props.tasks" />
		<TaskList :tasks="tasks" @open="openForm($event)" />
		<button class="btn btn-add absolute right-0 bottom-0" @click="openForm()">
			<font-awesome-icon :icon="['fas', 'plus']" />
		</button>

		<template v-slot:modal>
			<transition name="fade">
				<Form
					:isActive="modalActive"
					:task="task"
					@close="modalActive = false"
				/>
			</transition>
		</template>
	</Layout>
</template>

<script>
import Layout from '../Layout.vue';
import Search from '../components/app/Search.vue';
import TaskList from '../components/app/TaskList.vue';
import Form from '../components/app/Form.vue';

export default {
	name: 'Home',
	components: {
		Layout,
		TaskList,
		Search,
		Form,
	},

	props: {
		tasks: Array
	},

	methods: {
		openForm(task = {})
		{
			this.task = task;
			this.modalActive = true;
		}
	},

	data() {
		return {
			tasks: this.$props.tasks,
			task: {},
			modalActive: false,
		}
	}
};
</script>
