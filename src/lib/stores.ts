import { derived, writable } from "svelte/store";
import type { Wallet } from "./wallet";

// ! Temporary data - Remove this later.
const walletData: Wallet = {
	initial: 180000000,
	outgoing: 20000,
	incoming: 20000,
	history: [
		{
			datetime: "2023-11-24T11:20",
			amount: -4000,
			description: "커피는 맛있었다 그러나 길어지면 어떻게될까",
		},
		{
			datetime: "2023-12-24T12:30",
			amount: -9000,
			description: "밥",
		},
		{
			datetime: "2023-12-26T21:00",
			amount: -7000,
			description: "맥주",
		},
		{
			datetime: "2023-12-25T13:30",
			amount: +20000000,
			description: "용돈",
		},
	],
};

const wallet = writable<Wallet>(walletData);

export const initialBalance = derived(wallet, ($wallet) => $wallet.initial);
export const outgoing = derived(wallet, ($wallet) => $wallet.outgoing);
export const incoming = derived(wallet, ($wallet) => $wallet.incoming);
export const history = derived(wallet, ($wallet) => $wallet.history);

type SummaryTypef = "outgoing" | "balance";

export const summaryType = writable<SummaryTypef>("outgoing");

/**
 * Whenever DB and API is implemented:
 * 1) App initialization: load wallet data from backend.
 * 2) Refresh: same
 * 3) New log added -> update db and then update wallet.
 * Data must be updated in this way.
 */
