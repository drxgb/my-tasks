<template>
	<main>
		<slot name="modal" />
		<div class="h-screen flex flex-col">
			<Header />
			<section class="flex-grow container mx-auto my-8 space-y-4 relative">
				<slot />
			</section>
			<Footer />
		</div>
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
