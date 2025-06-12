# React Code Analysis: Inefficiencies and Refactoring

This document analyzes a React code snippet to identify computational inefficiencies and anti-patterns. It also provides a refactored version that addresses these issues for improved performance and readability. 👨‍💻

---

## Computational Inefficiencies & Anti-Patterns

Several issues in the original code contribute to poor performance and buggy behavior.

### 1. Unnecessary Re-renders and Computations 낭비

- **Incorrect `useMemo` Dependencies**: The `sortedBalances` calculation unnecessarily includes **`prices`** in its dependency array. This forces a recalculation every time `prices` change, even though they aren't used in the sorting or filtering, leading to wasted render cycles.
- **Function Re-declaration**: The **`getPriority`** function is defined inside the component, causing it to be redeclared on every render. Since it's a pure function, this is inefficient and should be defined outside the component scope.

### 2. Inefficient Logic 🐌

- **Multiple Loops**: The code iterates over the list of balances **three times**: once to filter and sort, a second time to format, and a third time to create the JSX `rows`. These operations can be chained into a single, more efficient pass.
- **Repetitive Function Calls**: During the `.sort()` method, the **`getPriority`** function is called repeatedly for the same element during different comparisons. This is redundant and computationally expensive.

### 3. Bugs and Anti-Patterns 🐛

- **Logical Flaw in Filtering**: The filter logic is broken. It references **`lhsPriority`**, which is not defined in its scope, causing a runtime error. The condition `if (balance.amount <= 0) { return true; }` is also likely the opposite of the intended logic (which is probably to show balances with a positive amount).
- **Bug in Final Mapping**: The `rows` variable is created by mapping over `sortedBalances`, but it incorrectly attempts to access **`balance.formatted`**, a property that doesn't exist on that array. This will cause a TypeError.
- **Using Index as `key` Prop**: Using the array **`index`** as a React `key` is an anti-pattern for lists that can be reordered. It can lead to incorrect DOM updates and state management issues. A unique, stable identifier from the data itself (like `balance.currency`) is the correct approach.
- **Unused Prop**: The **`children`** prop is destructured from `props` but is never rendered in the component.

---

## Refactored Code ✨

The refactored code below resolves all the identified issues. It consolidates the logic into a single `useMemo` hook that efficiently filters, sorts, and maps the balances in one go.

```tsx
// Define interfaces outside the component
interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

// Props can be simplified if no new properties are added
// For this example, we assume BoxProps is from a UI library like MUI
import { BoxProps } from "@mui/material";

// 1. `getPriority` is moved outside the component to prevent re-declaration.
const getPriority = (blockchain: string): number => {
  switch (blockchain) {
    case "Osmosis":
      return 100;
    case "Ethereum":
      return 50;
    case "Arbitrum":
      return 30;
    case "Zilliqa":
      return 20;
    case "Neo":
      return 20;
    default:
      return -99;
  }
};

const WalletPage: React.FC<BoxProps> = (props) => {
  // 2. Removed unused `children` prop.
  const { ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  // 3. A single `useMemo` hook efficiently processes the data.
  // 4. The dependency array is now correct.
  const walletRows = useMemo(() => {
    // 5. Filtering logic is fixed to show only relevant balances.
    return (
      balances
        .filter((balance: WalletBalance) => {
          const priority = getPriority(balance.blockchain);
          return priority > -99 && balance.amount > 0;
        })
        // 6. Sorting logic is now more efficient.
        .sort((lhs: WalletBalance, rhs: WalletBalance) => {
          const leftPriority = getPriority(lhs.blockchain);
          const rightPriority = getPriority(rhs.blockchain);
          return rightPriority - leftPriority; // Sort descending
        })
        // 7. Mapping is done in the final step of the chain.
        .map((balance: WalletBalance) => {
          const usdValue = prices[balance.currency] * balance.amount;
          return (
            <WalletRow
              // 8. A unique and stable `key` is used.
              key={balance.currency}
              amount={balance.amount}
              usdValue={usdValue}
              formattedAmount={balance.amount.toFixed()}
            />
          );
        })
    );
  }, [balances, prices]);

  return <div {...rest}>{walletRows}</div>;
};

// Mock hooks and components for context
const useWalletBalances = (): WalletBalance[] => [];
const usePrices = (): { [currency: string]: number } => ({});
const WalletRow = (props: any) => <div key={props.key}>...</div>;
```
