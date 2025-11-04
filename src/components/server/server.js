import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Data dummy sementara (nantinya bisa diambil dari database)
const spots = [
  {
    id: 1,
    nama: "Saung Kemangi",
    alamat: "Jl. Cipaku Indah X No.2, Ledeng, Bandung",
    rating: 4.5,
    harga: 20000,
    jam_operasional: "10.00 - 22.00",
    image: "https://i.pinimg.com/736x/8f/8d/14/8f8d1477e57e783872b809c5447b5280.jpg",
    galeri: [
      "https://i.pinimg.com/1200x/36/31/25/363125df0f728983311938f7b1f1d01a.jpg",
      "https://i.pinimg.com/736x/dc/d1/4e/dcd14e3ca7cb0a819976077d46dfe5c0.jpg",
      "https://i.pinimg.com/1200x/fa/c6/19/fac619f73c7119b7e561eb7765da0257.jpg"
    ],
    fasilitas: ["Tempat Istirahat", "Toilet", "Mushola", "Sewa Alat", "Restoran"],
    ulasan: [
      { id:1, user: "U**", komentar: "Tempat nyaman dan tenang", stars:"4.5"},
      { id:2, user: "D***", komentar: "Kolam luas, cocok untuk keluarga", stars:"4.5" },
    ]
  },
  {
    id: 2,
    nama: "Situ Ciburuy",
    alamat: "Padalarang, Kabupaten Bandung Barat",
    rating: 4.2,
    harga: 15000,
    jam_operasional: "08.00 - 20.00",
    image: "https://example.com/situ.jpg",
    galeri: [],
    fasilitas: ["Tempat Istirahat", "Toilet", "Parkir"],
    ulasan: []
  }
];

// Endpoint untuk mengambil spot berdasarkan ID
app.get("/api/spots/:id", (req, res) => {
  const spot = spots.find(s => s.id === parseInt(req.params.id));
  if (!spot) return res.status(404).json({ message: "Spot tidak ditemukan" });
  res.json(spot);
});

app.listen(5000, () => console.log("Server berjalan di http://localhost:5000"));
