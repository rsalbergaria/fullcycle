USE fullcycle;

-- Criação do usuário 'nodeuser' com todas as permissões
CREATE USER 'gabrielle'@'%' IDENTIFIED BY 'gabrielle';

-- Concede todas as permissões ao usuário 'nodeuser' de qualquer host
GRANT ALL PRIVILEGES ON *.* TO 'gabrielle'@'%' WITH GRANT OPTION;

-- Atualiza as permissões
FLUSH PRIVILEGES;

-- Utiliza o banco de dados nodedb
USE fullcycle;

CREATE TABLE IF NOT EXISTS categories (
    id INT auto_increment,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO categories (name) VALUES ('Eletronicos');