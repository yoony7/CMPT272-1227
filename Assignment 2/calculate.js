var bounds = [100, 95.0, 90.0, 85.0, 80.0, 75.0, 70.0, 65.0, 60.0, 55.0, 50.0, 0.0]; // default bound values
var fileUploaded = false;

const myBounds = document.getElementById("formbounds"); // messy extraction of bound input text 
myBounds.addEventListener("input", function () {
    if (fileUploaded == true) {
        for (var i = 1; i < 13; i++) {
            var j = "text" + i;
            bounds[i - 1] = (document.getElementById(j).value);
        }
        console.log(bounds);
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
    document.getElementById("fileContent").textContent = event.target.result;
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

    var min = data[0];
    var maxIndex = 0;
    var max = data[data.length - 1];
    var minIndex = data.length - 1;

    for (var i = 1; i < 13; i++) {
        var j = "text" + i;
        bounds[i - 1] = (document.getElementById(j).value);
        console.log(bounds[i - 1]);
    }

    console.log(Number(data[0].Percent) > Number(bounds[0]));

    for (var i = 0; i < data.length; ++i) {
        if (Number(data[i].Percent) > Number(bounds[0])) {
            max = data[i + 1];
            console.log("before increment", maxIndex, i);
            ++maxIndex;
            console.log("after increment", maxIndex, i);
        }
    }

    for (var i = data.length; i > 0; --i) {
        if (Number(data[i - 1].Percent) < Number(bounds[11])) {
            min = data[i - 2];
            console.log("before increment", minIndex, i);
            --minIndex;
            console.log("after increment", minIndex, i);
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
}


/* const myForm = document.getElementById("upload");
const selectedFile = document.getElementById("selectedFile"); */

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

/* myForm.addEventListener("submit", function (e) { // reading CSV file
    e.preventDefault();
    const input = selectedFile.files[0];
    const reader = new FileReader();
    const arr = [];
    reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);
        for (var i = 0; i < data.length; i++) {
            arr[i] = data[i];
        }
    }
    console.log(arr);
    console.log("Submission logged");
    reader.readAsText(input);


    arr.sort(compare);
    console.log(arr);
    console.log(arr.prototype.pop());
}); */

