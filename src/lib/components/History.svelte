<script lang="ts">
	import { history } from "$lib/stores";
	import LogCard from "./Log.svelte";
	import type { Log } from "$lib/wallet";

	function comparator(a: Log, b: Log) {
		const timeA = new Date(a.datetime);
		const timeB = new Date(b.datetime);

		return timeB.getTime() - timeA.getTime();
	}

	// TODO: Sort logs by time.
	const sortedLogs = [...$history].sort((a, b) => comparator(a, b));
</script>

<div class="container column">
	{#each sortedLogs as log}
		<LogCard {log} />
	{/each}
</div>

<style>
	.container {
		padding: 0 20px;
		width: 100vw;
		box-sizing: border-box;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
