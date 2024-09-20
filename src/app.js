const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // você pode escolher outra porta

// Endpoint para retornar a página HTML
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/index`);
});
