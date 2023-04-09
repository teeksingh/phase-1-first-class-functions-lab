// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    const multipliedFare = function(fare){
        return multiplier * fare
    } 
    return multipliedFare
}


function fareDoubler(fare) {
    const doubledFare = fare * 2
    return doubledFare
}

function fareTripler(fare) {
    const tripledFare = fare * 3
    return tripledFare
}

function selectDifferentDrivers(drivers, functionName ) {
    return functionName(drivers)
    }
