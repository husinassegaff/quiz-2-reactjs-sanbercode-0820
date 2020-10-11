let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit : 2020
}

let buku = {
    nama : "pemrograman dasar",
    jumlahHalaman : 172,
    warnaSampul : ["hitam"]
}

let combinedWarna = [...warna,...buku.warnaSampul]
console.log(combinedWarna)

let combinedBuku = [...buku.nama, ...dataBukuTambahan.penulis]
console.log(combinedBuku)