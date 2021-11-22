<template>
	<Modal :isActive="isActive" @close="$emit('close')">
		<template v-slot:header>
			{{ (task === {}) ? 'Editar Tarefa' : 'Nova Tarefa' }}
		</template>
		<template v-slot:body>
			<form action="/" method="post" class="flex flex-col space-y-2">
				<input
					type="text"
					class="bg-gray-400 text-gray-700 border-2 border-gray-400 rounded-md"
					placeholder="Título"
					v-model="task.title"
					/>
				<textarea
					v-model="task.description"
					class="bg-gray-300 text-gray-700 border-2 border-gray-400 rounded-md outline-none px-2"
					cols="30"
					rows="3"
					placeholder="Adicione uma descrição para a sua tarefa..."
				></textarea>
				<div class="flex space-x-4 items-baseline">
					<input type="date" />
					<input type="time" />
					<input type="checkbox" id="important" v-model="task.important" />
					<label for="important" class="select-none">Importante</label>
				</div>
			</form>
		</template>
		<template v-slot:buttons>
			<button class="btn btn-edit">
				<font-awesome-icon :icon="['fas', 'save']" />
				Salvar
			</button>
			<button class="btn btn-delete" @click="closeForm()">
				<font-awesome-icon :icon="['fas', 'times']" />
				Cancelar
			</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';

export default {
	name: 'Form',
	components: {
		Modal
	},

	methods: {
		closeForm()
		{
			this.task = {};
			this.$emit('close');
		}
	},

	data() {
		return {
			task: this.$attrs.task | {},
			isActive: false,
		}
	}
}
</script>
