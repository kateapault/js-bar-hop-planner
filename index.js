let searchRequest = {
    "term":"bar"
}

document.addEventListener("DOMContentLoaded", () => {
    // when page loads, only show form 
    let resultsBlock = document.querySelector("#results")
    resultsBlock.style.display = "none"

    let formEntries = {}
    // grab form info on submit
    document.addEventListener("submit", function(event){
        event.preventDefault()
        formEntries = getFormEntries()

    })

    //fetch get from yelp api
    let yelp_url = 'https://api.yelp.com/v3/businesses/search'
    // fetch(yelp_url, {
    //     method: "GET",
    //     headers: {
    //         "Authorization": `Bearer: ${api_key}`,
    //         "Content-Type": "application/json"
    //     }
    // }).then(response => response.json())
    // .then(responseJSON => {
    //     console.log(responseJSON)
    // })

})

function getFormEntries(){
    let formEntries = {
        "term": "bar"
    }
    // let numBars = document.querySelector("#num_bars")    
    // formEntries
    return formEntries
}

function convertMinutesWalkingToMeters(minWalking) {
    // avg walking speed of 5.0 km/h per https://en.wikipedia.org/wiki/Walking
    // = 5000 m/h = 83.3 m/min
    return (minWalking * 83.3)
}