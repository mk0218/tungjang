<script lang="ts">
	export let justify: "start" | "end" | "center" | "space-between" = "start";
	export let align: "normal" | "stretch" | "baseline" | "center" = "normal";
</script>

<div class="row" style="--justify: {justify}; --align: {align}">
	<slot />
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		justify-content: var(--justify);
		align-items: var(--align);
		box-sizing: border-box;
	}
</style>
