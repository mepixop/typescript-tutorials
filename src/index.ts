console.log("hello world")

import { Airplane } from "./types/airplanes"

const airplane: Airplane = {
    model: "Airbus A380",
    flightnumber: "A2201",
    timeOfArrival: new Date(),
    timeOfDeparture: new Date(),
    caterer: {
        name: "Special Food ltd.",
        address: "484, Some Street, New York",
        phone: 1452125,
    }
}

console.log(airplane.model);