package com.jarl.WayakuCore.transaction.application;

import com.jarl.WayakuCore.transaction.domain.Expense;
import com.jarl.WayakuCore.transaction.domain.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ExpenseService {

    final private ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public List<Expense> list(UUID userId) {
        return expenseRepository.findAll();
    }

}
