System.register([], function (exports_1, context_1) {
    "use strict";
    var Pig, breedMap, attMap;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pig = class Pig {
                constructor(id, name, category, breed, attribute, attValue, height, weight, personality) {
                    this.id = id;
                    this.name = name;
                    this.category = category;
                    this.breed = breed;
                    this.attribute = attribute;
                    this.height = height;
                    this.weight = weight;
                    this.personality = personality;
                    this.attValue = attValue;
                }
            };
            exports_1("Pig", Pig);
            exports_1("breedMap", breedMap = new Map());
            exports_1("attMap", attMap = new Map());
        }
    };
});
