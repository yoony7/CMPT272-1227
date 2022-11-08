System.register(["./pigTable", "./pigs"], function (exports_1, context_1) {
    "use strict";
    var pigTable_1, pigs_1, table, pig1, pig2, init;
    var __moduleName = context_1 && context_1.id;
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
            table = new pigTable_1.PigTable();
            pig1 = new pigs_1.Pig(0, "PorkChop", 0, 1, 0, 50, 40);
            pig2 = new pigs_1.Pig(1, "Baconator", 1, 5, 1, 60, 20);
            debugger;
            table.add(pig1);
            table.add(pig2);
            console.log(table);
            table.delete(0);
            console.log(table);
            init = document.getElementById("addButton");
            console.log(init);
            init.addEventListener('click', function (e) {
                if (e) {
                    console.log(e);
                }
                e === null || e === void 0 ? void 0 : e.preventDefault();
                let x = document.getElementById("newPigForm");
                console.log(x === null || x === void 0 ? void 0 : x.style);
                if ((x === null || x === void 0 ? void 0 : x.style.display) === '') {
                    x.style.display = 'block';
                }
            });
        }
    };
});
