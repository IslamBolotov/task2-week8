$(document).ready(function(){


    const countryUrl = 'https://restcountries.eu/rest/v2/all'
    const nameCountry = 'https://restcountries.eu/rest/v2/name/'

    const allCountry = async () =>{
        try{
            const response = await  fetch(countryUrl)
            const data = await response.json()
            
            data.forEach(async (item,i) =>{

                const elem = await fetch(nameCountry+item.name)
                const elem1 = await elem.json()
                console.log(elem1);

                $('table').append(`<tr>
                <td>${item.alpha2Code}</td>
                <td><img src="${item.flag}" class""></td>
                <td>${item.name}</td>
                <td>${item.capital}</td>
                <td>${item.population}</td>
                </tr>
                `)

                })
        }
        catch(error){
            console.log(error);
            
        }
    }

    allCountry()




})