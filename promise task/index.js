const card = document.getElementById('main-card');
// const imageSrc = document.getElementById('CountryImage')
// const infoName = document.getElementById('countryName')
// const infoCapital = document.getElementById('capitalName')


fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json()).then((data) => {
        console.log(data)
        data.forEach((countryData) => {
            const imageSrc = document.createElement('img')
            const infoName = document.createElement('p')
            const infoCapital = document.createElement('p')
            imageSrc.src = countryData.flags.png   //using src replace textconatent becuse this is image not an text 
            console.log(imageSrc)
            infoName.textContent = `Country name :${countryData.name.common}`
            infoName.style.color = 'red'
            // console.log(infoName)
            infoCapital.textContent = `Capital :${countryData.capital}`
            infoCapital.style.color = 'green'
            infoCapital.style.marginBottom = '2rem';
            // console.log(infoCapital)
            card.append(imageSrc, infoName, infoCapital)
        })
    })

const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', function () {
    console.log("click")
    document.body.classList.toggle('dark');
    card.classList.toggle('dark');
});