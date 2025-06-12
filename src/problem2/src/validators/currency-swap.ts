import { z } from "zod";

export const CurrencySwapChema = z
	.object({
		fromToken: z.string().min(1, "Please select a currency to swap from"),
		toToken: z.string().min(1, "Please select a currency to swap to"),
		amount: z
			.number()
			.min(0.000001, "Amount must be greater than 0")
			.max(1000000000, "Amount is too large"),
	})
	.refine((data) => data.fromToken !== data.toToken, {
		message: "Cannot swap to the same currency",
		path: ["toToken"],
	});

export type TCurrencySwapSchema = z.infer<typeof CurrencySwapChema>;
