url = 'https://restcountries.com/v3.1/all'

const root = document.querySelector('#root')
const searchBtn = document.querySelector('#btnSearch')
const search = document.querySelector('#searchField')
const selectRegion = document.querySelector('#dropdownReg')
function countryCards(){
        fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
                .then(a=>{
                    const itemsContainer = document.createElement("div")
                    itemsContainer.setAttribute("class","container row")
                    root.append(itemsContainer)
                    a.forEach(element => {
                    // console.log(element)
                    itemsContainer.innerHTML = itemsContainer.innerHTML + 
                        `<div  class="col-md-3 mb-3">
                        <div class="card mb-3" style="max-width: 18rem;">
                        <a class="custom-card" style="text-decoration: none; color: inherit;" href="#">
                        <img class="card-img-top" src="${element.flags.png}" alt="Card image cap" height="200">
                        <div class="card-body">
                        <h5 class="card-title">${element.name.common}</h5>
                        <p class="card-text"><strong>Population: </strong> ${element.population}</p>
                        <p class="card-text"><strong>Region: </strong> ${element.region}</p>
                        <p class="card-text"><strong>Capital: </strong> ${element.capital}</p>
                        </div>
                        </a>
                        </div>
                        </div>`
                })
                
                
                    searchBtn.addEventListener('click',(e)=>{
                        e.preventDefault()
                        const filtered = a.filter((element) => {
                            if(element.name.common.toLowerCase().includes(search.value.toLowerCase())){
                                return element
                        }})
                        itemsContainer.innerHTML = ''
                        console.log(filtered)
                        filtered.forEach(element => {
                            // console.log(element)
                            itemsContainer.innerHTML = itemsContainer.innerHTML + 
                                `<div  class="col-md-3 mb-3">
                                <div class="card mb-3" style="max-width: 18rem;">
                                <a class="custom-card" style="text-decoration: none; color: inherit;" href="#">
                                <img class="card-img-top" src="${element.flags.png}" alt="Card image cap" height="200">
                                <div class="card-body">
                                <h5 class="card-title">${element.name.common}</h5>
                                <p class="card-text"><strong>Population: </strong> ${element.population}</p>
                                <p class="card-text"><strong>Region: </strong> ${element.region}</p>
                                <p class="card-text"><strong>Capital: </strong> ${element.capital}</p>
                                </div>
                                </a>
                                </div>
                                </div>`
                        })
                })
                    selectRegion.addEventListener('change',(e)=>{
                    console.log(`e.target.value = ${ e.target.value }`)
                    e.preventDefault()
                    const regFil = a.filter((ele) => {
                        if(ele.region.toLowerCase() === e.target.value.toLowerCase()){
                            return ele
                        }
                        else if (e.target.value === 'All')
                            return ele
                    })
                    itemsContainer.innerHTML = ''
                        console.log(regFil)
                        regFil.forEach(element => {
                            // console.log(element)
                            itemsContainer.innerHTML = itemsContainer.innerHTML + 
                                `<div  class="col-md-3 mb-3">
                                <div class="card mb-3" style="max-width: 18rem;">
                                <a class="custom-card" style="text-decoration: none; color: inherit;" href="#">
                                <img class="card-img-top" src="${element.flags.png}" alt="Card image cap" height="200">
                                <div class="card-body">
                                <h5 class="card-title">${element.name.common}</h5>
                                <p class="card-text"><strong>Population: </strong> ${element.population}</p>
                                <p class="card-text"><strong>Region: </strong> ${element.region}</p>
                                <p class="card-text"><strong>Capital: </strong> ${element.capital}</p>
                                </div>
                                </a>
                                </div>
                                </div>`
                        })
                    })
                    const modal = document.getElementById("countryModal");
                const countriesBtn = document.querySelectorAll('.custom-card')
                console.log(countriesBtn)
                countriesBtn.forEach(e => {
                    e.addEventListener('click',()=>{
                        console.log(e)
                        modal.style.display = "flex";
                        
                    })
                })


            })
            
            

}

countryCards()