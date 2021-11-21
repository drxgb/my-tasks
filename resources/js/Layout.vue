<template>
	<main class="h-screen flex flex-col">
		<Header />

		<section class="flex-grow">
			<slot />
		</section>

		<Footer />
	</main>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'Layout',
	components: {
		Header,
		Footer,
	}
}
</script>
