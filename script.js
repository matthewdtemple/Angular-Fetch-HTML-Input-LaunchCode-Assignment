
window.addEventListener("load", function () {
    let list


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse =  myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        
        pickedPlanet = pickPlanet(listedPlanets)
        
        let planName = pickedPlanet.name;
        let planDiameter = pickedPlanet.diameter;
        let planStar = pickedPlanet.star;
        let planDistance = pickedPlanet.distance;
        let planMoon = pickedPlanet.planMoon
        let planImg = pickedPlanet.image

        addDestinationInfo(document, planName, planDiameter, planStar, planDistance, planMoon, planImg)
    })

    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        
        let namePilot = document.querySelector("input[name=pilotName]")
        let nameCopilot = document.querySelector("input[name=copilotName]")
        let levelFuel = document.querySelector("input[name=fuelLevel]")
        let massCargo = document.querySelector("input[name=cargoMass]")

        pilot = namePilot.value
        copilot = nameCopilot.value
        fuelLevel = levelFuel.value
        cargoLevel = massCargo.value

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    })


});


