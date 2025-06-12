import type { SwapResult } from "@/types";
import type { TCurrencySwapSchema } from "@/validators/currency-swap";
import { useCallback, useState } from "react";
import { useTokenPrices } from "./useTokenPrices";

export const useSwapCalculation = () => {
	const { tokenPricesMap } = useTokenPrices();
	const [swapResult, setSwapResult] = useState<SwapResult | null>(null);

	const handleSwapCalculation = useCallback(
		async (swapData: TCurrencySwapSchema) => {
			if (!tokenPricesMap) {
				throw new Error("Currency rate database is not ready");
			}

			const { fromToken, toToken, amount } = swapData;
			const expectedCurrency = tokenPricesMap.get(toToken);
			const originalCurrency = tokenPricesMap.get(fromToken);

			if (!expectedCurrency || !originalCurrency)
				throw new Error("Can not find price for selected currency");

			const exchangeRate = expectedCurrency.price / originalCurrency.price;

			setSwapResult({ exchangeRate, receivedAmount: exchangeRate * amount });
		},
		[tokenPricesMap],
	);

	return { swapResult, handleSwapCalculation };
};
