export type Log = {
	datetime: string;
	amount: number;
	description: string;
};

export type Wallet = {
	initial: number;
	outgoing: number;
	incoming: number;
	history: Log[];
};
