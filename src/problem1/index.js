const sum_to_n_a = (n) => {
	// Mathematical formula: n * (n + 1) / 2
	return (n * (n + 1)) / 2;
};

const sum_to_n_b = (n) => {
	// Iterative approach using a for loop
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

const sum_to_n_c = (n) => {
	// Recursive approach
	if (n <= 1) {
		return n;
	}
	return n + sum_to_n_c(n - 1);
};
