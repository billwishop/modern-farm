import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"



export const plantSeeds = (plantingPlan) => {

    for (const row of plantingPlan) {
        for (const plant of row) {
            if (plant === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plant === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (plant === "potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plant === "soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plant === "sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plant === "wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
}