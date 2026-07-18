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

<td><input type="text" class="courseCode"></td>

<td><input type="text" class="courseTitle"></td>

<td><input type="number" class="marks" oninput="calculateRow(this)"></td>

<td class="grade">-</td>

<td class="value">-</td>

<td><input type="number" class="creditHours" oninput="calculateRow(this); calculateSGPA(this)"></td>

<td class="points">-</td>

</tr>

</table>


<br>

<button onclick="addCourse(this)">
+ Add Course
</button>


<div class="semesterResult">

<p>Total Credit Hours:
<span class="totalCH">0</span>
</p>


<p>Total Grade Points:
<span class="totalGP">0</span>
</p>


<p>SGPA:
<span class="sgpa">0.00</span>
</p>


<p>Grade:
<span class="semesterGrade">-</span>
</p>


</div>

`;

container.appendChild(semester);

}



let cgpaCard=document.createElement("div");

cgpaCard.className="card";


cgpaCard.innerHTML=`

<h2>Cumulative Academic Record</h2>

<p>Total Credit Hours:
<span id="cgpaCH">0</span>
</p>


<p>Total Grade Points:
<span id="cgpaGP">0.00</span>
</p>


<p>CGPA:
<span id="cgpa">0.00</span>
</p>


<p>Overall Grade:
<span id="overallGrade">-</span>
</p>


<p>Academic Standing:
<span id="academicStanding">-</span>
</p>

`;

container.appendChild(cgpaCard);

}



function addCourse(button){

let semesterBox=button.parentElement;

let table=semesterBox.querySelector("table");

let row=table.insertRow(-1);


row.innerHTML=`

<td><input type="text" class="courseCode"></td>

<td><input type="text" class="courseTitle"></td>

<td><input type="number" class="marks" oninput="calculateRow(this)"></td>

<td class="grade">-</td>

<td class="value">-</td>

<td><input type="number" class="creditHours" oninput="calculateRow(this); calculateSGPA(this)"></td>

<td class="points">-</td>

`;

}
