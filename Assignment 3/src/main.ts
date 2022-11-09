import { PigTable } from "./pigTable";
import { Pig } from "./pigs";
import { Categories } from './pigs'
import { Breeds } from './pigs'
import { Attributes } from './pigs'
import { Personalities } from './pigs'
import { breedMap } from "./pigs";
import { attMap } from "./pigs";

var index: number = 0;

var table = new PigTable();


let init = document.getElementById("addButton")!
console.log(init)
init.addEventListener('click', function (e) {
    if (e) {
        console.log(e)
    }
    e?.preventDefault()
    let x = document.getElementById("newPigForm")
    console.log(x?.style)
    if (x?.style.display === '' || 'none') {
        x.style.display = 'block'
    }
})

let addButt = document.getElementById("addPig")!
console.log(addButt)
addButt.addEventListener('click', function (e) {
    e?.preventDefault()

    addPig()

    let x = document.getElementById("newPigForm")
    console.log(x?.style)
    if (x?.style.display === 'block') {
        x.style.display = 'none'
    }
})

function addPig(): void {
    let cat = <HTMLSelectElement>document.getElementById("newPigCategory")
    let personality = <HTMLSelectElement>document.getElementById("newPigPersonality")
    let breed = <HTMLSelectElement>document.getElementById("breedOptions")
    let attSelect = document.getElementById("attribute")?.innerHTML
    let att = "Running"
    let name = <HTMLInputElement>document.getElementById("newPigName")
    let height = <HTMLInputElement>document.getElementById("newPigHeight")
    let weight = <HTMLInputElement>document.getElementById("newPigWeight")
    let attValue = <HTMLInputElement>document.getElementById("newPigAttribute")

    let newPig = new Pig(index, name.value, cat.selectedIndex, breed.selectedIndex, 0, att, height.value, weight.value, personality.selectedIndex)
    ++index
    console.log(index)

    table.add(newPig)
    console.log(table)
    resetAdd()
}


let catListener = <HTMLSelectElement>document.getElementById("newPigCategory")
catListener.addEventListener('change', function (e) {
    e.preventDefault()
    breedOptions(this.options[this.selectedIndex].value)
})

function clearInput(catIndexVal: string): void {

    let a = document.getElementById("attributeValue");
    while (a?.firstChild) {
        a.removeChild(a.firstChild)
    }
    let b = document.createElement("input");

    switch (catIndexVal) {
        case "Grey":
            b.setAttribute("placeholder", "Swimming: 0 - 100");
            a?.appendChild(b);
            break
        case "White":
            b.setAttribute("placeholder", "Running 0 - 100");
            a?.appendChild(b);
            break
        case "Black":
            b.setAttribute("placeholder", "Strength: 0 - 10");
            a?.appendChild(b);
            break;
    }
}

function resetAdd(): void {
    let name = <HTMLInputElement>document.getElementById("newPigName")
    name.setAttribute("value", "")
    name.setAttribute("placeholder", "Please write a name")
    let height = <HTMLInputElement>document.getElementById("newPigHeight")
    height.setAttribute("value", "")
    height.setAttribute("placeholder", "Please provide the height")
    let weight = <HTMLInputElement>document.getElementById("newPigWeight")
    weight.setAttribute("value", "")
    weight.setAttribute("value", "Please provide the weight")
    let cat = <HTMLSelectElement>document.getElementById("newPigCategory")
    cat.selectedIndex = 0
    let personality = <HTMLSelectElement>document.getElementById("newPigPersonality")
    personality.selectedIndex = 0
    let breed = <HTMLSelectElement>document.getElementById("breedOptions")
    while (breed.firstChild) {
        breed.removeChild(breed.firstChild)
    }
    breed.options[0] = new Option("Please Select Category First", "")
    let attSelect = document.getElementById("attribute")
    attSelect?.innerHTML = ""
    let attValue = <HTMLInputElement>document.getElementById("attributeValue")
    while (attValue.firstChild) {
        attValue.removeChild(attValue.firstChild)
    }

}


function breedOptions(catIndexVal: string): void {
    switch (catIndexVal) {
        case "Grey":
            document.getElementById("breedOptions").options[0] = new Option("Bach", "Bach");
            document.getElementById("breedOptions").options[1] = new Option("Mozart", "Mozart");
            document.getElementById("breedOptions").options[2] = new Option("Beethoven", "Beethoven");
            document.getElementById("breedOptions").options[3] = new Option("Elgar", "Elgar");
            document.getElementById("attribute")?.innerHTML = "Swimming";
            console.log("Grey selected");
            clearInput(catIndexVal);
            break
        case "Chestnut":
            document.getElementById("breedOptions").options[0] = new Option("Mendelssohn", "Mendelssohn");
            document.getElementById("breedOptions").options[1] = new Option("Vivaldi", "Vivaldi");
            document.getElementById("breedOptions").options[2] = new Option("Debussy", "Debussy");
            document.getElementById("breedOptions").options[3] = new Option("Tchaikovsky", "Tchaikovsky");
            document.getElementById("attribute")?.innerHTML = "Speaking";
            let i = document.getElementById("attributeValue");
            while (i?.firstChild) {
                i.removeChild(i.firstChild)
            }
            let j = document.createElement("select");
            j.options[0] = new Option("English", "English");
            j.options[1] = new Option("Korean", "Korean");
            j.options[2] = new Option("French", "French");
            j.options[3] = new Option("German", "German");
            j.options[4] = new Option("Spanish", "Spanish");
            j.options[5] = new Option("Japanese", "Japanese");
            i?.appendChild(j);
            console.log("Chestnut selected");
            break
        case "White":
            document.getElementById("breedOptions").options[0] = new Option("Wagner", "Wagner");
            document.getElementById("breedOptions").options[1] = new Option("Haydn", "Haydn");
            document.getElementById("breedOptions").options[2] = new Option("Schumann", "Schumann");
            document.getElementById("breedOptions").options[3] = new Option("Chopin", "Chopin");
            document.getElementById("attribute")?.innerHTML = "Running";
            console.log("White selected");
            clearInput(catIndexVal);
            break
        case "Black":
            document.getElementById("breedOptions").options[0] = new Option("Strauss", "Strauss");
            document.getElementById("breedOptions").options[1] = new Option("Mahler", "Mahler");
            document.getElementById("breedOptions").options[2] = new Option("Wieniawski", "Wieniawski");
            document.getElementById("breedOptions").options[3] = new Option("Brahms", "Brahms");
            document.getElementById("attribute")?.innerHTML = "Strength";
            console.log("Black selected");
            clearInput(catIndexVal);
            break
    }
}

