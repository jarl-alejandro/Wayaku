package com.jarl.WayakuCore.budget.infraestructure;

import com.jarl.WayakuCore.budget.application.BudgetService;
import com.jarl.WayakuCore.budget.domain.Budget;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/budgets")
public class BudgetController {

    final private BudgetService budgetService;

    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    @GetMapping
    public ResponseEntity<List<Budget>> listBudgets() {
        final List<Budget> budgets = budgetService.list();
        return new ResponseEntity<>(budgets, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> saveBudget(@PathVariable("id") String id, @RequestBody BudgetCMD budgetCMD) {
        final Budget budget = Budget.builder()
                .id(UUID.fromString(id))
                .name(budgetCMD.getName())
                .emoji(budgetCMD.getEmoji())
                .description(budgetCMD.getDescription())
                .budget(budgetCMD.getBudget())
                .build();

        budgetService.store(budget);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
