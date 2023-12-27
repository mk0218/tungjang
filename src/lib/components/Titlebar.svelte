<script lang="ts">
	export let title: string;
</script>

<div class="titlebar">
	<button class="navigate">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"
			/></svg
		>
	</button>
	<h1>{title}</h1>
	<button class="navigate">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
			/></svg
		>
	</button>
</div>

<style>
	.titlebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 80px;
		display: flex;
		justify-content: space-between;
		background: transparent;
	}

	.navigate {
		border: none;
		background: transparent;
		cursor: pointer;
		color: #364f6b;
	}
</style>
