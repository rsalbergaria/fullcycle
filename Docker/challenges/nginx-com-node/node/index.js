import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'nodeuser',
    password: 'nodeuser',
    database: 'nodedb',
    port: 3306,
    authPlugin: 'mysql_native_password'
};

const pool = mysql.createPool(config);

let lastRequestTime = 0;
const minRequestInterval = 1000;

app.get('/health', (_req, res) => {
    res.status(200).send('OK');
});

app.get('/favicon.ico', (_req, res) => {
    res.status(204);
});

app.get('/names', async (_req, res) => {
    console.log('Rota /names acessada');

    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastRequestTime;

    if (timeDifference < minRequestInterval) {
        console.log('Requisição muito rápida, ignorando...');
        res.status(429).send('Requisição muito rápida, aguarde um momento.');
        return;
    }

    lastRequestTime = currentTime;

    const randomName = generateRandomName();

    const sqlInsert = `INSERT INTO PEOPLE(name) values ('${randomName}')`;

    try {
        const [insertResult] = await pool.execute(sqlInsert);
        console.log('Registro inserido com sucesso:', insertResult);

        const [selectResult] = await pool.execute('SELECT name FROM PEOPLE');
        console.log('Consulta bem-sucedida:', selectResult);

        let html = '<h1>Full Cycle Rocks!</h1></br>';
        html += '<ol>';

        selectResult.forEach((row, index) => {
            html += `<li>${index + 1} - ${row.name}</li>`;
        });

        html += '</ol>';

        res.send(html);
    } catch (error) {
        console.error('Erro ao executar consulta:', error);
        res.status(500).send('Erro ao interagir com o banco de dados');
    }
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});

function generateRandomName() {
    const names = ['Aline', 'Bruno', 'Carla', 'Diego', 'Evelyn', 'Fernando', 'Gabriela', 'Hugo', 'Isabela', 'João'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
