<template>
	<main>
		<header>Cabeçalho</header>
		<section>
			<slot />
		</section>
		<footer>
			Rodapé
		</footer>
	</main>
</template>

<script>
export default {
	name: 'Layout'
}
</script>
