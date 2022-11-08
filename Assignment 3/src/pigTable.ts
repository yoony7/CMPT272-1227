import { Pig } from './pigs'
import { Categories } from './pigs'
import { Breeds } from './pigs'
import { Attributes } from './pigs'
import { Personalities } from './pigs'

interface PigTableInterface {
    add(p: Pig): void
    delete(id: number): void
    getAll(): Pig[]
}

export class PigTable implements PigTableInterface {
    table: Pig[]

    constructor() {
        this.table = []
    }

    add(p: Pig): void {
        this.table.push(p)
        localStorage.pigArray = JSON.stringify(this.table)
    }

    delete(id: number): void {
        const indexOfObject = this.table.findIndex((object) => {
            return object.id === id;
        })
        if (indexOfObject !== -1) {
            this.table.splice(indexOfObject, 1)
        }
    }

    getAll(): Pig[] {
        return JSON.parse(localStorage.pigArray)
    }
}