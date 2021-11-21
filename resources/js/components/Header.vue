<template>
	<header class="bg-green-500 py-4 px-8 text-white">
		<Link href="/">
			<span class="text-3xl font-bold">{{ $page.props.appName }}</span>
		</Link>
	</header>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
	name: 'Header',
	components: {
		Link,
	},
}
</script>
