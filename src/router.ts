import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./vieuws/Home.vue"
import Results from "./vieuws/Results.vue"
import KonaEditor from "./vieuws/KonaEditor.vue"

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: "", component: Home, name: "home" },
		{ path: "/results", component: Results, name: "results" },
		{ path: "/create", component: KonaEditor, name: "create" },
	],
})
