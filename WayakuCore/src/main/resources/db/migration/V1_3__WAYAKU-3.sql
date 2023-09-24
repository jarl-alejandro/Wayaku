-- Para la tabla 'income'
ALTER TABLE incomes
    ADD COLUMN transaction_date DATETIME;

-- Para la tabla 'expense'
ALTER TABLE expenses
    ADD COLUMN transaction_date DATETIME;
