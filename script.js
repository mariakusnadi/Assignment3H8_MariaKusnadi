var totalKasus = {
    'kasusPosi' : 0,
    'kasusSemb' : 0,
    'kasusMeni' : 0,
}

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
        totalKasus.kasusPosi += kasus.kasusPosi
        totalKasus.kasusSemb += kasus.kasusSemb
        totalKasus.kasusMeni += kasus.kasusMeni
    });
    document.getElementById("positif").innerHTML = `Positif: ${totalKasus.kasusPosi}`
    document.getElementById("sembuh").innerHTML = `Sembuh: ${totalKasus.kasusSemb}`
    document.getElementById("meninggal").innerHTML = `Meninggal: ${totalKasus.kasusMeni}`
}

fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    .then(response => response.json ())
    .then(kasus => kasus.data)
    .then(jumlahKasus => {
        renderData(jumlahKasus)
    })