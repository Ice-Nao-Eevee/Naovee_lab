# 🧊 MongoDB Basic Command Cheat Sheet

## ▶️ Masuk ke MongoDB Shell
```bash
mongosh
```
---

## 🗂️ DATABASE

```js
show dbs 
// Melihat semua database yang sudah punya data
use nama database kamu
// Memilih atau menyiapkan database
// Database benar-benar dibuat saat ada data pertama
```

---

## 📁 COLLECTION

```js
show collections
// Melihat semua collection dalam database aktif

db.createCollection("nama koleksi kamu")
// Membuat collection kosong bernama namaclkamu

db.namaclkamu.insertOne({nama: "Naovee"})
// Collection otomatis dibuat jika belum ada
```

---

## 📄 INSERT DATA (CREATE)

```js
db.namaclkamu.insertOne({nama: "Naovee", kelas: "PPLG"})
// Menambahkan satu data (document)

db.namaclkamu.insertMany([
  {nama: "Evoly", kelas: "Multimedia"},
  {nama: "Val", kelas: "Desain"}
])
// Menambahkan banyak data sekaligus
``` 

---

## 🔍 READ DATA

```js
db.namaclkamu.find()
// Menampilkan semua data

db.namaclkamu.find({kelas: "PPLG"})
// Mencari data dengan kondisi tertentu

db.namaclkamu.findOne({nama: "Naovee"})
// Menampilkan satu data saja
```

---

## ✏️ UPDATE DATA

```js
db.namaclkamu.updateOne(
  {nama: "Naovee"},
  {$set: {kelas: "XI PPLG"}}
)
// Mengubah satu data

db.namaclkamu.updateMany(
  {kelas: "PPLG"},
  {$set: {status: "Aktif"}}
)
// Mengubah banyak data
```

---

## ❌ DELETE DATA

```js
db.namaclkamu.deleteOne({nama: "Val"})
// Menghapus satu data

db.namaclkamu.deleteMany({kelas: "Desain"})
// Menghapus banyak data
```

---

## 🧨 HAPUS COLLECTION

```js
db.namaclkamu.drop()
// Menghapus seluruh collection namaclkamu
```

---

## 💥 HAPUS DATABASE

```js
use nama database kamu
db.dropDatabase()
// Menghapus database aktif
```

---

## 📊 INFO DATABASE

```js
db.stats()
// Melihat statistik database
```

---

## 🚪 KELUAR MONGODB

```js
exit
// Keluar dari MongoDB Shell
```

---

## 🧠 STRUKTUR MONGODB

Database → Collection → Document (JSON)