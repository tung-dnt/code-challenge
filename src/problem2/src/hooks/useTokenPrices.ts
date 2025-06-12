import { useContext } from "react";
import {
	TokenPricesContext,
	type TokenPricesContextType,
} from "../contexts/TokenPricesContext";

export const useTokenPrices = (): TokenPricesContextType => {
	const context = useContext(TokenPricesContext);
	if (context === undefined) {
		throw new Error("useTokenPrices must be used within a TokenPricesProvider");
	}
	return context;
};
