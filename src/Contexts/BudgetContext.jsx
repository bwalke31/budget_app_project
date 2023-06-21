import { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import React from "react";

const BudgetContext = React.createContext();

export function useBudgetContext() {
  return useContext(BudgetContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);

  // Add budget
  function addBudget({ name, amount }) {
    setBudgets((prevBudgets) => {
      // If there's two budgets with the same name
      if (prevBudgets.find((budget) => budget.name === name))
        return prevBudgets;
      // Else create a new budgets
      return [...prevBudgets, { id: uuidV4(), name: name, amount: amount }];
    });
  }

  // Delete specific budget
  function deleteBudget({ id }) {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        addBudget,
        deleteBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
