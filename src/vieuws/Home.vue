<template>
	<v-row>
		<v-col cols="6">
			<div class="img-example"></div>
		</v-col>
		<v-col
			class="fill-height d-flex flex-column justify-center align-center"
			cols="6"
			style="height: 100vh !important">
			<v-card class="justify-center">
				<v-card-title class="pa-3 ma-4"
					>Create your images with a simple doodle
				</v-card-title>
				<v-card-actions class="d-flex justify-center align-center">
					<v-btn
						:elevation="3"
						:to="{ name: 'create' }"
						class="justify-center"
						color="primary"
						>Lets create
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts" setup></script>

<style scoped>
.img-example {
	background-color: red;
	clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
	min-height: 100vh;
	background: no-repeat url("/src/assets/example.png");
	background-size: cover;
}
</style>
