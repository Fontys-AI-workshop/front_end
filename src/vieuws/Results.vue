<template>
	<v-row class="ma-3">
		<v-col
			v-for="image in store.response?.images?.splice(0, 4)"
			:key="image"
			cols="6">
			<v-img :src="'data:image/png;base64,' + image"></v-img>
		</v-col>
		<v-col v-for="i of 4" v-if="!store.response.images" :key="i" cols="6">
			<v-skeleton-loader height="512px" type="image"></v-skeleton-loader>
		</v-col>
	</v-row>
</template>

<script lang="ts" setup>
import { AIAtelierStore } from "../store.ts"

const store = AIAtelierStore()
</script>

<style>
.v-skeleton-loader__image {
	height: 100%;
}
</style>
