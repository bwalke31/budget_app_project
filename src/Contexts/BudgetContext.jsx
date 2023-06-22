import { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const BudgetContext = React.createContext();

export function useBudgetContext() {
  return useContext(BudgetContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);

  // Add budget
  function addBudget({ name, description, amount }) {
    setBudgets((prevBudgets) => {
      // If there's two budgets with the same name
      if (prevBudgets.find((budget) => budget.name === name))
        return prevBudgets;
      // Else create a new budgets
      return [
        ...prevBudgets,
        {
          id: uuidV4(),
          name: name,
          description: description,
          spent: 100,
          amount: amount,
        },
      ];
    });
  }

  // Delete specific budget
  function deleteBudget({ id }) {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  // Updating amount spent
  function updateSpent({ id, spent }) {
    setBudgets((prevBudgets) => {
      target = prevBudgets.find((budget) => budget.id === id);
      return [
        ...prevBudgets,
        {
          id: target.id,
          name: target.name,
          description: target.description,
          spent: target.spent + spent,
          amount: target.amount,
        },
      ];
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        addBudget,
        deleteBudget,
        updateSpent,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
