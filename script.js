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
<input type="number" class="creditHours" oninput="calculateRow(this)">
</td>


<td class="points">
-
</td>

</tr>
</tr>


</table>


<br>

<button onclick="addCourse(this)">
+ Add Course
</button>


<h3>
SGPA:
</h3>


`;


container.appendChild(semester);

}

}
function addCourse(button){

let semesterBox = button.parentElement;

let table = semesterBox.querySelector("table");

let row = table.insertRow(-1);


row.innerHTML = `
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
<input type="number" class="creditHours" oninput="calculateRow(this)">
</td>


<td class="points">
-
</td>

`;

`;
}
