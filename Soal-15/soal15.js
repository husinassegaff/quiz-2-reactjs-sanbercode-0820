let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

let combinedBuku = {...buku, 
  warnaSampul: [...buku.warnaSampul, ...warna],
  ...dataBukuTambahan
}

console.log(combinedBuku)
