// async function getProducts() {
//     var res = await fetch("http://api.weatherapi.com/v1/current.json?key=c987af9471e244a78f6171127250107&q=London")
//     var data = await res.json()
//     var products = data.recipes
//     console.log(res)
// }
// getProducts()
let place = document.querySelector("#place")
let degree = document.querySelector("#degree")
let chooseLocation = document.querySelector("#chooseLocation")
let find = document.querySelector("#find")
async function findWeather(){
var myHttp = new XMLHttpRequest()
myHttp.open (`get`,`http://api.weatherapi.com/v1/current.json?key=c987af9471e244a78f6171127250107&q=${chooseLocation.value}&days=3`)
myHttp.send()
myHttp.addEventListener("load",function(){
    var res=myHttp.response
    var data = JSON.parse(res)
    console.log(data.location.name)    
    let currentweather = data.current.dewpoint_c
    place.innerHTML = data.location.name
    degree.innerHTML = currentweather
})

}

    find.addEventListener("click", function(){
        findWeather()
    })
