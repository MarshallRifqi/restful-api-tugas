const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let data = []; // Untuk menyimpan data sementara

// Route untuk menampilkan semua data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Route untuk menambahkan data baru
app.post('/api/data', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).send('Data berhasil ditambahkan.');
});

// Route untuk mengambil data berdasarkan ID
app.get('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const foundData = data.find(item => item.id === id);
    if (!foundData) {
        res.status(404).send('Data tidak ditemukan.');
    } else {
        res.json(foundData);
    }
});

app.listen(PORT, () => {
    console.log('Server berjalan di http://localhost:${PORT}');
});