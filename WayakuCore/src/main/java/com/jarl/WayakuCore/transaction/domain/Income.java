package com.jarl.WayakuCore.transaction.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.experimental.Accessors;

@Entity
@Table(name = "incomes")
@Builder
@AllArgsConstructor
@Accessors(fluent = true)
public class Income extends Transaction {
}
