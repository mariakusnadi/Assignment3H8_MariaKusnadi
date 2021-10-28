function renderData(jumlahKasus){
    let tableCasesEl = document.getElementById("tableCases")
    jumlahKasus.forEach(kasus => {
        tableCasesEl.innerHTML += `
        <tr>
            <th scope="row">${kasus.provinsi}</th>
            <td>${kasus.kasusPosi}</td>
            <td>${kasus.kasusSemb}</td>
            <td>${kasus.kasusMeni}</td>
        </tr>
        `
    });
}

function jumlahPositif(jumlahKasus){
    let hasilPositif = 0
    jumlahKasus.forEach(kasus => {
        hasilPositif += Number(kasus.kasusPosi) 
    });
    document.getElementById("positif").innerHTML = `Positif: ${hasilPositif}`
}

function jumlahSembuh(jumlahKasus){
    let hasilSembuh = 0
    jumlahKasus.forEach(kasus => {
        hasilSembuh += Number(kasus.kasusSemb)
    });
    document.getElementById("sembuh").innerHTML = `Sembuh: ${hasilSembuh}`
}

function jumlahMeninggal(jumlahKasus){
    let hasilMeninggal = 0
    jumlahKasus.forEach(kasus => {
        hasilMeninggal += Number(kasus.kasusMeni)
    });
    document.getElementById("meninggal").innerHTML = `Meninggal: ${hasilMeninggal}`
}

fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    .then(response => response.json ())
    .then(kasus => kasus.data)
    .then(jumlahKasus => {
        renderData(jumlahKasus)
        jumlahPositif(jumlahKasus)
        jumlahSembuh(jumlahKasus)
        jumlahMeninggal(jumlahKasus)
    })