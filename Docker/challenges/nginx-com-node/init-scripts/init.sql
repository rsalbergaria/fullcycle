USE nodedb;

-- Criação do usuário 'nodeuser' com todas as permissões
CREATE USER 'nodeuser'@'%' IDENTIFIED BY 'nodeuser';

-- Concede todas as permissões ao usuário 'nodeuser' de qualquer host
GRANT ALL PRIVILEGES ON *.* TO 'nodeuser'@'%' WITH GRANT OPTION;

-- Atualiza as permissões
FLUSH PRIVILEGES;

-- Utiliza o banco de dados nodedb
USE nodedb;

-- Criação da tabela people, se não existir
CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);