<template>
	<div
		v-show="$attrs.isActive"
		class="bg-gray-500 bg-opacity-50 fixed left-0 top-0 w-full h-full z-50"
	>
		<div class="container m-auto max-w-2xl rounded-md bg-gray-100 shadow-md border-1 border-gray-900 text-gray-600">
			<div class="px-8 py-4 space-y-4">
				<h1><slot name="header" /></h1>
				<slot name="body" />
			</div>

			<div class="bg-gray-300 border-t border-gray-400 px-8 py-4 space-y-2">
				<slot name="footer" />
				<div class="flex justify-end space-x-2">
					<slot name="buttons">
						<button class="btn" @click="$emit('close')">
							<font-awesome-icon :icon="['fas', 'times']" />
							Fechar
						</button>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal'
}
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active
	{
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to
	{
		opacity: 0;
	}
</style>
