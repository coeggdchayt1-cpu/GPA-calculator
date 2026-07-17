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

<h2>Cumulative Academic Record</h2>

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

}
