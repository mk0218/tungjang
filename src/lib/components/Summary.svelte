<script lang="ts">
	import { initialBalance, outgoing } from "$lib/stores";
	type DisplayInfo = "outgoing" | "balance";

	let displayInfo: DisplayInfo = "outgoing";

	function switchInfo() {
		if (displayInfo === "outgoing") {
			displayInfo = "balance";
		} else {
			displayInfo = "outgoing";
		}
	}

	const currency = "원";

	$: currentBalance = $initialBalance - $outgoing;

	let summaryTitle: string;
	let summaryValue: string;

	$: if (displayInfo === "outgoing") {
		summaryTitle = "지출";
		summaryValue = `${$outgoing}${currency}`;
	} else {
		summaryTitle = "잔액";
		summaryValue = `${currentBalance}${currency}`;
	}
</script>

<button
	class="switch-info"
	on:click|preventDefault={switchInfo}
	on:touchend|preventDefault={switchInfo}
>
	<h2 class="title">{summaryTitle}</h2>
	<span class="amount">{summaryValue}</span>
</button>

<style>
	.switch-info {
		background: transparent;
		border: none;
		user-select: none;
		cursor: pointer;
		white-space: nowrap;
	}

	.title {
		font-size: 2rem;
		margin: 0;
	}

	.amount {
		font-size: 3.5rem;
		font-weight: bold;
	}
</style>
