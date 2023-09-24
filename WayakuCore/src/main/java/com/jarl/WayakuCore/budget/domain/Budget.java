package com.jarl.WayakuCore.budget.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@Table(name = "budgets")
@NoArgsConstructor
@Accessors(fluent = true)
public class Budget {

    @Id
    @Column(name = "id")
    @JsonProperty
    private UUID id;

    @JsonProperty
    @Column(name = "emoji")
    private String emoji;

    @JsonProperty
    @Column(name = "name")
    private String name;

    @JsonProperty
    @Column(name = "description")
    private String description;

    @JsonProperty
    @Column(name = "budget")
    private BigDecimal budget;
}
