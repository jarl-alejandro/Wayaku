package com.jarl.WayakuCore.transaction.application;

import com.jarl.WayakuCore.transaction.domain.Expense;
import com.jarl.WayakuCore.transaction.domain.Income;
import com.jarl.WayakuCore.transaction.domain.IncomeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class IncomeService {

    final private IncomeRepository incomeRepository;

    public IncomeService(IncomeRepository incomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    public List<Income> list(UUID userId) {
        return incomeRepository.findAll();
    }

}
