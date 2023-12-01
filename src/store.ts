import { defineStore } from "pinia"
import { TextToImageResponse } from "./api.generated.ts"

export const AIAtelierStore = defineStore("AiStore", {
	state: () => {
		return {
			response: {} as TextToImageResponse,
		}
	},
	actions: {
		setResponse: function (r: TextToImageResponse) {
			this.response = r
		},
	},
})
