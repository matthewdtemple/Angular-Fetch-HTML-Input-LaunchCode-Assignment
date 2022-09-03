// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML =
        `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
            `

}

function validateInput(testInput) {
    if (!testInput) {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }

}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Pilot and copilot cannot contain numbers.")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Fuel and Cargo must be a number")
    }

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")

    let launchStatus = document.getElementById("launchStatus")
    let docVisiblity = document.getElementById("faultyItems")

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

    if (fuelLevel < 10000 && cargoLevel > 10000) {
        docVisiblity.style.visibility = "visible"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "rgb(199, 37, 78)"
        fuelStatus.innerHTML = "Not enough fuel for mission"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    }else if (cargoLevel > 10000){
        docVisiblity.style.visibility = "visible"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "rgb(199, 37, 78)"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
    } else if (fuelLevel < 10000) {
        docVisiblity.style.visibility = "visible"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "rgb(199, 37, 78)"
        fuelStatus.innerHTML = "Not enough fuel for mission"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    } else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = "rgb(65, 159, 106)"
    }


    

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planNum = Math.floor(Math.random() * planets.length)
    return planets[planNum]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;