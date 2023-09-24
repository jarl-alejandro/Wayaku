package com.jarl.WayakuCore.budget.application;

import com.jarl.WayakuCore.budget.domain.Budget;
import com.jarl.WayakuCore.budget.domain.BudgetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetService {

    private final BudgetRepository budgetRepository;

    public BudgetService(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
    }

    public void store(Budget budget) {
        budgetRepository.save(budget);
    }

    public List<Budget> list(){
        return budgetRepository.findAll();
    }

}
