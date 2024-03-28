const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let data = []; // Untuk menyimpan data sementara

// Route untuk menampilkan semua data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Route untuk menambahkan data baru
app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).send("Data berhasil ditambahkan.");
});

// Route untuk mengambil data berdasarkan ID
app.get("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const foundData = data.find((item) => item.id === id);
  if (!foundData) {
    res.status(404).send("Data tidak ditemukan.");
  } else {
    res.json(foundData);
  }
});

// Methode untuk mengedit
app.put("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  const dataIndex = data.findIndex((item) => item.id === id);
  if (dataIndex === -1) {
    res.status(404).send("Data tidak ditemukan.");
  } else {
    data[dataIndex] = newData;
    res.send("Data berhasil diperbarui.");
  }
});

// Route untuk menghapus data berdasarkan ID
app.delete("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const dataIndex = data.findIndex((item) => item.id === id);
  if (dataIndex === -1) {
    res.status(404).send("Data tidak ditemukan.");
  } else {
    data.splice(dataIndex, 1);
    res.send("Data berhasil dihapus.");
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
