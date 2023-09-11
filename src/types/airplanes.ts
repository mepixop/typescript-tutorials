export type Caterer = {
    name: string
    address: string
    phone: number
}

export type Airplane = {
    model: string
    flightnumber: string
    timeOfDeparture: Date
    timeOfArrival: Date
    caterer: Caterer
}