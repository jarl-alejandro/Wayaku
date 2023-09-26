package com.jarl.WayakuCore.transaction.infraestructure;

import com.jarl.WayakuCore.transaction.application.IncomeService;
import com.jarl.WayakuCore.transaction.domain.Income;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/incomes")
public class IncomeController {

    private final IncomeService incomeService;

    public IncomeController(IncomeService incomeService) {
        this.incomeService = incomeService;
    }

    @GetMapping
    public ResponseEntity<List<Income>> list() {
        final List<Income> incomes = incomeService.list(UUID.randomUUID());

        return new ResponseEntity<>(incomes, HttpStatus.OK);
    }
}
