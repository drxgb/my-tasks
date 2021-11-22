<template>
	<Layout>
		<Search :tasks="$props.tasks" />
		<TaskList :tasks="tasks" />
		<button class="btn btn-add absolute right-0 bottom-0" @click="modalActive = true">
			<font-awesome-icon :icon="['fas', 'plus']" />
		</button>

		<template v-slot:modal>
			<transition name="fade">
				<Modal :isActive="modalActive" @close="modalActive = false">
					Modal
				</Modal>
			</transition>
		</template>
	</Layout>
</template>

<script>
import Layout from '../Layout.vue';
import Search from '../components/app/Search.vue';
import TaskList from '../components/app/TaskList.vue';
import Modal from '../components/Modal.vue';

export default {
	name: 'Home',
	components: {
		Layout,
		TaskList,
		Search,
		Modal,
	},

	props: {
		tasks: Array
	},

	data() {
		return {
			tasks: this.$props.tasks,
			modalActive: false,
		}
	}
};
</script>
