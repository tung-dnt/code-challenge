export interface Token {
	currency: string;
	price: number;
	date: string;
	tokenSymbol: string;
}

export interface GithubTokenSymbols {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: string;
	_links: {
		self: string;
		git: string;
		html: string;
	};
}

export interface SwapResult {
	receivedAmount: number;
	exchangeRate: number;
}
