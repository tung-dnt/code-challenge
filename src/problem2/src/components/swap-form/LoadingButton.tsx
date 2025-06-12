import type React from "react";

interface LoadingButtonProps {
	type: HTMLButtonElement["type"];
	isLoading: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
	type = "button",
	isLoading,
	children,
	onClick,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={isLoading}
			className={`flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
		>
			{isLoading ? (
				<>
					<svg
						className="animate-spin h-5 w-5 mr-3"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<title>Loading</title>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
						/>
					</svg>
					Loading...
				</>
			) : (
				children
			)}
		</button>
	);
};

export default LoadingButton;
