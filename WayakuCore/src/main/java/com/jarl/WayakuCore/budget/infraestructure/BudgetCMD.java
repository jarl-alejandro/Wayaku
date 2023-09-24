package com.jarl.WayakuCore.budget.infraestructure;

import lombok.*;
import lombok.experimental.Accessors;

import java.math.BigDecimal;

@Data
public class BudgetCMD {
    private String emoji;
    private String name;
    private String description;
    private BigDecimal budget;

}
