<script>
	import { fade, fly } from "svelte/transition";
	import History from "$lib/components/History.svelte";
	import Summary from "$lib/components/Summary.svelte";
	import Titlebar from "$lib/components/Titlebar.svelte";

	let showSummary = true;

	function swapSummary() {
		showSummary = !showSummary;
	}
</script>

<Titlebar title="전부" />
<div class="content">
	<div class="collapsible {showSummary ? 'expand' : 'collapse'}">
		{#if showSummary}
			<div class="summary" transition:fly={{ y: -210, duration: 600 }}>
				<Summary />
			</div>
		{/if}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- TODO: Replace on:click with swipe event -->
	<div class="history" on:click={swapSummary}>
		{#if showSummary}
			<div class="scroll-icon" transition:fade={{ duration: 100 }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M7.41 18.41L6 17l6-6l6 6l-1.41 1.41L12 13.83zm0-6L6 11l6-6l6 6l-1.41 1.41L12 7.83z"
					/></svg
				>
			</div>
		{/if}
		<History />
	</div>
</div>

<style>
	.content {
		padding-top: 80px;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.collapsible {
		transition: height 600ms;
		overflow: hidden;
	}

	.expand {
		height: 500px;
	}

	.collapse {
		height: 0;
	}

	.summary {
		width: 100vw;
		height: 500px;
		left: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.scroll-icon {
		display: flex;
		justify-content: center;
	}

	.scroll-icon > svg {
		transform: scale(1.5, 1);
		margin-bottom: 5px;
	}

	svg {
		color: #364f6b;
	}
</style>
