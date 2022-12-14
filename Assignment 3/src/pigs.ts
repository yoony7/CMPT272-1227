export const enum Categories { Grey, Chestnut, White, Black } // pig categories

export const enum Breeds {/*Grey*/ Bach, Mozart, Beethoven, Elgar,/*Chestnut*/ Mendelssohn, Vivaldi, Debussy, Tchaikovsky,/*White*/ Wagner, Haydn, Schumann, Chopin,/*Black*/ Strauss, Mahler, Wieniawski, Brahms } // pig breeds

export const enum Attributes { Swimming, Speaking, Running, Strength } //pig attributes

export const enum Languages { English, Korean, French, German, Spanish, Japanese }

export const enum Personalities { Hardy, Lonely, Brave, Adamant, Naughty, Bold, Docile, Relaxed, Impish, Lax, Timid, Hasty, Serious, Jolly, Naive, Modest, Mild, Quiet, Bashful, Rash, Calm, Gentle, Sassy, Careful, Quirky } // pig personalities


export class Pig {
    id: number
    readonly name: string
    readonly category: Categories
    readonly breed: Breeds
    readonly attribute: Attributes
    readonly attValue: string
    readonly height: string
    readonly weight: string
    readonly personality: Personalities

    constructor(id: number, name: string, category: Categories, breed: Breeds, attribute: Attributes, attValue: string, height: string, weight: string, personality: Personalities) {
        this.id = id
        this.name = name
        this.category = category
        this.breed = breed
        this.attribute = attribute
        this.height = height
        this.weight = weight
        this.personality = personality
        this.attValue = attValue
    }
}

export var breedMap = new Map<Categories, Breeds>()
export var attMap = new Map<Categories, Attributes>()