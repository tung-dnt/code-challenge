import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SkeletonCard } from "@/components/swap-form/FormSkeleton";
import { useSwapCalculation } from "@/hooks/useSwapCalculation";
import { useTokenPrices } from "@/hooks/useTokenPrices";
import {
	CurrencySwapChema,
	type TCurrencySwapSchema,
} from "@/validators/currency-swap";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useForm } from "react-hook-form";
import TokenSelector from "./TokenSelector";

const SwapForm: React.FC = () => {
	const { tokenPrices, loading } = useTokenPrices();
	const { swapResult, handleSwapCalculation } = useSwapCalculation();

	const form = useForm<TCurrencySwapSchema>({
		resolver: zodResolver(CurrencySwapChema),
		defaultValues: {
			fromToken: "",
			toToken: "",
			amount: 1,
		},
	});

	if (loading) return <SkeletonCard />;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSwapCalculation)}
				className="space-y-6"
			>
				<div className="flex items-center justify-between flex-wrap gap-1">
					<FormField
						control={form.control}
						name="fromToken"
						render={({ field }) => (
							<TokenSelector
								placeholder="Select currency"
								tokenPrices={tokenPrices}
								field={field}
							/>
						)}
					/>
					<span className="dark:text-gray-300">To</span>
					<FormField
						control={form.control}
						name="toToken"
						render={({ field }) => (
							<TokenSelector
								placeholder="Select currency"
								tokenPrices={tokenPrices}
								field={field}
							/>
						)}
					/>
				</div>

				{/* Amount Input */}
				<FormField
					control={form.control}
					name="amount"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-gray-300">Amount</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter amount"
									{...field}
									onChange={(e) => field.onChange(Number(e.target.value))}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex items-center justify-center">
					<Button variant="default" type="submit" size="lg">
						Convert
					</Button>
				</div>
				{/* Display Result */}
				{swapResult && (
					<div className="mt-6 p-4 bg-gray-50 rounded-lg">
						<h3 className="text-lg font-semibold mb-2">Conversion Result</h3>
						<p className="text-gray-700">
							{form.getValues("amount")} {form.getValues("fromToken")} equals{" "}
							<span className="font-bold">{swapResult.receivedAmount}</span>{" "}
							{form.getValues("toToken")}
						</p>
					</div>
				)}
			</form>
		</Form>
	);
};

export default SwapForm;
