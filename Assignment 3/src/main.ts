import { PigTable } from "./pigTable";
import { Pig } from "./pigs";
import { Categories } from './pigs'
import { Breeds } from './pigs'
import { Attributes } from './pigs'
import { Personalities } from './pigs'
import { breedMap } from "./pigs";
import { attMap } from "./pigs";

var table = new PigTable();

var pig1: Pig = new Pig(0, "PorkChop", 0, 1, 0, 50, 40)
var pig2: Pig = new Pig(1, "Baconator", 1, 5, 1, 60, 20)

table.add(pig1)
table.add(pig2)

console.log(table)

table.delete(0)
console.log(table)


let init = document.getElementById("addButton")!
console.log(init)
init.addEventListener('click', function (e) {
    if (e) {
        console.log(e)
    }
    e?.preventDefault()
    let x = document.getElementById("newPigForm")
    console.log(x?.style)
    if (x?.style.display === '') {
        x.style.display = 'block'
    }
})
