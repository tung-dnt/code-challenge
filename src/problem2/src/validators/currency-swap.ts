import { z } from "zod";

export const CurrencySwapChema = z.object({
	fromToken: z.string(),
	toToken: z.string(),
	amount: z.number(),
});

export type TCurrencySwapSchema = z.infer<typeof CurrencySwapChema>;
