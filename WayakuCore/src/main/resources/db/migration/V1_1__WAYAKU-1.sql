CREATE TABLE budgets (
     id BINARY(16) PRIMARY KEY,
     emoji VARCHAR(255),
     name VARCHAR(255),
     description VARCHAR(255),
     budget DECIMAL(19, 2)
);
