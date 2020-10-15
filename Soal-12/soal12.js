class BangunDatar {
    constructor(nama){
      this.nama = nama
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
      super(nama)
      this._jariJari = 0
    }
  
  
    get jariJari() {
      return this._jariJari
    }
  
    set jariJari(angka) {
      this._jariJari = angka
    }
  
    luas(){
      const pi = this.jariJari % 7 === 0 ? 22/7 : 3.14    
      return pi*this.jariJari*this.jariJari
    }
    
    keliling(){
      const pi = this.jariJari % 7 === 0 ? 22/7 : 3.14
      return 2*pi*this.jariJari
    }
  
  }
  
  class Persegi extends BangunDatar{
  
    constructor(nama){
      super(nama)
      this._sisi = 0
    }
  
  
    get sisi() {
      return this._sisi
    }
  
    set sisi(angka) {
      this._sisi = angka
    }
  
    luas(){
      return this.sisi*this.sisi
    }
    
    keliling(){
      return 4*this.sisi
    }
  
  }
  var bangunDatar1 = new BangunDatar("bangunDatar1")
  var lingkaran1 = new Lingkaran("lingkaran1")
  lingkaran1.jariJari = 7
  
  var persegi1 = new Persegi("persegi1")
  persegi1.sisi = 8
  console.log("luas: " + bangunDatar1.luas())
  console.log("keliling: " + bangunDatar1.keliling())
  console.log()
  
  console.log("luas Lingkaran dan keliling Lingkaran dengan jari-jari : " + lingkaran1.jariJari )
  console.log("luas: " + lingkaran1.luas())
  console.log("keliling: " + lingkaran1.keliling())
  console.log()
  
  console.log("luas Lingkaran dan keliling Lingkaran dengan sisi : " + persegi1.sisi )
  console.log("luas: " + persegi1.luas())
  console.log("keliling: " + persegi1.keliling())
  