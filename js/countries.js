const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = (countries) => {
    /* for (const country of countries) {
        console.log(country);
    } */
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h4>Name:${country.name.common}</h4>
        <p>Capital:${country.capital}</p>
        <button onclick="loadCountriesDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    })
};
const loadCountriesDetail = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetail(data[0]))
};
const displayCountriesDetail = (country) => {
    console.log(country)
    const countrydetail = document.getElementById('country-detail')
    countrydetail.innerHTML = `
    <h2>Detail:${country.name.common}</h2>
    <img src="${country.flags.png}">
    `

};
loadCountries()