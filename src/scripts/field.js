// define a variable whose intitial value is an empty array

let allPlants = []

export const addPlant = (seedObj) => {
    allPlants.push(seedObj)
}

export const usePlants = () => {
    return allPlants.slice()
}