type Hops = {
    add: string,
    amount: {
        unit: string,
        value: number,
    },
    attribute: string,
    name: string,
}

type Malt = {
    amount: {
        value: number,
        unit: string
    },
    name: string,
}

export type Beer = {
    abv: number,
    attenuation_level: number,
    boil_volume: {
        value: number, 
        unit: string,
    },
    brewers_tips: string,
    contributed_by: string,
    description: string,
    ebc: number,
    first_brewed: string,
    food_pairing: string[],
    ibu: number,
    id: number,
    image_url: string,
    ingredients: {
        malt: Array<Malt>,
        hops: Array<Hops>,
        yeast: string,
    },
    method: {
        mash_temp: {
            duration: number,
            temp: {
                unit: string,
                value: number,
            }
        }[],
        fermentation: {
            temp: {
                unit: string,
                value: number,
            }
        },
        twist: null | string,
    },
    name: string,
    ph: number,
    srm: number,
    tagline: string,
    target_fg: number,
    target_og: number,
    volume: {
        value: number,
        unit: string,
    }
}