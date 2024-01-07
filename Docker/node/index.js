import express from "express";

const app = express();
const port = 3000;

/*
const config = {
    host: 'db',
    user: 'nodeuser',
    password: 'nodeuser',
    database: 'nodedb',
    port: 3306,
    authPlugin: 'mysql_native_password'
};

const pool = mysql.createPool(config);


const insertQuery = `INSERT INTO PEOPLE(name) values ('Gabrielle')`;

async function runQuery() {
    try {
        const connection = await pool.getConnection();
        await connection.query(insertQuery);
        console.log('Registro inserido com sucesso!');
        connection.release();
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
    }
}
*/

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>');
});

app.listen(port, async () => {
    console.log('Rodando na porta ' + port);
    //await runQuery();
});
