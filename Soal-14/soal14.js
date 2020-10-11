// buatlah arrow function volume balok dan kubus, gunakan rest parameter di parameter functionnya. lalu tampilkan 
// hasil perhitungannya dengan template literal

const volumebalok = (...rest) =>{
    return rest.volumebalok(bangunbalok => bangunbalok.balokvolume !== undefined)
}

console.log(volumebalok(1, {balokvolume: 8 * 7 * 6 }, "next"))

const volumekubus = (...rest) =>{
    return rest.volumekubus(bangunkubus => bangunkubus.VolumeKubus !== undefined)
}

console.log(volumekubus(1, {VolumeKubus : 5 * 5 * 5 }, "next"))