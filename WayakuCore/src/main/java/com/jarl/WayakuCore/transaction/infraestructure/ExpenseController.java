package com.jarl.WayakuCore.transaction.infraestructure;

import com.jarl.WayakuCore.transaction.application.ExpenseService;
import com.jarl.WayakuCore.transaction.domain.Expense;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public ResponseEntity<List<Expense>> list() {
        final List<Expense> expenses = expenseService.list(UUID.randomUUID());

        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }
}
