CREATE TABLE incomes (
    id BINARY(16) NOT NULL,
    name VARCHAR(255),
    amount DECIMAL(19,2),
    PRIMARY KEY (id)
);

CREATE TABLE expenses (
     id BINARY(16) NOT NULL,
     name VARCHAR(255),
     amount DECIMAL(19,2),
     budget_id BINARY(16),
     PRIMARY KEY (id),
     CONSTRAINT fk_budget FOREIGN KEY (budget_id) REFERENCES budgets(id)
);
