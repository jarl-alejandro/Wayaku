package com.jarl.WayakuCore.transaction.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "incomes")
public class Income extends Transaction {
}
