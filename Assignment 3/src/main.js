System.register(["./pigTable", "./pigs"], function (exports_1, context_1) {
    "use strict";
    var pigTable_1, pigs_1, index, table, init, addButt, catListener;
    var __moduleName = context_1 && context_1.id;
    function addPig() {
        var _a;
        let cat = document.getElementById("newPigCategory");
        let personality = document.getElementById("newPigPersonality");
        let breed = document.getElementById("breedOptions");
        let attSelect = (_a = document.getElementById("attribute")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        let att = "Running";
        let name = document.getElementById("newPigName");
        let height = document.getElementById("newPigHeight");
        let weight = document.getElementById("newPigWeight");
        let attValue = document.getElementById("newPigAttribute");
        let newPig = new pigs_1.Pig(index, name.value, cat.selectedIndex, breed.selectedIndex, 0, att, height.value, weight.value, personality.selectedIndex);
        ++index;
        console.log(index);
        table.add(newPig);
        console.log(table);
        resetAdd();
    }
    function clearInput(catIndexVal) {
        let a = document.getElementById("attributeValue");
        while (a === null || a === void 0 ? void 0 : a.firstChild) {
            a.removeChild(a.firstChild);
        }
        let b = document.createElement("input");
        switch (catIndexVal) {
            case "Grey":
                b.setAttribute("placeholder", "Swimming: 0 - 100");
                a === null || a === void 0 ? void 0 : a.appendChild(b);
                break;
            case "White":
                b.setAttribute("placeholder", "Running 0 - 100");
                a === null || a === void 0 ? void 0 : a.appendChild(b);
                break;
            case "Black":
                b.setAttribute("placeholder", "Strength: 0 - 10");
                a === null || a === void 0 ? void 0 : a.appendChild(b);
                break;
        }
    }
    function resetAdd() {
        let name = document.getElementById("newPigName");
        name.setAttribute("value", "");
        name.setAttribute("placeholder", "Please write a name");
        let height = document.getElementById("newPigHeight");
        height.setAttribute("value", "");
        height.setAttribute("placeholder", "Please provide the height");
        let weight = document.getElementById("newPigWeight");
        weight.setAttribute("value", "");
        weight.setAttribute("value", "Please provide the weight");
        let cat = document.getElementById("newPigCategory");
        cat.selectedIndex = 0;
        let personality = document.getElementById("newPigPersonality");
        personality.selectedIndex = 0;
        let breed = document.getElementById("breedOptions");
        while (breed.firstChild) {
            breed.removeChild(breed.firstChild);
        }
        breed.options[0] = new Option("Please Select Category First", "");
        let attSelect = document.getElementById("attribute");
        attSelect === null || attSelect === void 0 ? void 0 : attSelect.innerHTML = "";
        let attValue = document.getElementById("attributeValue");
        while (attValue.firstChild) {
            attValue.removeChild(attValue.firstChild);
        }
    }
    function breedOptions(catIndexVal) {
        var _a, _b, _c, _d;
        switch (catIndexVal) {
            case "Grey":
                document.getElementById("breedOptions").options[0] = new Option("Bach", "Bach");
                document.getElementById("breedOptions").options[1] = new Option("Mozart", "Mozart");
                document.getElementById("breedOptions").options[2] = new Option("Beethoven", "Beethoven");
                document.getElementById("breedOptions").options[3] = new Option("Elgar", "Elgar");
                (_a = document.getElementById("attribute")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Swimming";
                console.log("Grey selected");
                clearInput(catIndexVal);
                break;
            case "Chestnut":
                document.getElementById("breedOptions").options[0] = new Option("Mendelssohn", "Mendelssohn");
                document.getElementById("breedOptions").options[1] = new Option("Vivaldi", "Vivaldi");
                document.getElementById("breedOptions").options[2] = new Option("Debussy", "Debussy");
                document.getElementById("breedOptions").options[3] = new Option("Tchaikovsky", "Tchaikovsky");
                (_b = document.getElementById("attribute")) === null || _b === void 0 ? void 0 : _b.innerHTML = "Speaking";
                let i = document.getElementById("attributeValue");
                while (i === null || i === void 0 ? void 0 : i.firstChild) {
                    i.removeChild(i.firstChild);
                }
                let j = document.createElement("select");
                j.options[0] = new Option("English", "English");
                j.options[1] = new Option("Korean", "Korean");
                j.options[2] = new Option("French", "French");
                j.options[3] = new Option("German", "German");
                j.options[4] = new Option("Spanish", "Spanish");
                j.options[5] = new Option("Japanese", "Japanese");
                i === null || i === void 0 ? void 0 : i.appendChild(j);
                console.log("Chestnut selected");
                break;
            case "White":
                document.getElementById("breedOptions").options[0] = new Option("Wagner", "Wagner");
                document.getElementById("breedOptions").options[1] = new Option("Haydn", "Haydn");
                document.getElementById("breedOptions").options[2] = new Option("Schumann", "Schumann");
                document.getElementById("breedOptions").options[3] = new Option("Chopin", "Chopin");
                (_c = document.getElementById("attribute")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Running";
                console.log("White selected");
                clearInput(catIndexVal);
                break;
            case "Black":
                document.getElementById("breedOptions").options[0] = new Option("Strauss", "Strauss");
                document.getElementById("breedOptions").options[1] = new Option("Mahler", "Mahler");
                document.getElementById("breedOptions").options[2] = new Option("Wieniawski", "Wieniawski");
                document.getElementById("breedOptions").options[3] = new Option("Brahms", "Brahms");
                (_d = document.getElementById("attribute")) === null || _d === void 0 ? void 0 : _d.innerHTML = "Strength";
                console.log("Black selected");
                clearInput(catIndexVal);
                break;
        }
    }
    return {
        setters: [
            function (pigTable_1_1) {
                pigTable_1 = pigTable_1_1;
            },
            function (pigs_1_1) {
                pigs_1 = pigs_1_1;
            }
        ],
        execute: function () {
            index = 0;
            table = new pigTable_1.PigTable();
            init = document.getElementById("addButton");
            console.log(init);
            init.addEventListener('click', function (e) {
                if (e) {
                    console.log(e);
                }
                e === null || e === void 0 ? void 0 : e.preventDefault();
                let x = document.getElementById("newPigForm");
                console.log(x === null || x === void 0 ? void 0 : x.style);
                if ((x === null || x === void 0 ? void 0 : x.style.display) === '' || 'none') {
                    x.style.display = 'block';
                }
            });
            addButt = document.getElementById("addPig");
            console.log(addButt);
            addButt.addEventListener('click', function (e) {
                e === null || e === void 0 ? void 0 : e.preventDefault();
                addPig();
                let x = document.getElementById("newPigForm");
                console.log(x === null || x === void 0 ? void 0 : x.style);
                if ((x === null || x === void 0 ? void 0 : x.style.display) === 'block') {
                    x.style.display = 'none';
                }
            });
            catListener = document.getElementById("newPigCategory");
            catListener.addEventListener('change', function (e) {
                e.preventDefault();
                breedOptions(this.options[this.selectedIndex].value);
            });
        }
    };
});
