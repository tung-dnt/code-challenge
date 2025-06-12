import axios from "axios";
import type { GithubTokenSymbols, Token } from "../types";

const TOKEN_SYMBOLS_BASE_URL =
	"https://api.github.com/repos/Switcheo/token-icons/contents/tokens";

const TOKEN_PRICE_BASE_URL = "https://interview.switcheo.com/prices.json";

export const formatTokenAmount = (amount: number, decimals = 18): string => {
	return (amount / 10 ** decimals).toFixed(4);
};

export const fetchTokens = async (): Promise<GithubTokenSymbols[]> => {
	const response = await axios.get<GithubTokenSymbols[]>(
		TOKEN_SYMBOLS_BASE_URL,
	);
	return response.data;
};

export const fetchTokenPrices = async (): Promise<Token[]> => {
	const response = await axios.get<Token[]>(TOKEN_PRICE_BASE_URL);
	return response.data;
};

export const fetchTokenPricesWithSymbol = async () => {
	const tokens = await fetchTokens();
	const prices = await fetchTokenPrices();

	return prices.map((price) => {
		const randomIndex = Math.floor(Math.random() * tokens.length);
		const tokenSymbol = tokens[randomIndex];

		return {
			...price,
			tokenSymbol: tokenSymbol.download_url,
		};
	});
};
