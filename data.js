// var students = [
//     {id: "1122222", name: "John", score: 90 }, // 0 {Object} => students[0] => students[0].score => total  
//     {id: "2223333", name: "Larry", score: 60 }, // 1
//     {id: "4455555", name: "Joseph", score: 50 }, // 2
//     {id: "5526666", name: "Karla", score: 80}
// ];

var students = [];

// document.write("<h3>JSON</h3>");
// document.write("<pre class='alert alert-secondary'>"); // 1) Bootstrap class
// document.write(JSON.stringify(students, undefined, 2));
// document.write("</pre>");
// document.write("<br/>");

var names = [];

students.forEach(student => {
    names.push(student.name);
});

//document.writeln("Students are:" + names);

// if (calculateAverage() >= 70) {
//     document.write("<pre class='alert alert-success'>");
//     document.writeln(`Average: ${calculateAverage()}`);
//     document.write("</pre>");
//   }else{
//     document.write("<pre class='alert alert-danger'>");
//     document.writeln(`Average: ${calculateAverage()}`);
//     document.write("</pre>");   
//   }

function calculateAverage(){

    var average = 0;
    students.forEach(student => {
        average = average + parseInt(student.score);
    });
    average = average / students.length;

    return average;
}

function loadDataGrid() {

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        if (students[i].score < 60) {
            var listItem = document.createElement("section");
            listItem.classList.add("row")
            listItem.classList.add("text-danger");
          }else{
            var listItem = document.createElement("section");
            listItem.classList.add("row")
          }
        
        
        // var listItem = document.createElement("section");
        // listItem.classList.add("row");
        
        var id = document.createElement("div");
        id.classList.add("col-sm");
        id.innerText =  students[i].id;

        var name = document.createElement("div");
        name.classList.add("col-sm");
        name.innerText =  students[i].name;

        // if (students[i].score < 60) {
        //     var score = document.createElement("div");
        //     score.classList.add("col-sm");
        //     score.classList.add("alert", "alert-danger");
        //     score.innerText =  students[i].score; 
        //   }else{
        //     var score = document.createElement("div");
        //     score.classList.add("col-sm");
        //     score.innerText =  students[i].score; 
        //   }
        

        var score = document.createElement("div");
        score.classList.add("col-sm");
        score.innerText =  students[i].score;

        console.log(students[i]);

        dataList.appendChild(listItem);

        listItem.appendChild(id);
        listItem.appendChild(name);
        listItem.appendChild(score);

        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function displayAverage()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
    paragraph.classList.add("badge"); // 2) Bootstrap classes
    paragraph.classList.add("badge-info");

    paragraph.innerText = "Average: " + calculateAverage();

    resultSection.appendChild(paragraph);
}

function myReplacer(name, val) {
    if (typeof val === 'string') {
        return val.toString().toUpperCase();  
     } else {
        return val; // return as is
    }
};

// Old-way of loading data (ol). No longer used
function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i].name;

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function addNewStuden() {

    let addNew = document.getElementById("addNew");
   
    //var newStudent = []
    var infoNS = {}

    for (const element of addNew.elements) {
        infoNS[element.name] = element.value;
    }

    students.push(infoNS)
    addNew.reset();
    loadDataGrid();
}