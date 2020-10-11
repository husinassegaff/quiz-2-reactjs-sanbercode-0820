class BangunDatar{
    constructor(nama){
        this.nama = nama
        this.nilai = 0
    }

    luas(){
        return ""
    }
    keliling(){
        return ""
    }
}

class Lingkaran extends BangunDatar{
    constructor(nama){
        super(nama);
        this.nilai = 5
    }

    get luas(){

        return console.log( 3.14 * nilai * nilai);
    }
    get keliling(){
        return console.log( 3.14 * 2 * nilai)
    }
}

class Persegi extends BangunDatar{
    constructor(nama){
        super(nama);
        this.nilai = 5
    }
    get luas(){
        return console.log(nilai * nilai)
    }
    get keliling(){
        return console.log(nilai * 4)
    }
}

var bangunlingkaran = new Lingkaran("A")
bangunlingkaran.luas()
bangunlingkaran.keliling()
console.log(bangunlingkaran)

var bangunpersegi = new Persegi("B")
bangunpersegi.luas()
bangunpersegi.keliling()
console.log(bangunpersegi)
