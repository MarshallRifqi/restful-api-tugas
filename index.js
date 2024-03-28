const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let data = []; // Untuk menyimpan data sementara

// Route untuk menampilkan semua data
app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log('Server berjalan di http://localhost:${PORT}');
});