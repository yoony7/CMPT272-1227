System.register([], function (exports_1, context_1) {
    "use strict";
    var PigTable;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigTable = class PigTable {
                constructor() {
                    this.table = [];
                }
                add(p) {
                    this.table.push(p);
                    localStorage.pigArray = JSON.stringify(this.table);
                }
                delete(id) {
                    const indexOfObject = this.table.findIndex((object) => {
                        return object.id === id;
                    });
                    if (indexOfObject !== -1) {
                        this.table.splice(indexOfObject, 1);
                    }
                }
                getAll() {
                    return JSON.parse(localStorage.pigArray);
                }
            };
            exports_1("PigTable", PigTable);
        }
    };
});
