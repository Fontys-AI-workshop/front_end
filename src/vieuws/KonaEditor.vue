<template>
	<h1>Start</h1>
	Tool:
	<select id="tool">
		<option value="brush">Brush</option>
		<option value="eraser">Eraser</option>
	</select>
	<button @click="save">Save</button>
	<div v-if="result != null">
		{{ result }}
	</div>
	<div id="container"></div>
</template>

<script lang="ts" setup>
import Konva from "konva"
import Line = Konva.Line
import { onMounted, ref } from "vue"
import { Api } from "../api.generated.ts"

const width = window.innerWidth
const height = window.innerHeight - 25
const stage = ref<Konva.Stage>()
const result = ref<string | null>()

onMounted(() => {
	// first we need Konva core things: stage and layer
	stage.value = new Konva.Stage({
		container: "container",
		width: width,
		height: height,
	})

	const layer = new Konva.Layer()
	stage.value?.add(layer)

	let isPaint = false
	let mode = "brush"
	let lastLine = {} as Line

	stage.value?.on("mousedown touchstart", function () {
		isPaint = true
		const pos = stage.value?.getPointerPosition()
		lastLine = new Konva.Line({
			stroke: "#df4b26",
			strokeWidth: 5,
			globalCompositeOperation:
				mode === "brush" ? "source-over" : "destination-out",
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

	const select = document.getElementById("tool") as HTMLInputElement
	select?.addEventListener("change", function () {
		mode = select.value
	})
})

function save(): void {
	const api = new Api({ baseUrl: "http://192.168.8.164:7861" })

	const payload = {
		prompt: "gravestone in graveyard with trees",
		negative_prompt: "",
		height: 456,
		width: 812,
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
						controlnet_guidance: 0.25,
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
						controlnet_guidance: 0.8,
						control_mode: 0,
						guidance_start: 0,
						guidance_end: 0.2,
					},
				],
			},
		},
	}

	api.sdapi.text2ImgapiSdapiV1Txt2ImgPost(payload).then((r) => console.log(r))
}
</script>

<style scoped>
#container {
	background-color: lightgray;
}
</style>
