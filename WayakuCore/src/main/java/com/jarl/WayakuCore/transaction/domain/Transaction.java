package com.jarl.WayakuCore.transaction.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

import java.math.BigDecimal;
import java.util.UUID;

@MappedSuperclass
public class Transaction {

    @Id
    @Column(name = "id")
    @JsonProperty
    private UUID id;

    @JsonProperty
    @Column(name = "name")
    private String name;

    @JsonProperty
    @Column(name = "amount")
    private BigDecimal amount;
}
