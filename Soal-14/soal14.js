const volumeBalok = (...rest) => {
    let [panjang, lebar, tinggi] = rest
    let volume = panjang*lebar*tinggi
    return `hasil volume balok dari panjang ${panjang}, lebar ${lebar} dan tinggi ${tinggi} adalah ${volume}`
} 


const volumeKubus = (...rest) => {
    let sisi = rest
    let volume = sisi*sisi*sisi
    return `hasil volume kubus dari sisi ${sisi} adalah ${volume}`
}

console.log(volumeBalok(5,6,7))
console.log(volumeKubus(8))
