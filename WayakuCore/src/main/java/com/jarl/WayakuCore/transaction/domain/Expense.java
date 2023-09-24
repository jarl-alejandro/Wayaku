package com.jarl.WayakuCore.transaction.domain;

import com.jarl.WayakuCore.budget.domain.Budget;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "expenses")
public class Expense extends Transaction {

    @ManyToOne
    @JoinColumn(name = "budget_id")
    private Budget budget;
}
