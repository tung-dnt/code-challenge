import {
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { Token } from "@/types";
import type { TCurrencySwapSchema } from "@/validators/currency-swap";
import type React from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface TokenSelectorProps {
	field: ControllerRenderProps<TCurrencySwapSchema>;
	tokenPrices: Token[];
	placeholder: string;
	label?: string;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({
	field,
	tokenPrices,
	placeholder,
	label,
}) => {
	return (
		<FormItem className="w-[152px] overflow-hidden">
			{label && <FormLabel>{label}</FormLabel>}
			<Select
				onValueChange={field.onChange}
				defaultValue={field.value as string}
			>
				<FormControl>
					<SelectTrigger>
						<SelectValue
							className="dark:text-gray-300"
							placeholder={placeholder}
						/>
					</SelectTrigger>
				</FormControl>
				<SelectContent className="dark:bg-gray-500">
					{tokenPrices.map((token) => (
						<SelectItem key={token.currency} value={token.currency}>
							<div className="flex items-center space-x-2 dark:text-gray-300">
								<img
									className="w-6 h-6"
									src={token.tokenSymbol}
									alt={`currency-from-${token.currency}`}
								/>
								<p>{token.currency}</p>
							</div>
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<FormMessage />
		</FormItem>
	);
};

export default TokenSelector;
