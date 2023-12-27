<script lang="ts">
	import { initialBalance, outgoing, summaryType } from "$lib/stores";

	function switchInfo() {
		if ($summaryType === "outgoing") {
			$summaryType = "balance";
		} else {
			$summaryType = "outgoing";
		}
	}

	function formatAmount(amount: number) {
		return new Intl.NumberFormat().format(amount);
	}

	const currency = "원";

	$: currentBalance = $initialBalance - $outgoing;

	let summaryTitle: string;
	let summaryValue: string;

	$: if ($summaryType === "outgoing") {
		summaryTitle = "지출";
		summaryValue = `${formatAmount($outgoing)}${currency}`;
	} else {
		summaryTitle = "잔액";
		summaryValue = `${formatAmount(currentBalance)}${currency}`;
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
