// Crie o usuário no banco de dados 'admin'
db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [{ role: 'root', db: 'admin' }]
});

// Mude para o banco de dados 'fullcycle'
db = db.getSiblingDB('fullcycle');

// Crie o banco de dados 'fullcycle' (se ainda não existir)
db.createCollection('dummy'); // Isso cria uma coleção, o que também cria o banco de dados

// Crie um usuário para o banco de dados 'fullcycle'
db.createUser({
  user: 'fullcycleuser',
  pwd: 'fullcyclepassword',
  roles: [{ role: 'readWrite', db: 'fullcycle' }]
});