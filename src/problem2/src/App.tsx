import SwapForm from "@/components/swap-form/SwapForm";
import type React from "react";
import { TokenPricesProvider } from "./contexts/TokenPricesContext";

const App: React.FC = () => {
	return (
		<TokenPricesProvider>
			<div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
				<div className="bg-white dark:bg-slate-700 shadow-md rounded-lg p-6 w-full max-w-md">
					<h1 className="text-2xl font-bold mb-8 text-center dark:text-gray-300">
						Currency Swap
					</h1>
					<SwapForm />
				</div>
			</div>
		</TokenPricesProvider>
	);
};

export default App;
