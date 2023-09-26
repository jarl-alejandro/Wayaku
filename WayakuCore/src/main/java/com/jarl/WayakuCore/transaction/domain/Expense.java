package com.jarl.WayakuCore.transaction.domain;

import com.jarl.WayakuCore.budget.domain.Budget;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "expenses")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Accessors(fluent = true)
public class Expense extends Transaction {

    @ManyToOne
    @JoinColumn(name = "budget_id")
    private Budget budget;
}
