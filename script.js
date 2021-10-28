fetch('https://indonesia-covid-19.mathdro.id/api')
.then(response => response.json ())
.then(data => console.log(data))