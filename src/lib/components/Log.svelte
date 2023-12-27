<script lang="ts">
	import type { Log } from "$lib/wallet";

	export let log: Log;

	const { amount, description } = log;
	const datetime = new Date(log.datetime);

	let formattedAmount = new Intl.NumberFormat().format(amount);
	formattedAmount = `${amount > 0 ? "+" : ""}${formattedAmount}원`;

	$: inout = amount > 0 ? "incoming" : "outgoing";

	function getTimeDelta() {
		const now = new Date();
		const timeDeltaSec = (now.getTime() - datetime.getTime()) / 1000;
		const timeDeltaMin = Math.round(timeDeltaSec / 60);

		if (timeDeltaMin < 60) {
			return `${timeDeltaMin}분 전`;
		}

		const timeDeltaHour = Math.round(timeDeltaMin / 60);

		if (timeDeltaHour < 24) {
			return `${timeDeltaHour}시간 전`;
		}

		const timeDeltaDay = Math.round(timeDeltaHour / 24);

		if (timeDeltaDay < 7) {
			return `${timeDeltaDay}일 전`;
		}

		const year = datetime.getFullYear();
		const month = datetime.getMonth();
		const date = datetime.getDate();

		return `${year}년` + "\n" + `${month}월 ${date}일`;
	}
</script>

<div class="log-card row {inout}">
	<!-- TODO: Move hard-coded "원" -->
	<div class="description">
		{description}
	</div>
	<div class="amount">
		{formattedAmount}
	</div>
	<div class="datetime"><span>{getTimeDelta()}</span></div>
</div>

<style>
	.log-card {
		width: 100%;
		height: 100px;
		border: 1.5px solid #f5f5f5;
		border-radius: 16px;
		margin: 6px 0;
		padding: 8px 20px;
		overflow: hidden;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.incoming {
		border: 2px solid #3fc1c9;
	}

	.outgoing {
		border: 2px solid #fc5185;
	}

	.log-card > div {
		box-sizing: border-box;
		margin: 5px;
		overflow: hidden;
	}

	.description {
		flex: 1 0 30px;
		white-space: normal;
		line-height: 24px;
		max-height: 72px;
		display: block;
		width: 90px;
		font-size: 1.2em;
		overflow-x: visible;
		overflow-y: hidden;
	}

	.description > * {
		margin: 0;
	}

	.amount {
		width: fit-content;
		white-space: nowrap;
		font-size: 1.5em;
		font-weight: bold;
		display: flex;
		flex-direction: row;
		justify-content: end;
	}

	.datetime {
		flex: 0 0 72px;
		justify-self: stretch;
		text-align: right;
		white-space: pre-wrap;
	}
</style>
