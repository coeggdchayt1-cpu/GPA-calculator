function generateSemesters(){

let count = document.getElementById("semesterCount").value;

let container = document.getElementById("semesterContainer");

container.innerHTML = "";


for(let i=1; i<=count; i++){

let semester = document.createElement("div");

semester.className="card";


semester.innerHTML = `

<h2>Semester ${i}</h2>

<table border="1" width="100%">

<tr>

<th>Course Code</th>

<th>Course Title</th>

<th>% Marks</th>

<th>Grade</th>

<th>Value</th>

<th>Credit Hours</th>

<th>Grade Points</th>

</tr>


<tr>

<td>
<input type="text" class="courseCode">
</td>


<td>
<input type="text" class="courseTitle">
</td>


<td>
<input type="number" class="marks" oninput="calculateRow(this)">
</td>


<td class="grade">
-
</td>


<td class="value">
-
</td>


<td>
<input type="number" class="creditHours" oninput="calculateRow(this); calculateSGPA(this)">
</td>


<td class="points">
-
</td>

</tr>


</table>


<br>

<button onclick="addCourse(this)">
+ Add Course
</button>


<div class="semesterResult">

<p>
Total Credit Hours:
<span class="totalCH">0</span>
</p>


<p>
Total Grade Points:
<span class="totalGP">0</span>
</p>


<p>
SGPA:
<span class="sgpa">0.00</span>
</p>


<p>
Grade:
<span class="semesterGrade">-</span>
</p>

</div>


`;


container.appendChild(semester);

}
let cgpaCard = document.createElement("div");

cgpaCard.className = "card";

cgpaCard.innerHTML = `

<h2 class="result-heading">
Cumulative Academic Record
</h2>


<div class="final-result">


<p>
<strong>Total Credit Hours:</strong>

<span id="cgpaCH">0</span>

</p>


<p>
<strong>Total Grade Points:</strong>

<span id="cgpaGP">0.00</span>

</p>


<p>
<strong>CGPA:</strong>

<span id="cgpa">0.00</span>

</p>


<p>
<strong>Overall Grade:</strong>

<span id="overallGrade">-</span>

</p>


<p>
<strong>Academic Standing:</strong>

<span id="academicStanding">-</span>

</p>


</div>

`;

container.appendChild(cgpaCard);
}
function addCourse(button){

let semesterBox = button.parentElement;

let table = semesterBox.querySelector("table");

let row = table.insertRow(-1);


row.innerHTML = `

<td>
<input type="text" class="courseCode">
</td>


<td>
<input type="text" class="courseTitle">
</td>


<td>
<input type="number" class="marks" oninput="calculateRow(this)">
</td>


<td class="grade">
-
</td>


<td class="value">
-
</td>


<td>
<input type="number" class="creditHours" oninput="calculateRow(this); calculateSGPA(this)">
</td>


<td class="points">
-
</td>

`;

}
function calculateRow(input){

let row = input.parentElement.parentElement;

let marks = row.querySelector(".marks").value;

let creditHours = row.querySelector(".creditHours").value;


let gradeCell = row.querySelector(".grade");

let valueCell = row.querySelector(".value");

let pointsCell = row.querySelector(".points");


if(marks === "" || creditHours === ""){

gradeCell.innerHTML = "-";

valueCell.innerHTML = "-";

pointsCell.innerHTML = "-";

return;

}


let gradeData = getGrade(Number(marks));


gradeCell.innerHTML = gradeData.grade;

valueCell.innerHTML = gradeData.value;


let points = Number(creditHours) * gradeData.value;


pointsCell.innerHTML = points.toFixed(2);
calculateSGPA(input);


}
function getGrade(marks){

let grade = "";
let value = 0;


if(marks >= 85){

grade = "A";
value = 4.0;

}

else if(marks == 84){

grade = "B";
value = 3.9;

}

else if(marks == 83){

grade = "B";
value = 3.9;

}

else if(marks == 82){

grade = "B";
value = 3.8;

}

else if(marks == 81){

grade = "B";
value = 3.7;

}

else if(marks == 80){

grade = "B";
value = 3.7;

}

else if(marks == 79){

grade = "B";
value = 3.6;

}

else if(marks == 78){

grade = "B";
value = 3.5;

}

else if(marks == 77){

grade = "B";
value = 3.5;

}

else if(marks == 76){

grade = "B";
value = 3.4;

}

else if(marks == 75){

grade = "B";
value = 3.3;

}

else if(marks == 74){

grade = "B";
value = 3.3;

}

else if(marks == 73){

grade = "B";
value = 3.2;

}

else if(marks == 72){

grade = "B";
value = 3.1;

}

else if(marks == 71){

grade = "B";
value = 3.1;

}

else if(marks == 70){

grade = "B";
value = 3.0;

}

else if(marks >= 60){

grade = "C";
value = (marks - 40) / 10;

}

else if(marks >= 50){

grade = "D";
value = (marks - 40) / 10;

}

else{

grade = "F";
value = 0;

}


return {

grade: grade,

value: value

};

}
function calculateSGPA(input){

let semesterBox = input.closest(".card");

let rows = semesterBox.querySelectorAll("table tr");

let totalCH = 0;

let totalGP = 0;


rows.forEach(function(row,index){

if(index === 0) return;


let ch = row.querySelector(".creditHours");

let gp = row.querySelector(".points");


if(ch && gp){

let credit = Number(ch.value);

let points = Number(gp.innerHTML);


if(!isNaN(credit) && !isNaN(points)){

totalCH += credit;

totalGP += points;

}

}

});


let sgpa = 0;

if(totalCH > 0){

sgpa = totalGP / totalCH;

}


semesterBox.querySelector(".totalCH").innerHTML = totalCH;

semesterBox.querySelector(".totalGP").innerHTML = totalGP.toFixed(2);

semesterBox.querySelector(".sgpa").innerHTML = sgpa.toFixed(2);
calculateCGPA();


}
function calculateCGPA(){

let semesterCards = document.querySelectorAll(".card");

let totalCH = 0;

let totalGP = 0;

semesterCards.forEach(function(card){

let ch = card.querySelector(".totalCH");

let gp = card.querySelector(".totalGP");

if(ch && gp){

totalCH += Number(ch.innerHTML);

totalGP += Number(gp.innerHTML);

}

});


let cgpa = 0;

if(totalCH > 0){

cgpa = totalGP / totalCH;

}


document.getElementById("cgpaCH").innerHTML = totalCH;

document.getElementById("cgpaGP").innerHTML = totalGP.toFixed(2);

document.getElementById("cgpa").innerHTML = cgpa.toFixed(2);
let grade = "";

let standing = "";


if(cgpa >= 4.0){

grade = "A";

standing = "Excellent";

}

else if(cgpa >= 3.0){

grade = "B";

standing = "Very Good";

}

else if(cgpa >= 2.0){

grade = "C";

standing = "Good";

}

else if(cgpa >= 1.0){

grade = "D";

standing = "Average";

}

else{

grade = "F";

standing = "Fail";

}
document.getElementById("overallGrade").innerHTML = grade;

document.getElementById("academicStanding").innerHTML = standing;


}

function printTranscript(){

window.print();

}
function downloadPDF() {

const { jsPDF } = window.jspdf;

const doc = new jsPDF("p", "mm", "a4");


// Student Information

let name = document.getElementById("studentName").value;

let father = document.getElementById("fatherName").value;

let roll = document.getElementById("rollNo").value;

let reg = document.getElementById("registrationNo").value;

let dept = document.getElementById("department").value;

let session = document.getElementById("session").value;

let semester = document.getElementById("semesterCount").options[
document.getElementById("semesterCount").selectedIndex
].text;


// Header

doc.setFont("helvetica", "bold");

doc.setFontSize(16);

doc.text("Government Girls Degree College No.1 Hayatabad", 105, 15, { align: "center" });


doc.setFontSize(12);

doc.text("Hayatabad, Peshawar", 105, 22, { align: "center" });

doc.text("Affiliated with Shaheed Benazir Bhutto Women University", 105, 29, { align: "center" });


doc.setFontSize(15);

doc.text("STUDENT TRANSCRIPT", 105, 40, { align: "center" });


// Student Information Section

doc.setFontSize(11);

doc.setFont("helvetica", "bold");

doc.text("Student Information", 14, 52);


doc.setFont("helvetica", "normal");

doc.text(`Student Name: ${name}`, 14, 60);

doc.text(`Roll No: ${roll}`, 120, 60);


doc.text(`Father Name: ${father}`, 14, 68);

doc.text(`Registration No: ${reg}`, 120, 68);


doc.text(`Department: ${dept}`, 14, 76);

doc.text(`Session: ${session}`, 120, 76);


doc.text(`Programme: BS`, 14, 84);

doc.text(`Current Semester: ${semester}`, 120, 84);


// Line separator

doc.line(14, 90, 196, 90);

// Semester Tables

let yPosition = 100;

let semesters = document.querySelectorAll("#semesterContainer .card");


semesters.forEach(function(semesterCard, index){


    // Add new page if space is low

    if(yPosition > 250){

        doc.addPage();

        yPosition = 20;

    }


    doc.setFont("helvetica","bold");

    doc.setFontSize(12);


    doc.text(
        `${index + 1} Semester`,
        14,
        yPosition
    );


    let rows = semesterCard.querySelectorAll("table tr");

    let tableData = [];


    rows.forEach(function(row,rowIndex){


        // Skip heading row

        if(rowIndex === 0) return;


        let cells = row.querySelectorAll("td");


        if(cells.length > 0){


            tableData.push([


                cells[0].querySelector("input").value,


                cells[1].querySelector("input").value,


                cells[2].querySelector("input").value,


                cells[3].innerText,


                cells[4].innerText,


                cells[5].querySelector("input").value,


                cells[6].innerText


            ]);

        }


    });



    doc.autoTable({

        startY:yPosition + 5,


        head:[

        [

        "Course Code",

        "Course Title",

        "Marks %",

        "Grade",

        "Value",

        "CH",

        "Grade Points"

        ]

        ],


        body:tableData,


        theme:"grid",


        styles:{

            fontSize:8

        }


    });



    yPosition = doc.lastAutoTable.finalY + 8;



    let sgpa = semesterCard.querySelector(".sgpa");


    if(sgpa){


        doc.setFontSize(10);

        doc.text(

            `SGPA: ${sgpa.innerText}`,

            14,

            yPosition

        );


    }


    yPosition += 15;


});


// Temporary footer

doc.setFont("helvetica", "italic");

doc.setFontSize(9);

doc.text("This is a student-generated transcript.", 14, 285);


// Download

doc.save(`${name || "Student"}_Transcript.pdf`);

}
