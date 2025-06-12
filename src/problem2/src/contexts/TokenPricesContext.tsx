import { useLoading } from "@/hooks/useLoading";
import type React from "react";
import { type ReactNode, createContext, useEffect, useState } from "react";
import type { Token } from "../types";
import { fetchTokenPricesWithSymbol } from "../utils/token";

export interface TokenPricesContextType {
	tokenPrices: Token[];
	tokenPricesMap: Map<string, Token> | null;
	loading: boolean;
	refetch: () => void;
}

export const TokenPricesContext = createContext<
	TokenPricesContextType | undefined
>(undefined);

interface TokenPricesProviderProps {
	children: ReactNode;
}

export const TokenPricesProvider: React.FC<TokenPricesProviderProps> = ({
	children,
}) => {
	// NOTE: store prices and token data as a Map for faster look up without looping everytime converting currency
	const [tokenPricesMap, setTokenPricesMap] = useState<Map<
		string,
		Token
	> | null>(null);
	const [tokenPrices, setTokenPrices] = useState<Token[]>([]);
	const { loading, withLoading } = useLoading(false);

	const fetchTokenPrices = async () => {
		const prices = await withLoading(() => fetchTokenPricesWithSymbol());
		const tokenMap = new Map<string, Token>();
		for (const price of prices) {
			tokenMap.set(price.currency, price);
		}
		setTokenPrices(prices);
		setTokenPricesMap(tokenMap);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <Pure function does not need exhaustive dependencies>
	useEffect(() => {
		fetchTokenPrices();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const value = {
		tokenPrices,
		tokenPricesMap,
		loading,
		refetch: fetchTokenPrices,
	};

	return (
		<TokenPricesContext.Provider value={value}>
			{children}
		</TokenPricesContext.Provider>
	);
};
