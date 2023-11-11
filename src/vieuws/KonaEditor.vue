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
	result.value = stage.value?.toDataURL()
}
</script>

<style scoped>
#container {
	background-color: lightgray;
}
</style>
