var bounds = [100, 95.0, 90.0, 85.0, 80.0, 75.0, 70.0, 65.0, 60.0, 55.0, 50.0, 0.0]; // default bound values
var fileUploaded = false;
var objects = [];

const myBounds = document.getElementById("formbounds"); // messy extraction of bound input text 

function nanError() {
    window.location.reload();
}

function boundUpdate() {
    if (fileUploaded == true) {
        for (var i = 1; i < 13; i++) {
            var j = "text" + i;
            var k = document.getElementById(j).value;
            bounds[i - 1] = Number(k);
            console.log(Number.isNaN(bounds[i - 1]));
            if ((bounds[i - 1]) !== (bounds[i - 1])) {
                console.log("string detected");
                console.log(bounds[i - 1]);
                console.log(Number.isNaN(bounds[i - 1]));
                document.getElementById("boundError").textContent = "Error: please only enter numbers. Refreshing in 5 seconds."
                setTimeout(nanError, 5000);
                throw new Error("NaN input");
            }
        }
        function compare(a, b) {
            if (Number(a) > Number(b)) { return -1; }
            if (Number(a) < Number(b)) { return 1; }
            return 0;
        }
        bounds.sort(compare); // sort bounds
    }

    return bounds;
}

function calcStats(data) {
    var max = data[0];
    var maxIndex = 0;
    var min = data[data.length - 1];
    var minIndex = data.length - 1;

    var bounds = boundUpdate();
    console.log(bounds);

    for (var i = 0; i < data.length; ++i) {
        if (Number(data[i].Percent) > (bounds[0])) {
            max = data[i + 1];
            ++maxIndex;
        }
    }

    for (var i = data.length; i > 0; --i) {
        if (Number(data[i - 1].Percent) < (bounds[11])) {
            min = data[i - 2];
            --minIndex;
        }
    }
    console.log(max);
    console.log(maxIndex);
    console.log(min);
    console.log(minIndex);
    document.getElementById("highest").textContent = max.Name + max.Percent;
    document.getElementById("lowest").textContent = min.Name + min.Percent;

    var sliced = []; // get new array of objects based on Max and Min set by bounds
    for (var i = 0; i < (minIndex - maxIndex + 1); ++i) {
        sliced[i] = data[i + maxIndex];
    }
    console.log(sliced);

    var sum = 0;
    for (var i = 0; i < sliced.length; ++i) {
        sum += Number(sliced[i].Percent);
    }
    var mean = sum / sliced.length;
    var mean = mean.toFixed(1);
    document.getElementById("mean").textContent = mean;

    var median = data[Math.ceil(sliced.length / 2) - 1].Percent;
    document.getElementById("median").textContent = median;
    objects = sliced;
}

function calcGrades(data) {
    var aplus = 0, a = 0, aminus = 0, bplus = 0, b = 0, bminus = 0, cplus = 0, c = 0, cminus = 0, d = 0, f = 0;
    var grades = [aplus, a, aminus, bplus, b, bminus, cplus, c, cminus, d, f];
    var iterB = bounds.length - 1;
    var iterG = grades.length - 1;

    console.log(bounds);

    for (var i = data.length - 1; i > -1; --i) { // sort data into grade count
        if (Number(data[i].Percent) < bounds[iterB - 1]) {
            console.log("data[", i, "] = ", Number(data[i].Percent));
            console.log("position", iterG, " + 1");
            console.log(bounds[iterB]);
            ++grades[iterG];
            continue;
        } else {
            ++grades[iterG - 1];
        }
        --iterB;
        --iterG;
    }
    console.log(grades);
}

myBounds.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { // Checks whether "Enter" key is pressed
        bounds = boundUpdate();
        console.log(bounds);
        calcStats(objects);
        calcGrades(objects);
        console.log("Stats and histogram updated");
    }
})

function init() {
    document.getElementById("selectedFile").addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event) {
    console.log(event);
    console.log("Submission logged");
    fileUploaded = true;
    const text = event.target.result;
    const data = csvToArray(text);

    function compare(a, b) { // Compare function for sort()
        if (Number(a.Percent) > Number(b.Percent)) {
            return -1;
        }
        if (Number(a.Percent) < Number(b.Percent)) {
            return 1;
        }
        return 0;
    }
    data.sort(compare); // sort data
    console.log(data);
    objects = data;

    calcStats(objects);
    calcGrades(objects);
    console.log("stats calculated, histogram generated");
}

function csvToArray(str, delimiter = ",") { // function to parse CSV into array of objects

    // slice from start to end of first line and split by comma
    var headers = str.slice(0, str.indexOf("\r\n")).split(",");

    // slice from (\n + 1) index and split to create an array
    const rows = str.slice(str.indexOf("\n") + 1).split("\r\n");

    var arr1 = rows.map(function (row) {
        const entries = row.split(delimiter);
        const head = headers.reduce(function (object, header, index) {
            object[header] = entries[index];
            return object;
        }, {});
        return head;
    })

    return arr1;
}

var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");
c.fillRect(10, 10, 10, 10);