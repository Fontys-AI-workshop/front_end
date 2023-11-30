<template>
	<div class="editor-container">
		<v-btn-toggle v-model="tool" density="compact" rounded="0">
			<v-btn value="brush">
				<v-icon>mdi-pen</v-icon>
			</v-btn>
			<v-btn value="eraser">
				<v-icon>mdi-eraser</v-icon>
			</v-btn>
		</v-btn-toggle>
		<div id="editor"></div>
		<v-btn @click="save">Lets generate</v-btn>
	</div>
</template>

<script lang="ts" setup>
import Konva from "konva"
import { onMounted, ref } from "vue"
import { Api, TextToImageResponse } from "../api.generated.ts"
import { AIAtelierStore } from "../store.ts"
import { useRouter } from "vue-router"
import Line = Konva.Line

const width = 720
const height = 512
const stage = ref<Konva.Stage>()
const tool = ref<string>("brush")
const router = useRouter()

const store = AIAtelierStore()

onMounted(() => {
	// first we need Konva core things: stage and layer
	stage.value = new Konva.Stage({
		container: "editor",
		width: width,
		height: height,
	})

	const layer = new Konva.Layer()
	stage.value?.add(layer)

	let isPaint = false
	let lastLine = {} as Line

	stage.value?.on("mousedown touchstart", function () {
		isPaint = true
		const pos = stage.value?.getPointerPosition()
		lastLine = new Konva.Line({
			stroke: "#df4b26",
			strokeWidth: 5,
			globalCompositeOperation:
				tool.value === "brush" ? "source-over" : "destination-out",
			// round cap for smoother lines
			lineCap: "round",
			lineJoin: "round",
			// add point twice, so we have some drawings even on a simple click
			points: [
				pos?.x as number,
				pos?.y as number,
				pos?.x as number,
				pos?.y as number,
			],
		})
		layer.add(lastLine)
	})

	stage.value?.on("mouseup touchend", function () {
		isPaint = false
	})

	// and core function - drawing
	stage.value?.on("mousemove touchmove", function (e) {
		if (!isPaint) {
			return
		}

		// prevent scrolling on touch devices
		e.evt.preventDefault()

		const pos = stage.value?.getPointerPosition()
		const newPoints = lastLine
			.points()
			.concat([pos?.x as number, pos?.y as number])
		lastLine.points(newPoints)
	})
})

const response = ref<TextToImageResponse>()

function save(): void {
	const api = new Api({ baseUrl: "http://192.168.8.164:7860" })

	const payload = {
		prompt: "gravestone in graveyard with trees",
		negative_prompt: "",
		height: height,
		width: width,
		batch_size: 4,
		steps: 40,
		cfg_scale: 4,
		enable_hr: true,
		hr_upscaler: "R-ESRGAN 4x+",
		alwayson_scripts: {
			controlnet: {
				args: [
					{
						input_image: stage.value
							?.toDataURL()
							.replace("data:image/png;base64,", ""),
						module: "pidinet_sketch",
						model: "control_v11p_sd15_scribble [d4ba51ff]",
						processor_res: 500,
						// controlnet_guidance: 0.25,
						control_mode: 1,
						guidance_start: 0,
						guidance_end: 0.5,
					},
					{
						input_image: stage.value
							?.toDataURL()
							.replace("data:image/png;base64,", ""),
						module: "lineart",
						model: "control_v11p_sd15_lineart [43d4be0d]",
						processor_res: 500,
						// controlnet_guidance: 0.8,
						control_mode: 0,
						guidance_start: 0,
						guidance_end: 0.2,
					},
				],
			},
		},
	}

	api.sdapi.text2ImgapiSdapiV1Txt2ImgPost(payload).then((r) => {
		store.setResponse(r.data)
	})
	router.push({ name: "results" })
}
</script>

<style scoped>
.editor-container {
	display: block;
	margin: 0 auto;
	width: 720px;
	padding: 8px;
}

#editor {
	background-color: lightgray;
	max-height: 512px;
	max-width: 720px;
}
</style>
