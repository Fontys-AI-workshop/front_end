import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"
import "@mdi/font/css/materialdesignicons.css" // Ensure you are using css-loader
// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import router from "./router.ts"
import { createPinia } from "pinia"

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: "dark",
	},
	icons: {
		defaultSet: "mdi", // This is already the default value - only for display purposes
	},
})

createApp(App).use(vuetify).use(router).use(createPinia()).mount("#app")
