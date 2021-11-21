import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/**
 * ================================================================
 * FontAwesome
 * ================================================================
 */
import {
	faUserSecret,
	faHeart,
	faEdit,
	faTrash,
	faExclamationCircle,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add([
	faUserSecret,
	faHeart,
	faEdit,
	faTrash,
	faExclamationCircle,
	faPlus,
]);

// ================================================================

createInertiaApp({
	resolve: (name) => import(`./Pages/${name}`),
	setup({ el, App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			.use(plugin)
			.component("font-awesome-icon", FontAwesomeIcon)
			.mount(el);
	},
});
