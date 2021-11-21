<template>
	<main class="h-screen flex flex-col">
		<Header />
		<section class="flex-grow">
			<slot />
		</section>
		<footer>
			Rodapé
		</footer>
	</main>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'Layout',
	components: {
		Header,
	}
}
</script>
